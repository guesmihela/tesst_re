import {
  ensureDir,
  readFile,
  readdirSync,
  statSync,
  writeFile
} from "fs-extra";
import {TextDecoder} from "util";
import path from "path";
import tmp from "tmp";
import postcss from "postcss";
import postcssModules from "postcss-modules";
import less from "less";
import stylus from "stylus";
import resolveFile from "resolve-file";
const defaultOptions = {
  plugins: [],
  modules: true,
  rootDir: process.cwd(),
  sassOptions: {},
  lessOptions: {},
  stylusOptions: {},
  fileIsModule: null
};
const postCSSPlugin = ({
  plugins = [],
  modules = true,
  rootDir = process.cwd(),
  sassOptions = {},
  lessOptions = {},
  stylusOptions = {},
  fileIsModule
} = defaultOptions) => ({
  name: "postcss2",
  setup(build) {
    const tmpDirPath = tmp.dirSync().name, modulesMap = [];
    const modulesPlugin = postcssModules({
      generateScopedName: "[name]__[local]___[hash:base64:5]",
      ...typeof modules !== "boolean" ? modules : {},
      getJSON(filepath, json, outpath) {
        const mapIndex = modulesMap.findIndex((m) => m.path === filepath);
        if (mapIndex !== -1) {
          modulesMap[mapIndex].map = json;
        } else {
          modulesMap.push({
            path: filepath,
            map: json
          });
        }
        if (typeof modules !== "boolean" && typeof modules.getJSON === "function")
          return modules.getJSON(filepath, json, outpath);
      }
    });
    build.onResolve({filter: /.\.(css|sass|scss|less|styl)$/}, async (args) => {
      if (args.namespace !== "file" && args.namespace !== "")
        return;
      let sourceFullPath = resolveFile(args.path);
      if (!sourceFullPath)
        sourceFullPath = path.resolve(args.resolveDir, args.path);
      const sourceExt = path.extname(sourceFullPath);
      const sourceBaseName = path.basename(sourceFullPath, sourceExt);
      const isModule = fileIsModule ? fileIsModule(sourceFullPath) : sourceBaseName.match(/\.module$/);
      const sourceDir = path.dirname(sourceFullPath);
      const watchFiles = [sourceFullPath];
      let tmpFilePath;
      if (args.kind === "entry-point") {
        const sourceRelDir = path.relative(path.dirname(rootDir), path.dirname(sourceFullPath));
        tmpFilePath = path.resolve(tmpDirPath, sourceRelDir, `${sourceBaseName}.css`);
        await ensureDir(path.dirname(tmpFilePath));
      } else {
        const uniqueTmpDir = path.resolve(tmpDirPath, uniqueId());
        tmpFilePath = path.resolve(uniqueTmpDir, `${sourceBaseName}.css`);
      }
      await ensureDir(path.dirname(tmpFilePath));
      const fileContent = await readFile(sourceFullPath);
      let css = sourceExt === ".css" ? fileContent : "";
      if (sourceExt === ".sass" || sourceExt === ".scss") {
        const sassResult = await renderSass({
          ...sassOptions,
          file: sourceFullPath
        });
        css = sassResult.css.toString();
        watchFiles.push(...sassResult.stats.includedFiles);
      }
      if (sourceExt === ".styl")
        css = await renderStylus(new TextDecoder().decode(fileContent), {
          ...stylusOptions,
          filename: sourceFullPath
        });
      if (sourceExt === ".less")
        css = (await less.render(new TextDecoder().decode(fileContent), {
          ...lessOptions,
          filename: sourceFullPath,
          rootpath: path.dirname(args.path)
        })).css;
      const result = await postcss(isModule ? [modulesPlugin, ...plugins] : plugins).process(css, {
        from: sourceFullPath,
        to: tmpFilePath
      });
      watchFiles.push(...getPostCssDependencies(result.messages));
      await writeFile(tmpFilePath, result.css);
      return {
        namespace: isModule ? "postcss-module" : "file",
        path: tmpFilePath,
        watchFiles,
        pluginData: {
          originalPath: sourceFullPath
        }
      };
    });
    build.onLoad({filter: /.*/, namespace: "postcss-module"}, async (args) => {
      const mod = modulesMap.find(({path: path2}) => path2 === args?.pluginData?.originalPath), resolveDir = path.dirname(args.path);
      return {
        resolveDir,
        contents: `import ${JSON.stringify(args.path)};
export default ${JSON.stringify(mod && mod.map ? mod.map : {})};`
      };
    });
  }
});
function renderSass(options) {
  return new Promise((resolve, reject) => {
    getSassImpl().render(options, (e, res) => {
      if (e)
        reject(e);
      else
        resolve(res);
    });
  });
}
function renderStylus(str, options) {
  return new Promise((resolve, reject) => {
    stylus.render(str, options, (e, res) => {
      if (e)
        reject(e);
      else
        resolve(res);
    });
  });
}
function getSassImpl() {
  let impl = "sass";
  try {
    require.resolve("sass");
  } catch {
    try {
      require.resolve("node-sass");
      impl = "node-sass";
    } catch {
      throw new Error('Please install "sass" or "node-sass" package');
    }
  }
  return require(impl);
}
function getFilesRecursive(directory) {
  return readdirSync(directory).reduce((files, file) => {
    const name = path.join(directory, file);
    return statSync(name).isDirectory() ? [...files, ...getFilesRecursive(name)] : [...files, name];
  }, []);
}
let idCounter = 0;
function uniqueId() {
  return Date.now().toString(16) + (idCounter++).toString(16);
}
function getPostCssDependencies(messages) {
  let dependencies = [];
  for (const message of messages) {
    if (message.type == "dir-dependency") {
      dependencies.push(...getFilesRecursive(message.dir));
    } else if (message.type == "dependency") {
      dependencies.push(message.file);
    }
  }
  return dependencies;
}
var src_default = postCSSPlugin;
export {
  src_default as default,
  defaultOptions
};

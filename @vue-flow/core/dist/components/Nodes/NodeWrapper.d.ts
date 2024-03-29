declare const NodeWrapper: import('vue').DefineComponent<
  Readonly<{
    id?: any
    connectable?: any
    type?: any
    draggable?: any
    selectable?: any
    focusable?: any
    name?: any
    node?: any
    resizeObserver?: any
  }>,
  () => import('vue').VNode<
    import('vue').RendererNode,
    import('vue').RendererElement,
    {
      [key: string]: any
    }
  >,
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  {},
  string,
  import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<
      Readonly<{
        id?: any
        connectable?: any
        type?: any
        draggable?: any
        selectable?: any
        focusable?: any
        name?: any
        node?: any
        resizeObserver?: any
      }>
    >
  >,
  {
    readonly id?: any
    readonly connectable?: any
    readonly type?: any
    readonly draggable?: any
    readonly selectable?: any
    readonly focusable?: any
    readonly name?: any
    readonly node?: any
    readonly resizeObserver?: any
  }
>
export default NodeWrapper

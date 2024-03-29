import type { D3ZoomEvent } from 'd3-zoom'
import type { FlowElements, FlowProps } from '../../types/flow'
import type {
  Connection,
  ConnectionLineProps,
  EdgeChange,
  EdgeMouseEvent,
  EdgeProps,
  EdgeUpdateEvent,
  GraphEdge,
  GraphNode,
  NodeChange,
  NodeDragEvent,
  NodeMouseEvent,
  NodeProps,
  OnConnectStartParams,
  ViewportTransform,
  VueFlowStore,
} from '../../types'
import type { VueFlowError } from '../../utils/errors'

declare const _default: __VLS_WithTemplateSlots<
  import('vue').DefineComponent<
    __VLS_WithDefaults<
      __VLS_TypePropsToRuntimeProps<FlowProps>,
      {
        snapToGrid: undefined
        onlyRenderVisibleElements: undefined
        edgesUpdatable: undefined
        nodesConnectable: undefined
        nodesDraggable: undefined
        elementsSelectable: undefined
        selectNodesOnDrag: undefined
        preventScrolling: undefined
        zoomOnScroll: undefined
        zoomOnPinch: undefined
        zoomOnDoubleClick: undefined
        panOnScroll: undefined
        panOnDrag: undefined
        applyDefault: undefined
        fitViewOnInit: undefined
        connectOnClick: undefined
        connectionLineStyle: undefined
        connectionLineOptions: undefined
        autoConnect: undefined
        elevateEdgesOnSelect: undefined
        elevateNodesOnSelect: undefined
        disableKeyboardA11y: undefined
        edgesFocusable: undefined
        nodesFocusable: undefined
        autoPanOnConnect: undefined
        autoPanOnNodeDrag: undefined
        isValidConnection: undefined
        deleteKeyCode: undefined
        selectionKeyCode: undefined
        multiSelectionKeyCode: undefined
        panActivationKeyCode: undefined
        zoomActivationKeyCode: undefined
      }
    >,
    {
      id: string
      emits: Readonly<{
        nodesChange: import('@vueuse/shared').EventHookTrigger<NodeChange[]>
        edgesChange: import('@vueuse/shared').EventHookTrigger<EdgeChange[]>
        nodeDoubleClick: import('@vueuse/shared').EventHookTrigger<NodeMouseEvent>
        nodeClick: import('@vueuse/shared').EventHookTrigger<NodeMouseEvent>
        nodeMouseEnter: import('@vueuse/shared').EventHookTrigger<NodeMouseEvent>
        nodeMouseMove: import('@vueuse/shared').EventHookTrigger<NodeMouseEvent>
        nodeMouseLeave: import('@vueuse/shared').EventHookTrigger<NodeMouseEvent>
        nodeContextMenu: import('@vueuse/shared').EventHookTrigger<NodeMouseEvent>
        nodeDragStart: import('@vueuse/shared').EventHookTrigger<NodeDragEvent>
        nodeDrag: import('@vueuse/shared').EventHookTrigger<NodeDragEvent>
        nodeDragStop: import('@vueuse/shared').EventHookTrigger<NodeDragEvent>
        nodesInitialized: import('@vueuse/shared').EventHookTrigger<GraphNode<any, any, string>[]>
        updateNodeInternals: import('@vueuse/shared').EventHookTrigger<string[]>
        miniMapNodeClick: import('@vueuse/shared').EventHookTrigger<NodeMouseEvent>
        miniMapNodeDoubleClick: import('@vueuse/shared').EventHookTrigger<NodeMouseEvent>
        miniMapNodeMouseEnter: import('@vueuse/shared').EventHookTrigger<NodeMouseEvent>
        miniMapNodeMouseMove: import('@vueuse/shared').EventHookTrigger<NodeMouseEvent>
        miniMapNodeMouseLeave: import('@vueuse/shared').EventHookTrigger<NodeMouseEvent>
        connect: import('@vueuse/shared').EventHookTrigger<Connection>
        connectStart: import('@vueuse/shared').EventHookTrigger<
          {
            event?: MouseEvent | TouchEvent | undefined
          } & OnConnectStartParams
        >
        connectEnd: import('@vueuse/shared').EventHookTrigger<MouseEvent | TouchEvent | undefined>
        clickConnectStart: import('@vueuse/shared').EventHookTrigger<
          {
            event?: MouseEvent | TouchEvent | undefined
          } & OnConnectStartParams
        >
        clickConnectEnd: import('@vueuse/shared').EventHookTrigger<MouseEvent | TouchEvent | undefined>
        paneReady: import('@vueuse/shared').EventHookTrigger<VueFlowStore>
        move: import('@vueuse/shared').EventHookTrigger<{
          event: D3ZoomEvent<HTMLDivElement, any>
          flowTransform: ViewportTransform
        }>
        moveStart: import('@vueuse/shared').EventHookTrigger<{
          event: D3ZoomEvent<HTMLDivElement, any>
          flowTransform: ViewportTransform
        }>
        moveEnd: import('@vueuse/shared').EventHookTrigger<{
          event: D3ZoomEvent<HTMLDivElement, any>
          flowTransform: ViewportTransform
        }>
        selectionDragStart: import('@vueuse/shared').EventHookTrigger<NodeDragEvent>
        selectionDrag: import('@vueuse/shared').EventHookTrigger<NodeDragEvent>
        selectionDragStop: import('@vueuse/shared').EventHookTrigger<NodeDragEvent>
        selectionContextMenu: import('@vueuse/shared').EventHookTrigger<{
          event: MouseEvent
          nodes: GraphNode<any, any, string>[]
        }>
        selectionStart: import('@vueuse/shared').EventHookTrigger<MouseEvent>
        selectionEnd: import('@vueuse/shared').EventHookTrigger<MouseEvent>
        viewportChangeStart: import('@vueuse/shared').EventHookTrigger<ViewportTransform>
        viewportChange: import('@vueuse/shared').EventHookTrigger<ViewportTransform>
        viewportChangeEnd: import('@vueuse/shared').EventHookTrigger<ViewportTransform>
        paneScroll: import('@vueuse/shared').EventHookTrigger<WheelEvent | undefined>
        paneClick: import('@vueuse/shared').EventHookTrigger<MouseEvent>
        paneContextMenu: import('@vueuse/shared').EventHookTrigger<MouseEvent>
        paneMouseEnter: import('@vueuse/shared').EventHookTrigger<MouseEvent>
        paneMouseMove: import('@vueuse/shared').EventHookTrigger<MouseEvent>
        paneMouseLeave: import('@vueuse/shared').EventHookTrigger<MouseEvent>
        edgeContextMenu: import('@vueuse/shared').EventHookTrigger<EdgeMouseEvent>
        edgeMouseEnter: import('@vueuse/shared').EventHookTrigger<EdgeMouseEvent>
        edgeMouseMove: import('@vueuse/shared').EventHookTrigger<EdgeMouseEvent>
        edgeMouseLeave: import('@vueuse/shared').EventHookTrigger<EdgeMouseEvent>
        edgeDoubleClick: import('@vueuse/shared').EventHookTrigger<EdgeMouseEvent>
        edgeClick: import('@vueuse/shared').EventHookTrigger<EdgeMouseEvent>
        edgeUpdateStart: import('@vueuse/shared').EventHookTrigger<EdgeMouseEvent>
        edgeUpdate: import('@vueuse/shared').EventHookTrigger<EdgeUpdateEvent>
        edgeUpdateEnd: import('@vueuse/shared').EventHookTrigger<EdgeMouseEvent>
        error: import('@vueuse/shared').EventHookTrigger<VueFlowError<import('../../utils/errors').ErrorCode>>
      }>
      vueFlowVersion: string
      onNodesChange: import('@vueuse/shared').EventHookOn<NodeChange[]>
      onEdgesChange: import('@vueuse/shared').EventHookOn<EdgeChange[]>
      onNodeDoubleClick: import('@vueuse/shared').EventHookOn<NodeMouseEvent>
      onNodeClick: import('@vueuse/shared').EventHookOn<NodeMouseEvent>
      onNodeMouseEnter: import('@vueuse/shared').EventHookOn<NodeMouseEvent>
      onNodeMouseMove: import('@vueuse/shared').EventHookOn<NodeMouseEvent>
      onNodeMouseLeave: import('@vueuse/shared').EventHookOn<NodeMouseEvent>
      onNodeContextMenu: import('@vueuse/shared').EventHookOn<NodeMouseEvent>
      onNodeDragStart: import('@vueuse/shared').EventHookOn<NodeDragEvent>
      onNodeDrag: import('@vueuse/shared').EventHookOn<NodeDragEvent>
      onNodeDragStop: import('@vueuse/shared').EventHookOn<NodeDragEvent>
      onNodesInitialized: import('@vueuse/shared').EventHookOn<GraphNode<any, any, string>[]>
      onUpdateNodeInternals: import('@vueuse/shared').EventHookOn<string[]>
      onMiniMapNodeClick: import('@vueuse/shared').EventHookOn<NodeMouseEvent>
      onMiniMapNodeDoubleClick: import('@vueuse/shared').EventHookOn<NodeMouseEvent>
      onMiniMapNodeMouseEnter: import('@vueuse/shared').EventHookOn<NodeMouseEvent>
      onMiniMapNodeMouseMove: import('@vueuse/shared').EventHookOn<NodeMouseEvent>
      onMiniMapNodeMouseLeave: import('@vueuse/shared').EventHookOn<NodeMouseEvent>
      onConnect: import('@vueuse/shared').EventHookOn<Connection>
      onConnectStart: import('@vueuse/shared').EventHookOn<
        {
          event?: MouseEvent | TouchEvent | undefined
        } & OnConnectStartParams
      >
      onConnectEnd: import('@vueuse/shared').EventHookOn<MouseEvent | TouchEvent | undefined>
      onClickConnectStart: import('@vueuse/shared').EventHookOn<
        {
          event?: MouseEvent | TouchEvent | undefined
        } & OnConnectStartParams
      >
      onClickConnectEnd: import('@vueuse/shared').EventHookOn<MouseEvent | TouchEvent | undefined>
      onPaneReady: import('@vueuse/shared').EventHookOn<VueFlowStore>
      onMove: import('@vueuse/shared').EventHookOn<{
        event: D3ZoomEvent<HTMLDivElement, any>
        flowTransform: ViewportTransform
      }>
      onMoveStart: import('@vueuse/shared').EventHookOn<{
        event: D3ZoomEvent<HTMLDivElement, any>
        flowTransform: ViewportTransform
      }>
      onMoveEnd: import('@vueuse/shared').EventHookOn<{
        event: D3ZoomEvent<HTMLDivElement, any>
        flowTransform: ViewportTransform
      }>
      onSelectionDragStart: import('@vueuse/shared').EventHookOn<NodeDragEvent>
      onSelectionDrag: import('@vueuse/shared').EventHookOn<NodeDragEvent>
      onSelectionDragStop: import('@vueuse/shared').EventHookOn<NodeDragEvent>
      onSelectionContextMenu: import('@vueuse/shared').EventHookOn<{
        event: MouseEvent
        nodes: GraphNode<any, any, string>[]
      }>
      onSelectionStart: import('@vueuse/shared').EventHookOn<MouseEvent>
      onSelectionEnd: import('@vueuse/shared').EventHookOn<MouseEvent>
      onViewportChangeStart: import('@vueuse/shared').EventHookOn<ViewportTransform>
      onViewportChange: import('@vueuse/shared').EventHookOn<ViewportTransform>
      onViewportChangeEnd: import('@vueuse/shared').EventHookOn<ViewportTransform>
      onPaneScroll: import('@vueuse/shared').EventHookOn<WheelEvent | undefined>
      onPaneClick: import('@vueuse/shared').EventHookOn<MouseEvent>
      onPaneContextMenu: import('@vueuse/shared').EventHookOn<MouseEvent>
      onPaneMouseEnter: import('@vueuse/shared').EventHookOn<MouseEvent>
      onPaneMouseMove: import('@vueuse/shared').EventHookOn<MouseEvent>
      onPaneMouseLeave: import('@vueuse/shared').EventHookOn<MouseEvent>
      onEdgeContextMenu: import('@vueuse/shared').EventHookOn<EdgeMouseEvent>
      onEdgeMouseEnter: import('@vueuse/shared').EventHookOn<EdgeMouseEvent>
      onEdgeMouseMove: import('@vueuse/shared').EventHookOn<EdgeMouseEvent>
      onEdgeMouseLeave: import('@vueuse/shared').EventHookOn<EdgeMouseEvent>
      onEdgeDoubleClick: import('@vueuse/shared').EventHookOn<EdgeMouseEvent>
      onEdgeClick: import('@vueuse/shared').EventHookOn<EdgeMouseEvent>
      onEdgeUpdateStart: import('@vueuse/shared').EventHookOn<EdgeMouseEvent>
      onEdgeUpdate: import('@vueuse/shared').EventHookOn<EdgeUpdateEvent>
      onEdgeUpdateEnd: import('@vueuse/shared').EventHookOn<EdgeMouseEvent>
      onError: import('@vueuse/shared').EventHookOn<VueFlowError<import('../../utils/errors').ErrorCode>>
      viewportRef: import('vue').Ref<HTMLDivElement | null>
      nodes: import('vue').Ref<GraphNode<any, any, string>[]>
      edges: import('vue').Ref<GraphEdge<any, any, string>[]>
      d3Zoom: import('vue').Ref<import('../../types').D3Zoom | null>
      d3Selection: import('vue').Ref<import('../../types').D3Selection | null>
      d3ZoomHandler: import('vue').Ref<import('../../types').D3ZoomHandler | null>
      minZoom: import('vue').Ref<number>
      maxZoom: import('vue').Ref<number>
      defaultViewport: import('vue').Ref<Partial<ViewportTransform>>
      translateExtent: import('vue').Ref<import('../../types').CoordinateExtent>
      nodeExtent: import('vue').Ref<import('../../types').CoordinateExtent | import('../../types').CoordinateExtentRange>
      dimensions: import('vue').Ref<import('../../types').Dimensions>
      viewport: import('vue').Ref<ViewportTransform>
      onlyRenderVisibleElements: import('vue').Ref<boolean>
      nodesSelectionActive: import('vue').Ref<boolean>
      userSelectionActive: import('vue').Ref<boolean>
      multiSelectionActive: import('vue').Ref<boolean>
      deleteKeyCode: import('vue').Ref<import('@vueuse/core').KeyFilter | null>
      selectionKeyCode: import('vue').Ref<import('@vueuse/core').KeyFilter | null>
      multiSelectionKeyCode: import('vue').Ref<import('@vueuse/core').KeyFilter | null>
      zoomActivationKeyCode: import('vue').Ref<import('@vueuse/core').KeyFilter | null>
      panActivationKeyCode: import('vue').Ref<import('@vueuse/core').KeyFilter | null>
      connectionMode: import('vue').Ref<import('../../types').ConnectionMode>
      connectionLineOptions: import('vue').Ref<import('../../types').ConnectionLineOptions>
      connectionLineType: import('vue').Ref<import('../../types').ConnectionLineType | null>
      connectionLineStyle: import('vue').Ref<import('vue').CSSProperties | null>
      connectionStartHandle: import('vue').Ref<import('../../types').ConnectingHandle | null>
      connectionEndHandle: import('vue').Ref<import('../../types').ConnectingHandle | null>
      connectionClickStartHandle: import('vue').Ref<import('../../types').ConnectingHandle | null>
      connectionPosition: import('vue').Ref<import('../../types').XYPosition>
      connectionRadius: import('vue').Ref<number>
      connectionStatus: import('vue').Ref<import('../../types').ConnectionStatus | null>
      isValidConnection: import('vue').Ref<import('../../types').ValidConnectionFunc | null>
      connectOnClick: import('vue').Ref<boolean>
      edgeUpdaterRadius: import('vue').Ref<number>
      snapToGrid: import('vue').Ref<boolean>
      snapGrid: import('vue').Ref<import('../../types').SnapGrid>
      defaultMarkerColor: import('vue').Ref<string>
      edgesUpdatable: import('vue').Ref<import('../../types').EdgeUpdatable>
      edgesFocusable: import('vue').Ref<boolean>
      nodesFocusable: import('vue').Ref<boolean>
      nodesDraggable: import('vue').Ref<boolean>
      nodesConnectable: import('vue').Ref<boolean>
      elementsSelectable: import('vue').Ref<boolean>
      selectNodesOnDrag: import('vue').Ref<boolean>
      userSelectionRect: import('vue').Ref<import('../../types').SelectionRect | null>
      selectionMode: import('vue').Ref<import('../../types').SelectionMode>
      panOnDrag: import('vue').Ref<boolean | number[]>
      zoomOnScroll: import('vue').Ref<boolean>
      zoomOnPinch: import('vue').Ref<boolean>
      panOnScroll: import('vue').Ref<boolean>
      panOnScrollSpeed: import('vue').Ref<number>
      panOnScrollMode: import('vue').Ref<import('../../types').PanOnScrollMode>
      zoomOnDoubleClick: import('vue').Ref<boolean>
      preventScrolling: import('vue').Ref<boolean>
      paneDragging: import('vue').Ref<boolean>
      initialized: import('vue').Ref<boolean>
      applyDefault: import('vue').Ref<boolean>
      autoConnect: import('vue').Ref<boolean | import('../../types').Connector>
      fitViewOnInit: import('vue').Ref<boolean>
      noDragClassName: import('vue').Ref<string>
      noWheelClassName: import('vue').Ref<string>
      noPanClassName: import('vue').Ref<string>
      defaultEdgeOptions: import('vue').Ref<import('../../types').DefaultEdgeOptions | undefined>
      elevateEdgesOnSelect: import('vue').Ref<boolean>
      elevateNodesOnSelect: import('vue').Ref<boolean>
      autoPanOnConnect: import('vue').Ref<boolean>
      autoPanOnNodeDrag: import('vue').Ref<boolean>
      disableKeyboardA11y: import('vue').Ref<boolean>
      ariaLiveMessage: import('vue').Ref<string>
      edgeTypes?: import('vue').Ref<import('../../types').EdgeTypesObject | undefined> | undefined
      nodeTypes?: import('vue').Ref<import('../../types').NodeTypesObject | undefined> | undefined
      __experimentalFeatures?:
        | import('vue').Ref<
            | {
                nestedFlow?: boolean | undefined
              }
            | undefined
          >
        | undefined
      getElements: import('vue').ComputedRef<FlowElements<any, any, any, any>>
      getNodes: import('vue').ComputedRef<GraphNode<any, any, string>[]>
      getEdges: import('vue').ComputedRef<GraphEdge<any, any, string>[]>
      getNode: import('vue').ComputedRef<(id: string) => GraphNode<any, any, string> | undefined>
      getEdge: import('vue').ComputedRef<(id: string) => GraphEdge<any, any, string> | undefined>
      getSelectedElements: import('vue').ComputedRef<FlowElements<any, any, any, any>>
      getSelectedNodes: import('vue').ComputedRef<GraphNode<any, any, string>[]>
      getSelectedEdges: import('vue').ComputedRef<GraphEdge<any, any, string>[]>
      getNodesInitialized: import('vue').ComputedRef<GraphNode<any, any, string>[]>
      setElements: import('../../types').SetElements
      setNodes: import('../../types').SetNodes
      setEdges: import('../../types').SetEdges
      addNodes: import('../../types').AddNodes
      addEdges: import('../../types').AddEdges
      removeNodes: import('../../types').RemoveNodes
      removeEdges: import('../../types').RemoveEdges
      findNode: import('../../types').FindNode
      findEdge: import('../../types').FindEdge
      updateEdge: import('../../types').UpdateEdge
      applyEdgeChanges: (changes: EdgeChange[]) => GraphEdge<any, any, string>[]
      applyNodeChanges: (changes: NodeChange[]) => GraphNode<any, any, string>[]
      addSelectedElements: (elements: FlowElements<any, any, any, any>) => void
      addSelectedEdges: (edges: GraphEdge<any, any, string>[]) => void
      addSelectedNodes: (nodes: GraphNode<any, any, string>[]) => void
      removeSelectedEdges: (edges: GraphEdge<any, any, string>[]) => void
      removeSelectedNodes: (nodes: GraphNode<any, any, string>[]) => void
      removeSelectedElements: (elements?: import('../../types').Elements<any, any, any, any> | undefined) => void
      setMinZoom: (zoom: number) => void
      setMaxZoom: (zoom: number) => void
      setTranslateExtent: (translateExtent: import('../../types').CoordinateExtent) => void
      setNodeExtent: (nodeExtent: import('../../types').CoordinateExtent | import('../../types').CoordinateExtentRange) => void
      setInteractive: (isInteractive: boolean) => void
      setState: import('../../types').SetState
      toObject: () => import('../../types').FlowExportObject
      fromObject: (obj: import('../../types').FlowExportObject) => void
      updateNodeInternals: import('../../types').UpdateNodeInternals
      startConnection: (
        startHandle: import('../../types').ConnectingHandle,
        position?: import('../../types').XYPosition | undefined,
        event?: MouseEvent | TouchEvent | undefined,
        isClick?: boolean | undefined,
      ) => void
      updateConnection: (
        position: import('../../types').XYPosition,
        result?: import('../../types').ConnectingHandle | null | undefined,
        status?: import('../../types').ConnectionStatus | null | undefined,
      ) => void
      endConnection: (event?: MouseEvent | TouchEvent | undefined, isClick?: boolean | undefined) => void
      updateNodePositions: import('../../types').UpdateNodePosition
      updateNodeDimensions: import('../../types').UpdateNodeDimensions
      getIntersectingNodes: import('../../types').GetIntersectingNodes
      isNodeIntersecting: import('../../types').IsNodeIntersecting
      panBy: (delta: import('../../types').XYPosition) => boolean
      $reset: () => void
      $destroy: () => void
      zoomIn: import('../../types').ZoomInOut
      zoomOut: import('../../types').ZoomInOut
      zoomTo: import('../../types').ZoomTo
      setTransform: import('../../types').SetTransform
      getTransform: import('../../types').GetTransform
      fitView: import('../../types').FitView
      setCenter: import('../../types').SetCenter
      fitBounds: import('../../types').FitBounds
      project: import('../../types').Project
      vueFlowRef: import('vue').Ref<HTMLDivElement | null>
      hooks: import('vue').Ref<
        Readonly<{
          nodesChange: import('@vueuse/shared').EventHook<NodeChange[]>
          edgesChange: import('@vueuse/shared').EventHook<EdgeChange[]>
          nodeDoubleClick: import('@vueuse/shared').EventHook<NodeMouseEvent>
          nodeClick: import('@vueuse/shared').EventHook<NodeMouseEvent>
          nodeMouseEnter: import('@vueuse/shared').EventHook<NodeMouseEvent>
          nodeMouseMove: import('@vueuse/shared').EventHook<NodeMouseEvent>
          nodeMouseLeave: import('@vueuse/shared').EventHook<NodeMouseEvent>
          nodeContextMenu: import('@vueuse/shared').EventHook<NodeMouseEvent>
          nodeDragStart: import('@vueuse/shared').EventHook<NodeDragEvent>
          nodeDrag: import('@vueuse/shared').EventHook<NodeDragEvent>
          nodeDragStop: import('@vueuse/shared').EventHook<NodeDragEvent>
          nodesInitialized: import('@vueuse/shared').EventHook<GraphNode<any, any, string>[]>
          updateNodeInternals: import('@vueuse/shared').EventHook<string[]>
          miniMapNodeClick: import('@vueuse/shared').EventHook<NodeMouseEvent>
          miniMapNodeDoubleClick: import('@vueuse/shared').EventHook<NodeMouseEvent>
          miniMapNodeMouseEnter: import('@vueuse/shared').EventHook<NodeMouseEvent>
          miniMapNodeMouseMove: import('@vueuse/shared').EventHook<NodeMouseEvent>
          miniMapNodeMouseLeave: import('@vueuse/shared').EventHook<NodeMouseEvent>
          connect: import('@vueuse/shared').EventHook<Connection>
          connectStart: import('@vueuse/shared').EventHook<
            {
              event?: MouseEvent | TouchEvent | undefined
            } & OnConnectStartParams
          >
          connectEnd: import('@vueuse/shared').EventHook<MouseEvent | TouchEvent | undefined>
          clickConnectStart: import('@vueuse/shared').EventHook<
            {
              event?: MouseEvent | TouchEvent | undefined
            } & OnConnectStartParams
          >
          clickConnectEnd: import('@vueuse/shared').EventHook<MouseEvent | TouchEvent | undefined>
          paneReady: import('@vueuse/shared').EventHook<VueFlowStore>
          move: import('@vueuse/shared').EventHook<{
            event: D3ZoomEvent<HTMLDivElement, any>
            flowTransform: ViewportTransform
          }>
          moveStart: import('@vueuse/shared').EventHook<{
            event: D3ZoomEvent<HTMLDivElement, any>
            flowTransform: ViewportTransform
          }>
          moveEnd: import('@vueuse/shared').EventHook<{
            event: D3ZoomEvent<HTMLDivElement, any>
            flowTransform: ViewportTransform
          }>
          selectionDragStart: import('@vueuse/shared').EventHook<NodeDragEvent>
          selectionDrag: import('@vueuse/shared').EventHook<NodeDragEvent>
          selectionDragStop: import('@vueuse/shared').EventHook<NodeDragEvent>
          selectionContextMenu: import('@vueuse/shared').EventHook<{
            event: MouseEvent
            nodes: GraphNode<any, any, string>[]
          }>
          selectionStart: import('@vueuse/shared').EventHook<MouseEvent>
          selectionEnd: import('@vueuse/shared').EventHook<MouseEvent>
          viewportChangeStart: import('@vueuse/shared').EventHook<ViewportTransform>
          viewportChange: import('@vueuse/shared').EventHook<ViewportTransform>
          viewportChangeEnd: import('@vueuse/shared').EventHook<ViewportTransform>
          paneScroll: import('@vueuse/shared').EventHook<WheelEvent | undefined>
          paneClick: import('@vueuse/shared').EventHook<MouseEvent>
          paneContextMenu: import('@vueuse/shared').EventHook<MouseEvent>
          paneMouseEnter: import('@vueuse/shared').EventHook<MouseEvent>
          paneMouseMove: import('@vueuse/shared').EventHook<MouseEvent>
          paneMouseLeave: import('@vueuse/shared').EventHook<MouseEvent>
          edgeContextMenu: import('@vueuse/shared').EventHook<EdgeMouseEvent>
          edgeMouseEnter: import('@vueuse/shared').EventHook<EdgeMouseEvent>
          edgeMouseMove: import('@vueuse/shared').EventHook<EdgeMouseEvent>
          edgeMouseLeave: import('@vueuse/shared').EventHook<EdgeMouseEvent>
          edgeDoubleClick: import('@vueuse/shared').EventHook<EdgeMouseEvent>
          edgeClick: import('@vueuse/shared').EventHook<EdgeMouseEvent>
          edgeUpdateStart: import('@vueuse/shared').EventHook<EdgeMouseEvent>
          edgeUpdate: import('@vueuse/shared').EventHook<EdgeUpdateEvent>
          edgeUpdateEnd: import('@vueuse/shared').EventHook<EdgeMouseEvent>
          error: import('@vueuse/shared').EventHook<VueFlowError<import('../../utils/errors').ErrorCode>>
        }>
      >
      getNodeTypes: import('vue').ComputedRef<Record<string, import('../../types').NodeComponent>>
      getEdgeTypes: import('vue').ComputedRef<Record<string, import('../../types').EdgeComponent>>
    },
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {
      'nodesChange': (changes: NodeChange[]) => void
      'edgesChange': (changes: EdgeChange[]) => void
      'nodeDoubleClick': (nodeMouseEvent: NodeMouseEvent) => void
      'nodeClick': (nodeMouseEvent: NodeMouseEvent) => void
      'nodeMouseEnter': (nodeMouseEvent: NodeMouseEvent) => void
      'nodeMouseMove': (nodeMouseEvent: NodeMouseEvent) => void
      'nodeMouseLeave': (nodeMouseEvent: NodeMouseEvent) => void
      'nodeContextMenu': (nodeMouseEvent: NodeMouseEvent) => void
      'nodeDragStart': (nodeDragEvent: NodeDragEvent) => void
      'nodeDrag': (nodeDragEvent: NodeDragEvent) => void
      'nodeDragStop': (nodeDragEvent: NodeDragEvent) => void
      'nodesInitialized': () => void
      'miniMapNodeClick': (nodeMouseEvent: NodeMouseEvent) => void
      'miniMapNodeDoubleClick': (nodeMouseEvent: NodeMouseEvent) => void
      'miniMapNodeMouseEnter': (nodeMouseEvent: NodeMouseEvent) => void
      'miniMapNodeMouseMove': (nodeMouseEvent: NodeMouseEvent) => void
      'miniMapNodeMouseLeave': (nodeMouseEvent: NodeMouseEvent) => void
      'connect': (connectionEvent: Connection) => void
      'connectStart': (
        connectionEvent: {
          event?: MouseEvent | undefined
        } & OnConnectStartParams,
      ) => void
      'connectEnd': (connectionEvent?: MouseEvent | undefined) => void
      'clickConnectStart': (
        connectionEvent: {
          event?: MouseEvent | undefined
        } & OnConnectStartParams,
      ) => void
      'clickConnectEnd': (connectionEvent?: MouseEvent | undefined) => void
      'moveStart': (moveEvent: { event: D3ZoomEvent<HTMLDivElement, any>; flowTransform: ViewportTransform }) => void
      'move': (moveEvent: { event: D3ZoomEvent<HTMLDivElement, any>; flowTransform: ViewportTransform }) => void
      'moveEnd': (moveEvent: { event: D3ZoomEvent<HTMLDivElement, any>; flowTransform: ViewportTransform }) => void
      'selectionDragStart': (selectionEvent: NodeDragEvent) => void
      'selectionDrag': (selectionEvent: NodeDragEvent) => void
      'selectionDragStop': (selectionEvent: NodeDragEvent) => void
      'selectionContextMenu': (selectionEvent: { event: MouseEvent; nodes: GraphNode[] }) => void
      'selectionStart': (selectionEvent: MouseEvent) => void
      'selectionEnd': (selectionEvent: MouseEvent) => void
      'viewportChangeStart': (viewport: ViewportTransform) => void
      'viewportChange': (viewport: ViewportTransform) => void
      'viewportChangeEnd': (viewport: ViewportTransform) => void
      'paneReady': (paneEvent: VueFlowStore) => void
      'paneScroll': (paneEvent: WheelEvent | undefined) => void
      'paneClick': (paneEvent: MouseEvent) => void
      'paneContextMenu': (paneEvent: MouseEvent) => void
      'paneMouseEnter': (paneEvent: MouseEvent) => void
      'paneMouseMove': (paneEvent: MouseEvent) => void
      'paneMouseLeave': (paneEvent: MouseEvent) => void
      'edgeContextMenu': (edgeMouseEvent: EdgeMouseEvent) => void
      'edgeMouseEnter': (edgeMouseEvent: EdgeMouseEvent) => void
      'edgeMouseMove': (edgeMouseEvent: EdgeMouseEvent) => void
      'edgeMouseLeave': (edgeMouseEvent: EdgeMouseEvent) => void
      'edgeDoubleClick': (edgeMouseEvent: EdgeMouseEvent) => void
      'edgeClick': (edgeMouseEvent: EdgeMouseEvent) => void
      'edgeUpdateStart': (edgeMouseEvent: EdgeMouseEvent) => void
      'edgeUpdate': (edgeUpdateEvent: EdgeUpdateEvent) => void
      'edgeUpdateEnd': (edgeMouseEvent: EdgeMouseEvent) => void
      'updateNodeInternals': () => void
      'error': (error: VueFlowError<import('../../utils/errors').ErrorCode>) => void
      'update:modelValue': (value: FlowElements<any, any, any, any>) => void
      'update:nodes': (value: GraphNode<any, any, string>[]) => void
      'update:edges': (value: GraphEdge<any, any, string>[]) => void
    },
    string,
    import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps,
    Readonly<
      import('vue').ExtractPropTypes<
        __VLS_WithDefaults<
          __VLS_TypePropsToRuntimeProps<FlowProps>,
          {
            snapToGrid: undefined
            onlyRenderVisibleElements: undefined
            edgesUpdatable: undefined
            nodesConnectable: undefined
            nodesDraggable: undefined
            elementsSelectable: undefined
            selectNodesOnDrag: undefined
            preventScrolling: undefined
            zoomOnScroll: undefined
            zoomOnPinch: undefined
            zoomOnDoubleClick: undefined
            panOnScroll: undefined
            panOnDrag: undefined
            applyDefault: undefined
            fitViewOnInit: undefined
            connectOnClick: undefined
            connectionLineStyle: undefined
            connectionLineOptions: undefined
            autoConnect: undefined
            elevateEdgesOnSelect: undefined
            elevateNodesOnSelect: undefined
            disableKeyboardA11y: undefined
            edgesFocusable: undefined
            nodesFocusable: undefined
            autoPanOnConnect: undefined
            autoPanOnNodeDrag: undefined
            isValidConnection: undefined
            deleteKeyCode: undefined
            selectionKeyCode: undefined
            multiSelectionKeyCode: undefined
            panActivationKeyCode: undefined
            zoomActivationKeyCode: undefined
          }
        >
      >
    > & {
      'onNodesChange'?: ((changes: NodeChange[]) => any) | undefined
      'onEdgesChange'?: ((changes: EdgeChange[]) => any) | undefined
      'onNodeDoubleClick'?: ((nodeMouseEvent: NodeMouseEvent) => any) | undefined
      'onNodeClick'?: ((nodeMouseEvent: NodeMouseEvent) => any) | undefined
      'onNodeMouseEnter'?: ((nodeMouseEvent: NodeMouseEvent) => any) | undefined
      'onNodeMouseMove'?: ((nodeMouseEvent: NodeMouseEvent) => any) | undefined
      'onNodeMouseLeave'?: ((nodeMouseEvent: NodeMouseEvent) => any) | undefined
      'onNodeContextMenu'?: ((nodeMouseEvent: NodeMouseEvent) => any) | undefined
      'onNodeDragStart'?: ((nodeDragEvent: NodeDragEvent) => any) | undefined
      'onNodeDrag'?: ((nodeDragEvent: NodeDragEvent) => any) | undefined
      'onNodeDragStop'?: ((nodeDragEvent: NodeDragEvent) => any) | undefined
      'onNodesInitialized'?: (() => any) | undefined
      'onUpdateNodeInternals'?: (() => any) | undefined
      'onMiniMapNodeClick'?: ((nodeMouseEvent: NodeMouseEvent) => any) | undefined
      'onMiniMapNodeDoubleClick'?: ((nodeMouseEvent: NodeMouseEvent) => any) | undefined
      'onMiniMapNodeMouseEnter'?: ((nodeMouseEvent: NodeMouseEvent) => any) | undefined
      'onMiniMapNodeMouseMove'?: ((nodeMouseEvent: NodeMouseEvent) => any) | undefined
      'onMiniMapNodeMouseLeave'?: ((nodeMouseEvent: NodeMouseEvent) => any) | undefined
      'onConnect'?: ((connectionEvent: Connection) => any) | undefined
      'onConnectStart'?:
        | ((
            connectionEvent: {
              event?: MouseEvent | undefined
            } & OnConnectStartParams,
          ) => any)
        | undefined
      'onConnectEnd'?: ((connectionEvent?: MouseEvent | undefined) => any) | undefined
      'onClickConnectStart'?:
        | ((
            connectionEvent: {
              event?: MouseEvent | undefined
            } & OnConnectStartParams,
          ) => any)
        | undefined
      'onClickConnectEnd'?: ((connectionEvent?: MouseEvent | undefined) => any) | undefined
      'onPaneReady'?: ((paneEvent: VueFlowStore) => any) | undefined
      'onMove'?: ((moveEvent: { event: D3ZoomEvent<HTMLDivElement, any>; flowTransform: ViewportTransform }) => any) | undefined
      'onMoveStart'?:
        | ((moveEvent: { event: D3ZoomEvent<HTMLDivElement, any>; flowTransform: ViewportTransform }) => any)
        | undefined
      'onMoveEnd'?:
        | ((moveEvent: { event: D3ZoomEvent<HTMLDivElement, any>; flowTransform: ViewportTransform }) => any)
        | undefined
      'onSelectionDragStart'?: ((selectionEvent: NodeDragEvent) => any) | undefined
      'onSelectionDrag'?: ((selectionEvent: NodeDragEvent) => any) | undefined
      'onSelectionDragStop'?: ((selectionEvent: NodeDragEvent) => any) | undefined
      'onSelectionContextMenu'?: ((selectionEvent: { event: MouseEvent; nodes: GraphNode[] }) => any) | undefined
      'onSelectionStart'?: ((selectionEvent: MouseEvent) => any) | undefined
      'onSelectionEnd'?: ((selectionEvent: MouseEvent) => any) | undefined
      'onViewportChangeStart'?: ((viewport: ViewportTransform) => any) | undefined
      'onViewportChange'?: ((viewport: ViewportTransform) => any) | undefined
      'onViewportChangeEnd'?: ((viewport: ViewportTransform) => any) | undefined
      'onPaneScroll'?: ((paneEvent: WheelEvent | undefined) => any) | undefined
      'onPaneClick'?: ((paneEvent: MouseEvent) => any) | undefined
      'onPaneContextMenu'?: ((paneEvent: MouseEvent) => any) | undefined
      'onPaneMouseEnter'?: ((paneEvent: MouseEvent) => any) | undefined
      'onPaneMouseMove'?: ((paneEvent: MouseEvent) => any) | undefined
      'onPaneMouseLeave'?: ((paneEvent: MouseEvent) => any) | undefined
      'onEdgeContextMenu'?: ((edgeMouseEvent: EdgeMouseEvent) => any) | undefined
      'onEdgeMouseEnter'?: ((edgeMouseEvent: EdgeMouseEvent) => any) | undefined
      'onEdgeMouseMove'?: ((edgeMouseEvent: EdgeMouseEvent) => any) | undefined
      'onEdgeMouseLeave'?: ((edgeMouseEvent: EdgeMouseEvent) => any) | undefined
      'onEdgeDoubleClick'?: ((edgeMouseEvent: EdgeMouseEvent) => any) | undefined
      'onEdgeClick'?: ((edgeMouseEvent: EdgeMouseEvent) => any) | undefined
      'onEdgeUpdateStart'?: ((edgeMouseEvent: EdgeMouseEvent) => any) | undefined
      'onEdgeUpdate'?: ((edgeUpdateEvent: EdgeUpdateEvent) => any) | undefined
      'onEdgeUpdateEnd'?: ((edgeMouseEvent: EdgeMouseEvent) => any) | undefined
      'onError'?: ((error: VueFlowError<import('../../utils/errors').ErrorCode>) => any) | undefined
      'onUpdate:modelValue'?: ((value: FlowElements<any, any, any, any>) => any) | undefined
      'onUpdate:nodes'?: ((value: GraphNode<any, any, string>[]) => any) | undefined
      'onUpdate:edges'?: ((value: GraphEdge<any, any, string>[]) => any) | undefined
    },
    {
      connectionLineStyle: import('vue').CSSProperties | null
      connectionLineOptions: import('../../types').ConnectionLineOptions
      isValidConnection: import('../../types').ValidConnectionFunc | null
      deleteKeyCode: import('@vueuse/core').KeyFilter | null
      selectionKeyCode: import('@vueuse/core').KeyFilter | null
      multiSelectionKeyCode: import('@vueuse/core').KeyFilter | null
      zoomActivationKeyCode: import('@vueuse/core').KeyFilter | null
      panActivationKeyCode: import('@vueuse/core').KeyFilter | null
      snapToGrid: boolean
      onlyRenderVisibleElements: boolean
      edgesUpdatable: import('../../types').EdgeUpdatable
      nodesDraggable: boolean
      nodesConnectable: boolean
      elementsSelectable: boolean
      selectNodesOnDrag: boolean
      panOnDrag: boolean | number[]
      zoomOnScroll: boolean
      zoomOnPinch: boolean
      panOnScroll: boolean
      zoomOnDoubleClick: boolean
      preventScrolling: boolean
      fitViewOnInit: boolean
      connectOnClick: boolean
      applyDefault: boolean
      autoConnect: boolean | import('../../types').Connector
      elevateEdgesOnSelect: boolean
      elevateNodesOnSelect: boolean
      disableKeyboardA11y: boolean
      edgesFocusable: boolean
      nodesFocusable: boolean
      autoPanOnConnect: boolean
      autoPanOnNodeDrag: boolean
    }
  >,
  Partial<Record<string, (_: any) => any>> & {
    'connection-line': (connectionLineProps: ConnectionLineProps) => any
    'zoom-pane': () => any
    'default': () => any
  } & {
    [key: `node-${string}`]: (nodeProps: NodeProps) => any
  } & {
    [key: `edge-${string}`]: (edgeProps: EdgeProps) => any
  }
>
export default _default
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T
type __VLS_TypePropsToRuntimeProps<T> = {
  [K in keyof T]-?: {} extends Pick<T, K>
    ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>
      }
    : {
        type: import('vue').PropType<T[K]>
        required: true
      }
}
type __VLS_WithDefaults<P, D> = {
  [K in keyof Pick<P, keyof P>]: K extends keyof D
    ? __VLS_Prettify<
        P[K] & {
          default: D[K]
        }
      >
    : P[K]
}
type __VLS_WithTemplateSlots<T, S> = T & {
  new (): {
    $slots: S
  }
}
type __VLS_Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

import type { ConnectionMode } from '../types'
import type {
  Actions,
  ConnectionStatus,
  Dimensions,
  GraphEdge,
  GraphNode,
  HandleType,
  NodeHandleBounds,
  ValidConnectionFunc,
  ValidHandleResult,
  XYPosition,
} from '../types'

export interface ConnectionHandle extends XYPosition, Dimensions {
  id: string | null
  type: HandleType
  nodeId: string
}
export declare function resetRecentHandle(handleDomNode: Element): void
export declare function getHandles(
  node: GraphNode,
  handleBounds: NodeHandleBounds,
  type: HandleType,
  currentHandle: string,
): ConnectionHandle[]
export declare function getClosestHandle(
  pos: XYPosition,
  connectionRadius: number,
  handles: ConnectionHandle[],
  validator: (handle: ConnectionHandle | null) => ValidHandleResult,
):
  | {
      handle: ConnectionHandle
      validHandleResult: ValidHandleResult
    }
  | {
      handle: null
      validHandleResult: ValidHandleResult
    }
export declare function isValidHandle(
  event: MouseEvent | TouchEvent,
  handle: Pick<ConnectionHandle, 'nodeId' | 'id' | 'type'> | null,
  connectionMode: ConnectionMode,
  fromNodeId: string,
  fromHandleId: string | null,
  fromType: HandleType,
  isValidConnection: ValidConnectionFunc,
  doc: Document | ShadowRoot,
  edges: GraphEdge[],
  findNode: Actions['findNode'],
): ValidHandleResult
interface GetHandleLookupParams {
  nodes: GraphNode[]
  nodeId: string
  handleId: string | null
  handleType: string
}
export declare function getHandleLookup({ nodes, nodeId, handleId, handleType }: GetHandleLookupParams): ConnectionHandle[]
export declare function getHandleType(edgeUpdaterType: HandleType | undefined, handleDomNode: Element | null): HandleType | null
export declare function getConnectionStatus(isInsideConnectionRadius: boolean, isHandleValid: boolean): ConnectionStatus | null
export {}

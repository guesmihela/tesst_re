import type { CustomEvent, ElementData } from '../types'

/**
 * Access a node, it's parent (if one exists) and connected edges
 *
 * If no node id is provided, the node id is injected from context
 *
 * Meaning if you do not provide an id, this composable has to be called in a child of your custom node component, or it will throw
 */
export declare function useNode<Data = ElementData, CustomEvents extends Record<string, CustomEvent> = any>(
  id?: string,
): {
  id: string
  nodeEl: import('vue').Ref<HTMLDivElement> | null
  node: import('../types').GraphNode<Data, CustomEvents, string>
  parentNode: import('vue').ComputedRef<import('../types').GraphNode<any, any, string> | undefined>
  connectedEdges: import('vue').ComputedRef<import('../types').GraphEdge<any, any, string>[]>
}

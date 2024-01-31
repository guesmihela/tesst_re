import type { CustomEvent, ElementData } from '../types'

/**
 * Access an edge
 *
 * If no edge id is provided, the edge id is injected from context
 *
 * Meaning if you do not provide an id, this composable has to be called in a child of your custom edge component, or it will throw
 */
export declare function useEdge<Data = ElementData, CustomEvents extends Record<string, CustomEvent> = any>(
  id?: string,
): {
  id: string
  edge: import('../types').GraphEdge<Data, CustomEvents, string> | undefined
  edgeEl: import('vue').Ref<SVGElement> | null
}

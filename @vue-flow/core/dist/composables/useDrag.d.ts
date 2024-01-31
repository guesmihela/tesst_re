import type { D3DragEvent, SubjectPosition } from 'd3-drag'
import type { Ref } from 'vue'
import type { MaybeRefOrGetter } from '@vueuse/core'
import type { NodeDragEvent } from '../types'

export type UseDragEvent = D3DragEvent<HTMLDivElement, null, SubjectPosition>
interface UseDragParams {
  onStart: (args: Omit<NodeDragEvent, 'intersections'>) => void
  onDrag: (event: Omit<NodeDragEvent, 'intersections'>) => void
  onStop: (event: Omit<NodeDragEvent, 'intersections'>) => void
  el: Ref<Element | undefined>
  disabled?: MaybeRefOrGetter<boolean>
  selectable?: MaybeRefOrGetter<boolean>
  dragHandle?: MaybeRefOrGetter<string | undefined>
  id?: string
}
export declare function useDrag(params: UseDragParams): Ref<boolean>
export {}
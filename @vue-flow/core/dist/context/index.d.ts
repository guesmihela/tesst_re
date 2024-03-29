import type { InjectionKey, Ref, Slots as TSlots } from 'vue'
import type { VueFlowStore } from '../types'

export declare const VueFlow: InjectionKey<VueFlowStore>
export declare const NodeId: InjectionKey<string>
export declare const NodeRef: InjectionKey<Ref<HTMLDivElement>>
export declare const EdgeId: InjectionKey<string>
export declare const EdgeRef: InjectionKey<Ref<SVGElement>>
export declare const Slots: InjectionKey<TSlots>

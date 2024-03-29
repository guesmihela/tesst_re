import type { Position } from '../../../types'

export interface GetBezierPathParams {
  sourceX: number
  sourceY: number
  sourcePosition?: Position
  targetX: number
  targetY: number
  targetPosition?: Position
  curvature?: number
}
export declare function getBezierPath({
  sourceX,
  sourceY,
  sourcePosition,
  targetX,
  targetY,
  targetPosition,
  curvature,
}: GetBezierPathParams): [path: string, labelX: number, labelY: number, offsetX: number, offsetY: number]

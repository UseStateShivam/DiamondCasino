import {pad} from '@/games/plinko/padding'

export const HEIGHT = 800
export const WIDTH = 800
export const obstacleRadius = 4
export const ballRadius = 7

export const gravity: number = pad(0.1)
export const horizontalFriction: number = 0.4
export const verticalFriction: number = 0.6

export const sinkWidth = 36
export const NUM_SINKS = 17

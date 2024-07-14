import { gravity, horizontalFriction, verticalFriction } from "../constants"
import {pad, unpad} from '@/games/plinko/padding'


export class Ball {
    private x: number
    private y: number
    private vx: number
    private vy: number
    private obstacles: []
    private sinks: []
    private radius: number
    private colour: string
    private ctx: CanvasRenderingContext2D
    private onFinish: (index: number) => void

    constructor(x: number, y: number, vx: number, vy: number, obstacles: [], sinks: [], radius: number, colour: string, ctx: CanvasRenderingContext2D, onFinish: (index: number) => void) {
        this.x= x
        this.y= y
        this.vx= vx
        this.vy= vy
        this.obstacles= obstacles
        this.sinks= sinks
        this.radius= radius
        this.colour= colour
        this.ctx= ctx
        this.onFinish= onFinish
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        this.ctx.fillStyle = this.colour
        this.ctx.fill()
        this.ctx.closePath()
    }

    update() {
        this.vy += gravity
        this.x += this.vx
        this.y += this.vy
    }
}
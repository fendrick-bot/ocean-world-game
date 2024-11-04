
import EventEmitter from './EventEmitter.js'

export default class Sizes extends EventEmitter
{
    constructor(_canvas)
    {
        super()

        // Setup
        this.width = _canvas.width
        this.height = _canvas.height
        console.log(this.width, this.height);
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        // Resize event
        window.addEventListener('resize', () =>
        {
            this.width = _canvas.width
            this.height = _canvas.height
            this.pixelRatio = Math.min(window.devicePixelRatio, 2)

            this.trigger('resize')
        })
    }
}
export default function mountCanvas(canvas: HTMLCanvasElement) {
    const context = canvas.getContext('2d')
    if (!context) return console.log("Canvas context not supported")
    context.fillRect(0, 0, 1900, 1080)
}
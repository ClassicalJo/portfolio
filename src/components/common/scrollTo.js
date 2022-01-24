let ease = x => 1 - Math.cos(x * Math.PI / 2)
let scroll = (element, point) => element.scrollTo(0, point)

const animateScroll = (element, target) => {
    let distance = target * element.scrollHeight - element.scrollTop
    let origin = element.scrollTop
    let p = 0
    function animate() {
        requestAnimationFrame(() => {
            p += .05
            scroll(element, origin + ease(p) * distance)
            if (p < 1) animate()
        })
    }
    animate()
}
export default animateScroll

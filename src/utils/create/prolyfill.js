export function removeElement(el) {
    if (!el instanceof HTMLElement) {
        console.error('参数 el 必须时一个有效的dom对象 at removeElement')
    }
    if (document.documentElement.remove) {
        el.remove()
    } else {
        let parentEl = el.parentNode || el.parentElement
        parentEl.removeChild(el)
    }
}
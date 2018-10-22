import './create.less';
import Vue from 'vue'
let c = document && document.createElement

function createMask() {
    let mask = document.createElement('div')
    mask.className = 'pop-up-mask show'
    document.body.appendChild(mask)
    mask.addEventListener('click', _ => {
        mask.classList.remove('show')
        mask.classList.add('removing')
        document.body.removeChild(mack)
    })
    return mask
}

function getClickPosition(e) {
    return {
        x: e.clientX + 'px',
        y: e.clientY + 'px'
    }
}

function resizeHandler(target) {

}

function create(component, data = {}, e) {
    if (!document) return
    let content = document.createElement('div')
    content.id = "pop-up-content"
    document.body.appendChild(content)
    let position = getClickPosition(e)
    let popVm = new Vue({
        // ...options,
        render(h) {
            return h(component, {...data, attrs: { style: `potision:absolute;top:${position.y};left:${position.x}` } }, )
        },
    })
    popVm.$mount('#pop-up-content')
    let target = e.target
        //document.addEventListener('size', _ => resizeHandler(target))
}
export default {
    install(Vue) {
        Vue.prototype.$create = create
    }
}
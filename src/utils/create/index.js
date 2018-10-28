import "./create.less";
import Vue from "vue";
import {
    isDom,
    setVerticalCenter,
    setHorizontalCenter,
    setHoriaontalVerticalCenter,
    setPosition,
    show,
    hide
} from "./dom";
import { removeElement } from './prolyfill'
let c = document && document.createElement;

function createMask() {
    let mask = document.createElement("div");
    mask.className = "pop-up-mask show";
    document.body.appendChild(mask);
    mask.addEventListener("click", _ => {
        mask.classList.remove("show");
        mask.classList.add("removing");
        document.body.removeChild(mack);
    });
    return mask;
}

/**
 * 更新pop位置
 * @param {*HTMLElement} target 参照元素
 * @param {*HTMLElement} pop 弹出框
 * @param {*HTMLElement} arrow 弹出框箭头
 * @param {*HTMLElement} bounding 相对容器元素，弹出框会检查与容器元素的边界情况
 */
function updatePosition(target, pop, arrow, bounding) {
    let targetRect = target.getBoundingClientRect(),
        popRect = pop.getBoundingClientRect(),
        boundingRect = bounding.getBoundingClientRect(),
        arrowRect = arrow.getBoundingClientRect();
    //参照dom中心点距离指定容器左边界的距离
    let targetCenterLeft = targetRect.left + targetRect.width / 2,
        //参照dom中心点距离指定容器右边界的距离
        targetCenterRight =
        boundingRect.width - targetRect.right + targetRect.width / 2;
    //左侧是否溢出容器
    let overflowLeft = targetCenterRight + popRect.width / 2 > boundingRect.width,
        //右侧是否溢出容器
        overflowRight = targetCenterLeft + popRect.width / 2 > boundingRect.width,
        //顶部是否溢出容器
        overflowTop = targetRect.top < popRect.height,
        //底部是否溢出容器
        overflowButtom = targetRect.bottom + popRect.height > boundingRect.height;
    //pop默认显示在正下方
    setPosition(pop, {
        top: targetRect.bottom,
        left: targetCenterLeft - popRect.width / 2
    });

    function setArrowUp() {
        arrow.className = 'wt-pop-up-arrow up'
        setPosition(arrow, {
            top: targetRect.bottom - arrowRect.width / 2,
            left: targetCenterLeft - arrowRect.width
        });
    }

    function setArrowRight() {
        arrow.className = 'wt-pop-up-arrow right'
        setPosition(arrow, {
            top: targetRect.top + targetRect.height / 2 - arrowRect.height / 2,
            left: targetRect.left - arrowRect.width
        });
    }

    function setArrowDown() {
        arrow.className = 'wt-pop-up-arrow down'
        setPosition(arrow, {
            top: targetRect.top - arrowRect.height / 2,
            left: targetCenterLeft - arrowRect.width
        });
    }

    function setArrowLeft() {
        arrow.className = 'wt-pop-up-arrow left'
        setPosition(arrow, {
            top: targetRect.top + targetRect.height / 2 - arrowRect.height / 2,
            left: targetRect.right - arrowRect.width
        });
    }
    //箭头默认朝上
    setArrowUp()
    if (overflowLeft && overflowRight && overflowTop && overflowButtom) {
        console.log('status:1')
            //如果左右上下都溢出容器，则隐藏箭头图标，pop垂直水平居中显示
    } else if (overflowRight && overflowTop) {
        console.log('status:2')
            //如果右侧和顶部均溢出容器，将pop放在左侧，顶部与参照dom顶部对齐
        setPosition(pop, { top: targetRect.top, left: targetRect.left - popRect.width });
        setArrowRight()
    } else if (overflowRight && overflowButtom) {
        console.log('status:3')
            //如果右侧和底部均溢出容器，将pop放在左侧，底部与参照dom底部对齐
        setPosition(pop, { top: targetRect.bottom - popRect.height, left: targetRect.left - popRect.width });
        setArrowRight()
    } else if (overflowLeft && overflowTop) {
        console.log('status:4')
            //如果左侧和顶部均溢出容器，将pop放在右侧，顶部与参照dom顶部对齐
        setPosition(pop, { top: targetRect.top, left: targetRect.right });
        setArrowLeft()
    } else if (overflowLeft && overflowButtom) {
        console.log('status:5')
            //如果左侧和底部均溢出容器，将pop放在右侧，底部与参照dom底部对齐
        setPosition(pop, { top: targetRect.bottom - popRect.height, left: targetRect.right });
        setArrowLeft()
    } else if (overflowLeft) {
        console.log('status:8')
            //左溢出容器,左侧靠拢边缘
        setPosition(pop, { left: 0 });
        //setArrowLeft()
    } else if (overflowRight) {
        console.log('status:9')
            //右侧溢出容器,右侧靠拢边缘
        setPosition(pop, { left: boundingRect.width - popRect.width });
    } else if (overflowTop) {
        console.log('status:10')
            //顶部溢出容器，在参照dom的下方显示
        setPosition(pop, { top: targetRect.bottom });
        //setArrowUp()
    } else if (overflowButtom) {
        console.log('status:11')
            //底部溢出容器，在参照dom的上方显示
        setPosition(pop, { top: targetRect.top - popRect.height });
        setArrowDown()
    }
    console.log('overflowLeft:' + overflowLeft)
    console.log('overflowRight:' + overflowRight)
    console.log('overflowButtom:' + overflowButtom)
    console.log('overflowTop:' + overflowTop)
}

function resizeHandler(target) {}

function preHandlerTarget(target) {
    if (target.$el) {
        //target为vue组件
        return target.$el;
    } else if (target.target || target.srcElement) {
        //target为事件响应参数e
        return target.target || target.srcElement
    } else {
        //target为dom
        target
    }
}

function destroy(warp, content, popVm, observer) {
    warp.classList.toggle("show");
    console.log('content', content)
    removeElement(content)
        //断开对dom变动的监听
    observer.disconnect()
        //恢复默认的close方法
    create.close = function() {}
    setTimeout(_ => {
        popVm.$destroy();
        removeElement(warp)
    }, 300);
}

function create(component, data = {}, target, uniqClass) {
    console.log('component', target)
    if (!document) return;
    target = preHandlerTarget(target)
    if (!isDom(target)) {
        return console.log("$create第二个参数target必须为vue实例或dom对象");
    }
    let warp = document.createElement("div"),
        content = document.createElement("div"),
        slot = document.createElement("div"),
        arrow = document.createElement("div");
    warp.className = "wt-pop-up-warp " + uniqClass;
    arrow.className = "wt-pop-up-arrow up"
    content.appendChild(arrow)
    content.appendChild(slot)
    content.className = "wt-pop-up-content";
    warp.appendChild(content);

    let popVm = new Vue({
        // ...options,
        data() {
            return {
                confirm: _ => {},
                cancel: _ => {}
            };
        },
        render(h) {
            return h(component, {
                ...data,
                attrs: {
                    ...(data.attrs || {}),
                    style: data.attrs && data.attrs.style ? data.attrs.style + 'position:static;' : 'position:static;'
                },
                on: {
                    confirm: this.confirm,
                    cancel: this.cancel
                }
            })
        }
    });
    popVm.$mount(slot);
    document.body.appendChild(warp);
    setTimeout(_ => {
        warp.classList.toggle("show");
    }, 0);

    updatePosition(target, content, arrow, document.body);



    //监听传进来的组件样式变动（如宽度，高度），更新其位置，需要IE11+
    let observer = new MutationObserver(() => updatePosition(target, content, arrow, document.body))
    console.log('popVm.$el', popVm)
    observer.observe(popVm.$children[0].$el, {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true
    })

    //点击warp移除pop
    warp.addEventListener(
        "click",
        e => {
            let target = e.target || e.srcElement;
            if (target === warp) {
                destroy(warp, content, popVm, observer)
            }
        },
        false
    );

    create.close = function() {
        destroy(warp, content, popVm, observer)
    }

    return new Promise((resolve, reject) => {
        popVm.confirm = resolve
        popVm.cancel = reject
    })
}

//设置默认close方法，避免在没有弹出框时此方法不存在
create.close = function() {}

export default {
    install(Vue) {
        Vue.prototype.$create = create;
    }
};
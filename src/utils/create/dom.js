export let isDom =
    typeof HTMLElement === "object" ?

    function(obj) {
        return obj instanceof HTMLElement;
    } :
    function(obj) {
        return (
            obj &&
            typeof obj === "object" &&
            obj.nodeType === 1 &&
            typeof obj.nodeName === "string"
        );
    };
//设置位置
export function setPosition(dom, Rect) {
    Rect.top && (dom.style.top = Math.round(Rect.top) + "px");
    Rect.left && (dom.style.left = Math.round(Rect.left) + "px");
}

//设置pop为垂直剧中男
export function setVerticalCenter(dom) {
    dom.classList.remove("wt-horizontal-middle");
    dom.classList.remove("wt-ververtical-horizontal-middle");
    dom.classList.add("wt-vertical-middle");
}

//设置pop为垂直居中
export function setHorizontalCenter(dom) {
    dom.classList.remove("wt-ververtical-middle");
    dom.classList.remove("wt-ververtical-horizontal-middle");
    dom.classList.add("wt-horizontal-middle");
}

//设置pop为垂直水平居中
export function setHoriaontalVerticalCenter(dom) {
    dom.classList.remove("wt-ververtical-middle");
    dom.classList.remove("wt-horizontal-middle");
    dom.classList.add("wt-ververtical-horizontal-middle");
}

//隐藏dom
export function hide(dom) {
    dom.classList.add("wt-hide");
}

//显示dom
export function show(dom) {
    dom.classList.remove("wt-hide");
}
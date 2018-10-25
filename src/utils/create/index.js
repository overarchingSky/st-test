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

//更新pop位置
function updatePosition(target, pop, bounding) {
  let targetRect = target.getBoundingClientRect(),
    popRect = pop.getBoundingClientRect(),
    boundingRect = bounding.getBoundingClientRect();
  //参照dom中心点距离指定容器左边界的距离
  let targetCenterLeft = targetRect.left + targetRect.width / 2,
    //参照dom中心点距离指定容器右边界的距离
    targetCenterRight =
      boundingRect.width - target.right + targetRect.width / 2;
  //左侧是否溢出容器
  let overflowLeft = targetCenterRight + popRect.width / 2 > boundingRect.width,
    //右侧是否溢出容器
    overflowRight = targetCenterLeft + popRect.width / 2 > boundingRect.width,
    //顶部是否溢出容器
    overflowTop = targetRect.top < popRect.height,
    //底部是否溢出容器
    overflowButtom = targetRect.bottom + popRect.height > boundingRect.height;
  console.log("overflowButtom", targetCenterLeft, pop.getBoundingClientRect());
  //pop默认显示在正下方
  setPosition(pop, {
    top: targetRect.bottom,
    left: targetCenterLeft - popRect.width / 2
  });
  if (overflowLeft && overflowRight && overflowTop && overflowButtom) {
    //如果左右上下都溢出容器，则隐藏箭头图标，pop垂直水平居中显示
  }

  if (overflowLeft && overflowRight) {
    //左侧和右侧均溢出容器
    setHorizontalCenter(pop);
  } else if (overflowLeft) {
    //左溢出容器,
    setPosition(pop, { left: targetRect.right });
  } else if (overflowRight) {
    //右侧溢出容器
    setPosition(pop, { right: targetRect.left });
  }
  if (overflowTop && overflowButtom) {
    //底部和顶部均溢出容器,直接垂直居中显示
    setVerticalCenter(pop);
  } else if (overflowTop) {
    //顶部溢出容器，在参照dom的下方显示
    setPosition(pop, { top: targetRect.bottom });
  } else if (overflowButtom) {
    //底部溢出容器，在参照dom的上方显示
    setPosition(pop, { top: targetRect.top - popRect.height });
  }
}

function resizeHandler(target) {}

function create(component, data = {}, target) {
  if (!document) return;
  if (target.$el) {
    target = target.$el;
  }
  if (!isDom(target)) {
    return console.log("$create第二个参数target必须为vue实例或dom对象");
  }
  let warp = document.createElement("div");
  warp.class = "wt-pop-up-warp";
  let content = document.createElement("div");
  content.id = "pop-up-content";
  warp.appendChild(content);
  let popVm = new Vue({
    // ...options,
    render(h) {
      return h(component, {
        ...data,
        attrs: {
          style: `potision:absolute;`
        }
      });
    }
  });
  popVm.$mount(content);
  document.body.appendChild(warp);
  updatePosition(target, warp, document.body);
}
export default {
  install(Vue) {
    Vue.prototype.$create = create;
  }
};

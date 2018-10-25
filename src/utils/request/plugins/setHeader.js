// 添加header信息，返回一个新的request方法
import qs from 'qs'

export default function (http, header = {}) {
    let newHttp = function (...rq) {
        let option = rq[3] || {}
        option.headers = {
            ...option.headers,
            ...header
        }
        rq[3] = option
        return http(...rq)
    }
    return newHttp
}
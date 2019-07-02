// 所有recommend请求都放在这
import jsonp from './jsonp';
import { URL, PARAM, OPTION } from './config'

// 得到轮播的请求
export function getCarousel() {
    return jsonp(
        URL.carousel,
        {
            ...PARAM,
            _: new Date().getTime(),
            g_tk: 5381,
            uin: 0,
            platform: 'h5',
            needNewCode: 1,
        },
        OPTION
    )
}
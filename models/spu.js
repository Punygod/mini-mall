/*
 * @Author: kevin
 * @Date: 2019-11-07 16:20
 * @LastEditors: kevin
 * @LastEditTime: 2019-11-07 16:27
 * @FilePath: \miniprogram-2\models\spu.js
 */
import { Http } from "../utils/http";

class Spu {
    static getDetail(id) {
        return Http.request({
            url:`spu/id/${id}/detail`
        })
    }
}

export {
    Spu
}
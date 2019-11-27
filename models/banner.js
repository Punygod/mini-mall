/*
 * @Author: kevin
 * @Date: 2019-10-19 11:57
 * @LastEditors: kevin
 * @LastEditTime: 2019-10-22 16:37
 * @FilePath: /d:\workspace\WeChatProjects\miniprogram-2\model\banner.js
 */
import { Http } from "../utils/http";

class Banner {
    static locationB = 'b-1'
    static locationG = 'b-2'
    static async getHomeLocationB() {
        return await Http.request({
            url:`banner/name/${Banner.locationB}`
        })
    }

    static async getHomeLocatioG() {
        return await Http.request({
            url:`banner/name/${Banner.locationG}`
        })
    }

}
export {
    Banner
}
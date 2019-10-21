/*
 * @Author: kevin
 * @Date: 2019-10-18 17:09
 * @LastEditors: kevin
 * @LastEditTime: 2019-10-21 18:06
 * @FilePath: /d:\workspace\WeChatProjects\miniprogram-2\model\theme.js
 */
import { Http } from "../utils/http";
// 业务对象
class Theme {
    static locationA = 't-1'
    static locationE = 't-2'
    static locationF = 't-3'
    static locationH = 't-4'

    static async getHomeLocationA() {
        return await Http.request({
            url:'theme/by/names',
            data:{
                names:Theme.locationA
            }
        })
    }

    static async getThemes() {
        const names = `${Theme.locationA},${Theme.locationE},${Theme.locationF},${Theme.locationH}`
        return await Http.request({
            url:'theme/by/names',
            data: {
                names
            }
        })
    }

}

export{
    Theme
}
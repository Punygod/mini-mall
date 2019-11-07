/*
 * @Author: kevin
 * @Date: 2019-10-21 17:08
 * @LastEditors: kevin
 * @LastEditTime: 2019-10-21 17:13
 * @FilePath: /d:\workspace\WeChatProjects\miniprogram-2\model\activity.js
 */
import { Http } from "../utils/http"

class Activity {
    static locationD = 'a-2'
    static async getHomeLocationD() {
        return await Http.request({
            url:`activity/name/${Activity.locationD}`
        })
    }

}

export {
    Activity
}
/*
 * @Author: kevin
 * @Date: 2019-10-21 14:22
 * @LastEditors: kevin
 * @LastEditTime: 2019-10-21 15:11
 * @FilePath: /d:\workspace\WeChatProjects\miniprogram-2\model\category.js
 */
import { Http } from "../utils/http";

/**
 * @author kevin
 * @创建时间 2019-10-21 14:26
 */
class Category {
    static async getGridCategory() {
        return await Http.request({
            url:`category/grid/all`
        })
    }
}
export {
    Category
}
import { Paging } from "../utils/paging"

/*
 * @Author: kevin
 * @Date: 2019-10-24 11:55
 * @LastEditors: kevin
 * @LastEditTime: 2019-10-24 16:26
 * @FilePath: \miniprogram-2\model\spu.js
 */
class SpuPaging{
    static getLatestPaging() {
        return new Paging({
            url:`spu/latest`
        },3)
    }
}
export {
    SpuPaging
}
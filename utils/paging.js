import { Http } from "./http"

/*
 * @Author: kevin
 * @Date: 2019-10-24 11:57
 * @LastEditors: kevin
 * @LastEditTime: 2019-10-24 17:39
 * @FilePath: \miniprogram-2\utils\Paging.js
 */
class Paging {
    // 不关心 细节
    // 嗨，我需要下一页的数据了，你能给我吗
    // 需要保存状态 -> 实例化
    // 起始数据 位置
    start
    // pageSize
    count
    // 请求参数
    req
    // 原始 URL
    url
    // 锁
    locker = false
    // 是否有更多数据
    moreData = true
    // 累加数据
    accumulator = []

    constructor(req,count=10,start=0) {
        this.start = start
        this.count = count
        this.req = req
        this.url = req.url
    }

    /**
     * 获取更多数据
     */
    async getMoreData() {
        if(!this.moreData) {
            return
        }
        // getLocker
        // request
        // releaseLocker
        if (!this._getLocker()) {
            return
        }
        const data = await this._actualGetData()
        this._releaseLocker()
        return data
    }

    _getLocker() {
        if (this.locker) {
            return false
        }
        this.locker = true
        return true
    }
    async _actualGetData() {
        const req = this._getCurrentReq()
        let paging = await Http.request(req)
        if(!paging) {
            return null
        }
        // return 数据结构
        if(paging.total === 0) {
            return {
                empty:true,
                items:[],
                moreData:false,
                accumulator:[]
            }
        }
        // 判断是否还有更多数据
        this.moreData = Paging._moreData(paging.total_page,paging.page)
        if(this.moreData) {
            this.start += this.count
        }
        // 累加操作
        this._accumulator(paging.items)
        return {
            empty: false,
            items:paging.items,
            moreData:this.moreData,
            accumulator:this.accumulator
        }
    }
    _accumulator(items) {
        this.accumulator = this.accumulator.concat(items)
    }
    static _moreData(totalPage, pageNum) {
        return pageNum < totalPage - 1
    }
    _getCurrentReq() {
        let url = this.url
        const params = `start=${this.start}&count=${this.count}`
        if(url.includes('?')) {
            url += '&' + params
        } else {
            url += '?' + params
        }
        this.req.url = url
        return this.req
    }

    _releaseLocker() {
        this.locker = false
    }
}

export {
    Paging
}
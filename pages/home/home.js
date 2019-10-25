/*
 * @Author: kevin
 * @Date: 2019-10-18 15:24
 * @LastEditors: kevin
 * @LastEditTime: 2019-10-25 15:27
 * @FilePath: /d:\workspace\WeChatProjects\miniprogram-2\pages\home\home.js
 */
import { Theme } from '../../model/theme'
import { Banner } from '../../model/banner'
import { Category } from '../../model/category'
import { Activity } from '../../model/activity'
import { SpuPaging } from '../../model/spu-paging'

// pages/home/home.js
// import {config} from "../../config/config"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    themeA: null,
    bannerB: null,
    grid: [],
    activityD: null,
    themeE: null,
    themeESpu:[],
    themeF:null,
    bannerG:null,
    themeH:null,
    spuPaging:null,
    loadingType:'loading'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    this.initAllData()
    this.initBottomSpuList()
  },
  /**
   * 加载底部为你推荐商品
   */
  async initBottomSpuList() {
    const paging = SpuPaging.getLatestPaging()
    this.data.spuPaging = paging
    const data = await paging.getMoreData()
    if(!data) {
      return
    }
    // 瀑布流 渲染 数据
    wx.lin.renderWaterFlow(data.items)
  },

  async initAllData() {
    const theme = new Theme()
    await theme.getThemes()
    // 主题 A
    const themeA = theme.getHomeLocationA()
    // banner B
    const bannerB = await Banner.getHomeLocationB()
    // 宫格 C
    const grid = await Category.getGridCategory()
    // 活动 D
    const activityD = await Activity.getHomeLocationD()
    // 主题 E
    const themeE = theme.getHomeLocationE()
    // 主题 E 相关商品 SPU 集合数据
    let themeESpu = []
    // 主题 F
    const themeF = theme.getHomeLocationF()
    // banner G
    const bannerG = await Banner.getHomeLocatioG()
    // 主题 H
    const themeH = await theme.getHomeLocationH()
    
    if(themeE.online) {
      const data = await theme.getHomeLocationEWithSpu()
      themeESpu = data.spu_list.slice(0,8)
    }
    this.setData({
      themeA,
      bannerB,
      grid,
      activityD,
      themeE,
      themeESpu,
      themeF,
      bannerG,
      themeH
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: async function() {
    const data = await this.data.spuPaging.getMoreData()
    if(!data) {
      return
    }
    wx.lin.renderWaterFlow(data.items)
    if(!data.moreData) {
      this.setData({
        loadingType:'end'
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})

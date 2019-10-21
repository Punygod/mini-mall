/*
 * @Author: kevin
 * @Date: 2019-10-18 15:24
 * @LastEditors: kevin
 * @LastEditTime: 2019-10-21 18:20
 * @FilePath: /d:\workspace\WeChatProjects\miniprogram-2\pages\home\home.js
 */
import { Theme } from "../../model/theme";
import { Banner } from "../../model/banner";
import { Category } from "../../model/category";
import { Activity } from "../../model/activity";

// pages/home/home.js
// import {config} from "../../config/config"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    themeA:null,
    bannerB:null,
    grid:[],
    activityD:null,
    themeE:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    this.initAllData()
  },
  async initAllData() {
    // const themeA = await Theme.getHomeLocationA()
    const themes = await Theme.getThemes()
    // find\filter\map\some\reduce
    const themeA = themes.find(t => t.name === 't-1')
    const themeE = themes.find(t => t.name === 't-2')
    const bannerB = await Banner.getHomeLocationB()
    const grid = await Category.getGridCategory()
    const activityD = await Activity.getHomeLocationD()
    this.setData({
      themeA:themeA,
      bannerB,
      grid,
      activityD
    })
  },
    
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
/*
 * @Author: kevin
 * @Date: 2019-10-22 16:29
 * @LastEditors: kevin
 * @LastEditTime: 2019-10-24 10:30
 * @FilePath: /d:\workspace\WeChatProjects\miniprogram-2\components\hot-list\index.js
 */
// components/hot-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    banner:Object
  },
  observers: {
    'banner': function(banner) {
      if(!banner) {
        return
      }
      if(banner.items.length === 0) {return}
      const left = banner.items.find(i => i.name === 'left')
      const rightTop = banner.items.find(i => i.name === 'right-top')
      const rightBottom = banner.items.find(i => i.name === 'right-bottom')
      this.setData({
        left,
        rightTop,
        rightBottom
      })
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

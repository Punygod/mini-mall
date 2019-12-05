import { FenceGroup } from "../models/fence-group"
import { Judger } from "../models/judger"

// components/realm/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    spu: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    fences: [],
    judger: Object
  },

  observers: {
    'spu':function (spu) {
      if (!spu) {
        return
      }
      console.log(spu)
      const fenceGroup = new FenceGroup(spu)
      // fenceGroup.initFences()
      fenceGroup.initFences()
      const judger = new Judger(fenceGroup)
      this.data.judger = judger
      // 绑定数据
      this.bindInitData(fenceGroup)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindInitData(fenceGroup) {
      console.log(fenceGroup)
      this.setData({
        fences: fenceGroup.fences
      })
    },
    celltap (e) {
      console.log(e)
      const data = e.detail
      const judger = this.data.judger
      // 定位该 cell 在 fences 中的位置，修改后替换掉
      // 修改某个 cell
      judger.judge(data)
      // this.data.fences = judger.fenceGroup.fences
      this.setData({
        fences: judger.fenceGroup.fences
      })
    }
  }
})

// components/cell/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cell:Object,
    y: Number,
    x: Number
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
    onTap (event) {
      console.log('tap')
      // 通过事件 传递参数到父组件
      this.triggerEvent('celltap', {
        // 子组件 父组件
        cell: this.properties.cell,
        y: this.properties.y,
        x: this.properties.x
      }, {
        bubbles: true, // 冒泡
        composed: true // 跨越组件边界
      })
    }
  }
})

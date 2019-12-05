import { Matrix } from "./matrix"
import { Fence } from "./fence"

class FenceGroup {
  spu
  skuList = []
  fences = []

  constructor(spu) {
    console.log(spu)
    this.spu = spu
    this.skuList = spu.sku_list
  }

  initFences1() {
    const matrix = this._createMatrix(this.skuList)
    const fences = []
    let currentJ = -1
    matrix.each((el, i, j) => {
      if (currentJ !== j) {
        // 开启了 一个新列，需要创建一个新的 Fence
        currentJ = j
        fences[currentJ] = this._createFence(el)
      }
      fences[currentJ].pushValueTitle(el.value)
    })
    this.fences = fences
    console.log(fences)
  }

  /**
   * 相对于 上一种方法，该方法封装性更好，面向对象
   */
  initFences() {
    const matrix = this._createMatrix(this.skuList)
    const fences = []
    const AT = matrix.transpose()
    AT.forEach(r => {
      const fence = new Fence(r)
      fence.init()
      fences.push(fence)
    })
    this.fences = fences
    console.log(AT)
    console.log(fences)
  }

  _createFence(el) {
    const fence = new Fence()
    return fence
  }

  /**
   * 双重 for 遍历 fences -> cells -> cell
   * @param {*} cb 回调函数
   */
  eachCell (cb) {
    for (let i = 0; i < this.fences.length; i++) {
      for (let j = 0; j < this.fences[i].cells.length; j++) {
        const cell = this.fences[i].cells[j]
        cb(cell, i, j)
      }
    }
  }

  _createMatrix(skuList) {
    const m = []
    skuList.forEach(sku => {
      m.push(sku.specs)
    })
    console.log(m)
    return new Matrix(m);
  }
}

export {
  FenceGroup
}
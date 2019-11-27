import { Matrix } from "./matrix"
import { Fence } from "./fence"

class FenceGroup {
  spu
  skuList

  constructor(spu) {
    console.log(spu)
    this.spu = spu
    this.skuList = spu.sku_list
  }

  initFences() {
    const matrix = this._createMatrix(this.skuList)
    const fences = []
    let currentJ = -1
    matrix.forEach((el, i, j) => {
      if (currentJ !== j) {
        // 开启了 一个新列，需要创建一个新的 Fence
        currentJ = j
        fences[currentJ] = this._createFence(el)
      }
      fences[currentJ].pushValueTitle(el.value)
    })
    console.log("fences:")
    console.log(fences)
  }

  initFences2() {
    const matrix = this._createMatrix(this.skuList)
    const fences = []
    const AT = matrix.transpose()
    AT.forEach(r => {
      const fence = new Fence(r)
      fence.init()
      fences.push(fence)
    })
    console.log(AT)
    console.log(fences)
  }

  _createFence(el) {
    const fence = new Fence()
    return fence
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
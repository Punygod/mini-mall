import { Cell } from "./cell"

class Fence {
  // 一组规格值
  cells = []
  specs
  title // 规格名
  id // 规格名 id

  constructor(specs) {
    this.specs = specs
    this.title = specs[0].key
    this.id = specs[0].key_id
  }

  init() {
    this._initCells()
  }

  _initCells() {
    this.specs.forEach( s => {
      const existed = this.cells.some(c => {
        return c.id === s.value_id
      })
      // 去重 重复的不添加
      if (existed) {
        return
      }
      const cell = new Cell(s)
      this.cells.push(cell)
    })
  }

  // pushValueTitle(title) {
  //   this.valueTitles.push(title)
  // }
}

export {
  Fence
}

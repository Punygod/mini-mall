import { SkuCode } from "./sku-code"
import { CellStatus } from "../../core/enum"
import { Cell } from "./cell"
import { SkuPending } from "./sku-pending"
import { Joiner } from "../../utils/joiner"

/**
 * 判断 法官
 */
class Judger {

  fenceGroup
  pathDict = []
  skuPending
  constructor(fenceGroup) {
    this.fenceGroup = fenceGroup
    this._initSkuPending()
    this._initPathDict()
  }
  _initSkuPending () {
    this.skuPending = new SkuPending()
  }

  _initPathDict() {
    this.fenceGroup.spu.sku_list.forEach(s => {
      const skuCode = new SkuCode(s.code)
      this.pathDict = this.pathDict.concat(skuCode.totalSegments)
    })
    console.log(this.pathDict)
  }

  /**
   * 判断 cell 状态，并修改
   * @param {Cell} cell
   */
  judge ({cell, x, y}) {
    this._changeCurrentCellStatus(cell, x, y)
    // 修改完后，回写到 fencesGroup -> fences -> cell
    // this._updateCell(cell, x, y)
    // 非当前 cell
    this.fenceGroup.eachCell((cell,x,y) => {
      const path = this._findPotentialPath(cell, x, y)
      console.log(path)
      if (!path) {
        return
      }
      const isIn = this._isInDict(path)
      if (isIn) {
        this.fenceGroup.fences[x].cells[y].status = CellStatus.WAITING
      } else {
        this.fenceGroup.fences[x].cells[y].status = CellStatus.FORBIDDEN
      }
    })
  }

  _isInDict (path) {
    return this.pathDict.includes(path)
  }
  
  /**
   * 修改当前状态
   * @param {Cell} cell 
   */
  _changeCurrentCellStatus(cell, x, y) {
    if (cell.status === CellStatus.WAITING) {
      this.fenceGroup.fences[x].cells[y].status = CellStatus.SELECTED
      this.skuPending.insertCell(cell,x)
    }
    if (cell.status === CellStatus.SELECTED) {
      this.fenceGroup.fences[x].cells[y].status = CellStatus.WAITING
      this.skuPending.removeCell(x)
    }
  }

  _changeOtherCellStatus(cell,x,y) {
    // console.log(x,y,cell)
    const path = this._findPotentialPath(cell, x, y)
    console.log(path)
  }

  /**
   * 找到 潜在路径
   * @param {Cell} cell 
   * @param {Number} x 
   * @param {Number} y 
   */
  _findPotentialPath(cell, x, y) {
    const joiner = new Joiner('#')
    for (let i = 0; i < this.fenceGroup.fences.length; i++) {
      const selected = this.skuPending.findSelectedCell(i)
      if (x === i) {
        // 当前行 cell -> path 1-42
        if (this.skuPending.isSelected(cell,x)) {
          return
        }
        const cellCode = this._getCellCode(cell.spec)
        joiner.join(cellCode)
      } else {
        if (selected) {
          const selectedCellCode = this._getCellCode(selected.spec)
          joiner.join(selectedCellCode)
        }
      }

    }
    return joiner.getStr()
  }

  _getCellCode(spec) {
    return spec.key_id + '-' + spec.value_id
  }

  _updateCell(cell, x, y) {
    // 定位
    let cells = this.fenceGroup.fences[x].cells
    // 替换
    cells.splice(y,1,cell)
  }
}

export {
  Judger
}
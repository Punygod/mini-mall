class SkuPending {
  pending = []

  constructor () {

  }

  /**
   * 有顺序 插入，不是 push
   * @param {Cell} cell 
   * @param {Number} x 
   */
  insertCell (cell, x) {
    this.pending[x] = cell
  }

  /**
   * 移除一个 Cell
   * @param {Number} x 
   */
  removeCell (x) {
    this.pending[x] = null
  }

  findSelectedCell(x) {
    return this.pending[x]
  }

  isSelected (cell, x) {
    const pendingCell = this.pending[x]
    if (!pendingCell) {
      return false
    }
    return cell.id === pendingCell.id
  }
}

export {
  SkuPending
}
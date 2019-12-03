class Matrix {
  m

  constructor(matrix) {
    this.m = matrix
    console.log(this.m)
  }

  get rowsNum() {
    return this.m.length
  }

  get colsNum() {
    return this.m[0].length
  }

  /**
   * 遍历
   * @param {回调函数} cb 
   */
  each(cb) {
    for(let j = 0;j < this.colsNum; j++) {
      for(let i = 0;i < this.rowsNum; i++) {
        cb(this.m[i][j],i,j)
      }
    }
  }

  /**
   * 矩阵的 转置思想
   */
  transpose() {
    const desArr = []
    for(let j = 0;j < this.colsNum; j++) {
      desArr[j] = []
      for (let i = 0; i < this.rowsNum; i++) {
        desArr[j][i] = this.m[i][j]    
      }
    }
    return desArr
  }


}
export {
  Matrix
}
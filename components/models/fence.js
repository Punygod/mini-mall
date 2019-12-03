import { Cell } from "./cell"

class Fence {
  cells = []
  specs

  constructor(specs) {
    this.specs = specs
  }

  init() {
    this.specs.forEach( s => {
      // this.pushValueTitle(s.value)
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

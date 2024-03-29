import { combination } from "../../utils/util"

class SkuCode {
  code
  spuId
  totalSegments = []

  constructor(code) {
    this.code = code
    this._splitToSegments()
  }

  _splitToSegments() {
    // 2$1-45#3-9#4-14
    const spuAndSpec = this.code.split('$')
    this.spuId = spuAndSpec[0]
    const specCodeArray = spuAndSpec[1].split('#')
    const length = specCodeArray.length

    for (let i = 1; i <= length; i++) {
      const segments = combination(specCodeArray, i)
      // 尽量少些显式的 for 循环
      const newSegments = segments.map(segs => {
        return segs.join('#')
      })
      this.totalSegments = this.totalSegments.concat(newSegments)
      console.log(newSegments)
    }
  }
}

export {
  SkuCode
}
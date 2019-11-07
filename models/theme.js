/*
 * @Author: kevin
 * @Date: 2019-10-22 09:47
 * @LastEditors: kevin
 * @LastEditTime: 2019-10-22 16:48
 * @FilePath: /d:\workspace\WeChatProjects\miniprogram-2\model\theme.js
 */
/*
 * @Author: kevin
 * @Date: 2019-10-18 17:09
 * @LastEditors: kevin
 * @LastEditTime: 2019-10-21 18:06
 * @FilePath: /d:\workspace\WeChatProjects\miniprogram-2\model\theme.js
 */
import { Http } from "../utils/http";
// 业务对象
class Theme {
    static locationA = 't-1'
    static locationE = 't-2'
    static locationF = 't-3'
    static locationH = 't-4'

    themes = []

    async getThemes() {
      const names = `${Theme.locationA},${Theme.locationE},${Theme.locationF},${Theme.locationH}`
      this.themes = await Http.request({
          url:'theme/by/names',
          data: {
              names
          }
      })
    }
    
    getHomeLocationA() {
      return this.themes.find(t => t.name === Theme.locationA)
    }
    
    getHomeLocationE() {
      return this.themes.find(t => t.name === Theme.locationE)
    }
    
    
    getHomeLocationF() {
      return this.themes.find(t => t.name === Theme.locationF)
    }
    
    getHomeLocationH() {
      return this.themes.find(t => t.name === Theme.locationH)
    }
    
    getHomeLocationEWithSpu() {
        return this.getThemeSpuByName(Theme.locationE)
    }

    /**
     * 通过主题名获取主题下的商品列表
     * @param {主题名} name 
     */
    getThemeSpuByName(name) {
        return Http.request({
            url:`theme/name/${name}/with_spu`
        })
    }

}

export{
    Theme
}
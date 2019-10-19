import { Http } from "../utils/http";
// 业务对象
class Theme {
    static async getHomeLocationA() {
        return await Http.request({
            url:'theme/by/names',
            data:{
                names:'t-1'
            }
        })
        // wx.request({
        //     // 模板字符串 ES6
        //     url: `${config.apiBaseUrl}theme/by/names`,
        //     // url:"http://se.7yue.pro/v1/theme/by/names",
        //     method: 'GET',
        //     data:{
        //       names:"t-1"
        //     },
        //     header:{
        //       appkey: config.appkey
        //     },
        //     success:res => {
        //       console.log(res)
        //       callback(res.data)
        //     //   this.setData({
        //     //     topTheme:res.data[0]
        //     //   })
        //     }
        //   })
    }
}

export{
    Theme
}
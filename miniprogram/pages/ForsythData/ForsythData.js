// pages/ForsythData/ForsythData.js
Page({
  data:{
    num1:0,
    num2:0,
    num3:0,
    num4:0,
    date:"",
  },
  onLoad(){
    wx.cloud.database().collection('ForsythData')
    .doc('fa4fe87261a7a067016a721e228c47bb').get()
    .then(res=>{
      console.log("成功",res)
      this.setData({
        num1:res.data.newCases,
        num2:res.data.casesLast14Days,
        num3:res.data.totalCases,
        num4:res.data.totalDeaths,
        date:res.data.date,
      })
    })
    .catch(res=>{
      console.log("shibai",res)
    })
  },

    onShareAppMessage() {
        const promise = new Promise(resolve => {
          setTimeout(() => {
            resolve({
              title: '温莎市疫情数据监测'
            })
          }, 2000)
        })
        return {
          title: '温莎市疫情数据监测',
          path: '/page/user?id=123',
          promise 
        }
    },
})
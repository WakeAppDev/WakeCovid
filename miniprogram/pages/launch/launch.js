// pages/launch/launch.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      msgList: [{
        title: "杜克大学。杜克大学是一所成立于1838年的私立大学。它的本科总招生人数为6717人(2020年秋季)，设置为Suburban。它利用了一个以学期为基础的学术日历。杜克大学在2022年版的最佳大学排名中是国立大学，第9名。它的学杂费为60,489美元。"
      },
      {
        title: "北卡罗来纳大学教堂山分校。北卡罗来纳大学教堂山分校是一所成立于1789年的公立大学。它有本科总招生19,399人(2020年秋季)，它的设置是郊区，校园面积为729英亩。它利用了一个以学期为基础的学术日历。北卡罗来纳大学教堂山分校(University of North Carolina-Chapel Hill)在2022年版的最佳学院排名中是国立大学，排名第28位。它的州内学杂费为8992美元;州外学杂费为36,776美元。"
      },
      {
        title: "维克森林大学。维克森林大学是一所成立于1834年的私立大学。它有5,441名本科生(2020年秋季)，它的环境是郊区，校园面积为340英亩。它利用了一个以学期为基础的学术日历。维克森林大学在2022年版的最佳大学排名中是国立大学，第28位。它的学杂费为59770美元。"
      },
      {
        title: "北卡罗来纳州立大学。北卡罗莱纳州立大学是一所成立于1887年的公立大学。它有26150名本科生(2020年秋季)，它的设置是城市，校园面积2137英亩。它利用了一个以学期为基础的学术日历。北卡罗来纳州立大学在2022年版的最佳学院排名中是国立大学，排名第79。它的州内学杂费为9131美元;州外学杂费为29,916美元。"
      },
      {
        title: "伊隆大学。伊隆大学是一所成立于1889年的私立大学。它有6291名本科学生(2020年秋季)，它的环境是郊区，校园面积为656英亩。它采用以4-1-4为基础的校历。伊隆大学在2022年版的最佳大学排名中是国立大学，第83名。它的学杂费为38725美元。"
      },
      ],
      List2:[{
        title:"维克森林大学连续25年在全国大学排名中名列前30名。维克森林大学校长Nathan O说:“我们一直在全国顶尖大学的排名中，这证明了我们长期以来对学术卓越的承诺。”"
      },
      {
        title:"维克森林大学(Wake Forest)是北卡罗来纳三巨头名校之一，另外两大名校分别是北卡罗来纳大学教堂山分校(University of North Carolina- chapel Hill)和杜克大学(Duke University)，它们在该州的政治、商业、医学和法律领域都有着巨大的影响力。"
      },
      {
        title:"维克森林大学有一所著名的商学院。这个为期20个月的MBA项目是北卡罗来纳州排名第一的兼职MBA项目，专为在职专业人士设计。维克森林大学也以其留学文化而闻名。"
      },
    ],
      version:666,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.cloud.database().collection('version')
        .doc('17e3426e61e32a0106a7ec5371b10fbd').get()
        .then(res=>{
          console.log("成功",res)
        var e=res.data.version;
        // e=1;
        console.log(res.data.version)
        console.log(e)
        if(e==1){
        setTimeout(function() {
            wx.switchTab({
              url: '/pages/HomePage/HomePage',
            })
          }, 0)
        }
        })
        .catch(res=>{
          console.log("失败",res)
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
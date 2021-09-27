// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    num:0,
    listData:[
      
      ]
  },
  // 事件处理函数
  bindViewTap() {
    //wx.setStorageSync('num', this.data.num+1);
    // this.setData({
    //   num:wx.getStorageSync('num') || 0
    // })
    wx.navigateTo({
      url: '../zhuan/zhuan'
    })
  },
  onLoad() {
      this.setData({
        num:wx.getStorageSync('num') || 0
      })

  },
  onShow(){
    this.setData({
      num:wx.getStorageSync('num') || 0
    })
  }
})

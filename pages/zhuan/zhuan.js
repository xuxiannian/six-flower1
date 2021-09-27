// pages/zhuan/zhuan.js

var timer;
var n = 1

Page({
  /**
   * 页面的初始数据
   */
  data: {
    showNandu: true,
    w: 0,
    h: 0,
    array: [],
    minute: '0' + 0,   // 分
    second: '0' + 0,   // 秒
    n: 1,
    done: false,
    add: 0
  }, play: function (event) {
    var i = parseInt(event.currentTarget.dataset.value);

    if (i != this.data.n) return;
    var n = this.data.n + 1

    if (i == 1) {
      timer = this.setInterval();
    }
    if (i == this.data.w * this.data.h) {
      clearInterval(timer);
      console.log("游戏结束");
      this.setData({
        n: 1,
        done: true,
        showNandu: true,
        add: this.data.h
      })
      wx.setStorageSync('num', parseInt(wx.getStorageSync('num')) + parseInt(this.data.h));
      wx.showToast({
        title: '恭喜过关'
      })
    } else {
      this.setData({
        n: n
      })
    }


  },
  printTable: function (event) {
    var array = new Array();
    var w = event.currentTarget.dataset.w;
    var h = event.currentTarget.dataset.h;

    for (var index = 0; index < w * h; index++) {
      array[index] = index + 1;
    }
    array.sort(function () {
      return .5 - Math.random();
    });
    this.setData({
      showNandu: false,
      w: w,
      h: h,
      array: array,
      n: 1,
      minute: '0' + 0,   // 分
      second: '0' + 0,   // 秒
      done: false
    })

  }, setInterval: function (a) {
    const that = this
    var second = that.data.second
    var minute = that.data.minute
    var hours = that.data.hours
    return setInterval(function () {  // 设置定时器
      second++
      if (second >= 60) {
        second = 0  //  大于等于60秒归零
        minute++
        if (minute >= 60) {
          minute = 0  //  大于等于60分归零
          hours++
          if (hours < 10) {
            // 少于10补零
            that.setData({
              hours: '0' + hours
            })
          } else {
            that.setData({
              hours: hours
            })
          }
        }
        if (minute < 10) {
          // 少于10补零
          that.setData({
            minute: '0' + minute
          })
        } else {
          that.setData({
            minute: minute
          })
        }
      }
      if (second < 10) {
        // 少于10补零
        that.setData({
          second: '0' + second
        })
      } else {
        that.setData({
          second: second
        })
      }
    }, 1000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
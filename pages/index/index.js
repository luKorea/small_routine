// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    isShow:  true
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.handlegetUserInfo();
  },
  // 获取用户授权信息
  handlegetUserInfo () {
    // 获取用户授权
    wx.getSetting({
      success: (res) => {
        console.log(res);
        if (res.authSetting['scope.userInfo']) {
          this.setData({ isShow: false });
        } else {
          this.setData({ isShow: true });
        }
      }
    })

    // 获取用户登录信息
    wx.getUserInfo({
      withCredentials: true,
      lang: '',
      success: (res) => {
        console.log(this);
        this.setData({
          userInfo: res.userInfo
        });
      },
      fail: (res) => {
        console.log(res);
      },
      complete: (res) => { },
     })
  },
  //  获取用户点击授权信息
  getUserType (data) {
    if (data.detail.rawData) {
      this.handlegetUserInfo();
    }
  },
  // 跳转到详情页
  openDetails () {
    wx.switchTab({
      url:  '/pages/list/list'
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
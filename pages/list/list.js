// pages/list/list.js
let datas = require('../../datas/list-data');
console.log(typeof datas, datas);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      datas: datas.list_data
    });
  },
  //  跳转到详情页
  toDetail(event) {
    let id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/listdetail/listdetail?id=' + id
    })
  },
// 点击轮播图，跳转到对应详情页
  carouselToDetail(event) {
    let id = event.target.dataset.detailid;
    wx.navigateTo({
      url: '/pages/listdetail/listdetail?id=' + id
    })
  }
})
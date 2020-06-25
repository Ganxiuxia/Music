// const db = wx.cloud.database()
const MAX_LIMIT=15
Page({

  /**
   * 页面的初始数据
   */
  data: {
   swiperImgUrls:[
     {

      url: 'cloud://gxx07180907.6778-gxx07180907-1301933495/p1.jpg',

},

{

      url: 'cloud://gxx07180907.6778-gxx07180907-1301933495/p2.jpg',

},

{

      url: 'cloud://gxx07180907.6778-gxx07180907-1301933495/p3.jpg',

}
   ],
   playlist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this._getPlaylist()
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
      //下拉时清空数据 并且更新数据
     this.setData({
           playlist:[]
     })
     this._getPlaylist()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      this._getPlaylist()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  _getPlaylist(){
      wx.showLoading({
            title:'加载中'
      })
      wx.cloud.callFunction({
         name:'music',
         data:{
               start:this.data.playlist.length,
               count:MAX_LIMIT,
               $url:'playlist',

         }
   }).then((res)=>{
         console.log(res)
         this.setData({
          playlist:this.data.playlist.concat(res.result.data)
    })
    wx.stopPullDownRefresh()
    wx.hideLoading()
   })   
  }
})
//获取应用实例
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    connectButton: [

      { className: "", text: "联系客服", bindtap: "" }

    ],
    connectButton1: [

      { className: "", text: "意见反馈", bindtap: "" }

    ],
    post: '',
    //初始化为空
    noteMaxLen: 500, //备注最多500字数
    source: ''
  },

  /**
   * 上传图片
   */
  uploadimg: function () {
    var that = this;
    wx.chooseImage({  //从本地相册选择图片或使用相机拍照
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有

      success: function (res) {
        //console.log(res)
        //前台显示
        that.setData({
          source: res.tempFilePaths
        })

        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          //url: 'http://www.likeyunba.com/uploadimg/img.php',
          filePath: tempFilePaths[0],
          name: 'file',

          success: function (res) {
            //打印
            console.log(res.data)
          }
        })
      }
    })
  },
  //表单提交
  formSubmit: function (e) {
    var that = this;
    var formData = e.detail.value; //获取表单所有input的值  
    wx.request({
      url: 'http://www.likeyunba.com/uploadimg/',
      data: formData,
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log(res.data)
        wx.showToast({
          title: '已提交',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  //字数限制  
  bindWordLimit: function (e) {
    var value = e.detail.value, len = parseInt(value.length);
    if (len > this.data.noteMaxLen) return;

    this.setData({
      currentNoteLen: len //当前字数  
      //limitNoteLen: this.data.noteMaxLen - len //剩余字数  
    });
  }
})

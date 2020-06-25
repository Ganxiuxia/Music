//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    videoPlay: null,
    dataList: [],
  },
  onLoad: function() {
    this.getData();
    wx.hideShareMenu();
  },
  // 点击cover播放，其它视频结束
  videoPlay: function(e) {
    var _index = e.currentTarget.dataset.id
    this.setData({
      _index: _index
    })
    //停止正在播放的视频
    var videoContextPrev = wx.createVideoContext(_index + "")
    videoContextPrev.stop();

    setTimeout(function() {
      //将点击视频进行播放
      var videoContext = wx.createVideoContext(_index + "")
      videoContext.play();
    }, 500)
  },
  // 模拟数据加载
  getData: function() {

    this.setData({
      dataList: [{
        "id": 6193729,
        "title": "LISA | Attention独舞",
        "content": "cloud://gxx07180907.6778-gxx07180907-1301933495/v1.mp4",
        "cover": "http://p1.music.126.net/6H7f5h5PcpkaiPHOzgMhBA==/109951164503092848.jpg?imageView&quality=75"
      }, {
          "id": 6193932,
          "title": "邓紫棋深情献唱《倒数》，副歌引发全场大合唱",
          "content": "cloud://gxx07180907.6778-gxx07180907-1301933495/v2.mp4",
          "cover": "http://p1.music.126.net/KvHWg3OnchUB4FcrG4Gghg==/109951163803258989.jpg?imageView&quality=75"
        }, {
        "id": 6193654,
        "title": "Insomnia&娜塔莎·罗曼诺夫，异彩城市风貌",
        "content": "cloud://gxx07180907.6778-gxx07180907-1301933495/v3.mp4",
        "cover": "http://p1.music.126.net/dB-evTGjT0rz6Wb5d3ajEg==/109951164968389162.jpg?imageView&quality=75"
      }, {
        "id": 6193715,
          "title": "嗨爆英文歌《11minutes》，配上哈莉奎茵画面，燃爆",
          "content": "cloud://gxx07180907.6778-gxx07180907-1301933495/v4.mp4",
          "cover": "http://p1.music.126.net/aJCevjg8xq9Bj8y2Be-p4A==/109951164915337891.jpg"
      },{
        "id": 6193504,
          "title": "Faded",
          "content": "cloud://gxx07180907.6778-gxx07180907-1301933495/v5.mp4",
          "cover": "http://p1.music.126.net/Ty1U14s4cfK3FyIJCyPoyQ==/3264450030324198.jpg?imageView&quality=75"
      }, {
        "id": 6193576,
          "title": "2019LHC音乐节 乃万 《I dont wanna see you anymore》",
          "content": "cloud://gxx07180907.6778-gxx07180907-1301933495/v6.mp4",
          "cover": "http://p1.music.126.net/Lb1Qojjv9CEDQLO5LKb6bA==/109951164204831423.jpg?imageView&quality=75"
      }, {
        "id": 6193803,
          "title": "【IU】《Blueming》官方现场版",
          "content": "cloud://gxx07180907.6778-gxx07180907-1301933495/v7.mp4",
          "cover": "http://p1.music.126.net/4zOYoe2EgTN-s05fHr27ig==/109951164602237657.jpg?imageView&quality=75"
      }, {
        "id": 6193883,
          "title": "鲨影",
          "content": "cloud://gxx07180907.6778-gxx07180907-1301933495/v8.mp4",
          "cover": "http://p1.music.126.net/AJmgUB2sI2HLX4wU9GEdhg==/109951163459848857.jpg?imageView&quality=75"
      }, {
        "id": 6193586,
          "title": "Justin bieber经典热单《boyfriend》发型很撩！",
          "content": "cloud://gxx07180907.6778-gxx07180907-1301933495/v9.mp4",
          "cover": "http://p1.music.126.net/pXg9NDE87upyvd1VRvJwMw==/109951164918763692.jpg?imageView&quality=75"
      }, {
        "id": 6193639,
          "title": "Legends Never Die",
          "content": "cloud://gxx07180907.6778-gxx07180907-1301933495/v10.mp4",
          "cover": "http://p1.music.126.net/p5oSaM_iYuz-bHMEvZZFWA==/109951164429013889.jpg?imageView&quality=75"
      }]
    });

  }
})
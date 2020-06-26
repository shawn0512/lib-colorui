const mini = require('../../mini')

Page({
  data: {
    PageCur: 'basics'
  },
  // onLoad(query) {
  //   // console.log(mini)
  // },
  test() {
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  onShareAppMessage() {
    return {
      title: 'ColorUI-高颜值的小程序UI组件库',
      imageUrl: '/images/share.jpg',
      path: '/pages/index/index'
    }
  },
})
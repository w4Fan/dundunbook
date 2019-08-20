//index.js
//获取应用实例
// const app = getApp()

Page({
  data: {
    workingDay: [1, 2, 3, 4, 5],
    LearningNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  },
  onLoad: function () { },
  bindPickerChange: function (evt) {
    this.setData({
      index: evt.detail.value
    })
  },
})

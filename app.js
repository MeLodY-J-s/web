//app.js
App({
  //onLaunch,onShow: options(path,query,scene,shareTicket,referrerInfo(appId,extraData))
  // 1 当应用第一次启动就会触发的事件
  onLaunch: function(options) {
    // 在应用第一次启动的时候 获取用户的个人信息
    // redirecto是关闭当前页面跳转到另一个页面
    // navigateto是不关闭当前页面跳转到另一个页面
    // wx.redirectTo({
    //   url: 'pages/login/index',
    // });
      
  },
  
  // 2 应用 被用户看到
  onShow: function(options) {
    //  对应用的数据或者页面效果 重置
    

    
  },
  // 3 应用被隐藏了
  onHide: function() {
    // 暂停或清除定时器

  },
  // 4 应用的代码发生了报错的时候 就会触发
  onError: function(msg) {
    // 
  },
  //options(path,query,isEntryPage)
  // 5 应用第一次启动的时候，找不到第一个入口页面 才会触发 
  onPageNotFound: function(options) {
    // console.log("err");
    // 如果页面不存在了 通过js的方式来重新跳转页面 重新跳到第二个首页
    // 但是不能跳到tabbar页面  导航组件类似
  },
  globalData: {
    
  }
});
  
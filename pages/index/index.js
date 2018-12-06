//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   list:[
     {
       id: 'score',
       name:'评分',
       pages:'score'
     },
     {
       id: 'password',
       name: '输入框',
       pages: 'certificateCode'
     },
     {
       id: 'slideDel',
       name: '滑动删除',
       pages: 'slideDel'
     },{
       id: 'logistics',
       name: '物流信息',
       pages: 'logistics'
     }
   ]
   
  },
  onLoad: function () {
    
  },
})

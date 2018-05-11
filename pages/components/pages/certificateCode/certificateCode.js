// pages/components/pages/certificateCode/certificatecode.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num:{
      type: Number,
      observer: function(newVal){
        var arr = new Array(newVal);
        this.setData({list: arr});
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    focusIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    inputHandler:function(e){
      console.log(e);
      var id = e.target.dataset.id;
      if(id<this.properties.num)
      this.setData({ focusIndex : id+1});
    },
    focusHandler: function(e){
      if(e.target.dataset.id !== this.data.focusIndex){
        // return false;
      }
    }
  }
})


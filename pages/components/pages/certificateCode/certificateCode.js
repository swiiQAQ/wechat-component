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
    },
    type:{
      type: String,
      value: 'number'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    focusIndex: 0,
    // 将input的value值数组化
    inputValueArr: '',
    // input的value长度
    inputLength: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // inputHandler:function(e){
    //   console.log(e);
    //   var id = e.target.dataset.id;
    //   if(id<this.properties.num)
    //   this.setData({ focusIndex : id+1});
    // },
    inputHandler: function(e){
      var value = e.detail.value;
      this.setData({inputLength: value.length});
      this.setData({inputValueArr: value.split("")})
    },
    focusHandler: function(e){
      if(e.target.dataset.id !== this.data.focusIndex){
        // return false;
      }
    }
  }
})


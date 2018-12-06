// pages/components/pages/slideDel/slideDel.js
Component({
  options:{
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Object,
      value: {},
      observer: function(newVal, oldVal){
        this.setData({list: newVal});
      }
    },
    delWidth: {
      type: Number,
      value: 200
    },
    delText: String,
    height: {
      type: Number,
      value: 100
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //触摸起始坐标
    startX: '',
    moveDistance: '',
    transitionStyle: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    touchStartHandler: function(e){
      this.setData({transitionStyle: ''});
      this.setData({startX: e.touches[0].clientX});
    },
    touchMoveHandler:function(e){
      var index = e.currentTarget.dataset.index;
      var clientX = e.touches[0].clientX;
      var distance = clientX-this.data.startX;
      var moveDistance = this.data.moveDistance;
      var delWidth = Number(this.properties.delWidth);

      if(distance + delWidth <0){
        distance = -delWidth;
      }else if(distance>0){
        distance = 0;
        this.setData({
          transitionStyle: 'left 0.2s ease-in-out'
        })
      }
      this.setData({
        moveDistance: distance,
        moveIndex: index
      });
    },
    touchEndHandler:function(e){
      var end = e.changedTouches[0].clientX;
      var start = this.data.startX;
      var delWidth = Number(this.properties.delWidth);
      if(start-end>delWidth/2){
        this.setData({ 
          moveDistance : -delWidth,
          transitionStyle: 'left 0.2s ease-in-out'
        });
      }
      else{
        this.setData({ 
          moveDistance : 0,
          transitionStyle: 'left 0.2s ease-in-out'
        });
      }
    },
    deleteHandler: function(e){
      var index = e.target.dataset.index;
      var list = this.data.list;
      list.splice(index,1);
      this.setData({list: list});      
    }
  }
})

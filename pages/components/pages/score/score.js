// pages/components/pages/score/score.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    max: {
      type: Number,
      observer: function(newVal,oldVal){
        var arr = [];
        arr.length = newVal;
        for(var i =0;i<newVal;i++){
          arr[i] = this.data.image.emptyStar
        }
        this.setData({ scoreArr: arr});
      }
    },
    score:{
      type: Number,
      observer: function(newVal,oldVal){
        var scoreArr = this.data.scoreArr;
        scoreArr.splice(0,newVal);
        for(var i =0;i<newVal;i++){
          scoreArr.unshift(this.data.image.fullStar);
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    image:{
      emptyStar: '../../resources/emptyStar.png',
      fullStar: '../../resources/fullStar.png'
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateScore: function(e){
      var score = e.target.dataset.id;
      var scoreArr = this.data.scoreArr;
      scoreArr.length=0;
      for(var i=0;i<score+1;i++){
        scoreArr.unshift(this.data.image.fullStar);
      }
      for(var i=1;i<this.properties.max-score;i++){
        scoreArr.push(this.data.image.emptyStar);
      }
      this.setData({ scoreArr: scoreArr})
    }
  }
})

<template>
  <div :style="{backgroundColor:'#232455'}" class="Warper  bb">
    <div class="header bb">
        <div @click='toIndex' class="Left">
          <img src="/static/img/headerLogo.png" >
        </div>
        <div @click="heighe = heighe == '105.73vw' ? '0' : '105.73vw'" class="Right">
          <img  src="/static/img/muse.png" alt="">

        </div>
        <div :style='{height:heighe}' class="showMuse">
          <ul>
            <li @click='changePage(id)' :class="actives == id ? 'actives' : ''" v-for="(ii,id) in ['首页','技术服务','业务内容','最新资讯','案例展示','BizPay']">{{ii}}</li>
            <li class="call">联系我们</li>
           

          </ul>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
        headerBg:'transparent',
        actives:0,
        heighe:'0'
      }
  },
  methods:{
    toIndex(){
      this.$router.push('/')
    },
    changePage(id){
      if(id == 3){
        this.$router.push('/news')
      }
    }
  },
  mounted(){
      var _this = this
      window.addEventListener("touchmove",function(e){

        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if(scrollTop > 0 ){
          _this.headerBg = '#232455'
        }else{
          _this.headerBg = 'transparent'
        }
      });

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .Warper{
    position: fixed;
    top:0;
    z-index: 10;
    transition:all 1.5s;
    .header{
      width: 100%;
      height: 14.93vw;
      position: relative;
      padding: 0 3.73vw;
      >.Left{
        margin-top: 3.75vw;
        width: 27.86vw;
        height: 7.2vw;
        >img{
          width: 100%;
          height: 100%;
        }
      }
      >.Right{
        margin-top: 4.5vw;
        >img{
          width: 5.3vw;
          height: 3.8vw;
        }
      }
      >.showMuse{
        transition:all 1s;
        width: 100%;
        position: absolute;
        top:14.93vw;
        overflow: hidden;
        height: 105.73vw;
        left:0;
        background:rgba(35,36,85,0.8);
        >ul{
          width: 100%;
          height: 105.73vw;
              transform: translateY(-20px);
          >.actives{
            color: #6DEBD1;
          }
          >.call{
            width:34.66vw;
            height:9.33vw;
            background:linear-gradient(112deg,rgba(48,157,180,1),rgba(109,235,209,1));
            line-height: 9.33vw;
            transform: translateX(93%) translateY(80%);
            border-radius: 5vw;
          }
          >li{
            height: 13.33vw;
            width: 100%;
            text-align: center;
            line-height: 100px;
            color: #fff;
            font-size: 3.73vw;
          }
        }
      }
    }
  }
</style>

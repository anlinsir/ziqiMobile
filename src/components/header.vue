<template>
  <div :style="{backgroundColor:headerBg}" class="Warper  bb">
    <div class="header bb">
        <div @click='toIndex' class="Left">
          <img  class="nones" src="/mob/img/M_headerLogo.png" >
        </div>
        <div @click="heighe = heighe == '105.73vw' ? '0' : '105.73vw';headerBg = heighe == '105.73vw' ? '#232455' : headerColor == true ? '#232455'  : scrollTop ==  0 ?   'transparent' : '#232455'    " class="Right">
          <img class="nones"   src="/mob/img/M_muse.png" alt="">

        </div>
        <div :style='{height:heighe}' class="showMuse">
          <ul>
            <li @click='changePage(id)' :class="actives == id ? 'actives' : ''" v-for="(ii,id) in [{name:'首页',id:'#sec1'},{name:'技术服务',id:'#sec1'},{name:'业务内容',id:'#sec2'},{name:'最新资讯',id:'#sec4'},{name:'案例展示',id:'#sec3'}]">
                {{actives == 3 ? ii.name : ii.name}}
              <!-- <a v-show='actives != 3' @click="heighe = '0';return false;" :href="ii.id" title="">{{ii.name}}</a> -->
            </li>
            <li class="call"  @click='changePage(6)'>
              {{actives == 3 ? '联系我们' : '联系我们'}}
              <!-- <a  v-show='actives != 3' href="#footer" >联系我们</a> -->
            </li>
           

          </ul>
        </div>
        <!-- <span class="">{{scrollTop}}  </span> -->
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
        headerBg:'transparent',
        actives:0,
        heighe:'0',
        scrollTop:0,
        headerColor:false
      }
  },
  methods:{
    toIndex(){
      this.$router.push('/')
    },
    changePage(id){
      this.actives = id
      if(id == 0 || id == 1){
        this.toIndex()
           document.getElementById("sec1").scrollIntoView();
        document.documentElement.scrollTop  = 0
         document.body.scrollTop  = 0
         window.pageYOffset = 0
         this.scrollTop = 0
      }
      if(id == 2){
         this.toIndex()
          document.getElementById("sec2").scrollIntoView();
        document.documentElement.scrollTop  = 590
         document.body.scrollTop  = 590
         window.pageYOffset = 590
         this.scrollTop = 0

      }
      if(id == 3){
        this.$router.push('/news')
      }
       if(id == 4){
        this.toIndex()
         document.getElementById("sec4").scrollIntoView();
        document.documentElement.scrollTop  = 1130
         document.body.scrollTop  = 1130
         window.pageYOffset = 1130
      }
      if(id == 6){
       this.toIndex()
        document.getElementById("footer").scrollIntoView();
        document.documentElement.scrollTop  = 3931
         document.body.scrollTop  = 3931
         window.pageYOffset = 3931
      }

      this.heighe = '0'
    }
  },
  mounted(){

    setTimeout(()=>{
     
    },1000)


      var _this = this
      if(this.$route.name == 'news' ||  this.$route.name == 'newsDetali'){
          this.actives = 3
      }
      if(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mobile') != -1){
        _this.headerBg = '#232455'
        this.headerColor = true
        window.addEventListener("touchmove",function(e){
          _this.heighe = '0'
         });
        return
      }
       


      window.addEventListener("touchmove",function(e){
        _this.heighe = '0'

        _this.scrollTop =  document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
          

            // _this.scrollTop = document.querySelector("body").scrollTop
            console.log(_this.scrollTop)
        if(_this.scrollTop > 0 ){
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
        z-index: 1000;
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
            >a{
              color: #6DEBD1;
            }
          }
          >.call{
            width:34.66vw;
            height:9.33vw;
            background:linear-gradient(112deg,rgba(48,157,180,1),rgba(109,235,209,1));
            line-height: 9.33vw;
            transform: translateX(93%) translateY(80%);
            border-radius: 5vw;
            >a{
              color: #fff;
            }
          }
          >li{
            height: 13.33vw;
            width: 100%;
            text-align: center;
            line-height: 100px;
            color: #fff;
            font-size: 3.73vw;
            >a{
              color: #fff;
            }
          }
        }
      }
    }
  }
</style>

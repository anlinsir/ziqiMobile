<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin:0;
  padding:0;
  font-family:PingFang-SC-Bold ,MicrosoftYaHei, 'Open Sans', sans-serif ,PingFang SC,Helvetica Neue,Hiragino Sans GB,Microsoft Yahei,WenQuanYi Micro Hei,sans-serif;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
html,body{
  width: 100%;
  overflow-x: hidden;
  height: 100%;
  overflow:scroll;
  
}
.color{
  --color: #fff;
    
}
.white{
  color: #fff;
}
.bgc{
  --bgc: -webkit-linear-gradient(112deg,rgba(48,157,180,1),rgba(109,235,209,1)); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(112deg,rgba(48,157,180,1),rgba(109,235,209,1)); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(112deg,rgba(48,157,180,1),rgba(109,235,209,1)); /* Firefox 3.6 - 15 */
    background: linear-gradient(112deg,rgba(48,157,180,1),rgba(109,235,209,1)); /* 标准的语法（必须放在最后） */
}
.center{
  text-align: center;
}
.pointer{
  cursor: pointer;
}
.transition{
      transition: all .5s;
}
.rb{
  border: 1px solid red;
}
.lh{
  display: inline-block;
}
.bb{
  box-sizing: border-box;
}
.flex{
    display: flex;
  
}
.flexA{
    display: flex;
    justify-content: space-around;
}
.flexB{
  display: flex;
  justify-content: space-between;
}
.fz12{
  font-size: 1.6vw;
}
.fz14{
  font-size: 1.86vw;
}
.fz16{
  font-size: 2.13vw;
}
.fz18{
  font-size: 2.4vw;
}
.fz20{
  font-size: 2.66vw;
}
.fwb{
  font-weight: bold;
}
.fw400{
  font-weight: 400;
}
.img{
  background-image: url('/mob/img/M_server.png');
}
.box{
  border-radius: 50%;
}


ul li{
  list-style: none;
  list-style-position: inside;
}
a{
  color: #000;
  text-decoration: none;
}
input , button , textarea{
  outline: none;
  background-color: #fff;
  border:none;
  appearance: none;
}



.Warper{
  width: 100%;
  min-height: 20px;
  
  >.warp{
    width: 1100px;
    min-height: 20px;
    margin: auto;

  }
}

.Topwarper{
  width: 100%;
}
.mw{
  width: 1100px;
  margin: auto;
}

.Bigtitle{
  font-size: 48px;

}
.positionCenter{
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.shadowText{
  position: relative;
  text-align: center;
  margin-top:5.73vw; 
  color: #fff;
  >.back{
    position: absolute;
    z-index: 1;
    top:-3vw;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 8vw;
    color: rgba(255,255,255,0.1);
  }
  >.forword{
    font-size: 5.3vw;
  }
}


.Left{
  float: left;
}
.Right{
  float: right;
}
</style>

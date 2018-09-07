<template>
  <div class="Warper">
   	<Header />

   	<div v-for="(ii,id) in zhezhao" @click.self='zhezhaoShow = false;redW = false;bigImg = null ;zhezhao = []' v-show='zhezhaoShow' :style="{width:'100%',height:'100%'}" class="zhezhao">
   		<div class="indezs">
   			<div class="tops">
   				<dl class="flex">
   					<dt><img src="/mob/img/M_indexlogo.png" alt=""></dt>
   					<dd>
   						<p style='font-size:4.5vw;color:#000;' class="fwb">{{ii.name ? ii.name : '' }} </p>
   						<p style="font-size:4vw;color:#626262;">{{ii.tiny_info}}</p>
   					</dd>
   				</dl>
   			</div>

   			<div class="bigImg">
   				<img :src="bigImg ?  bigImg : ii.images[0]" >
   			</div>

   			<div class="smaimgs">
   				<img @click='bigImg = i' v-for="(i,d) in ii.images" :src="i" alt="">
   			</div>

   			<div class="btngro white bb flexB">
   				<button @click=" redW = !redW;" style="color:#fff;z-index: 2;">APP下载</button>
   				<button :style="{width:redW ? '55.466vw' : '42%',left:redW ? '30.2vw' : '4.2vw'}" class="reds">
   					<span @click='and(ii.android_app)' class="and lh">
   						<img src="/mob/img/M_andriod.png">
   					</span>
   					<span @click='ios(ii.ios_app)' class="ios lh">
   						<img src="/mob/img/M_ios.png">
   					</span>
   					<span @click="redW = false" class="close lh">
   						<img src="/mob/img/M_CLOSEr.png">
   					</span>
   				</button>
   				<button v-show='!redW' style="border:1px solid rgba(229,229,229,1); color:rgba(136,135,135,1); background:rgba(255,255,255,1);box-shadow:none;z-index:0;">
   					<a :href="ii.website" target='_blank' >官网链接</a>
   				</button>
   			</div>
   		</div>
   	</div>

   	<div class="TopBack Warper bb ">
   		<div class="topback">
   			<div class="centerText">
   				<div class="back"></div>
   				<div class="forword center">
   					<p class="white fwb">创新的区块链技术解决方案与 <br>一站式应用落地孵化</p>
   					<p class="bule fz20">您指的托付的区块链孵化器</p>
   				</div>
   			</div>
   		</div>
   	</div>


   	<div id='sec1' class="section1 bb Warper">
   		<div class="sec1">
   			<carousel-3d style="width: 100vw;height: 102.53vw;text-align:center;">
			    <slide style="width: 75.73vw;
							height: 102.53vw;
							background-color: rgba(45,47,93,0.8);
							left: 10vw;
							border:none;
							border-radius:1.33vw;
							    " v-for="(slide, i) in silderList" :index="i" :key="i">
			        <div class="shadowText" style="position: relative;text-align: center;margin-top:5.73vw; ">
   						<div class="back" style="position: absolute;z-index: 1;top:-3vw;left: 0;right: 0;margin: auto;font-size: 8vw;color: rgba(255,255,255,0.1);">{{slide.back}}</div>
   						<div class="forword fwb" style="font-size: 5.3vw;">{{slide.back}}</div>
   					</div>
   					<p class="exp white center" style="margin-top: 3vw;	font-size: 3.73vw;margin-bottom: 8vw;">{{slide.exm}}</p>
   					<div class="img" style="height: 39.93vw;" :style="{backgroundPosition: slide.imgp}"></div>
   					<div class="content centr" style="padding: 0 8vw;color: #fff;">
   						<p class="title fwb" style="font-size: 4.5vw;margin-bottom: 4vw;">{{slide.title}}</p>
   						<p class="diri" style="font-size: 3.73vw;">{{slide.dir}}</p>
   					</div>
			    </slide>
			</carousel-3d>
   			<!-- <ul class="">

   				<li>
   					<div class="shadowText">
   						<div class="back">服务技术</div>
   						<div class="forword fwb">服务技术</div>
   					</div>
   					<p class="exp white center">时代前沿的区块链技术服务内容</p>
   					<div class="img" style="height: 39.93vw;background-position: -23px 2644px;"></div>
   					<div class="content center">
   						<p class="title fwb">根链平台及以太坊智能合约</p>
   						<p class="diri">实施智能合约以让合约在根链平台及以太坊自动执行。我们可以从定义开始为您撰写智能合约代码。</p>
   					</div>
   				</li>
   				

   			</ul> -->
   			 <!-- <swiper class='swiper' :options="swiperOption">
		      <swiper-slide v-for="(item, index) in ['根链平台及以太坊智能合约','根链平台及以太坊智能合约s','根链平台及以太坊智能合约6']" :key="index">
		      	<p>{{item}}</p>
		      </swiper-slide>
		    </swiper> -->
		</div>
	</div>
	<!-- sec1 -->
	<div id='sec2' class="section2 bb Warper">
   		<div class="sec2 ">
   			<div class="shadowText">
				<div class="back">业务内容</div>
				<div class="forword fwb">业务内容</div>
			</div>
			<p class="exp  center">时代前沿的区块链技术服务内容</p>
   			<div class="parts">
   				<dl class="flex" v-for="(ii,id) in [
   					{
   						color:'#4466D6',
   						num:'01',
   						tit:'区块链项目总咨询与策划',
   						dir:'项目总体规划、策略制定、法律问题、令牌设计和发行。'
   					},
   					{
   						color:'#4EC8B8',
   						num:'02',
   						tit:'创新的区块链技术支持',
   						dir:'令牌、钱包、智能合约、交易所等区块链系统的技术实现。'
   					},
   					{
   						color:'#6496E3',
   						num:'03',
   						tit:'区块链项目总咨询与策划',
   						dir:'网站及宣传页制作、白皮书撰写、交易所上线及令牌推广。'
   					},
   					{
   						color:'#3D3075',
   						num:'04',
   						tit:'创新的区块链技术支持',
   						dir:'全球A级项目投资策略及渠道提供'
   					}
   				]">
   					<dt>
   						<div :style="{backgroundColor:ii.color}" class="Left"></div>
   						<div class="Right">
   							<span>{{ii.num}}</span>
   						</div>
   					</dt>
   					<dd>
   						<p class="tit">{{ii.tit}}</p>
   						<p class="dir">{{ii.dir}}</p>
   					</dd>
   				</dl>
   			</div>
		</div>
	</div>
	<!-- sec2 -->
	<div id='sec3' class="section3 bb  Warper">
		<div class="sec3  ">
   			<div class="shadowText">
				<div class="back">案例展示</div>
				<div class="forword fwb">案例展示</div>
			</div>
			<div class="switchWarp">
				<div class="swiper-container" style="padding-right:5vw;">
				    <div class="swiper-wrapper">
				     <div :style="{backgroundImage:`url(${ii.images[0]})`,}"  style="    background-size: 100% 100%;width:48vw;" v-for="(ii,id) in anliList" @click='some = id;zhezhaoShow = true;zhezhao = [anliList[some]];bigImg = anliList[some].images[0]' class="switch swiper-slide">
  							<div class="hover">
  								<div class="bottom white">
  									<p class="title">{{ii.name ? ii.name : ''}}</p>
  									<p class="dirc">{{ii.tiny_info}}</p>
  									<img src="/mob/img/M_button.png" >
  								</div>
							</div>

                <!-- <div   v-for="(ii,id) in anliList.length " class="switch swiper-slide">
                  <div class="hover">
                    <div class="bottom white">
                      <p class="title">dsds</p>
                      <p class="dirc">dsds</p>
                      <img src="/mob/img/M_button.png" >
                    </div>
                </div> -->
						</div>
				    </div>
				    <!-- 如果需要分页器 -->
				    <div style="width: 90vw;" class="swiper-pagination"></div>
				    
				   
				</div>

				
			</div>
		</div>
	</div>
	<!-- sec3 -->

	<div id='sec4' class="section4 bb   Warper">
		<div class="sec4  ">
			<div class="shadowText">
				<div class="back">最新资讯</div>
				<div class="forword fwb">最新资讯</div>
			</div>
			<ul>

				<li v-for="(ii,id) in newList" class="bb white">
					<p class="title fwb">{{ii.title}}</p>
					<p class="content">
						<span v-html="ii.tiny_content"></span><br>
					</p>
					<p @click='todetali(ii.id)' class="seeMore">阅读全文 ></p>
				</li>
				
			</ul>
			<button @click='toNews'>更多资讯</button>
		</div>	
	</div>
	<!-- sec4 -->

	<div id='sec5' class="section5 bb   Warper">
		<div class="sec5  ">
			<div class="shadowText">
				<div class="back">公司信息</div>
				<div class="forword fwb">公司信息</div>
			</div>

			<p class="adress bb">
				
				<span><strong>成都子奇科技有限公司</strong>2014年成立于中国成都，注册资金500万元，2017年挂牌天府股权交易中心，股票代码：811290。</span>
				<span>我们是狂热的链圈技术从业者、是创新的区块链技术解决方案商和商业应用落地孵化器，为您提供区块链一站式项目孵化、开发、上线、推广、发行、投资等服务。</span>
			</p>

			<ul class="flex">
				<li @click='active = id ' :class="active == id ? 'active' : '' " v-for="(ii,id) in ['中国','瑞典','日本']">{{ii}}</li>
			</ul>

			<div class="detali" v-show='active == 0'>
				<p style="font-size:4vw;margin-bottom:11.2vw;"><strong>成都子奇科技有限公司 总部</strong></p>
				<p style="font-size:4vw;color:rgba(77,77,77,1);margin-bottom:11.2vw;">地址: 四川成都市高新区天府大道天华路天府软件园B区3栋4F-V06</p>
				<p style="font-size:4vw;color:rgba(77,77,77,1);margin-bottom:4vw;">电话: 400-0288-767；18508233623</p>
				<p style="font-size:4vw;color:rgba(77,77,77,1);margin-bottom:4vw;">Q Q: 1834633402</p>
				<p style="font-size:4vw;color:rgba(77,77,77,1);margin-bottom:4vw;">邮箱: shxiao918@gmail.com</p>
			</div>

      <div class="detali" v-show='active == 1'>
        <p style="font-size:4vw;margin-bottom:11.2vw;"><strong>成都子奇科技有限公司瑞典办事处</strong></p>
        <p style="font-size:4vw;color:rgba(77,77,77,1);margin-bottom:11.2vw;">地址: Emmylundsvägen 1, 17172, Stockholm, Sweden</p>
        <p style="font-size:4vw;color:rgba(77,77,77,1);margin-bottom:4vw;">电话: 400-0288-767</p>
        <p style="font-size:4vw;color:rgba(77,77,77,1);margin-bottom:4vw;">手机: +0046-0760706468</p>
        <p style="font-size:4vw;color:rgba(77,77,77,1);margin-bottom:4vw;">邮箱: sikewan1993@gmail.com</p>
      </div>

      <div class="detali" v-show='active == 2'>
        <p style="font-size:4vw;margin-bottom:11.2vw;"><strong>成都子奇科技有限公司日本办事处</strong></p>
        <p style="font-size:4vw;color:rgba(77,77,77,1);margin-bottom:11.2vw;">地址: 〒東京都豊島区池袋4-32-10ミニービル</p>
        <p style="font-size:4vw;color:rgba(77,77,77,1);margin-bottom:4vw;">电话: 400-0288-767</p>
        <p style="font-size:4vw;color:rgba(77,77,77,1);margin-bottom:4vw;">手机: +080-45788999</p>
        <p style="font-size:4vw;color:rgba(77,77,77,1);margin-bottom:4vw;">邮箱: enbobobo@gmail.com</p>
      </div>



			<div class="map">
				<div  v-show='active == 0'  id="container" style="width:100%; height:100%"></div>
        <div  v-show='active == 1'  style="width:100%; height:100%">
          <img style="width:100%; height:100%" src="/mob/img/M_google_swe.png" alt="">
        </div>
        <div  v-show='active == 2'  style="width:100%; height:100%">
          <img style="width:100%; height:100%" src="/mob/img/M_google_jp.png" alt="">
        </div>

			</div>

	    </div>
	</div>
	<!-- sec5 -->
	<div id='footer' class="section6 bb   Warper">
		<div class="sec6  ">
			<div class="shadowText">
				<div class="back">业务咨询</div>
				<div class="forword fwb">业务咨询</div>
			</div>
			<p class="exp center">填写以下内容发送给我们我们将在<br>24小时内联系您</p>
			<form>
				<input type="text"  v-model="company_name"   placeholder='公司名称'>
				<input type="text"  v-model="name"   placeholder="您的姓名(必填)">
				<input type="text"  v-model="tel"  placeholder="联系电话(必填)">
				<input type="text"  v-model="email"  placeholder="微信号(必填)">
				<input type="text"  v-model="title"  placeholder="标题">
				<textarea placeholder="咨询内容……" v-model="content" ></textarea>
				<button @click.prevent='sed'>发 送</button>
			</form>
		</div>
	</div>
	<!-- sec5 -->

	<footer id='' class="section7 bb   Warper">
		<div class="sec7">
			<div class="shadowText">
				<div class="back">合作伙伴</div>
				<div class="forword fwb">合作伙伴</div>
			</div>
			<p class="exp center">优质的合作资源</p>
			<div class="imgs">
				<div class="top center">
					<img src="/mob/img/M_footerLogo.png"><br>
					<img src="/mob/img/M_CLOSEr.png" class="close">
				</div>

				<ul class="others flexB">
					<li :style="{backgroundPosition:ii.imp}" v-for="(ii,id) in [{imp:'0.8vw 0px',href:'https://www.okcoin.com/'},{imp:'-38.4vw 0.4vw',href:'https://soduoduo.com'},{imp:' 0.4vw -15.533vw',href:'https://www.8btc.com/'},{imp:'-39.133vw -15.133vw',href:'https://www.aliyun.com'},{imp:'1vw -32.53vw',href:'https://www.jinse.com/'},{imp:'-39.4vw -33vw',href:'https://www.hbg.com/zh-cn/'},{imp:'-0vw -51vw',href:'https://aws.amazon.com/cn/?nc2=h_lg'},{imp:'-40vw -52vw',href:'http://www.linkedin.com/company/kybernetwork/'},]">
              <a :href="ii.href" target='_blank' :title="ii.href"></a>     
          </li>
				</ul>
			</div>
			<p class="over white center"> © 2014 成都子奇科技有限公司 蜀ICP备13026114号-7</p>
		</div>
	</footer>

  </div>
</template>

<script>

	import Header from '../components/header'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import { lazyAMapApiLoaderInstance } from 'vue-amap';
	import { Carousel3d, Slide } from 'vue-carousel-3d';
	import axios from 'axios'
export default {
  data () {
    return {
      active:0,
      swiperOption: {
			loopFillGroupWithBlank: true,//在loop模式下，为group填充空白slide  
        },
        fullseroll:[],
        redW:false,
        zhezhaoShow:false,
        silderList:[
        	{
        		back:'服务技术',
        		forword:'服务技术',
        		exm:'时代前沿的区块链技术服务内容',
        		imgp:'-23px 2644px',
        		title:'根链平台及以太坊智能合约',
        		dir:'实施智能合约以让合约在根链平台及以太坊自动执行。我们可以从定义开始为您撰写智能合约代码'
        	},
        	{
        		back:'服务技术',
        		forword:'服务技术',
        		exm:'时代前沿的区块链技术服务内容',
        		imgp:'-416px 2644px',
        		title:'区块链技术',
        		dir:'使用基于密码的技术来储存不可变数据。我们可以帮助您选择适合此技术的程序。'
        	},
        	{
        		back:'服务技术',
        		forword:'服务技术',
        		exm:'时代前沿的区块链技术服务内容',
        		imgp:'-32px 2171px',
        		title:'智能合约审计',
        		dir:'在您将智能合同部署到区块链时，安全缺陷、不当行为和效率低下会带来高昂的代价。我们帮助公司写出可靠的智能合约代码。'
        	},
        	{
        		back:'服务技术',
        		forword:'服务技术',
        		exm:'时代前沿的区块链技术服务内容',
        		imgp:'-427px 2171px',
        		title:'超级账本',
        		dir:'金融、保健、零售、制造等区块链发展。'
        	},
        	{
        		back:'服务技术',
        		forword:'服务技术',
        		exm:'时代前沿的区块链技术服务内容',
        		imgp:'-37px 1693px',
        		title:'私人区块链',
        		dir:'在您的机构或公司实施私人区块链。'
        	},
        	{
        		back:'服务技术',
        		forword:'服务技术',
        		exm:'时代前沿的区块链技术服务内容',
        		imgp:'-418px 1693px',
        		title:'货币兑换',
        		dir:'开发安全可靠的加密货币兑换。'
        	},
        	{
        		back:'服务技术',
        		forword:'服务技术',
        		exm:'时代前沿的区块链技术服务内容',
        		imgp:'-32px 1210px',
        		title:'付款网关',
        		dir:'接受加密货币并即时将之转换为您的优选货币或将之存至您的钱包。'
        	},
        	{
        		back:'服务技术',
        		forword:'服务技术',
        		exm:'时代前沿的区块链技术服务内容',
        		imgp:'-419px 1207px',
        		title:'钱包',
        		dir:'保护传统钱包和多重签名钱包以确保安全。'
        	},
        	{
        		back:'服务技术',
        		forword:'服务技术',
        		exm:'时代前沿的区块链技术服务内容',
        		imgp:'-27px 749px',
        		title:'履约保证',
        		dir:'在满足特定条件时释放加密货币付款。'
        	},
        	{
        		back:'服务技术',
        		forword:'服务技术',
        		exm:'时代前沿的区块链技术服务内容',
        		imgp:'-408px 735px',
        		title:'众筹',
        		dir:'允许个人和组织接受全世界对其项目的投入或投资。'
        	},
        	{
        		back:'服务技术',
        		forword:'服务技术',
        		exm:'时代前沿的区块链技术服务内容',
        		imgp:'-35px 256px',
        		title:'训练',
        		dir:'教您的团队理解区块链技术并为接下来的动作作准备。'
        	},
        	{
        		back:'服务技术',
        		forword:'服务技术',
        		exm:'时代前沿的区块链技术服务内容',
        		imgp:'-415px 247px',
        		title:'匿名化',
        		dir:'使用额外匿名化措施，如混币，以保障隐私。'
        	},

        ],
        company_name:'',
		name:'',
		tel:'',
		email:'',
		title:'',
		content:'',
		anliList:[],
		some:0,
		bigImg:'',
    zhezhao:[],
    newList:[]
    }
  },
  computed:{
   
  },
   methods:{
    todetali(d){
      this.$router.push(`/newsDetali/${d}`)
    },
    toNews(){
      this.$router.push('/news')
    },
   		and(href){
   			window.open(href)
   		},
   		ios(href){
   			window.open(href)
   		},
   		sed(){
   			if(!this.name || !this.tel || !this.email){
   				alert('请保证必填项已完成')
   				return
   			}	
   			var pro = {
   				company_name:this.company_name,
   				name:this.name,
   				tel:this.tel,
   				email:this.email,
   				title:this.title,
   				content:this.content,

   			}
   			axios.post(`${href}/api/msg`,pro)
   				.then(r=>{
   					alert(r.data.msg)
   					this.company_name = ''
					this.name = ''
					this.tel = ''
					this.email = ''
					this.title = ''
					this.content = ''
   				})

   		}
   },
  components:{
  	Header,
  	swiper,
  	swiperSlide,
  	Carousel3d,
    Slide
  },
  mounted(){


    axios.get(`${href}/api/post?&page=1&limit=2`)
        .then(r=>{
          this.newList = r.data.list
        })

  		axios.get(`${href}/api/project?&page=1&limit=10`)
  			.then(r=>{
  				this.anliList = r.data.list
          this.zhezhao = [this.anliList[this.some]]
  			})


  		 setTimeout(()=>{
          var mySwiper = new Swiper ('.swiper-container', {
          // direction: 'vertical',
          // 如果需要分页器
            width:360,
            spaceBetween : 30,
             pagination: {
                el: '.swiper-pagination',
                clickable :true,
                renderBullet: function (index, className) {
                    return '<span style=transform: translateX(-26vw);" class="' + className + ' white  "></span>';
                  },

            },
          
        
        }) 
        },2000)   



  		setTimeout(()=>{
  			this.fullseroll[0] = document.documentElement.clientWidth
  			this.fullseroll[1] = document.documentElement.clientHeight
  		},1000)



  		lazyAMapApiLoaderInstance.load().then(() => {
	        this.map = new AMap.Map('container', {
	        	center: new AMap.LngLat(104.0701200000,30.5445100000),
	        	zoom:16,
	        });
	       	var marker = new AMap.Marker({
			    position:[104.0701200000,30.5445100000],
			    map: this.map,
			    bubble:true,
			    animation:"AMAP_ANIMATION_DROP",
			    title:'成都子奇科技有限公司'
			    //draggable:true,
			});
			var msg_label = "成都子奇科技有限公司";
			marker.setLabel({
			    offset: new AMap.Pixel(-45,-30), //显示位置
			    content: msg_label //显示内容
			});
	      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.swiper-container {
    width: 600px;
    height: 300px;
}  
	.Warper{
		.zhezhao{
			position: fixed;
			top:0;
			background-color: rgba(0,0,0,0.4);
			z-index: 9;
			overflow: auto;
			>.indezs{
				width: 90%;
				margin: auto;
				margin-top: 20vw;
				border-radius: 1.73vw;
				background-color: #fff;
				height: 141.866vw;
				>.tops{
					width: 100%;
					height: 21.466vw;
					>dl{
						padding: 4.4vw 0 0 4.4vw;
						>dt{
							margin-right: 4vw;
							width: 10vw;
							height: 10vw;
							>img{
								width: 10vw;
								height: 10vw;
							}
						}
					}
				}
				>.bigImg{
					width: 100%;
					height: 68.233vw;
					>img{
						width: 100%;
						height: 100%;
					}
				}
				>.smaimgs{
					margin-top: 8vw;
					width: 100%;
					overflow: hidden;
					height: 14.666vw;
					padding-left: 0vw;
					margin-bottom: 9.46vw;
					>img{
						float: left;
						width: 21.333vw;
						height: 14.666vw;
						margin-left: 3vw;

					}

				}
				>.btngro{

					width: 100%;
					padding: 0 4vw;
					position: relative;
					>button{
						transition:all 2s;
						width:47%;
						font-size: 3.666vw;
						height:11.46vw;
						background:linear-gradient(112deg,rgba(48,157,180,1),rgba(109,235,209,1));
						border-radius:5.73vw;
						box-shadow:0px 0.933vw 2.8vw 0px rgba(117,219,199,0.27);	
						position: relative;
						
					}
					>.reds{
						width:55.466vw;
						background: red ;	
						position: absolute;
						transition:all 1s;
						z-index: 1;
						left: 4.2vw;
						box-shadow: none;
						background:rgba(255,255,255,1);
						border:1px solid rgba(229,229,229,1);
						>.and{
							width: 6vw;
							height: 7.5vw;
							margin-right: 5vw;
							>img{
								width: 100%;
								height: 100%;

							}
						}
						>.ios{
							width: 6vw;
							height: 7.5vw;
							>img{
								width: 100%;
								height: 100%;
							}
						}
						>.close{
							width: 8.5vw;
							height: 8.5vw;
							right: 3vw;
							top:1vw;
							border-radius: 50%;
							border:1px solid rgba(229,229,229,1);
							position: absolute;
							>img{
								border-radius: 50%;
								width: 73%;
								transform: translateY(1.2vw) translateX(0.2vw);
								height: 70%;
							}
						}
					}
				}
			}
		}
		.TopBack{
			height: 96.36vw;
			background-image: url('/mob/img/M_indexbg.png'),-webkit-linear-gradient(left, #1e224f,#3e3076);
			background-repeat: no-repeat;
			background-position: center center;
			background-size: 100% 100%;
			>.topback{
				overflow: hidden;
				>.centerText{
					margin-top: 24vw;
					>.forword{

						>.white{
							font-size: 5vw;
							margin-bottom: 3vw;
						}
						>.bule{
							color:#84A6F5;
						}
					}
				}
			}	
		}
		.section1{
			height: 68.4vw;
			position: relative;
				.sec1{
					width: 100%;
					position: absolute;
					top:-42vw;
					overflow: hidden;
					
					>ul{
						width: 1000%;
						padding-left: 12.66vw;
						overflow: hidden;
						>li{
							display: inline-block;
							margin-right: 3.06vw;
							width: 75.73vw;
							height: 102.53vw;
							background-color: rgba(45,47,93,0.8);
							border-radius:1.33vw;
							>.shadowText{
								position: relative;
								text-align: center;
								margin-top:5.73vw; 
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
							>.exp{
								margin-top: 3vw;
								font-size: 3.73vw;
								margin-bottom: 8vw;
							}
							>.content{
								padding: 0 8vw;
								color: #fff;
								>.title{
									font-size: 4.5vw;
									margin-bottom: 4vw;
								}
								>.diri{
									font-size: 3.73vw;
								}
							}	
						}
					}
				}
		}
		.section2{
			margin-top: 16.8vw;
			height: 109.86vw;
			>.sec2{
				height: 109.86vw;
				>.shadowText{
					position: relative;
					text-align: center;
					margin-top:5.73vw; 
					color: #000;
					>.back{
						position: absolute;
						z-index: 0;
						top:-3vw;
						left: 0;
						right: 0;
						margin: auto;
						font-size: 8vw;
						color:rgba(228,228,242,1);
					}
					>.forword{
						position: relative;
						z-index: 2;
						font-size: 5.3vw;
						color:rgba(51,51,51,1);
					}
				}
				>.exp{
					margin-top:1vw;
					font-size: 3.73vw;
					margin-bottom: 14.53vw;
					color:rgba(147,147,147,1);
				}
				>.parts{
					padding: 0 6.8vw 0 3.73vw;
					>dl{
						>dt{
							width: 9.46vw;
							margin-right: 4.93vw;
							>.Left{
								width: 1vw;
								height: 25.6vw;
								background:rgba(68,102,214,1);
							}
							>.Right{
								>span{
								    display: inline-block;
									transform: rotate(-90deg);
								}
							}
						}
						>dd{
							>.tit{
								font-weight:bold;
								color:rgba(51,51,51,1);
								font-size: 4vw;
								margin-bottom: 4vw;
							}
							>.dir{
								color:rgba(110,110,110,1);
								font-size: 3.2vw;
							}
						}
					}
				}
			}
		}
		.section3{
			margin-top:40vw;
			height: 115.73vw;
			>.sec3{
				height: 115.73vw;
				>.shadowText{
					position: relative;
					text-align: center;
					margin-top:16vw; 
					margin-bottom: 10.66vw;
					color: #000;
					>.back{
						position: absolute;
						z-index: 0;
						top:-3vw;
						left: 0;
						right: 0;
						margin: auto;
						font-size: 8vw;
						color:rgba(228,228,242,1);
					}
					>.forword{
						position: relative;
						z-index: 2;
						font-size: 5.3vw;
						color:rgba(51,51,51,1);
					}
				}
				.switchWarp{
					padding: 0 4vw;
					overflow: hidden;
					.switch{
						position: relative;
						    // width: 96vw;
   								 margin-right: 30px;
						width: 91.86vw;
						height: 59.33vw;
						border-radius:1.73vw;
						box-shadow:0px 1vw 5.73vw 0px rgba(45,47,93,0.1);
						background-image: url('/mob/img/M_displayLi.png');
						background-repeat: no-repeat;
						background-position: center;
						background-size: 130%;
						>.hover{
							position: absolute;
							width: 100%;
							height: 59.33vw;
							border-radius:1.73vw;	
							background:linear-gradient(0deg,rgba(47,41,99,1),rgba(24,24,24,0));
							>.bottom{
								width: 100%;
								position: absolute;
								bottom: 6.4vw;
								padding-left: 5.06vw;
								>.title{
									font-size: 4vw;
									margin-bottom: 2vw;
								}
								>.dirc{
									font-size: 3.2vw;
								}
								>img{
									width: 	100%;
									height: 	100%;
									position: absolute;
									right: 5.46vw;
									top:0;
									width: 20vw;
									height: 20vw;
								
								}
							}
						}
					}
				}
				

			}
		}
		.section4{
			height: 297.6vw;
			background-image: url('/mob/img/M_other.png');
			background-size: 100% 100%;
			>.sec4{
				height: 297.6vw;
				text-align: center;
				overflow: hidden;
				>.shadowText{
					position: relative;
					text-align: center;
					margin-top:16vw; 
					margin-bottom: 10.66vw;
					color: #000;
					margin-bottom: 10.93vw;
					>.back{
						position: absolute;
						z-index: 0;
						top:-3vw;
						left: 0;
						right: 0;
						margin: auto;
						font-size: 8vw;
						color:rgba(73,76,137,1);
					}
					>.forword{
						position: relative;
						z-index: 2;
						font-size: 5.3vw;
						color: #fff;
					}
				}
				>ul{
					text-align: left;
					>li{
						width: 92.53vw;
						height: 109.33vw;
						margin: auto;
						background-color: #1F1F4B;
						border-radius:1.73vw;
						padding: 11.86vw 8.73vw 0 6.13vw ;
						margin-bottom: 6.8vw;
						>.title{
							font-size: 4vw;
							margin-bottom: 8.6vw;
						}
						>.content{
							color: #CED1E4;
							font-size: 3.73vw;
							line-height: 7vw;
							>span{
								display: inline-block;
								margin-bottom: 6.73vw;
							}

						}
						>.seeMore{
							color:rgba(206,209,228,1);
							font-size: 3.73vw;
							&:active{
								text-decoration: underline;
							}
						}
					}
				}
				>button{
					width:51.86vw;
					height:11.46vw;
					margin: auto;
					font-size: 4vw;
					transform: translateY(7vw);
					color: #fff;
					background:linear-gradient(112deg,rgba(48,157,180,1),rgba(109,235,209,1));
					border-radius:43px;
					box-shadow:0px 1vw 2.3vw 0px rgba(117,219,199,0.27);
					&:active{
						background:linear-gradient(112deg,rgba(48,157,180,0.8),rgba(109,235,209,0.8));
					}
				}
			}
		}
		.section5{
			height: 302.66vw;
			>.sec5{
				height: 302.66vw;

				>.shadowText{
					position: relative;
					text-align: center;
					margin-top:16vw; 
					margin-bottom: 24.53vw;
					color: #000;
					>.back{
						position: absolute;
						z-index: 0;
						top:-3vw;
						left: 0;
						right: 0;
						margin: auto;
						font-size: 8vw;
						color:rgba(228,228,242,1);
					}
					>.forword{
						position: relative;
						z-index: 2;
						font-size: 5.3vw;
						color:rgba(51,51,51,1);
					}
				}
				>.adress{
					font-size: 4vw;
					padding: 0 7vw;
					strong{
						color: #3D3D3D;
						font-weight: bold;
					}
					>span{
						color: #575757;
						font-size: 4vw;
						display: inline-block;
						margin-bottom:5vw; 
						line-height: 8vw;

					}
				}
				>ul{
					padding: 0 6.53vw 0 5.6vw;
					margin-top: 14vw;
					margin-bottom: 9.2vw;
					>.active{
						border-bottom: 0.53vw solid rgba(84,203,197,1);
					}
					>li{
						width: 33.33%;
						text-align: center;
						height: 9.86vw;
						line-height: 9.86vw;
						font-size: 4vw;
						border-bottom: 0.53vw solid rgba(207,234,233,1);
					}
				}
				>.detali{
					padding-left: 5.73vw;
					padding-right: 8.13vw;
					margin-bottom: 10.5vw;
				}
				>.map{
					width: 91.86vw;
					height: 65.6vw;
					margin: auto;
				}
			}
		}
		.section6{
			height: 204.8vw;
			>.sec6{
				height: 204.8vw;
				>.shadowText{
					position: relative;
					text-align: center;
					margin-top:16vw; 
					color: #000;
					>.back{
						position: absolute;
						z-index: 0;
						top:-3vw;
						left: 0;
						right: 0;
						margin: auto;
						font-size: 8vw;
						color:rgba(228,228,242,1);
					}
					>.forword{
						position: relative;
						z-index: 2;
						font-size: 5.3vw;
						color:rgba(51,51,51,1);
					}
				}
				>.exp{
					margin-top:1vw;
					font-size: 3.73vw;
					margin-bottom: 13.06vw;
					color:rgba(147,147,147,1);
				}
				>form{
					text-align: center;
					padding: 0 3.73vw;
					>button {
						margin-top: 6.53vw;
						width:51.86vw;
						height:11.46vw;
						background:linear-gradient(112deg,rgba(48,157,180,1),rgba(109,235,209,1));
						border-radius:43px;
						box-shadow:0px 7px 21px 0px rgba(117,219,199,0.27);	
						font-size: 4vw;
						color: #fff;

					}
					>textarea{
						width: 100%;
						box-sizing:border-box;
						height: 53.33vw;
						border:1px solid rgba(238,238,238,1);
						border-radius:1.73vw;
						font-size: 3.73vw;
						color: #181818;
						transition:all .5s;
						padding: 2vw 0 0 4vw; 
						&:focus{
							box-shadow:0.8vw 0.85vw 2.8vw 0px rgba(132,234,213,0.19);	
							border:1px solid rgba(84,203,197,1);
						}
						&::placeholder{
							color:rgba(181,181,181,1);
						}
					}
					>input{
						box-sizing:border-box;
						width:100%;
						height:12vw;
						border:1px solid rgba(238,238,238,1);
						border-radius:1.73vw;
						padding-left: 4vw;
						transition:all .5s;
						margin-bottom: 3.73vw;
						font-size: 3.73vw;
						color: #181818;
						&:focus{
							box-shadow:0.8vw 0.85vw 2.8vw 0px rgba(132,234,213,0.19);	
							border:1px solid rgba(84,203,197,1);
						}
						&::placeholder{
							color:rgba(181,181,181,1);
						}
					}
				}
			}
		}
		.section7{
			height: 174.66vw;
			background-color: #0D0F26;
			>.sec7{
				height: 174.66vw;
				overflow: hidden;
				>.shadowText{
					position: relative;
					text-align: center;
					margin-top:16vw; 
					color: #000;
					margin-bottom: 3vw;
					>.back{
						position: absolute;
						z-index: 0;
						top:-3vw;
						left: 0;
						right: 0;
						margin: auto;
						font-size: 8vw;
						color:rgba(49,51,69,1);
					}
					>.forword{
						position: relative;
						z-index: 2;
						font-size: 5.3vw;
						color: #fff;
					}
				}
				>.exp{
					color:rgba(130,132,157,1);
					font-style: 3.73vw;
					margin-bottom: 13.06vw;
				}
				>.imgs{
					margin-bottom: 4.6vw;
					>.top{
						>img:not(.close){
							width: 38.8vw;
							height: 11.6vw;
							margin-bottom: 6.2vw;
						}
						>.close{
							width: 4vw;
							height: 4vw;
						}

					}
					>ul{
						margin-top: 6.2vw;
						padding: 0 11.466vw 0 12.8vw;
						flex-wrap:wrap;
						>li{
							width: 31.06vw;
							margin-bottom: 6.6vw;
							height: 13.6vw;
							background-image: url('/mob/img/M_footerImgs.png');
							background-size: 220%;
							background-repeat: no-repeat;
              >a{
                display: inline-block;
                width: 100%;
                height:100%;
              }

							

						}
					}
					
				}
				>.over{
					color: rgb(151,152,158);
					font-size:3.2vw;
					
				}
			}
		}

	}
</style>

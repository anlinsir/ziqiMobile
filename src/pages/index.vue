<template>
  <div class="Warper">
   	<Header />
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


   	<div class="section1 bb Warper">
   		<div class="sec1">
   			<ul class="">
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
   				

   			</ul>
   			 <!-- <swiper class='swiper' :options="swiperOption">
		      <swiper-slide v-for="(item, index) in ['根链平台及以太坊智能合约','根链平台及以太坊智能合约s','根链平台及以太坊智能合约6']" :key="index">
		      	<p>{{item}}</p>
		      </swiper-slide>
		    </swiper> -->
		</div>
	</div>
	<!-- sec1 -->
	<div class="section2 bb Warper">
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
	<div class="section3 bb  Warper">
		<div class="sec3  ">
   			<div class="shadowText">
				<div class="back">案例展示</div>
				<div class="forword fwb">案例展示</div>
			</div>
			<div class="switchWarp">
				<div class="switch">
					<div class="hover">
						<div class="bottom white">
							<p class="title">搜多多SOUDUODUO</p>
							<p class="dirc">数字资产行情</p>
							<img src="/static/img/button.png" >
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- sec3 -->

	<div class="section4 bb   Warper">
		<div class="sec4  ">
			<div class="shadowText">
				<div class="back">最新资讯</div>
				<div class="forword fwb">最新资讯</div>
			</div>
			<ul>
				<li class="bb white">
					<p class="title fwb">如何扩展以太坊：分片原理解释</p>
					<p class="content">
						<span>首先让我们看看分片系统的结构。首先，在特定分片上被称为校对器（Collator）的节点的任务是创建校对块（Collation），校对块是一种包含关于所涉及分片的重要信息的特定结构。 </span><br>
						<span>超级节点将把所有分片中的校对块放到以太坊区块链中将要添加的区块中。通过汇总他们的校验头来维护所有分片的状态。</span>
					</p>
					<p class="seeMore">阅读全文 ></p>
				</li>
				<li class="bb white">
					<p class="title fwb">智能合约灵活升级</p>
					<p class="content">
						<span>以太坊智能合约具有很强的不变性，使得我们能够构建完全防篡改的应用程序，任何个人、公司或政府都不能篡改数据（信息）。每个参与者都遵循相同的规则，并且这些规则永远都不会改变 </span><br>
						<span>但是，说到底，这些规则都是由人创造的。而人类总是偶然会犯一点错误的。我们不可能从第一天就看到未来发展的完整画面，并构造一个完全不需要适配或改进的完美系统。</span>
					</p>
					<p class="seeMore">阅读全文 ></p>
				</li>
			</ul>
			<button >更多资讯</button>
		</div>	
	</div>
	<!-- sec4 -->

	<div class="section5 bb   Warper">
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

			<div class="detali">
				<p style="font-size:4vw;margin-bottom:11.2vw;"><strong>成都子奇科技有限公司 总部</strong></p>
				<p style="font-size:4vw;color:rgba(77,77,77,1);margin-bottom:11.2vw;">地址: 四川成都市高新区天府大道天华路天府软件园B区3栋4F-V06</p>
				<p style="font-size:4vw;color:rgba(77,77,77,1);margin-bottom:4vw;">电话: 400-0288-767；18508233623</p>
				<p style="font-size:4vw;color:rgba(77,77,77,1);margin-bottom:4vw;">Q Q: 1834633402</p>
				<p style="font-size:4vw;color:rgba(77,77,77,1);margin-bottom:4vw;">邮箱: shxiao918@gmail.com</p>
			</div>
			<div class="map">
				<div id="container" style="width:100%; height:100%"></div>
			</div>

	    </div>
	</div>
	<!-- sec5 -->
	<div class="section6 bb   Warper">
		<div class="sec6  ">
			<div class="shadowText">
				<div class="back">业务咨询</div>
				<div class="forword fwb">业务咨询</div>
			</div>
			<p class="exp center">填写以下内容发送给我们我们将在<br>24小时内联系您</p>
			<form>
				<input type="text"  placeholder="成都某某某科技有限公公司">
				<input type="text"  placeholder="您的姓名(必填)">
				<input type="text"  placeholder="联系电话(必填)">
				<input type="text"  placeholder="微信号(必填)">
				<input type="text"  placeholder="标题">
				<textarea placeholder="咨询内容……"></textarea>
				<button>发 送</button>
			</form>
		</div>
	</div>
	<!-- sec5 -->

	<footer class="section7 bb   Warper">
		<div class="sec7">
			<div class="shadowText">
				<div class="back">合作伙伴</div>
				<div class="forword fwb">合作伙伴</div>
			</div>
			<p class="exp center">优质的合作资源</p>
			<div class="imgs">
				<div class="top center">
					<img src="/static/img/footerLogo.png"><br>
					<img src="/static/img/CLOSEr.png" class="close">
				</div>

				<ul class="others flexB">
					<li :style="{backgroundPosition:ii.imp}" v-for="(ii,id) in [{imp:'0px 0px'},{imp:'-176px 0px'},{imp:'-0px -70px'},{imp:'-176px -70px'},{imp:'-356px 0px'},{imp:'-532px 0px'},{imp:'-356px -70px'},{imp:'-532px -70px'},]"></li>
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

export default {
  data () {
    return {
      active:0,
      swiperOption: {
			loopFillGroupWithBlank: true,//在loop模式下，为group填充空白slide  
        }
    }
  },
  components:{
  	Header,
  	swiper,
  	swiperSlide
  },
  mounted(){
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
	.Warper{
		.TopBack{
			height: 96.36vw;
			background-image: url('/static/img/indexbg.png');
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
					top:-34vw;
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
				>.switchWarp{
					padding: 0 4vw;
					>.switch{
						position: relative;
						width: 91.86vw;
						height: 59.33vw;
						border-radius:1.73vw;
						box-shadow:0px 1vw 5.73vw 0px rgba(45,47,93,0.1);
						background-image: url('/static/img/displayLi.png');
						background-repeat: no-repeat;
						background-position: center;
						background-size: 130%;
						>.hover{
							position: absolute;
							width: 91.86vw;
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
			background-image: url('/static/img/other.png');
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
							background-image: url('/static/img/footerImgs.png');
							background-size: 550%;
							background-repeat: no-repeat;

							

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

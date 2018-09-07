<template>
	<div class="Warper">
		<Header />
		<div class="TopBack Warper bb ">
   			<div class="topback">
	   			<div class="shadowText">
					<div class="back">最新资讯</div>
					<div class="forword fwb">最新资讯</div>
				</div>
				<p class="exp center">行业一手消息，最先知道</p>
   			</div>
   		</div>

   		<div class="newList Warper bb">
   			<ul class="">
   				<li  @click='toDeali(i.id)' v-for='(i,d) in newList'>
   					<div class="imgBox">
   						<img :src="i.cover_src ? i.cover_src : '/mob/img/M_pic6.png'" alt="">
   						<span>{{i.created_at ? i.created_at: ''}}</span>
   					</div>

   					<p class="title">{{i.title ? i.title : ''}}</p>
   					<button>阅读文章</button>
   				</li>
   			</ul>

   			<div class="changepage">
   				<div v-if='crrPage == 1' class="Left bb grey">← 上一页 </div>
   				<div @click='changePage(0)' v-if='crrPage != 1'  class="Left bb white">← 上一页 </div>

   				<div v-if='crrPage == totalPage' class="Right bb grey">下一页  →</div>
   				<div @click='changePage(1)' v-if='crrPage != totalPage' class="Right bb white">下一页  →</div>

   				
   			</div>

   		</div>

   		<footer class="Warper center">
   				<p> ©2014成都子奇科技有限公司 蜀ICP备13026114号-7</p>	
   		</footer>	

	</div>

</template>

<script >
	import Header from '../components/header'
	import axios from 'axios'
	export default{
		data(){
			return({
				totalPage:5,
				crrPage:1,
				newList:[]
			})
		},
		methods:{
			toDeali(d){
				this.$router.push(`/newsDetali/${d}`)
			},
			changePage(type){
				if(type == 0){
					if(this.crrPage > 1){
						this.crrPage -- 	
						axios.get(`${href}/api/post?&page=${this.crrPage}&limit=6`)
							.then(r=>{
								this.newList = r.data.list
								this.totalPage = Math.ceil(r.data.count/6)
								this.crrPage = r.data.current
							})
					}
				}else if(type == 1){
					if(this.crrPage >= 1 && this.crrPage < this.totalPage){
						this.crrPage ++ 	
						axios.get(`${href}/api/post?&page=${this.crrPage}&limit=6`)
							.then(r=>{
								this.newList = r.data.list
								this.totalPage =  Math.ceil(r.data.count/6)
								this.crrPage = r.data.current
							})
					}
				}
				 document.documentElement.scrollTop  = 0
		         document.body.scrollTop  = 0
		         window.pageYOffset = 0
			}
		},
		mounted(){
			axios.get(`${href}/api/post?&page=1&limit=6`)
				.then(r=>{
					this.newList = r.data.list
					this.totalPage = Math.ceil(r.data.count/6)
					this.crrPage = r.data.current
				})
		},	
		components:{
			Header
		}
	}
</script>

<style scoped lang='scss'>
	.Warper{
		.TopBack{
			height: 96.36vw;
			background-image: url('/mob/img/M_indexbg.png');
			background-repeat: no-repeat;
			background-position: center center;
			background-size: 100% 100%;
			>.topback{
				overflow: hidden;
				>.shadowText{
					position: relative;
					text-align: center;
					margin-top:26vw; 
					margin-bottom: 10.66vw;
					color: #000;
					margin-bottom: 2vw;
					>.back{
						position: absolute;
						z-index: 0;
						top:-5vw;
						left: 0;
						right: 0;
						margin: auto;
						font-size: 10vw;
						color:rgba(60,60,100,0.9);
					}
					>.forword{
						position: relative;
						z-index: 2;
						font-size: 6vw;
						color: #fff;
					}
				}
				>.exp{
					margin-top:1vw;
					font-size: 3.73vw;
					margin-bottom: 14.53vw;
					color:rgba(141,140,184,1);
				}
				
			}	
		}
		.newList{
			width: 100%;
			padding: 0 3.46vw;
			>ul{
				transform: translateY(-35vw);
				width: 100%;
				>li{
					width: 100%;
					height: 102.66vw;
					text-align: center;
					border-radius: 3vw;
					box-shadow:0px 0.93vw 10.53vw 0px rgba(45,47,93,0.15);
					margin-bottom: 7.6vw;
					&:hover button{
						background:linear-gradient(112deg,rgba(48,157,180,1),rgba(109,235,209,1));
						color: #fff;
					}
					>.imgBox{
						position: relative;
						>img{
							height: 61.86vw;
							width: 100%;
							border-top-left-radius: 3vw;
							border-top-right-radius: 3vw;
						}	
						>span{
							display: inline-block;
							position: absolute;
							width:40.4vw;
							bottom: -3vw;
							left: 28%;
							height:9.33vw;
							background:#3D2F74;
							border-radius:4.66vw;
							color: #fff;
							font-size: 3.73vw;
							line-height: 9.4vw;
						}
					}
					>.title{
						margin-top: 10vw;
						font-size:4.26vw;
						font-family:PingFang-SC-Bold;
						font-weight:bold;
						color:rgba(51,51,51,1);
						margin-bottom: 7.33vw;
					}
					>button{
						width:55.46vw;
						height:10.66vw;
						background:rgba(255,255,255,1);
						border:1px solid rgba(229,229,229,1);
						border-radius:5.33vw;
						color:rgba(117,117,117,1);
						font-size: 4vw;
						transition:all .5s;
					}
					
				}
			}
			>.changepage{
				transform: translateY(-22vw);
				.Left{
					width: 48%;
					height: 10.66vw;
					border-radius: 10vw;
					line-height: 10.66vw;
					padding-left: 5.33vw;
					background:rgba(78,196,195,1);
				}
				>.Right{
					width: 48%;
					height: 10.66vw;
					border-radius: 10vw;
					line-height: 10.66vw;
					text-align: right;
					padding-right: 5.33vw;
					background:rgba(78,196,195,1);

				}
				>.grey{
					background:rgba(229,229,229,1);
					color:rgba(124,124,124,1);
					line-height: 10.66vw;
				}
			}
		}
		footer{
			background-color: #0D0F26;
			height: 19.6vw;
			color: #8d8f98;
			line-height: 0;
			font-size: 3.2vw;
		}
	}
</style>
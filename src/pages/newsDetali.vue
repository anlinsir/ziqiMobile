<template>
	<div class="Warper bb ">
		<Header />
		<div class="TopBack Warper bb nones" v-for="(ii,id) in  data">
   			<div class="topback">
	   			<div  class="shadowText">
					<div @click="toNews" class="back">
						<img class="nones" src="/mob/img/M_left.png">
					</div>
					<div data-id='none' class="forword fwb">{{ii.title}}</div>
				</div>
				<p data-id='none' class="exp center">
					<span data-id='none'>{{ii.created_at ? (ii.created_at).slice(0,10) : ''}}</span> | <span data-id='none'>{{ii.author}}</span>
				</p>
   			</div>
   		</div>

   		<div class="sec1 bb Warper"  v-for="(ii,id) in  data">
   			<div class="fla ">
   				<div class="imga">
   				</div>
   				<div class="content" v-html='ii.content'  v-highlight>
   				


   				</div>	

   				

   				

   			</div>
   			<div class="changepage">
   				<div v-if='!last' class="Left bb grey">← 上一篇 </div>
   				<div @click='changePage(0)' v-if='last'  class="Left bb white">← 上一篇 </div>

   				<div v-if='!next' class="Right bb grey">下一篇  →</div>
   				<div @click='changePage(1)' v-if='next' class="Right bb white">下一篇  →</div>

   				
   			</div>
   		</div>


   		<footer class="Warper center">
   				<p> ©2014成都子奇科技有限公司 蜀ICP备13026114号-7</p>	
   		</footer>		
	</div>
</template>


<script>
	import Header from '../components/header'
	import axios from 'axios'
	export default{
		data(){
			return({
				totalPage:5,
				crrPage:1,
				data:[],
				last:'',
				next:'',
			})
		},
		methods:{
			toNews(e){
				
				this.$router.push('/news')
			},
			changePage(type){
				
				if(type == 0){
					this.$router.push(`/newsDetali/${this.last.id}`)
					// axios.get(`${href}/api/post/${this.last.id}`)
					// 	.then(r=>{
					// 		this.data = [r.data.data]
					// 		this.last = r.data.last
					// 		this.next = r.data.next
					// 	})
				}else if(type == 1){
					this.$router.push(`/newsDetali/${this.next.id}`)
					// axios.get(`${href}/api/post/${this.next.id}`)
					// 	.then(r=>{
					// 		this.data = [r.data.data]
					// 		this.last = r.data.last
					// 		this.next = r.data.next
					// 	})
				}
				 document.documentElement.scrollTop  = 0
		         document.body.scrollTop  = 0
		         window.pageYOffset = 0
			}
		},
		watch:{
			'$route'(){

				axios.get(`${href}/api/post/${this.$route.params.id}`)
					.then(r=>{
						this.data = [r.data.data]
						this.last = r.data.last
						this.next = r.data.next
						setTimeout(()=>{
						var aaa = document.getElementsByTagName('img')
							for(var i in aaa){
								if(aaa[i].className != 'nones'){
									aaa[i].style.maxWidth = '100%'
								}
							}
						},1000)
				})
			}
		},
		mounted(){

			setTimeout(()=>{
				var aaa = document.getElementsByTagName('img')
				for(var i in aaa){
					if(aaa[i].className != 'nones'){
						aaa[i].style.width = '100%'
					}
				}
			},1000)
			console.log(this.$route.params.id)
			axios.get(`${href}/api/post/${this.$route.params.id}`)
				.then(r=>{
					this.data = [r.data.data]
					this.last = r.data.last
					this.next = r.data.next
			})

		},
		components:{
			Header
		}
	}
</script>


<style scoped lang="scss">

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
					margin-top:25vw; 
					margin-bottom: 10.66vw;
					color: #000;
					margin-bottom: 2vw;
					>.back{
						position: absolute;

						z-index: 10;
						top:-4vw;
						left: 3.6vw;
						margin: auto;
						font-size: 10vw;
						color:rgba(60,60,100,0.9);
						>img{
							width: 2.4vw;
							height: 4.26vw;
						}
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
		>.sec1{
			min-height: 100vw;
			padding: 0 4vw;

			>.fla{
				overflow: hidden;
				img{
					width: 100%;
				}
				min-height: 100vw;
				padding:  4vw;
				transform: translateY(-40vw);
				background-color: #fff;
				border-radius: 1.73vw;
				box-shadow:0px 0.93vw 10.53vw 0px rgba(45,47,93,0.15);
				font-size: 4vw;
				// padding-bottom: 10.66vw;
				>.content{
					p{
						border:1px solid red;	
					}
				}
				>.imga{
					margin-bottom: 8.533vw;
					>img{
						width: 100%;
						height: 43.333vw;
					}
				}
				
			}
			>.changepage{
					transform: translateY(-25vw);
					.Left{
						width: 48%;
						height: 10.66vw;
						background-color: red;
						border-radius: 10vw;
						line-height: 10.66vw;
						padding-left: 5.33vw;
						background:rgba(78,196,195,1);
					}
					>.Right{
						width: 48%;
						height: 10.66vw;
						background-color: red;
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
		>footer{
			background-color: #0D0F26;
			height: 19.6vw;
			color: #8d8f98;
			line-height: 0;
			font-size: 3.2vw;
		}
	}
</style>
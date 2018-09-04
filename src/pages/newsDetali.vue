<template>
	<div class="Warper bb ">
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
	</div>
</template>


<script>
	import Header from '../components/header'

	export default{
		data(){
			return({
				totalPage:5,
				crrPage:1
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
			background-image: url('/static/img/indexbg.png');
			background-repeat: no-repeat;
			background-position: center center;
			background-size: 100% 100%;
			>.topback{
				overflow: hidden;
				>.shadowText{
					position: relative;
					text-align: center;
					margin-top:36vw; 
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
	}
</style>
<template>
	<div class="wrap">
		 <Header  :msg="msg"/>
		<div class="swiper">
			<swiper :options="swiperOption" ref="mySwiper">
				<!-- slides -->
				<swiper-slide>
					<img class="image" src="../../../static/1.png" alt="">
				</swiper-slide>
				<swiper-slide>
					<img class="image" src="../../../static/1.png" alt="">
				</swiper-slide>
			</swiper>
		</div>
		<div class="slide">
			<ul>
				<li>
					<img src="../../../static/2.png" alt="">
				</li>
				<li class="h1">自然风光</li>
			</ul>
			<ul>
				<li>
					<img src="../../../static/3.png" alt="">
				</li>
				<li class="h1">人文古迹</li>
			</ul>
			<ul>
				<li>
					<img src="../../../static/4.png" alt="">
				</li>
				<li class="h1">影视基地</li>
			</ul>
			<ul>
				<li>
					<img src="../../../static/5.png" alt="">
				</li>
				<li class="h1">水上乐园</li>
			</ul>
			<ul>
				<li>
					<img src="../../../static/6.png" alt="">
				</li>
				<li class="h1">主题乐园</li>
			</ul>
		</div>
		<div class="slide">
			<ul>
				<li>
					<img src="../../../static/2.png" alt="">
				</li>
				<li class="h1">亲子娱乐</li>
			</ul>
			<ul>
				<li>
					<img src="../../../static/3.png" alt="">
				</li>
				<li class="h1">避暑休闲</li>
			</ul>
			<ul>
				<li>
					<img src="../../../static/4.png" alt="">
				</li>
				<li class="h1">温泉滑雪</li>
			</ul>
			<ul>
				<li>
					<img src="../../../static/5.png" alt="">
				</li>
				<li class="h1">博物馆</li>
			</ul>
			<router-link to="./trip">
				<ul>
					<li>
						<img src="../../../static/6.png" alt="">
					</li>
					<li class="h1">全部景点</li>
				</ul>
			</router-link>
		</div>
		<div class="note"></div>
		<div class="foot">
			   <city />
			<div class="foot-slide">
				<dl class="dl">
					<dt>
						<img src="../../../static/12.png" alt="" class="pic">
					</dt>
					<dd>
						<p>
							<span class="span">镇北堡西部影城</span>
							<span class="bg">5A景区</span>
						</p>
						<p class="got">
							<span class="hot">可定明日</span>
							<span class="hot2">自然风光</span>
						</p>
						<p class="font">
							<span class="color">4.5分</span>
							<span class="pjia">8976人评价</span>
							<span class="font1">
								￥
								<b class="size">86</b>
								起
							</span>
						</p>
						<p class="mt">
							<span>距离市中心4.4公里</span>
							<span>已售1238</span>
						</p>
					</dd>
				</dl>
			</div>
			<div class="foot-slide">
				<dl class="dl">
					<dt>
						<img src="../../../static/13.png" alt="" class="pic">
					</dt>
					<dd>
						<p>
							<span class="span">黄沙古渡</span>
							<span class="bg">5A景区</span>
						</p>
						<p class="got">
							<span class="hot">可定明日</span>
							<span class="hot2">自然风光</span>
						</p>
						<p class="font">
							<span class="color">4.5分</span>
							<span class="pjia">8976人评价</span>
							<span class="font1">
								￥
								<b class="size">86</b>
								起
							</span>
						</p>
						<p class="mt">
							<span>距离市中心4.4公里</span>
							<span>已售1238</span>
						</p>
					</dd>
				</dl>
			</div>
		</div>
	</div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import Header from '../../components/header/header'
import city from '../../components/city/city'
export default {
  data() {
    return {
      msg: "宁夏景点门票",
      swiperOption: {
        notNextTick: true,
        loop: true,
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        direction: "horizontal",
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: ".swiper-pagination",
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        debugger: true
      }
    };
  },
  components: {
    swiper,
	swiperSlide,
	Header,
	city
  },
  methods: {}
};
</script>
<style>
@import url('../../common/css/index.css');
</style>



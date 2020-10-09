<template>
  <div class="list-container">
    <div class="sortList clearfix">
      <div class="center">
        <!-- banner轮播 -->
        <div class="swiper-container" ref="banner">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="./images/banner-01.jpg" alt="" />
              <div class="solt-content">
                <div class="normal-box">
                  <h3 class="subtitle">
                    <span>JACKIE 1961系列</span>
                  </h3>
                </div>
                <div class="btn-group">
                  <a href="###">点击购买</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <img src="./images/banner-02.jpg" alt="" />
              <div class="solt-content">
                <div class="normal-box">
                  <h3 class="subtitle">
                    <span>2020秋冬</span>
                  </h3>
                </div>
                <div class="btn-group">
                  <a href="###">女士系列</a>
                  <a href="###">男士系列</a>
                </div>
              </div>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>

          <div class="spice-flex-label">
            <a class="e-free-distribution">
              免费标准配送<i class="svg-iconfont " style="color:#fff">></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "ListContainer",

  mounted() {
    new Swiper(this.$refs.banner, {
      effect: "fade",
      loop: true, // 循环模式选项

      autoplay: true, // 自动播放时间

      speed: 1000, // 播放的速度

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};
</script>

<style lang="less" scoped>
.swiper-container .swiper-wrapper .swiper-slide {
  height: 810px;
}
.swiper-container .swiper-wrapper .swiper-slide img {
  width: 100%;
  vertical-align: middle;
  max-width: 100%;
}

.swiper-container .spice-flex-label {
  position: absolute;
  bottom: 0;
  right: 55px;
  z-index: 2;
  text-align: center;
  margin: auto;
  a {
    font-size: 14px;
    color: #fff;
    letter-spacing: 0;
    line-height: 14px;
    display: inline-block;
    margin-bottom: 15px;
  }
}
/* 自定义按钮样式 */
.swiper-button-prev {
  --swiper-navigation-color: rgba(255, 248, 248, 0.6);
  --swiper-navigation-size: 60px;
}
.swiper-button-next {
  --swiper-navigation-color: rgba(255, 248, 248, 0.6);
  --swiper-navigation-size: 60px;
}
/* 自定义分页器样式 */
.swiper-container {
  --swiper-theme-color: #ffffff;
}

.center {
  position: relative;
}

.solt-content {
  position: absolute;
  top: 55%;
  left: 50%;
  z-index: 20;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
}
.solt-content .normal-box {
  margin-bottom: 21px;
}
.solt-content .normal-box .subtitle span {
  font-size: 56px;
  color: #fff;
  letter-spacing: 2px;
  line-height: 56px;
  font-weight: 500px;
}
.solt-content .btn-group {
  display: inline-block;
}
.solt-content .btn-group a {
  width: 145px;
  margin: 0 10px;
  background: #1b1b1b;
  color: #e5dfd9;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  vertical-align: middle;
}
.solt-content .btn-group a:hover{
    background: #313131;
  }

</style>

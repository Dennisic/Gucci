<template>
  <div style="width: 100%">
    <div class="images"></div>
    <!-- 头部 -->
    <div class="header-WH">
      <div class="content-WH">
        <div class="shop-WH">
          <a href="http://localhost:8080/#/cart">
            <i>&lt;</i>
            <span>返回购物袋</span>
            <!-- <a href="http://localhost:8080/#/cart">返回购物袋</a> -->
          </a>
        </div>
        <div class="gucci-WH">
          <span>G</span>
          <span>U</span>
          <span>C</span>
          <span>C</span>
          <span>I</span>
        </div>
        <div class="consultant-WH">
          <span>在线顾问</span>
          <span class="span-WH">400.8210.580</span>
        </div>
      </div>
    </div>
    <div class="haha">
      <h1>感谢您的订购</h1>
      <p>#GU202010121502021</p>
    </div>
    <!-- 中心 -->
    <div class="content-box-WH">
      <h2>您的订单已提交成功</h2>
      <p>请继续支付，15分钟内未付款，订单将自动取消</p>
      <p>如有疑问，请联系客服</p>
      <button class="left">修改支付方式</button>
      <button class="rigth" @click="pay">立即支付</button>
    </div>
    <!-- 底部 -->
    <div class="footer-WH">
      <div class="rigth-box-WH">
        <div class="box-WH">
          <h4>需要帮助?</h4>
          <div class="box2-WH">
            <p>联系我们</p>
            <ul>
              <li>在线顾问</li>
              <li>400.8210.582</li>
              <li>contact@cn.customercare.gucci</li>
            </ul>
          </div>
        </div>
        <div class="rigth-box-WH">
          <h4>隐私政策</h4>
          <p>Gucci一贯尊重客户隐私，</p>
          <p>为您提供一个安全无忧的购物体验</p>
          <p class="p-WH">阅读隐私政策。</p>
        </div>
      </div>
      <div class="bottom-WH">
        <span>© 2020 古驰（中国）贸易有限公司 保留所有权利</span>
        <span> 沪公网安备 31010602001727号 </span>
        <span> 上海工商</span>
        <span> 沪ICP备13010397号-2</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Payment",
  methods: {
    pay() {
      alert("亲爱的, 支付成功了~~~");
      this.$router.push('/cart')
    },
  },
};
</script>


<style lang="less" scoped>
.images {
  background-image: url(../../assets/100.jpg);
  width: 100%;
  height: 400px;
  z-index: -1;
  display: inline-block;
  background-attachment: fixed;
}
// 头部
.header-WH {
  width: 100%;
  height: 130px;

  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  .content-WH {
    width: 1450px;
    height: 100%;
    // background: pink;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .shop-WH {
      a {
        font-size: 12px;
        color: white;
        cursor: pointer;
        text-decoration: none;
      }
    }
    .gucci-WH {
      font-size: 39px;
      color: white;
      span {
        margin: 0 5px;
      }
    }
    .consultant-WH {
      font-size: 12px;
      color: white;
      .span-WH {
        margin-left: 20px;
      }
    }
  }
}
.header-WH:hover {
  background-color: #000;
}
.haha {
  position: absolute;
  top: 223px;
  left: 600px;
  h1 {
    text-align: center;
    font-size: 37px;
    color: #fff;
    letter-spacing: 1px;
    font-weight: normal;
  }
  p {
    text-align: center;
    font-size: 20px;
    color: #fff;
    letter-spacing: 1px;
    margin-top: 16px;
  }
}

.content-box-WH {
  width: 100%;
  height: 200px;
  // background: pink;
  text-align: center;
  h2 {
    font-size: 24px;
    color: #1b1b1b;
    letter-spacing: 1.2px;
    margin-top: 49px;
    font-weight: normal;
  }
  p {
    font-size: 14px;
    color: #999;
    margin: 5px 0;
  }

  .left {
    width: 245px;
    height: 42px;
    // border: 2px solid #000;
    margin-top: 20px;
    background: #000;
    color: white;
    border: none;
    outline: none;
    margin-right: 5px;
    cursor: pointer;
  }
  .rigth {
    width: 245px;
    height: 42px;
    cursor: pointer;
    margin-top: 20px;
    background: #000;
    color: white;
    border: none;
    outline: none;
    margin-left: 5px;
  }
}
//底部
.footer-WH {
  width: 100%;
  height: 350px;
  background: #000;
  position: relative;
  .rigth-box-WH {
    position: relative;
    .box-WH {
      width: 280px;
      height: 164px;
      // background: pink;

      position: absolute;
      top: 50px;
      left: 80px;
      h4 {
        margin-bottom: 50px;
        color: white;
      }
      .box2-WH {
        p {
          color: white;
          margin-bottom: 10px;
        }
        ul {
          li {
            color: #999;
          }
        }
      }
      // margin: 30px 10px 30px 20px;
    }
    .rigth-box-WH {
      width: 280px;
      height: 164px;
      // background: pink;
      position: absolute;
      top: 50px;
      left: 415px;
      h4 {
        margin-bottom: 50px;
        color: white;
      }
      p {
        font-size: 12px;
        color: #999;
      }
      .p-WH {
        margin-top: 30px;
      }
    }
  }
  .bottom-WH {
    position: absolute;
    left: 80px;
    bottom: 20px;
    span {
      margin-right: 50px;
    }
  }
}
</style>
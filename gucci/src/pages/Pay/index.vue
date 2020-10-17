<template>
  <div>
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
    <!-- 中心 -->
    <div class="conter-WH">
      <div class="conterBox-WH">
        <div class="leftBox-WH">
          <div class="left-WH">
            <div class="top-WH">
              <h1>会员结算</h1>
              <span
                >已注册会员请登录结算，未注册会员短信验证码登录后即可成为会员。登录后可加快结算流程，并保存购买记录。</span
              >
            </div>
            <div class="login-WH">
              <div>手机号码</div>
              <input
                type="text"
                placeholder="请输入11位手机号码"
                class="phone-WH"
              />
              <div>短信验证码</div>
              <input
                type="text"
                placeholder="请输入短信验证码"
                class="password-WH"
              />
              <a href="##">发送验证码</a>
              <div class="box-WH">
                <button class="login-button-WH">登录</button>
                <a href="##">密码登录</a>
              </div>
            </div>
          </div>
        </div>
        <div class="rigthBox-WH">
          <div class="rigth-WH">
            <div class="top-WH">
              <h1>访客结算</h1>
              <span>以访客身份前往结算，可稍后注册成为会员手机号码</span>
            </div>
            <div class="rigthLogin-WH">
              <div>手机号码</div>
              <input
                type="text"
                placeholder="请输入11位手机号码"
                class="phone-WH"
              />
              <div class="GUCCI-WH">
                <input type="checkbox" class="checkbox-WH" />
                <span class="span-WH"
                  >订阅
                  <span class="GUCCI">GUCCI</span>
                  电子资讯</span
                >
              </div>
              <div class="size-WH">
                <span class="size">
                  通过点击下方“前往结算”即表明您接受我们的
                  <a href="##">隐私政策</a>
                  和
                  <a href="##">销售条款</a>
                </span>
              </div>
            </div>
            <!-- <button class="button-WH">前往结算</button> -->
            <!-- <router-link to="/order" >前往结算</router-link> -->
            <a href="http://localhost:8080/#/order" class="button-WH">前往结算</a>
          </div>
        </div>
      </div>
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
  
};
</script>


<style lang="less" scoped>
// 头部
.header-WH {
  width: 100%;
  height: 130px;
  background: #1b1b1b;
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

// 中间
.conter-WH {
  margin-top: 120px;
  width: 100%;
  height: 1000px;
  background: #e7e7e7;
  .conterBox-WH {
    width: 1400px;
    height: 1000px;
    // background: pink;
    margin: 0 auto;
    .leftBox-WH {
      width: 698px;
      height: 100%;
      // background: yellow;
      float: left;
      .left-WH {
        width: 535px;
        height: 500px;
        // background: white;
        margin-top: 80px;
        .top-WH {
          height: 75px;
          h1 {
            font-weight: 400;
            font-size: 35px;
            margin-bottom: 10px;
          }
          span {
            font-size: 12px;
            color: #999;
          }
        }
        .login-WH {
          margin-top: 80px;
          .phone-WH {
            width: 450px;
            height: 40px;
            margin: 12px 0 40px 0;
            outline: none;
            border: none;
            padding-left: 15px;
          }
          .password-WH {
            height: 40px;
            width: 300px;
            margin: 12px 10px 40px 0;
            outline: none;
            border: none;
            padding-left: 15px;
          }
          a {
            text-decoration: underline;
            color: #000;
          }
          .box-WH {
            .login-button-WH {
              width: 185px;
              height: 42px;
              margin: 20px 0 10px 0;
              background: #1b1b1b;
              color: #e5dfd9;
              outline: none;
              border: none;
              &:hover {
                background: #313131;
              }
            }
            a {
              display: block;
              text-decoration: underline;
            }
          }
        }
      }
    }
    .rigthBox-WH {
      width: 700px;
      height: 100%;
      // background: green;
      float: right;
      border-left: 2px white solid;
      .rigth-WH {
        width: 535px;
        height: 500px;
        // background: white;
        margin-top: 80px;
        margin-left: 40px;
        .top-WH {
          h1 {
            font-weight: 400;
            font-size: 35px;
            margin-bottom: 10px;
          }
          span {
            font-size: 12px;
            color: #999;
          }
        }
        .rigthLogin-WH {
          margin-top: 80px;
          .phone-WH {
            width: 450px;
            height: 40px;
            margin: 12px 0 40px 0;
            outline: none;
            border: none;
            padding-left: 15px;
          }
          .GUCCI-WH {
            height: 30px;
            line-height: 30px;
            position: relative;
            .checkbox-WH {
              width: 15px;
              height: 15px;
              outline: none;
              border: none;
              position: absolute;
              top: 8px;
            }
            .span-WH {
              color: #000;
              margin-left: 20px;
              .GUCCI {
                color: #999;
              }
            }
          }
          .size-WH {
            .size {
              color: #999;
              a {
                color: #000;
              }
            }
          }
        }
        .button-WH {
          width: 185px;
          height: 42px;
          margin: 50px 0 10px 0;
          background: #1b1b1b;
          color: #e5dfd9;
          outline: none;
          border: none;
          display: block;
          text-align: center;
          line-height: 42px;
          text-decoration: none;
          &:hover {
            background: #313131;
          }
        }
      }
    }
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
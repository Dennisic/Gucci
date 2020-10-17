<template>
  <div class="top">
    <div class="box"></div>
    <div class="header-WH" v-if="isHa">
      <div class="header-top-WH">
        <div class="left-WH">
          <span>中国大陆地区</span>
          <span>简体中文</span>
          <span>客服服务</span>
          <span>400.8210.582</span>
        </div>
        <div class="gucci-WH">
          <span>G</span>
          <span>U</span>
          <span>C</span>
          <span>C</span>
          <span>I</span>
        </div>
        <div class="login-WH">
          <a href="##">登录</a>
          <a href="##">购物袋</a>
        </div>
      </div>
      <div class="header-button-WH">
        <a href="##">全新咨询</a>
        <a href="##">女士</a>
        <a href="##">男士</a>
        <a href="##">童装</a>
        <a href="##">礼品</a>
        <a href="##">珠宝和腕表</a>
        <a href="##">美妆</a>
        <a href="##">家饰</a>
        <a href="##">古驰故事</a>
      </div>
    </div>
    <div class="header2-WH" v-else>
      <div class="header-button-WH">
        <a href="##" class="ab">400.8210.582</a>
        <a href="##">全新咨询</a>
        <a href="##">女士</a>
        <a href="##">男士</a>
        <a href="##">童装</a>
        <a href="##">礼品</a>
        <a href="##">珠宝和腕表</a>
        <a href="##">美妆</a>
        <a href="##">家饰</a>
        <a href="##">古驰故事</a>
      </div>
    </div>
    <div class="content-WH" v-if="isHied">
      <div class="top-WH">
        <span>GUCCI</span>
        <p>购物袋</p>
      </div>
      <div class="content-top-WH">
        <div
          class="content-box-WH"
          v-for="cartList in shopCartList"
          :key="cartList.cartId"
        >
          <div class="left-box-WH">
            <div class="left-WH">
              <div class="top">
                <input
                  type="checkbox"
                  v-model="isAllChecked"
                  @click="checkAll()"
                />
                <span>全选</span>
              </div>
              <div class="button">
                <input
                  type="checkbox"
                  v-model="isAllChecked"
                  @click="checkAll()"
                />
                <div class="button-content">
                  <div class="img-WH">
                    <img :src="cartList.imgUrl[1]" alt="" />
                  </div>
                  <div class="text-WH">
                    <div>
                      <a href="##">{{ cartList.name }}</a>
                      <p>款号# 6257701W3BN1000</p>
                      <p>款式： 黑色皮革</p>
                    </div>
                    <div class="youhuo-WH">
                      <p>有货</p>
                      <p>预计发货后2-4个工作日送达</p>
                    </div>
                    <div class="a-WH">
                      <a href="##">编辑</a>
                      <a href="##" class="a2-WH">加入心愿单</a>
                      <a href="##" @click.prevent="open">删除</a>

                      <el-dialog
                        title="您确定要删除此商品吗？"
                        :visible.sync="isShow"
                        center
                        class="dialog"
                        modal="false"
                        fullscreen="true"
                        lock-scroll="true"
                      >
                        <p style="color: #4b4b4b">GG印花压纹背包</p>
                        <p>款号# 6257701W3BN1000</p>
                        <p>款式： 黑色皮革</p>
                        <span slot="footer" class="dialog-footer">
                          <el-button
                            style="
                              display: inline-block;
                              width: 126px;
                              height: 38px;
                              background-color: white;
                              border: 1px solid black;
                              margin-right: 10px;
                            "
                            @click="isShow = false"
                            >暂不删除</el-button
                          >
                          <el-button
                            style="
                              display: inline-block;
                              width: 126px;
                              height: 38px;
                              background-color: black;
                              color: white;
                              border: 1px solid black;
                              margin-left: 10px;
                            "
                            @click="deleteNum"
                            >确定删除</el-button
                          >
                        </span>
                      </el-dialog>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="rigth-WH">
              <div class="rigth-left-WH">
                <select name="数量" v-model="num">
                  <option>
                    <!-- <span>数量:</span>  -->
                    1
                  </option>
                  <option>
                    <!-- <span>数量:</span> -->
                    2
                  </option>
                  <option>
                    <!-- <span>数量:</span> -->
                    3
                  </option>
                </select>
                <!-- <span>{{ num }}</span> -->
              </div>
              <div class="rigth-top-WH">
                <span>$</span>
                <span class="num">{{ cartList.price }}</span>
              </div>
            </div>
          </div>
          <div class="rigth-box-WH">
            <div class="top">
              <span class="top-span">订单小计</span>
              <span>已选 {{ num }} 件商品</span>
            </div>
            <div class="content">
              <div class="content-box1-WH">
                <span>商品总计</span>
                <span class="box1-WH">${{ cartList.price * num }}</span>
              </div>
              <div class="content-box2-WH">
                <span>运费</span>
                <span class="box2-WH">免费</span>
              </div>
              <div class="content-box3-WH">
                <span>总计</span>
                <span class="box3-WH">${{ cartList.price * num }}</span>
                <!-- ${{ cartList.price }} -->
              </div>
            </div>
            <div class="content2">
              <span>说明</span>
              <em
                >在线支付订单提交之后15分钟内未付款，订单将被系统自动取消，请您尽快完成支付以确保商品能及时送达，有货商品和门店配货商品是分开寄出。</em
              >
            </div>
            <div class="bottom">
              <!-- <router-link to="/pay" class="button" @click="lijijisuan">立即结算</router-link> -->
              <button class="button" @click="lijijiesuan">立即结算</button>
              <a href="##" class="button2">继续购物</a>
            </div>
          </div>

          <div class="rigth-botton-WH">
            <div class="box1">免费配送</div>
            <div class="box2">
              <div class="span-WH">
                <span>需要帮助?</span>
                <span>+</span>
              </div>
            </div>
            <div class="box2">
              <div class="span-WH">
                <span>支付方式</span>
                <span>+</span>
              </div>
            </div>
            <div class="box2">
              <div class="span-WH">
                <span>礼品包装</span>
                <span>+</span>
              </div>
            </div>
            <div class="box2">
              <div class="span-WH">
                <span>配送方式</span>
                <span>+</span>
              </div>
            </div>
            <div class="box2 button-box2-WH">
              <div class="span-WH">
                <span>退换货政策</span>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-WH">
        <div class="top-footer-WH">
          <h2>GUCCI 在线精品店全新购物体验</h2>
          <ul class="list">
            <li>
              <a href="##">Gucci正品认证</a>
            </li>
            <li class="item">
              <a href="##">免费礼品包装</a>
            </li>
            <li>
              <a href="##">退换货政策</a>
            </li>
          </ul>
          <p>Gucci重视个人信息保护，以确保一个安全无忧的购物环境。</p>
          <a href="##">阅读隐私政策。</a>
        </div>

        <div class="button-footer-WH">
          <div class="box1">
            <div class="wh">
              <h2>最近浏览</h2>
              <em>您浏览过的精品</em>
            </div>
          </div>
          <div class="box2">
            <div class="img">
              <a href="##">
                <img src="../../assets/6.jpg" alt="" />
              </a>
            </div>
            <div class="text1">
              <h2>GG印花压纹背包</h2>
              <span>$28500</span>
              <a href="##">立即购买 ></a>
            </div>
          </div>
          <div class="box3">
            <div class="img">
              <a href="##">
                <img src="../../assets/7.jpg" alt="" />
              </a>
            </div>
            <div class="text1">
              <h2>GG印花压纹背包</h2>
              <span>$28500</span>
              <a href="##">立即购买 ></a>
            </div>
          </div>
          <div class="box4">
            <div class="img">
              <a href="##">
                <img src="../../assets/8.jpg" alt="" />
              </a>
            </div>
            <div class="text1">
              <h2>GG印花压纹背包</h2>
              <span>$28500</span>
              <a href="##">立即购买 ></a>
            </div>
          </div>
          <div class="box5">
            <div class="img">
              <a href="##">
                <img src="../../assets/6.jpg" alt="" />
              </a>
            </div>
            <div class="text1">
              <h2>GG印花压纹背包</h2>
              <span>$28500</span>
              <a href="##">立即购买 ></a>
            </div>
          </div>
        </div>
      </div>
      <div class="botton-WH"></div>
    </div>

    <div class="content-two-wh" v-else>
      <div class="left-one-WH">
        <div class="p">
          <p>请选择商品</p>
        </div>
        <div class="h2">
          <h2>您的购物袋为空</h2>
          <a href="##">继续购物</a>
        </div>
      </div>
      <div class="rigth-two-WH">
        <div class="rigth-botton-WH">
          <div class="box1">免费配送</div>
          <div class="box2">
            <div class="span-WH">
              <span>需要帮助?</span>
              <span>+</span>
            </div>
          </div>
          <div class="box2">
            <div class="span-WH">
              <span>支付方式</span>
              <span>+</span>
            </div>
          </div>
          <div class="box2">
            <div class="span-WH">
              <span>礼品包装</span>
              <span>+</span>
            </div>
          </div>
          <div class="box2">
            <div class="span-WH">
              <span>配送方式</span>
              <span>+</span>
            </div>
          </div>
          <div class="box2 button-box2-WH">
            <div class="span-WH">
              <span>退换货政策</span>
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 轮播图 -->
      <div class="like-WH">
        <div class="like">
          <h2>您可能喜欢</h2>
        </div>
        <!-- 轮播图 -->

        <div class="imagesBox">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="box">
                  <img class="images" src="../../assets/q.jpg" alt="" />
                </div>
                <div class="details">
                  <h2 class="h2">波点和双勾领带</h2>
                  <p>1,850</p>
                  <div class="span-box">
                    <span>立即购买</span>
                    <i>></i>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="box">
                  <img class="images" src="../../assets/w.jpg" alt="" />
                </div>
                <div class="details">
                  <h2 class="h2">波点和双勾领带</h2>
                  <p>1,850</p>
                  <div class="span-box">
                    <span>立即购买</span>
                    <i>></i>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="box">
                  <img class="images" src="../../assets/e.jpg" alt="" />
                </div>
                <div class="details">
                  <h2 class="h2">波点和双勾领带</h2>
                  <p>1,850</p>
                  <div class="span-box">
                    <span>立即购买</span>
                    <i>></i>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="box">
                  <img class="images" src="../../assets/r.jpg" alt="" />
                </div>
                <div class="details">
                  <h2 class="h2">波点和双勾领带</h2>
                  <p>1,850</p>
                  <div class="span-box">
                    <span>立即购买</span>
                    <i>></i>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="box">
                  <img class="images" src="../../assets/d.jpg" alt="" />
                </div>
                <div class="details">
                  <h2 class="h2">波点和双勾领带</h2>
                  <p>1,850</p>
                  <div class="span-box">
                    <span>立即购买</span>
                    <i>></i>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="box">
                  <img class="images" src="../../assets/f.jpg" alt="" />
                </div>
                <div class="details">
                  <h2 class="h2">波点和双勾领带</h2>
                  <p>1,850</p>
                  <div class="span-box">
                    <span>立即购买</span>
                    <i>></i>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="box">
                  <img class="images" src="../../assets/g.jpg" alt="" />
                </div>
                <div class="details">
                  <h2 class="h2">波点和双勾领带</h2>
                  <p>1,850</p>
                  <div class="span-box">
                    <span>立即购买</span>
                    <i>></i>
                  </div>
                </div>
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <!-- <div class="swiper-pagination"></div> -->
            <!--如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next" @click="bbbb"></div>
            <!-- 如果需要滚动条 -->
            <!-- <div class="swiper-scrollbar"></div> -->
          </div>
        </div>
      </div>
      <div class="footer-WH">
        <div class="top-footer-WH">
          <h2>GUCCI 在线精品店全新购物体验</h2>
          <ul class="list">
            <li>
              <a href="##">Gucci正品认证</a>
            </li>
            <li class="item">
              <a href="##">免费礼品包装</a>
            </li>
            <li>
              <a href="##">退换货政策</a>
            </li>
          </ul>
          <p>Gucci重视个人信息保护，以确保一个安全无忧的购物环境。</p>
          <a href="##">阅读隐私政策。</a>
        </div>

        <div class="button-footer-WH">
          <div class="box1">
            <div class="wh">
              <h2>最近浏览</h2>
              <em>您浏览过的精品</em>
            </div>
          </div>
          <div class="box2">
            <div class="img">
              <a href="##">
                <img src="../../assets/6.jpg" alt="" />
              </a>
            </div>
            <div class="text1">
              <h2>GG印花压纹背包</h2>
              <span>$28500</span>
              <a href="##">立即购买 ></a>
            </div>
          </div>
          <div class="box3">
            <div class="img">
              <a href="##">
                <img src="../../assets/7.jpg" alt="" />
              </a>
            </div>
            <div class="text1">
              <h2>GG印花压纹背包</h2>
              <span>$28500</span>
              <a href="##">立即购买 ></a>
            </div>
          </div>
          <div class="box4">
            <div class="img">
              <a href="##">
                <img src="../../assets/8.jpg" alt="" />
              </a>
            </div>
            <div class="text1">
              <h2>GG印花压纹背包</h2>
              <span>$28500</span>
              <a href="##">立即购买 ></a>
            </div>
          </div>
          <div class="box5">
            <div class="img">
              <a href="##">
                <img src="../../assets/6.jpg" alt="" />
              </a>
            </div>
            <div class="text1">
              <h2>GG印花压纹背包</h2>
              <span>$28500</span>
              <a href="##">立即购买 ></a>
            </div>
          </div>
        </div>
      </div>
      <div class="botton-WH"></div>
    </div>
  </div>
</template>


<script>
import Swiper from "swiper";
import { mapState } from "vuex";
export default {
  data() {
    return {
      isShow: false,
      isAllChecked: true, //默认不全选
      isCheck: true, //默认不选中
      num: 1,
      isHied: true,
      isHa: true,
    };
  },

  mounted() {
    this.getShopCartList(); 
    // 滚动条的获取
    window.addEventListener("scroll", this.handleScrollx, true);
  },

  updated() {
    let mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      // 如果需要前进后退按钮
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },

  methods: {
    open() {
      this.isShow = true;
    },

    getShopCartList() {
      this.$store.dispatch("getShopCartList");
    },
   
    //全选
    checkAll() {
      this.checked = true;
    },

    clickNum(event) {
      console.log(event.target.value);
    },
    deleteBtn() {},

    deleteNum() {
      this.isShow = false;
      this.isHied = false;
    },
    lijijiesuan() {
      this.$router.push("/order");
    },
    handleScrollx() {
      // console.log("滚动高度", window.pageYOffset);
      if (window.pageYOffset > 100) {
        this.isHa = false;
      } else if(window.pageYOffset < 100){
        this.isHa = true
      }
    },
  },

  computed: {
    ...mapState({
      shopCartList: (state) => state.cart.shopCartList,
    }),
  },
};
</script>


<style lang="less" scoped>
.top {
  position: relative;
}
.dialog {
  width: 816px;
  height: 387px;
  background-color: white;
  position: fixed;
  top: 18%;
  left: 20%;
  font-size: 12px;
  color: #1b1b1b;
  line-height: 38px;
  z-index: 99;
  // transform: translate(-50%);
}
.dialog p {
  text-align: center;
}

.box {
  background-image: url(../../assets/1.jpg);
  width: 100%;
  height: 800px;
  z-index: -1;
  display: inline-block;
  background-attachment: fixed;
}
.header-WH {
  width: 100%;
  height: 130px;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  &:hover {
    background: #1b1b1b;
  }
  .header-top-WH {
    // background: pink;
    margin: 30px auto 0;
    width: 1400px;
    display: flex;
    justify-content: space-between;
    .left-WH {
      color: #fff;
      font-size: 12px;
      span {
        margin: 5px;
      }
    }
    .gucci-WH {
      font-size: 39px;
      color: white;
      margin-right: 250px;
      span {
        margin: 0 5px;
      }
    }
    .login-WH {
      a {
        margin: 0 10px;
        color: white;
      }
    }
  }
  .header-button-WH {
    width: 800px;
    // background: pink;
    margin: 20px auto 0;
    display: flex;
    justify-content: space-evenly;
    font-size: 16px;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
}
.header2-WH {
  width: 100%;
  height: 65px;
  background: #000;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  .header-button-WH {
    width: 800px;
    background: #000;
    margin: 20px auto 0;
    display: flex;
    justify-content: space-evenly;
    font-size: 16px;
    .ab{
      position: absolute;
      left: 20px;
      top: 20px;
    }
    a {
      color: #fff;
      text-decoration: none;
    }
  }
}
.content-WH {
  height: 100%;
  .top-WH {
    width: 100%;
    height: 130px;
    // background: pink;
    // z-index: 99;
    position: absolute;
    top: 180px;
    left: 0px;
    text-align: center;
    span {
      font-size: 18px;
      font-weight: 700;
      color: #e5dfd9;
    }
    p {
      font-size: 50px;
      color: white;
    }
  }
  .content-top-WH {
    float: left;
    //  background: pink;
    z-index: 99;
    width: 100%;
    position: absolute;
    top: 387px;
    background: white;
    .content-box-WH {
      position: relative;
      background: #e9e9e9;
      margin: 20px auto 0;
      width: 1450px;
      height: 1000px;
      .left-box-WH {
        width: 100%;
        height: 350px;
        .left-WH {
          width: 890px;
          height: 350px;
          // background: yellow;
          position: absolute;
          top: 50px;
          left: 70px;
          .top {
            position: relative;
            margin-bottom: 5px;
            border-bottom: 1px solid #999;
            input {
              width: 20px;
              height: 20px;
              border: none;
              outline: none;
            }
            span {
              // color: #e9e9e9;
              position: absolute;
              top: 2px;
              left: 35px;
            }
          }
          .button {
            position: relative;
            input {
              width: 20px;
              height: 20px;
              border: none;
              outline: none;
              margin-top: 50px;
            }
            .button-content {
              .img-WH {
                img {
                  position: absolute;
                  left: 50px;
                  top: 20px;
                }
              }
              .text-WH {
                width: 255px;
                height: 223px;
                // background: pink;
                position: absolute;
                left: 236px;
                top: 40px;
                a {
                  color: #000;
                  font-size: 18px;
                }
                p {
                  margin: 10px 0;
                  color: #999;
                }
                .youhuo-WH {
                  margin-top: 50px;
                  margin-bottom: 30px;
                }
                .a-WH {
                  a {
                    font-size: 12px;
                  }
                  .a2-WH {
                    border-left: 1px solid #999;
                    border-right: 1px solid #999;
                    padding: 0 20px;
                    margin: 0 20px;
                  }
                }
              }
            }
          }
        }
        .rigth-WH {
          position: absolute;
          left: 680px;
          top: 123px;
          .rigth-left-WH {
            select {
              width: 82px;
              height: 43px;
              padding: 0 10px;
              outline: none;
              border-color: #999;
            }
          }
          .rigth-top-WH {
            position: absolute;
            left: 215px;
            top: -2px;
            font-size: 18px;
            .num {
              color: #999;
            }
          }
        }
      }
      .rigth-box-WH {
        width: 345px;
        height: 482px;
        background: white;
        position: absolute;
        right: 115px;
        bottom: 449px;
        .top {
          width: 300px;
          height: 40px;
          // background: pink;
          margin: 15px auto;
          border-bottom: 1px solid #e7e7e7;
          line-height: 40px;
          .top-span {
            margin-right: 162px;
            color: #999;
          }
        }
        .content {
          width: 300px;
          height: 140px;
          // background: pink;
          margin: 15px auto;
          border-bottom: 1px solid #e7e7e7;
          // line-height: 40px;
          .content-box1-WH {
            .box1-WH {
              margin-left: 198px;
              color: #999;
            }
          }
          .content-box2-WH {
            margin: 20px 0;
            .box2-WH {
              margin-left: 245px;
              color: #999;
            }
          }
          .content-box3-WH {
            // margin: 20px 0;
            margin-bottom: 20px;
            position: relative;
            .box3-WH {
              margin-left: 225px;
              color: #999;
              font-size: 20px;
              position: absolute;
              left: 3px;
              top: -2px;
            }
          }
        }
        .content2 {
          width: 300px;
          height: 110px;
          // background: pink;
          margin: 0 auto;
          color: #999;
          border-bottom: 1px solid #e7e7e7;
          span {
            display: block;
            margin-bottom: 20px;
          }
        }
        .bottom {
          width: 300px;
          height: 150px;
          // background: pink;
          margin: 0 auto;
          .button {
            width: 300px;
            height: 45px;
            background: #000;
            color: white;
            outline: none;
            border: none;
            margin: 10px 0;
            cursor: pointer;
            display: inline-block;
            text-align: center;
            line-height: 45px;
            text-decoration: none;
            &:hover {
              background: #313131;
            }
          }
          .button2 {
            width: 300px;
            height: 45px;
            background: white;
            border: 2px solid #000;
            color: #000;
            display: inline-block;
            text-align: center;
            line-height: 45px;
            text-decoration: none;
            &:hover {
              background: #e9e9e9;
            }
          }
        }
      }
      .rigth-botton-WH {
        width: 345px;
        // height: 482px;
        background: white;
        position: absolute;
        right: 115px;
        bottom: 55px;
        // margin-bottom: 20px;
        .box1 {
          width: 100%;
          height: 58px;
          text-align: center;
          line-height: 58px;
          border-bottom: 1px solid #e7e7e7;
        }
        .box2 {
          width: 100%;
          height: 58px;
          line-height: 58px;
          border-bottom: 1px solid #e7e7e7;
          .span-WH {
            width: 300px;
            height: 100%;
            // background: pink;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            color: #999;
          }
        }
        .button-box2-WH {
          border-bottom: none;
        }
      }
    }
  }
  .footer-WH {
    width: 100%;
    height: 500px;
    // background: pink;
    position: absolute;
    left: 0px;
    top: 1500px;
    .top-footer-WH {
      padding: 10px 0 78px;
      text-align: center;
      background-color: #fff;
      position: relative;
      font-family: FuturaLT-Light, GucciChinese;
      // display: none;
      h2 {
        font-size: 22px;
        color: #1b1b1b;
        letter-spacing: 0;
        font-weight: normal;
      }
      .list {
        margin: 31px 0 32px;
        list-style: none;
        // display: inline-block;
        li {
          display: inline-block;
          padding: 0 15px;
          color: #999;
        }
        .item {
          border-right: 1px solid #999;
          border-left: 1px solid #999;
        }
      }
    }

    .button-footer-WH {
      width: 100%;
      height: 400px;
      // background: olive;
      display: flex;

      .box1 {
        width: 20%;
        text-align: center;
        border-top: 1px solid #e7e7e7;
        border-right: 1px solid #e7e7e7;
        .wh {
          width: 100%;
          height: 50px;
          // background: pink;
          margin: 179px auto;
          h2 {
            font-size: 25px;
            font-weight: normal;
            margin-bottom: 30px;
          }
          em {
            font-size: 16px;
            margin-top: 30px;
          }
        }
      }
      .box2 {
        width: 20%;
        // height: 500px;
        border-top: 1px solid #e7e7e7;
        border-right: 1px solid #e7e7e7;
        position: relative;
        .img {
          a {
            display: inline-block;
            width: 100%;
            height: 100%;
            img {
              display: inline-block;
              position: absolute;
              left: 25px;
              top: 90px;
            }
          }
        }
        .text1 {
          width: 299.77px;
          height: 150px;
          background: white;
          position: absolute;
          left: 0;
          top: 399px;
          z-index: 99;
          display: none;
          h2 {
            color: #313131;
            font-size: 14px;
            font-weight: normal;
            margin: 0 90px;
          }
          span {
            display: block;
            color: #999;
            font-size: 12px;
            margin: 30px 126px;
          }
          a {
            color: #000;
            font-size: 14px;
            margin: 30px 111px;
          }
        }
      }
      .box2:hover .text1 {
        display: block;
      }
      .box3 {
        width: 20%;
        // height: 500px;
        border-top: 1px solid #e7e7e7;
        border-right: 1px solid #e7e7e7;
        position: relative;
        .img {
          a {
            display: inline-block;
            width: 100%;
            height: 100%;
            img {
              display: inline-block;
              position: absolute;
              left: 33px;
              top: 90px;
            }
          }
        }
        .text1 {
          width: 299.77px;
          height: 150px;
          background: white;
          position: absolute;
          left: 0;
          top: 399px;
          z-index: 99;
          display: none;
          h2 {
            color: #313131;
            font-size: 14px;
            font-weight: normal;
            margin: 0 90px;
          }
          span {
            display: block;
            color: #999;
            font-size: 12px;
            margin: 30px 126px;
          }
          a {
            color: #000;
            font-size: 14px;
            margin: 30px 111px;
          }
        }
      }
      .box3:hover .text1 {
        display: block;
      }
      .box4 {
        width: 20%;
        // height: 500px;
        border-top: 1px solid #e7e7e7;
        border-right: 1px solid #e7e7e7;
        position: relative;
        .img {
          a {
            display: inline-block;
            width: 100%;
            height: 100%;
            img {
              display: inline-block;
              position: absolute;
              left: 55px;
              top: 90px;
            }
          }
        }
        .text1 {
          width: 299.77px;
          height: 150px;
          background: white;
          position: absolute;
          left: 0;
          top: 399px;
          z-index: 99;
          display: none;
          h2 {
            color: #313131;
            font-size: 14px;
            font-weight: normal;
            margin: 0 90px;
          }
          span {
            display: block;
            color: #999;
            font-size: 12px;
            margin: 30px 126px;
          }
          a {
            color: #000;
            font-size: 14px;
            margin: 30px 111px;
          }
        }
      }
      .box4:hover .text1 {
        display: block;
      }
      .box5 {
        width: 20%;
        // height: 500px;
        border-top: 1px solid #e7e7e7;
        border-right: 1px solid #e7e7e7;
        position: relative;
        .img {
          a {
            display: inline-block;
            width: 100%;
            height: 100%;
            img {
              display: inline-block;
              position: absolute;
              left: 31px;
              top: 90px;
            }
          }
        }
        .text1 {
          width: 299.77px;
          height: 150px;
          background: white;
          position: absolute;
          left: 0;
          top: 399px;
          z-index: 99;
          display: none;
          h2 {
            color: #313131;
            font-size: 14px;
            font-weight: normal;
            margin: 0 90px;
          }
          span {
            display: block;
            color: #999;
            font-size: 12px;
            margin: 30px 126px;
          }
          a {
            color: #000;
            font-size: 14px;
            margin: 30px 111px;
          }
        }
      }
      .box5:hover .text1 {
        display: block;
      }
    }
  }
  .botton-WH {
    width: 100%;
    height: 500px;
    background: #1b1b1b;
    position: absolute;
    top: 2129px;
    left: 0;
  }
}

.content-two-wh {
  z-index: 99;
  position: relative;
  top: -550px;
  left: 60px;
  float: left;
  .left-one-WH {
    width: 878px;
    height: 100px;
    // background: pink;
    .p {
      width: 100%;
      border-bottom: 1px solid #e3e3e3;
      p {
        margin: 5px 0;
      }
    }
    .h2 {
      h2 {
        font-size: 28px;
        color: #fff;
        line-height: 28px;
        letter-spacing: 1px;

        margin-top: 23px;
        margin-bottom: 39px;
      }
      a {
        width: 191px;
        height: 41px;
        background: #1b1b1b;
        border: 2px solid #1b1b1b;
        color: #e5dfd9;
        display: block;
        text-align: center;
        line-height: 41px;
        outline: none;
        text-decoration: none;
      }
    }
  }
  .rigth-two-WH {
    .rigth-botton-WH {
      width: 415px;
      height: 400px;
      background: white;
      position: absolute;
      right: 26px;
      bottom: 411px;
      // margin-bottom: 20px;
      .box1 {
        width: 100%;
        height: 58px;
        text-align: center;
        line-height: 58px;
        border-bottom: 1px solid #e7e7e7;
      }
      .box2 {
        width: 100%;
        height: 58px;
        line-height: 58px;
        border-bottom: 1px solid #e7e7e7;
        .span-WH {
          width: 300px;
          height: 100%;
          // background: pink;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          color: #999;
        }
      }
      .button-box2-WH {
        border-bottom: none;
      }
    }
  }
  .like-WH {
    padding: 10px 0 78px;
    text-align: center;
    // background-color: rgb(219, 137, 137);
    position: relative;
    top: 448px;
    font-family: FuturaLT-Light, GucciChinese;

    height: 645px;
    .like {
      width: 100%;
      h2 {
        padding: 35px 0;
        font-size: 23px;
        color: #4b4b4b;
        // text-align: center;
        font-weight: normal;
      }
    }
    .imagesBox {
      width: 100%;
      .swiper-container {
        width: 100%;
        height: 600px;
        .swiper-wrapper {
          width: 1359px;
          // background: yellow;
          margin: 0 auto;
          .swiper-slide {
            width: 25%;
            margin: 0 5px;
            .box {
              width: 100%;
              height: 400px;
              // background: green;
              background: #e6e6e6;
              .images {
                width: 100%;
              }
            }
            .details {
              width: 100%;
              height: 120px;
              // background: greenyellow;
              .h2 {
                font-size: 14px;
                color: #4b4b4b;
                letter-spacing: 1px;
                line-height: 14px;
                margin: 20px auto 10px;
                font-weight: normal;
              }
              p {
                margin: 5px auto;
                color: #666;
                font-size: 14px;
              }
              .span-box {
                span {
                  font-size: 14px;
                  color: #313131;
                  line-height: 12px;
                  margin-right: 5px;
                }
              }
            }
          }
        }
        .swiper-button-prev,
        .swiper-button-next {
          position: absolute;
          top: 193px;
        }
      }
    }
  }
  .footer-WH {
    width: 100%;
    height: 500px;
    // background: pink;
    position: absolute;
    left: 0px;
    top: 1300px;
    .top-footer-WH {
      padding: 10px 0 78px;
      text-align: center;
      background-color: #fff;
      position: relative;
      font-family: FuturaLT-Light, GucciChinese;
      // display: none;
      h2 {
        font-size: 22px;
        color: #1b1b1b;
        letter-spacing: 0;
        font-weight: normal;
      }
      .list {
        margin: 31px 0 32px;
        list-style: none;
        // display: inline-block;
        li {
          display: inline-block;
          padding: 0 15px;
          color: #999;
        }
        .item {
          border-right: 1px solid #999;
          border-left: 1px solid #999;
        }
      }
    }

    .button-footer-WH {
      width: 100%;
      height: 400px;
      // background: olive;
      display: flex;

      .box1 {
        width: 20%;
        text-align: center;
        border-top: 1px solid #e7e7e7;
        border-right: 1px solid #e7e7e7;
        .wh {
          width: 100%;
          height: 50px;
          // background: pink;
          margin: 179px auto;
          h2 {
            font-size: 25px;
            font-weight: normal;
            margin-bottom: 30px;
          }
          em {
            font-size: 16px;
            margin-top: 30px;
          }
        }
      }
      .box2 {
        width: 20%;
        // height: 500px;
        border-top: 1px solid #e7e7e7;
        border-right: 1px solid #e7e7e7;
        position: relative;
        .img {
          a {
            display: inline-block;
            width: 100%;
            height: 100%;
            img {
              display: inline-block;
              position: absolute;
              left: 25px;
              top: 90px;
            }
          }
        }
        .text1 {
          width: 299.77px;
          height: 150px;
          background: white;
          position: absolute;
          left: 0;
          top: 399px;
          z-index: 99;
          display: none;
          h2 {
            color: #313131;
            font-size: 14px;
            font-weight: normal;
            margin: 0 90px;
          }
          span {
            display: block;
            color: #999;
            font-size: 12px;
            margin: 30px 126px;
          }
          a {
            color: #000;
            font-size: 14px;
            margin: 30px 111px;
          }
        }
      }
      .box2:hover .text1 {
        display: block;
      }
      .box3 {
        width: 20%;
        // height: 500px;
        border-top: 1px solid #e7e7e7;
        border-right: 1px solid #e7e7e7;
        position: relative;
        .img {
          a {
            display: inline-block;
            width: 100%;
            height: 100%;
            img {
              display: inline-block;
              position: absolute;
              left: 33px;
              top: 90px;
            }
          }
        }
        .text1 {
          width: 299.77px;
          height: 150px;
          background: white;
          position: absolute;
          left: 0;
          top: 399px;
          z-index: 99;
          display: none;
          h2 {
            color: #313131;
            font-size: 14px;
            font-weight: normal;
            margin: 0 90px;
          }
          span {
            display: block;
            color: #999;
            font-size: 12px;
            margin: 30px 126px;
          }
          a {
            color: #000;
            font-size: 14px;
            margin: 30px 111px;
          }
        }
      }
      .box3:hover .text1 {
        display: block;
      }
      .box4 {
        width: 20%;
        // height: 500px;
        border-top: 1px solid #e7e7e7;
        border-right: 1px solid #e7e7e7;
        position: relative;
        .img {
          a {
            display: inline-block;
            width: 100%;
            height: 100%;
            img {
              display: inline-block;
              position: absolute;
              left: 55px;
              top: 90px;
            }
          }
        }
        .text1 {
          width: 299.77px;
          height: 150px;
          background: white;
          position: absolute;
          left: 0;
          top: 399px;
          z-index: 99;
          display: none;
          h2 {
            color: #313131;
            font-size: 14px;
            font-weight: normal;
            margin: 0 90px;
          }
          span {
            display: block;
            color: #999;
            font-size: 12px;
            margin: 30px 126px;
          }
          a {
            color: #000;
            font-size: 14px;
            margin: 30px 111px;
          }
        }
      }
      .box4:hover .text1 {
        display: block;
      }
      .box5 {
        width: 20%;
        // height: 500px;
        border-top: 1px solid #e7e7e7;
        border-right: 1px solid #e7e7e7;
        position: relative;
        .img {
          a {
            display: inline-block;
            width: 100%;
            height: 100%;
            img {
              display: inline-block;
              position: absolute;
              left: 31px;
              top: 90px;
            }
          }
        }
        .text1 {
          width: 299.77px;
          height: 150px;
          background: white;
          position: absolute;
          left: 0;
          top: 399px;
          z-index: 99;
          display: none;
          h2 {
            color: #313131;
            font-size: 14px;
            font-weight: normal;
            margin: 0 90px;
          }
          span {
            display: block;
            color: #999;
            font-size: 12px;
            margin: 30px 126px;
          }
          a {
            color: #000;
            font-size: 14px;
            margin: 30px 111px;
          }
        }
      }
      .box5:hover .text1 {
        display: block;
      }
    }
  }
}
</style>
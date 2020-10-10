<template>
  <div>
    <Register v-show="dialogVisible=false" />
    <div class="login-container">
      <div class="login-wrap">
        <div class="login-header">
          <span class="login-text">登录</span>
        </div>
      </div>
      <div class="login-content">
        <div class="login-area">
          <div class="login-left">
            <div v-if="flag" class="login-chenge">
              <div class="login-number">
                <div class="text">手机号码</div>
                <input type="text" placeholder="请输入11位手机号码" class="login-phone" />
                <span class="login-span" style="margin-bottom: 10px">请输入11位手机号码</span>
              </div>
              <div class="login-verify">
                <div class="text">短信验证</div>
                <input type="text" placeholder="请输入短信验证码" class="login-note" />
                <a href="##" class="login-skip">发送验证码</a>
                <span class="login-span" style="margin-top: 10px">请输入短信验证码</span>
              </div>

              <button class="login-btn">登录</button>
              <a href="##" class="login-skip possword" @click.prevent="flag=false">密码登录</a>
            </div>
            <div v-else class="login-check">
              <div class="login-call">
                <div class="text">手机号码/电子邮箱</div>
                <input type="text" placeholder="请输入电子邮件或手机号" class="login-mail" />
                <span class="login-span" style="margin-bottom: 10px">请输入手机号码/电子邮箱</span>
              </div>
              <div>
                <div class="text">密码</div>
                <input type="text" class="login-mail" />
                <span class="login-span">密码不能为空</span>
              </div>
              <div class="login-line">
                <input type="checkbox" />

                <span class="text">记住我</span>
                <span class="font">忘记密码？</span>
              </div>
              <button class="login-btn">登录</button>
              <a href="##" class="login-skip possword" @click.prevent="flag=true">手机验证码登录</a>
            </div>
          </div>
          <div class="login-right">
            <h3 class="login-file">没有账户？</h3>
            <p class="login-textfile">拥有古驰账户您将获得以下权利：</p>
            <ul class="login-ul">
              <li class="login-li">保存您的心愿清单</li>
              <li class="login-li">个性化您的推荐内容</li>
              <li class="login-li">订单寄送追踪及退换货管理</li>
            </ul>
            <button class="login-accout">创建账号</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Login",
 
  data() {
    return {
      flag: true,
      register: false,
      dialogVisible:true,
    };
  },
  methods: {
  
  }
       
     

  
}


</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  body {
    width: 100%;
    height: 100%;
    .login-container {
      background-color: #e7e7e7;
      margin: 15px;
      height: 750px;

      .login-wrap {
        height: 126px;
        width: 770px;
        margin: 0 auto;
        .login-header {
          font-size: 30px;
          text-align: center;
          padding: 60px 0 19px;
          border-bottom: 1px solid #dbd8d6;
          position: relative;

          .login-text:before {
            content: url(./images/icon@2x.png);
            color: #999;
            font-weight: 500;
            position: absolute;
            bottom: -11px;
            right: 380px;
            background: none;
            font-style: normal;
            display: block;
            font-size: 12px;
            transform: scale(0.83333);
          }
        }
      }
      .login-content {
        padding: 44px 22px 15px 55px;
        margin: 0 auto;
        height: 126px;
        width: 710px;

        .login-area {
          display: flex;

          .login-left {
            width: 284px;
            padding-right: 50px;
            border-right: 1px solid #fff;

            .text {
              font-family: FuturaLT-Light, GucciChinese;
              font-size: 12px;
              color: #1b1b1b;
              letter-spacing: 0.5px;
              margin-bottom: 10px;
            }
            .login-span {
              display: block;
              font-size: 12px;
              color: #d24e55;
            }
            .login-phone {
              width: 100%;
              height: 37px;
              line-height: 24px;
              padding: 12px 14px 11px;
              margin-bottom: 12px;
              border: none;
              box-sizing: border-box;
            }
            .login-note {
              border: none;
              height: 37px;
              line-height: 24px;
              padding: 12px 14px 11px;
              box-sizing: border-box;
            }
            .login-skip {
              font-family: FuturaLT-Book, GucciChinese;
              font-size: 12px;
              color: #1b1b1b;
              letter-spacing: 0.5px;
              line-height: 37px;
              cursor: pointer;
              text-decoration: underline;
              white-space: nowrap;
              padding-left: 15px;
            }
            .login-btn {
              display: block;
              background: #313131;
              border: 2px solid #313131;
              color: #e5dfd9;
              width: 100%;
              height: 36px;
              line-height: 36px;
              margin-top: 32px;
              font-size: 12px;
            }
            .possword {
              display: block;
              text-align: center;
              margin-top: 14px;
            }
            .login-check {
              width: 284px;

              .login-mail {
                width: 100%;
                height: 37px;
                line-height: 24px;
                padding: 12px 14px 11px;
                margin-bottom: 12px;
                border: none;
                box-sizing: border-box;
              }
              .login-line {
                width: 100%;

                .text {
                  margin-left: 10px;
                }
                .font {
                  font-size: 12px;
                  color: #999;
                  position: relative;
                  right: -168px;
                }
              }
            }
          }
          .login-right {
            padding-left: 50px;
            width: 225px;
            .login-file {
              font-family: FuturaLT-Book, GucciChinese;
              font-size: 20px;
              color: #4b4b4b;
              letter-spacing: 1px;
              line-height: 20px;
              font-weight: 500;
            }
            .login-textfile {
              font-family: FuturaLT-Book, GucciChinese;
              font-size: 14px;
              color: #313131;
              letter-spacing: 1px;
              line-height: 14px;
              margin-top: 30px;
              margin-bottom: 10px;
            }
            .login-ul {
              list-style: none;
              position: relative;

              .login-li {
                display: block;
                font-family: FuturaLT-Light, GucciChinese;
                font-size: 12px;
                color: #313131;
                letter-spacing: 1px;
                line-height: 12px;
                margin-top: 20px;
                padding-left: 12px;
                position: relative;
              }
              .login-li:before {
                content: "";
                width: 4px;
                height: 4px;
                position: absolute;
                top: 3px;
                left: 3px;
                background: #999;
                border-radius: 50%;
              }
            }
            .login-accout {
              display: block;
              width: 226px;
              height: 36px;
              text-align: center;
              background: #e7e7e7;
              border: 2px solid #1b1b1b;
              font-size: 12px;
              font-weight: 400;
              margin-top: 30px;
            }
          }
        }
      }
    }
  }
}
</style>
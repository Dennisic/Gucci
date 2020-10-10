<template>
  <div>
    

    <el-dialog
      title="创建您的账户"
      :visible.sync="dialogVisible"
      width="600px"
      :modal-append-to-body="false"
      class="register-content"
      :center="true"
    >
      <span class="register-wire"></span>
      <el-form status-icon label-width="100px" class="demo-ruleForm">
        <div class="register-number">
          <div class="text">手机号码</div>
          <input type="text" placeholder="请输入11位手机号码" class="register-phone" />
          <div class="register-span">请输入11位手机号码</div>
        </div>
        <div class="register-verify">
          <div class="text">短信验证</div>
          <input type="text" placeholder="请输入短信验证码" class="register-note" />
          <a href="##" class="register-skip">发送验证码</a>
          <div class="register-span">请输入短信验证码</div>
        </div>
        <div class="register-possword">
          <div class="text">设置密码(非必填)</div>
          <input type="text" class="pwd" placeholder="至少6个字符含数字大小写字母" />

          <span
            :class="isShow?'iconfont iconeye':'iconfont iconEyeblind'"
            class="register-picture"
            @click="isShow=!isShow"
          ></span>
        </div>
        <div class="register-agreement">
          <input type="checkbox" @click="showEmile" ref="input"/>
          <span class="register-text">我愿意接受Gucci邮件获取新款推荐及更多内容</span>
        </div>
        <div class="register-postbox" v-show="showE">
          <div class="register-electron">电子邮箱</div>
          <input type="text" placeholder="请输入电子邮箱地址" class="register-mail" />
          <span class="register-text">请输入电子邮箱地址</span>
        </div>
        <div class="register-agreement">
          <input type="checkbox" />
          <span class="register-text">
            <span>创建账户代表您已接受Gucci的</span>
            <a href="##">隐私政策</a>
            <span>和</span>
            <a href="##">销售条款</a>
          </span>
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <button class="register-btn">创建账户</button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      dialogVisible:true,
      showE:false,

    }
  },
  methods: {
   

        showEmile(){
          let a = this.$refs.input;
          if(a.checked === true){
            this.showE = true;
          } else {
            this.showE = false;
          }
          //  if(a.checked === "checked"){
          //   this.showE = !this.showE;

          // }
    },


  },
};
</script>

<style lang="less" scoped>
.register-content {
  .register-wire {
    width: 500px;
    height: 1px;
    background: #e7e7e7;
    display: inline-block;
    position: relative;
    right: -24px;
    top: -20px;
  }
  .register-wire:before {
    content: url(./images/icon@2x.png);
    color: #999;
    font-weight: 500;
    position: absolute;
    bottom: -11px;
    right: 240px;
    background: none;
    font-style: normal;
    display: block;
    font-size: 12px;
    transform: scale(0.83333);
  }
  .demo-ruleForm {
    // width: 100%;
    // position: relative;
    // right: -96px;
    .register-number {
      .text {
        font-size: 12px;
        color: #1b1b1b;
        margin-bottom: 10px;
      }
      .register-phone {
        height: 37px;
        line-height: 16px;
        color: #1b1b1b;
        width: 392px;
        box-sizing: border-box;
        padding: 0 12px;
        font-size: 12px;
        border: none;
        background: #f5f5f5;
        margin-bottom: 10px;
      }

      .register-span {
        font-size: 12px;
        color: #d24e55;
        margin-bottom: 20px;
      }
    }
    .register-verify {
      .text {
        font-size: 12px;
        color: #1b1b1b;
        margin-bottom: 10px;
      }
      .register-note {
        width: 187px;
        height: 37px;
        line-height: 16px;
        color: #1b1b1b;
        box-sizing: border-box;
        padding: 0 12px;
        font-size: 12px;
        border: none;
        background: #f5f5f5;
        margin-bottom: 10px;
      }
      .register-skip {
        font-size: 12px;
        color: #1b1b1b;
        line-height: 37px;
        cursor: pointer;
        margin-left: 16px;
      }
      .register-span {
        font-size: 12px;
        color: #d24e55;
        margin-bottom: 20px;
      }
    }
    .register-possword {
      .text {
        font-size: 12px;
        color: #1b1b1b;
        margin-bottom: 10px;
      }
      .pwd {
        border: none;
        width: 392px;
        height: 37px;
        line-height: 16px;
        color: #1b1b1b;
        box-sizing: border-box;
        padding: 0 12px;
        font-size: 12px;
        border: none;
        background: #f5f5f5;
        margin-bottom: 10px;
      }
      .register-picture {
        font-size: 14px;
        color: #999;
        position: relative;
        left: -20px;
      }
    }
    .register-agreement {
      position: relative;
      .checkbox {
        border: 0;
        background: #f5f5f5;
      }
      .register-text {
        font-size: 12px;
        color: #4b4b4b;
        a {
          color: #4b4b4b;
        }
      }
     
    }
     .register-postbox {
        .register-electron {
          font-size: 12px;
          color: #1b1b1b;
          margin: 10px 0 10px 0;
        }
        .register-mail {
          height: 37px;
          line-height: 16px;
          color: #1b1b1b;
          width: 392px;
          box-sizing: border-box;
          padding: 0 12px;
          font-size: 12px;
          border: none;
          background: #f5f5f5;
          margin-bottom: 10px;
        }
        .register-text {
          display: block;
          font-size: 12px;
          color: #d24e55;
          margin-bottom: 20px;
        }
      }
  }
  .dialog-footer {
    .register-btn {
      width: 124px;
      background: #1b1b1b;
      border: none;
      color: #e5dfd9;
      padding: 0 5px;
      height: 40px;
      line-height: 36px;
      font-size: 12px;
      text-align: center;
    }
  }
}
</style>
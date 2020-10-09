<template>
  <div class="body">
    <div class="container" style="fontSize:12px">
      <div class="phoneInfo">
        <span>手机号码</span>
        <span>我们将通过以下手机号码向您发送订单相关信息</span>
        <span style="color:#999;fontStyle:italic">13700000000</span>
      </div>
      <div class="address">
        <div class="address-top">
          <span class="iconfont icon-1" style="font-size: 28px;"></span>
          <span
            style="padding-left:10px;font-size: 28px;color: #313131;font-weight: normal;"
            >配送地址</span
          >
        </div>
        <p class="edit">
          <span>
            <span class="iconfont icon-quanzi" style="margin-right:10px"></span>
            <span>1224345664</span>
          </span>
          <a href="javascript:;" style="color:#313131">编辑</a>
        </p>
        <div class="address-loc">
          <p>
            <span>广东省 深圳市 宝安区</span>
            <span>规划规范根据经验</span>
            <p style="color:#999">+86 <em>13700000000</em></p>
          </p>
          <p>默认地址</p>
        </div>
      </div>
      <div class="addAddress">
        <span class="iconfont icon-quan" style="margin-right:10px"></span>
        <span>添加新地址</span>
      </div>
      <p style="margin-top:40px">配送方式</p>
      <div class="send">
        <p>
          <span class="iconfont icon-quanzi" style="margin-right:10px"></span
          ><span style="margin-right:10px">普通快递</span
          ><span class="iconfont icon-wenhao"></span
          ><span style="margin-left:100px">免费</span>
        </p>
      </div>
      <p style="margin:20px 0 30px 0;color:#999">
        <em>
          部分城市支持当日达、次日达；当日达请于当日9:30前提交订单，次日达请于当日15:30前提交订单。
        </em>
      </p>

      <div>
        <p>可选配送时间</p>
        <select class="sendDay">
          <option>工作日、非工作日均可配送</option>
          <option>工作日配送</option>
          <option>非工作日配送</option>
        </select>
        <select class="sendTime">
          <option>全天时段均可配送</option>
          <option>上午9:00~12:00配送</option>
          <option>下午13:00~18:00配送</option>
        </select>
        <p style="color:#999">
          <em>
            我们会竭力按照您指定的时间送达，若因天气、交通等不可抗力因素出现延误，请您谅解。如有疑问请致电400.8210.582咨询。
          </em>
        </p>
      </div>
      <div style="margin-top:30px">
        <button
          style="width:128px;height:40px;background:black;color:white;border:none;outline:none;margin-right:60px"
        >
          继续支付
        </button>
        <a style="color:#999">或添加礼品留言></a>
      </div>
      <p style="margin-bottom:40px">
        所有商品都免费提供Gucci礼品包装<span
          class="iconfont icon-wenhao"
          style="margin-left:10px"
        ></span>
      </p>
      <div class="giftCart">
        <span
          class="iconfont icon-2"
          style="fontSize:30px;margin-right:20px"
        ></span>
        <span>礼品卡片和包装</span>
      </div>
      <div class="payWay">
        <span
          class="iconfont icon-3"
          style="fontSize:30px;margin-right:20px"
        ></span>
        <span>支付方式</span>
      </div>
      <div class="rightContainer">
        <ul class="ShopInfo">
          <li class="one" style="height:60px;line-height:80px;text-align:center;padding:20px;border-bottom:none">
            <div style="border-bottom:1px solid #eee">
              <span class="iconfont icon-bao"></span><span> 1</span>  件商品
            </div>
          </li>
          <li style="padding:20px;border-bottom:none">
            <div style="border-bottom:1px solid #eee;display:flex;">
              <div>
              <img src="../../../public/images/X64.jpg" alt="">
              </div>
              <div class="bagInfos">
                <span class="bagInfo" style="font-weight:700;color:black">Gucci 马衔扣1955系列小号手提包 </span>
                <span>数量：1</span>
                <span style="font-weight:700;color:black">包</span>
                <p><label>款号#</label> <span>621220 92TCG 8563</span></p>
                <p><label>款式：</label> <span>高级人造帆布</span></p>
                <p style="display:flex;justify-content:space-between"><label>有货</label> <span style="font-weight:700;color:black">￥19000</span></p>
              </div>
            </div>
          </li>
          <li style="padding:0 20px;border-bottom:none;color:#999">
            <div style="height:100px;border-bottom:1px solid #eee;margin-bottom:10px;">
              <p style="display:flex;justify-content:space-between"><span class="spuLeft">商品总计</span><span>￥19000</span></p>
              <p style="display:flex;justify-content:space-between"><span>运费</span><span>免费</span></p>
              <p style="display:flex;justify-content:space-between"><span>总计</span><span>￥19000</span></p>
            </div>
          </li>
          <li style="padding:0 20px;height:90px">
            <div style="text-align:center;color:#999">
              <p>
                <i class="iconfont "></i>
              <span>提交订单即表明您接受我们的</span>
              <a style="color:black"
                href="https://www.gucci.cn/zh/about/privacy-cookies"
                target="_blank"
                >隐私政策</a
              >和<a style="color:black"
                href="https://www.gucci.cn/zh/about/legal-section"
                target="_blank"
                >销售条款</a
              >
              </p>
              <button style="width:100%;height:40px;background:#e5dfd9;color:#999;border:none;">提交订单</button>
            </div>
          </li>
          <li style="padding:20px;color:#999">
            <div style="height:130px;">
              <p>说明</p>
              <em>
                在线支付订单提交之后15分钟内未付款，订单将被系统自动取消，请您尽快完成支付以确保商品能及时送达，有货商品和门店配货商品是分开寄出。
              </em>
              <p style="margin-top:40px;text-align:center;color:black"><span class="iconfont icon-youjian"></span><span style="margin:5px">免费配送</span></p>
            </div>
          </li>
          <li style="display:flex;justify-content:space-between"><span>需要帮助？</span><i>+</i></li>
          <li style="display:flex;justify-content:space-between"><span>支付方式</span><i>+</i></li>
          <li style="display:flex;justify-content:space-between"><span>礼品包装</span><i>+</i></li>
          <li style="display:flex;justify-content:space-between"><span>配送方式</span><i>+</i></li>
          <li style="display:flex;justify-content:space-between"><span>退换货政策</span><i>+</i></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order",
};
</script>

<style lang="less" scoped>
i {
  font-style: normal;
}
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.body {
  width: 100%;
  background-color: white;
}
.body .rightContainer {
  width: 345px;
  height: 950px;
  background-color: white;
}
.body .container {
  padding-left: 60px;
  padding-top: 20px;
  height: 1000px;
  margin: 20px;
  background-color: #eee;
}
.body .container .phoneInfo {
  width: 720px;
  height: 60px;
  padding: 16px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.body .container .phoneInfo span {
  font-size: 12px;
  color: #313131;
}

.address .address-top {
  margin-top: 30px;
  margin-bottom: 40px;
}
.address-loc {
  padding-left: 28px;
  margin-bottom: 60px;
}
.bagInfos{
  color: #999;
}

.edit {
  width: 263px;
  height: 18px;
  color: #313131;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
}
.sendDay {
  width: 230px;
  height: 37px;
  border: none;
  background-color: white;
}
.sendTime {
  margin-left: 20px;
  width: 230px;
  height: 37px;
  border: none;
  background-color: white;
}
.giftCart {
  width: 820px;
  height: 109px;
  line-height: 109px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  font-size: 28px;
  color: #999;
}
.payWay {
  margin-top: 40px;
  font-size: 28px;
  color: #999;
}

.rightContainer {
  float: right;
  margin-top: -940px;
  margin-right: 50px;
}

.ShopInfo {
}
.ShopInfo li {
  border-bottom: 1px solid #eee;
  padding: 20px;
  color:#999;
}
</style>

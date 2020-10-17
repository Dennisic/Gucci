<template>
    <div class="detailWrapeer">
        <!-- 右侧固定块 -->
        <div class="detailInfo-Wrapper flxed">
            <div class="detailInfo">
                <h1 class="goodName">GG Marmont系列迷你手提包<span class="iconfont icon-aixin"></span></h1>
                <div class="goodPrice">
                    <i>￥</i>
                    <span>16,500</span>
                </div>
                <div class="goodInfo">
                    <div class="numberTitle">
                        <span>款号547260 DTDIP 4928</span>
                    </div>
                    <div class="eco">
                        <div class="eco-1"><span class="iconfont icon-diqiu" style="font-size: 25px"></span></div>
                        <span class="ec0-2">责任</span>
                    </div>
                    <div class="goodSelect">
                        <div class="good-style">
                            <span class="style1">
                                <img src="./images/cc10.jpg" alt="">
                            </span>
                            <a class="style2" href="##">淡蓝色皮革</a>
                            <a class="style3" href="##">5个款式 ></a>
                        </div>
                    </div>
                    <p class="info1">有货</p>
                    <p class="info2">预计发货后2-4个工作日送达</p>
                    <el-button class="good-commit" :plain="true" @click="addShoping">加入购物袋</el-button>
                    <!--                    <a class="good-commit" href="##" @click="addShoping">加入购物袋</a>-->
                    <div class="help1">
                        <a class="help1-left" href="##"><span class="iconfont icon-weibiaoti-" style="padding: 0 2px 0 0"></span>在线顾问</a>
                        <i class="help1-center">|</i>
                        <a class="hlep1-right" href="##"><span class="iconfont icon-phone" style="padding-right: 5px"></span>选购咨询 400.8210.582</a>
                    </div>
                    <div class="help2">分享： <span class="iconfont icon-weixin"></span><span class="iconfont icon-weibo" style="padding-left: 20px"></span></div>
                    <div class="help3">产品细节</div>
                    <div class="help4">
                        <span class="help-info"><i class="iconfont icon-dingwei"></i>查找有货直营店</span>
                        <span>选择标准配送，免运费</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 商品上下图 -->
        <div>
            <ul class="slideshow">
                <li>
                    <img src="./images/cc1.jpg" alt="" width="40%">
                </li>
                <li>
                    <img src="./images/cc2.jpg" alt="" width="40%">
                </li>
                <li>
                    <img src="./images/cc3.jpg" alt="" width="40%">
                </li>
                <li>
                    <img src="./images/cc4.jpg" alt="" width="40%">
                </li>
                <li>
                    <img src="./images/cc5.jpg" alt="" width="40%">
                </li>
                <li>
                    <img src="./images/cc6.jpg" alt="" width="40%">
                </li>
                <li>
                    <img src="./images/cc7.jpg" alt="" width="40%">
                </li>
                <li>
                    <img src="./images/cc8.jpg" alt="" width="40%">
                </li>
                <li>
                    <img src="./images/cc9.jpg" alt="" width="40%">
                </li>
            </ul>
        </div>
        <!-- 底部信息块 -->
        <div class="footFixed-wrapper">
            <div class="footFixed">
                <ul>
                    <li class="detailTitle">
                        <a href="##" class="title">产品细节<i class="iconfont icon-jianhao"></i></a>
                        <div class="detailInfoWrapeer">
                            <div class="detailInfo">
                                <p class="info1">这款GG
                                    Marmont系列浅蓝色迷你手提包整体造型显得柔和而不失挺括，设计有超大翻盖配以双G配件。皮革提手与链条式肩带设计相得益彰，不仅增加了穿戴的舒适感，还可实现多种造型选择。包身采用绗缝V型图案皮革制作而成，背面饰有心形图案，宛如马卡龙般的缤纷色调为2020早秋系列再添一抹亮眼的笔触。</p>
                                <ul class="info2">
                                    <li>淡蓝色绗缝V型图案皮革，饰心形图案</li>
                                    <li>钯金色调配件</li>
                                    <li>麂皮质感超细纤维衬里</li>
                                    <li>双G</li>
                                    <li>内部开口袋</li>
                                    <li>皮革提手（6厘米高）</li>
                                    <li>饰皮革细节可拆卸链式肩带（55厘米高）</li>
                                    <li>重量：约0.6千克</li>
                                    <li>21厘米（宽）x 15.5厘米（高）x 8厘米（深）</li>
                                    <li>意大利创作</li>
                                    <li>模特身高177厘米</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="detailSpan">配送信息<span class="iconfont icon-jiahao" style="float: right; padding-right: 20px"></span></li>
                    <li class="detailSpan2">礼品包装<span class="iconfont icon-jiahao" style="float: right; padding-right: 20px"></span></li>
                </ul>
            </div>
        </div>
        <!-- 最近浏览 -->
        <div class="RecentLook">
            <div class="RecentLook-left">
                <div class="contentWrapper">
                    <h2 class="footTitle">最近浏览</h2>
                    <i class="iconfont icon-lingxing"></i>
                    <p class="footContent">您浏览过的精品</p>
                </div>
            </div>
            <div class="RecentLook-right">
                <ul>
                    <li class="RecentLook-detail" @mouseenter="onMouseEnter(item)" @mouseleave="onMouseEnter(item)" v-for="item in items" :key="item.id">
                        <div class="RecentLook-img">
                            <img :src="item.images" alt="">
                        </div>
                        <div class="RecentLook-text" v-show="item.showSlide">
                            <span class="iconfont icon-aixin"></span>
                            <h2 class="tit">{{item.title}}</h2>
                            <div class="pri">￥{{item.price}}</div>
                            <div class="buy">立即购买<span class="iconfont icon-iconfonti" style=""></span></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Detail",
        data() {
            return {
                items: [
                    {
                        images: require('./images/mini.jpg'),
                        title: "GG Marmont系列迷你手提包",
                        price: 19000,
                        showSlide: false,
                        id: 1
                    },
                    {
                        images: require('./images/mini.jpg'),
                        title: "GG Marmont系列迷你手提包",
                        price: 19000,
                        showSlide: false,
                        id: 2
                    },
                    {
                        images: require('./images/mini.jpg'),
                        title: "GG Marmont系列迷你手提包",
                        price: 19000,
                        showSlide: false,
                        id: 3
                    },
                    {
                        images: require('./images/mini.jpg'),
                        title: "GG Marmont系列迷你手提包",
                        price: 19000,
                        showSlide: false,
                        id: 4
                    },
                ]
            }
        },
        methods: {
            addShoping() {
                this.$message('添加购物车成功');
                this.$router.push('/cart')
            },
            onMouseEnter(item) {
                item.showSlide = !item.showSlide
            }
        }
    }
</script>

<style lang="stylus" scoped>
    a:hover
        color: #999

    .detailWrapeer
        width 100%
        height 100%
        background-color #E6E6E6

        .slideshow
            padding-left 150px

        .detailInfo-Wrapper
            position: -webkit-sticky;
            position: sticky;
            margin-bottom 630px
            float right
            width 510px
            height 540px
            /*position: fixed*/
            /*top: 196px*/
            /*right: 15px*/
            z-index: 6
            width: 37.532808%

            .detailInfo
                width 306px
                height 509px

                .goodName
                    position relative
                    font-family: FuturaLT-Light, STHeiti Light, Droid Sans Fallback, Microsoft YaHei, SimHei, Heiti SC
                    font-size: 20px
                    color: #1b1b1b
                    letter-spacing: 2px
                    position: relative
                    margin-top: 7px
                    padding-right: 20px
                    font-weight: 300

                    .icon-aixin
                        position absolute
                        right -6px
                        top 2px

                .goodPrice
                    font-family: FuturaLT-Light, GucciChinese
                    font-size: 20px
                    color: #4b4b4b
                    letter-spacing: 1px
                    margin-top: 7px
                    padding-bottom 16px
                    border-bottom 1px solid #c8c6c5

                .goodInfo
                    .numberTitle
                        margin-top 12px
                        font-family: FuturaLT-Book, GucciChinese
                        font-size: 12px
                        color: #888
                        letter-spacing: 0

                    .eco
                        position relative
                        width 40px
                        height 40px
                        line-height 40px
                        text-align center
                        background-color white
                        border-radius 50%
                        margin 15px 0 40px 0

                        .ec0-2
                            position absolute
                            left 8px
                            bottom -34px
                            font-size: 10px
                            font-weight 200
                            color: #1b1b1b

                    .goodSelect
                        border: 1px solid #cacaca
                        box-sizing border-box
                        padding: 3.5px
                        cursor: pointer
                        margin-bottom: 15px

                        .good-style
                            height 36px
                            line-height 36px

                            .style1
                                vertical-align top

                            .style2
                                margin-left 22px

                            .style3
                                display inline
                                padding-left 10px
                                border-left 1px solid #c8c6c5
                                margin-left 110px

                    .info1
                        font-size: 12px
                        color: #000
                        letter-spacing: 0
                        line-height: 12px
                        display: block
                        padding-top 10px
                        margin-bottom: 10px
                        font-style: normal

                    .info2
                        color #666

                    .good-commit
                        display block
                        background: #1b1b1b
                        border: 2px solid #1b1b1b
                        box-sizing border-box
                        color: #e5dfd9
                        zoom: 1
                        width 306px
                        height 40px
                        font-weight: 400
                        vertical-align: middle
                        min-width: 128px
                        padding: 0 5px
                        margin-top 15px
                        height: 40px
                        line-height: 36px
                        font-size: 12px
                        text-align: center

                        &:hover
                            background: #313131
                            border: 2px solid #313131
                            color: #e5dfd9

                    .help1
                        height 45px
                        line-height 45px
                        border-bottom 1px solid #c8c6c5

                        .help1-left
                            display inline-block
                            margin 0 20px 0 35px

                        .help1-center
                            margin-right 25px

                    .help2
                        position relative
                        height 45px
                        line-height 45px
                        border-bottom 1px solid #c8c6c5
                        padding-left 15px

                    .help3
                        position relative
                        height 35px
                        line-height 35px
                        border-bottom 1px solid #c8c6c5
                        padding-left 15px

                    .help4
                        position relative
                        height 30px
                        line-height 30px
                        font-size: 12px
                        color: #888
                        letter-spacing: 0

                        .help-info
                            margin 0 50px 0 16px

                            .icon-dingwei
                                margin-right 10px


        .footFixed-wrapper
            width 97%
            height 794px
            background rgba(252, 252, 252, .3)
            padding 40px 0 30px 55px

            .footFixed
                float left
                width 50%
                height 560px

                .detailTitle
                    .title
                        font-size: 12px
                        line-height: 12px
                        color #1b1b1b
                        letter-spacing: 0
                        display: block
                        width: 100%
                        padding: 31px 15px 29px 0px
                        border-top 1px solid #c8c6c5

                        .icon-jianhao
                            float right
                            color #1b1b1b
                            font-size 16px

                    .detailInfoWrapeer
                        width 548px
                        height 280px

                        .detailInfo
                            display flex
                            flex-direction row
                            width 100%
                            height 100%

                            .info1
                                width 230px
                                font-size: 12px
                                color: #4b4b4b
                                letter-spacing: 0
                                line-height 26px
                                margin: 0 30px 30px 0

                            .info2
                                width 230px
                                height 280px
                                font-size: 12px
                                color: #4b4b4b
                                letter-spacing: 0
                                line-height 24px

                .detailSpan
                    margin-top 60px
                    width 100%
                    height 73px
                    line-height 73px
                    color: #999
                    border-top 1px solid #c8c6c5
                    border-bottom 1px solid #c8c6c5
                    padding-left 15px

                .detailSpan2
                    width 100%
                    height 73px
                    line-height 73px
                    color: #999
                    border-bottom 1px solid #c8c6c5
                    padding-left 15px


    .RecentLook
        width 100%
        height 370px
        background #fff
        border: 1px solid #e7e7e7
        box-sizing border-box

        .RecentLook-left
            float left
            position relative
            width 20%
            height 100%

            .contentWrapper
                position absolute
                top: 50%
                left: 50%
                transform: translate(-50%, -50%)
                text-align: center

                .footTitle
                    font-size: 20px
                    color: #313131
                    font-weight 400
                    letter-spacing: 1px
                    margin-bottom: 8px

                .icon-lingxing
                    font-size 12px
                    color #999

                .footContent
                    margin-top: 11px
                    font-style: italic
                    font-size: 14px
                    color: #4b4e4b

        .RecentLook-right
            width 80%
            float right

            .RecentLook-detail
                position relative
                cursor: pointer
                float left
                width 25%
                text-align center
                padding-top 80px
                height 370px
                border-left 1px solid #e7e7e7
                box-sizing border-box

                .RecentLook-img
                    display: inline-block
                    vertical-align: middle
                    /*position absolute*/
                    /*left 80px*/
                    /*bottom 40px*/

                .RecentLook-text
                    position absolute
                    bottom -128px
                    left 0
                    background #fff
                    width 100%
                    height 130px
                    text-align center

                .icon-aixin
                    position absolute
                    top -350px
                    right 20px

                .tit
                    font-size: 14px;
                    color: #313131;
                    font-weight 400
                    letter-spacing: 1px;
                    line-height: 20px;
                    height: auto;
                    padding: 12px 0 25px 0;

                .pri
                    font-size: 12px;
                    color: #999;
                    letter-spacing: 1px;
                    line-height: 14px;

                .buy
                    margin-top 16px
                    margin-left 14px
                    font-size: 13px;
                    color: #1b1b1b;
                    letter-spacing: 1px;

                    &:hover
                        color #999

                    .icon-iconfonti
                        position relative
                        top 1px
                        left 0

    .flxed {
        position: fixed
        /*top: 196px*/
        /*right: 15px*/
        top 21%
        right 0
    }
</style>

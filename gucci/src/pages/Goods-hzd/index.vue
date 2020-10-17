<template>
    <div class="goodsWrapper">
        <!-- 商品导航 -->
        <div class="goodsNav">
            <div class="nav-left">
                <a href="##" class="navA">手袋</a>
                <span class="dot">.</span>
                <span>手提包&波士顿包</span>
            </div>
            <div class="nav-right">
                <div class="nva-item">
                    <a href="##">
                        <span>类别</span>
                        <span>></span>
                    </a>
                </div>
                <div class="nva-item">
                    <a href="##">
                        <span>系列</span>
                        <span>></span>
                    </a>
                </div>
                <div class="nva-item">
                    <a href="##">
                        <span>筛选</span>
                        <span>></span>
                    </a>
                </div>
                <div class="nva-item lastItem">
                    <a href="##">
                        <span class="item-text">排序：</span>
                        <span>最新商品</span>
                        <span>></span>
                    </a>
                    <div class="pulldownList">
                        <ul class="pull">
                            <li class="pullItem">最新商品</li>
                            <li class="pullItem">价格由高到低</li>
                            <li class="pullItem">价格由低到高</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- 商品内容 -->
        <div class="goodsContent clearfix">

            <div class="ItemWrapper" @mouseenter="onMouseEnter(item)" @mouseleave="onMouseEnter(item)" v-for="(item,index) in items" :key="item.id">
                <div class="imgBox" v-if="!item.showSlide">
                    <img src="./images/gucci03.png" alt="" width="100%" style="margin-top: 100px">
                    <span class="iconfont icon-aixin"></span>
                </div>

                <div class="slideshow" v-else @click="toDetail">

                    <el-carousel trigger="click" height="600px" style="background: #fff" indicator-position="none" :autoplay="false">

                        <el-carousel-item v-for="(img,idx2) in item.images" :key="img" style="padding-top: 50px; box-sizing: border-box">

                            <h3 class="small">
                                <img :src="img" alt="" width="100%">
                            </h3>

                        </el-carousel-item>

                        <span class="iconfont icon-aixin"></span>
                    </el-carousel>
                    <div class="itemInfo">
                        <h2 class="tit">{{item.title}}</h2>
                        <div class="pri">￥{{item.price}}</div>
                        <div class="buy">立即购买<span class="iconfont icon-iconfonti" style=""></span></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                items: [
                    {
                        images: [
                            require('./images/gc1.jpg'),
                            require('./images/gc2.jpg'),
                            require('./images/gc3.jpg'),
                            require('./images/gc4.jpg'),
                            require('./images/gc5.jpg'),
                        ],
                        title: "GG Marmont系列迷你手提包",
                        price: 19000,
                        showSlide: false,
                        id: 1
                    },
                    {
                        images: [
                            require('./images/gc1.jpg'),
                            require('./images/gc2.jpg'),
                            require('./images/gc3.jpg'),
                            require('./images/gc4.jpg'),
                            require('./images/gc5.jpg'),
                        ],
                        title: "GG Marmont系列迷你手提包",
                        price: 19000,
                        showSlide: false,
                        id: 2
                    },
                    {
                        images: [
                            require('./images/gc1.jpg'),
                            require('./images/gc2.jpg'),
                            require('./images/gc3.jpg'),
                            require('./images/gc4.jpg'),
                            require('./images/gc5.jpg'),
                        ],
                        title: "GG Marmont系列迷你手提包",
                        price: 19000,
                        showSlide: false,
                        id: 3
                    },
                    {
                        images: [
                            require('./images/gc1.jpg'),
                            require('./images/gc2.jpg'),
                            require('./images/gc3.jpg'),
                            require('./images/gc4.jpg'),
                            require('./images/gc5.jpg'),
                        ],
                        title: "GG Marmont系列迷你手提包",
                        price: 19000,
                        showSlide: false,
                        id: 4
                    },
                    {
                        images: [
                            require('./images/gc1.jpg'),
                            require('./images/gc2.jpg'),
                            require('./images/gc3.jpg'),
                            require('./images/gc4.jpg'),
                            require('./images/gc5.jpg'),
                        ],
                        title: "GG Marmont系列迷你手提包",
                        price: 19000,
                        showSlide: false,
                        id: 5
                    },
                    {
                        images: [
                            require('./images/gc1.jpg'),
                            require('./images/gc2.jpg'),
                            require('./images/gc3.jpg'),
                            require('./images/gc4.jpg'),
                            require('./images/gc5.jpg'),
                        ],
                        title: "GG Marmont系列迷你手提包",
                        price: 19000,
                        showSlide: false,
                        id: 6
                    },
                    {
                        images: [
                            require('./images/gc1.jpg'),
                            require('./images/gc2.jpg'),
                            require('./images/gc3.jpg'),
                            require('./images/gc4.jpg'),
                            require('./images/gc5.jpg'),
                        ],
                        title: "GG Marmont系列迷你手提包",
                        price: 19000,
                        showSlide: false,
                        id: 7
                    },
                    {
                        images: [
                            require('./images/gc1.jpg'),
                            require('./images/gc2.jpg'),
                            require('./images/gc3.jpg'),
                            require('./images/gc4.jpg'),
                            require('./images/gc5.jpg'),
                        ],
                        title: "GG Marmont系列迷你手提包",
                        price: 19000,
                        showSlide: false,
                        id: 8
                    }
                ]
            }
        },
        methods: {
            toDetail() {
                this.$router.push('/detail')
            },

            onMouseEnter(item) {
                item.showSlide = !item.showSlide
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .goodsWrapper
        padding 0 15px 15px 15px
        width 100%
        box-sizing border-box

        .goodsNav
            display flex
            justify-content space-between
            width 100%
            height 60px
            line-height 60px
            padding-left 10px
            box-sizing border-box

            .nav-left
                color #999

                .navA
                    color #999

                .dot
                    position relative
                    left 0
                    top -3px
                    margin 0 13px

            .nav-right
                display flex

                .nva-item
                    position relative
                    width 77px
                    text-align center
                    color: #1b1b1b
                    border-left: 1px solid #e7e7e7
                    border-right 1px solid #e7e7e7
                    &.lastItem:hover .pulldownList
                        opacity 1
                    .pulldownList
                        position absolute
                        opacity 0
                        transition: all .2s linear
                        right 0
                        bottom -120px
                        width 140px
                        height 120px
                        background #fff
                        z-index 88
                        .pull
                            width 100%
                            height 100%
                            line-height 38px
                            border-left 1px solid #e7e7e7
                            border-right 1px solid #e7e7e7
                            box-sizing border-box

                            .pullItem
                                width 100%
                                height 33.3333%
                                border-top 1px solid #e7e7e7
                                box-sizing border-box
                                text-align right
                                padding-right 16px
                                &:hover
                                    background #ecebe6
                                    cursor:pointer
                    &.lastItem
                        width 110px

                        .item-text
                            color #999

                    &:first-child
                        border-left none

        .goodsContent
            .ItemWrapper
                position relative
                float left
                width 25%
                height 600px
                vertical-align: middle;
                border-right: 1px solid #fff;
                border-bottom: 1px solid #fff;
                box-sizing border-box
                background #E6E6E6

                .imgBox
                    position relative
                    pointer-events none

                .icon-aixin
                    position absolute
                    right 20px
                    top 20px

                .slideshow
                    cursor: pointer

                    .icon-aixin
                        position absolute
                        right 20px
                        top 20px

                    .itemInfo
                        position absolute
                        bottom -100px
                        left 0
                        background #fff
                        width 100%
                        height 100px
                        text-align center
                        z-index 50

                        .tit
                            font-size: 14px;
                            color: #313131;
                            font-weight 400
                            letter-spacing: 1px;
                            line-height: 20px;
                            height: auto;
                            padding: 0 0 12px 0;

                        .pri
                            font-size: 14px;
                            color: #999;
                            letter-spacing: 1px;
                            line-height: 14px;

                        .buy
                            margin-top 10px
                            margin-left 15px
                            font-size: 12px;
                            color: #1b1b1b;
                            letter-spacing: 1px;
                            &:hover
                                color #999

                            .icon-iconfonti
                                position relative
                                top 1px
                                left 0

    .el-carousel__item h3
        color: #475669
        font-size: 14px
        opacity: 0.75
        line-height: 150px
        margin-top: 60px

</style>

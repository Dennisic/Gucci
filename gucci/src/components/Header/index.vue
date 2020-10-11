<template>
    <div>
        <!-- 项目头部 -->
        <div class="header">

            <!-- 头部左边 -->
            <div class="left">
                <p class="new iconfont icon-address"></p>
                <p>中国大陆地区</p>
                <p>简体中文</p>
                <p>客户服务</p>
                <p class="iconfont icon-phone">400.8210.582</p>


            </div>
            <!-- 头部中间 -->
            <div class="center">
                <!-- 上部品牌 -->
                <div class="top">
                    <a href="#">
                        <img src="./images/gucci-logo@2x.png" alt="gucci">
                    </a>
                </div>
                <!-- 下部导航 -->
                <div class="bottom">
                    <!-- 下拉导航 -->
                    <div class="new">
                        <a href="###">全新资讯</a>
                        <p class="iconfont icon-sanjiaotop"></p>
                    </div>
                    <div class="girl">
                        <a href="###">女士</a>
                        <p class="iconfont icon-sanjiaotop"></p>
                    </div>

                    <div class="girl">
                        <a href="###">男士</a>
                        <p class="iconfont icon-sanjiaotop"></p>
                    </div>

                    <div class="girl">
                        <a href="###">童装</a>
                        <p class="iconfont icon-sanjiaotop"></p>
                    </div>

                    <div class="girl">
                        <a href="###">礼品</a>
                        <p class="iconfont icon-sanjiaotop"></p>
                    </div>

                    <div class="girl">
                        <a href="###">珠宝和腕表</a>
                        <p class="iconfont icon-sanjiaotop"></p>
                    </div>

                    <div class="girl">
                        <a href="###">美妆</a>
                        <p class="iconfont icon-sanjiaotop"></p>
                    </div>

                    <div class="girl">
                        <a href="###">家饰</a>
                        <p class="iconfont icon-sanjiaotop"></p>
                    </div>

                    <div class="girl">
                        <a href="###">古驰故事</a>
                        <p class="iconfont icon-sanjiaotop"></p>
                    </div>


                </div>
            </div>
            <!-- 头部右边 -->
            <div class="right">
                <div class="context">
                    <a href="###">登陆</a>
                    <a href="#" class="xin iconfont icon-xin"></a>
                    <a href="###" class="car iconfont icon-icon-">购物袋</a>
                    <a href="#" class="search iconfont icon-sousuo"></a>
                </div>


            </div>
        </div>
        <!-- 项目头部下拉部分 -->

        <div class="more">
            <div class="new">

                <ul>
                    <h5>新品浏览</h5>
                    <li>按秀场款式选购</li>
                    <li>Gucci Liberly系列</li>
                    <li>Fake Not系列</li>
                    <li>Jackie 1961系列</li>
                    <li>都会男士正装系列</li>
                    <li>古驰花悦梦意系列</li>
                </ul>

            </div>
            <div class="line">
            </div>
            <div class="video">

                <div class="video-left">

                    <ul>
                        <h5>观看视频</h5>
                        <li>"终曲"时装系列</li>
                        <li>2020秋冬女士系列</li>
                        <li>2020秋冬男士系列</li>
                        <li>2020春夏</li>
                    </ul>
                </div>
                <div class="video-right">
                    <p>"终曲"时装系列</p>
                    <img src="./images/15952277746938180_330X460.jpg" alt="视频">
                    <img src="./images/1582281963380599_330X460.jpg" alt="视频">
                    <img src="./images/15952277746938180_330X460.jpg" alt="视频">
                    <img src="./images/1582281963380599_330X460.jpg" alt="视频">
                    <div class="point">
                        <div class="black"></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

            </div>

            <div class="lin">

            </div>

            <div class="select">

                <ul>
                    <h5>编辑精选</h5>
                    <li><img src="./images/15996427742183744_330X460.jpg" alt=""></li>

                </ul>
                <div class="edit">
                    <ul>
                        <li>配饰</li>
                        <li>意料之外的风格领袖</li>
                    </ul>

                </div>
            </div>


        </div>

    </div>
</template>
<script>

    export default {
        data() {
            // active:''
        },
        created() {
        },
        methods: {
// 	  over:function(){
// 		  this.active='backgroud-color:"black"' ;
//   }
        },
    }
</script>

<style lang='less' scoped>
    // 头部导航栏

    .header {
        width: 1425px;
        height: 100px;
        background-color: black;
        padding: 10px;

        p, a {
            color: #e5dfd9;
            text-decoration: none;
        }

        // 左边地址部分
        .left {
            // width: 500px;
            height: 26px;
            float: left;
            margin: 20px 30px 0 30px;
            // padding-left: 10px;
            // padding-top:30px ;
            .new {
                font-size: 14px;
            }

            p {
                float: left;
                font-size: 12px;
                margin-right: 5px;
            }

        }

        // 中间导航栏和logo部分
        .center {
            // width: 700px;
            // height: 50px;
            // background-color: #dbf5db;
            float: left;
            margin: 20px 0 0 50px;

            .top {
                // margin: 0 auto;
                text-align: center;
                margin-bottom: 20px;

                img {
                    width: 160px;
                    height: 26px;
                }
            }

            .bottom {
                div {
                    // width: 100%;
                    padding: 0 15px;
                    height: 51px;
                    font-size: 14px;
                    letter-spacing: 2px;
                    float: left;
                }

                p {
                    text-align: center;
                }

            }

        }

        // 右边登陆部分
        .right {
            width: 220px;
            height: 50px;
            // background-color: #eae;
            float: right;
            margin-top: 15px;

            .xin {
                font-size: 12px;
            }

            .car {
                font-size: 14px;
            }

            .search {
                font-size: 28px;
                margin-left: 20px;
            }

            a {
                padding: 5px;
            }

        }

    }

    // 项目头部下拉部分

    .more {
        // margin-top: 140px;
        width: 1400px;
        height: 100%;
        // background-color:#fda;
        margin: 0 auto;
        margin: 0 20px 0 20px;
        position: relative;
        // overflow: hidden;
        h5 {
            margin-bottom: 25px;
            letter-spacing: 2px;
            font-weight: 500;
            color: #313131;
        }

        li {
            color: #646060;
        }

        .new {
            width: 300px;
            height: 300px;
            position: absolute;

            float: left;
            margin: 20px 20px 20px 200px;

            li {
                margin-top: 16px;
            }

        }

        .line {
            position: absolute;
            margin-top: 20px;
            margin-left: 400px;
            float: left;
            width: 0;
            height: 250px;
            border-right: solid 1px #cca;
        }

        .video {
            width: 600px;
            height: 300px;
            position: absolute;
            margin: 20px 20px 20px 450px;
            float: left;

            .video-left {
                width: 80px;
                float: left;


                li {
                    margin-top: 16px;
                }

            }

            .video-right {
                margin: 35px;
                float: left;
                position: relative;

                img {
                    width: 370px;
                    height: 150px;
                    position: absolute;

                }

                p {

                    color: white;
                    position: absolute;
                    margin: 65px 0px 0px 130px;
                    font-size: 16px;
                }

                .point {
                    // position: absolute;
                    margin-top: 170px;
                    margin-left: 150px;
                    // margin-left: 280px;
                    // text-align: center;

                    // background-color: #aaa;
                    .black {
                        background-color: black;
                    }

                    div {
                        float: left;
                        width: 5px;
                        height: 5px;
                        border: rgb(44, 43, 43) solid 1px;
                        border-radius: 50%;
                        margin-left: 5px;

                    }
                }
            }


        }

        .lin {
            position: absolute;
            margin-top: 20px;
            margin-left: 980px;
            float: left;
            width: 0;
            height: 250px;
            border-right: solid 1px #cca;
        }

        .select {
            width: 300px;
            height: 300px;
            position: absolute;
            margin: 20px 20px 20px 1020px;
            float: left;

            img {
                width: 70px;
                height: 70px;
                float: left;
                margin-top: 0px;
            }

            .edit {
                float: left;
                margin-left: 10px;

                li {
                    margin-bottom: 10px;
                }

            }
        }


    }
</style>

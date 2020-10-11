<template>
    <div>
        <div class="header"></div>
        <router-view></router-view>
        <div class="footer"></div>
    </div>
</template>

<script>

    export default {
        name: 'App',
        components: {

        }
    }
</script>

<style lang="stylus">
    .header
        width 100%
        height 120px
        background #1B1B1B

    .footer
        width 100%
        height 400px
        background #1B1B1B
</style>

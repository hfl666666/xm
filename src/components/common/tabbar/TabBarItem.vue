<template>
    <div class="tabbaritem" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="icon-active"></slot></div>
        <div :class="{active: isActive}"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name: 'TabBarItem',
    props: {
      path: String
    },
    data() {
        return {
            // isActive: true,
        }
    },
    computed: {
      isActive() {
        //当前活跃的页面是否包含 item页面
        // /home -> item(/home) => true
        // /home -> item(/category) => false
        // /home -> item(/shopcart) => false
        // /home -> item(/profile) => false
        return this.$route.path.includes(this.path) 
      },
      },
     methods: {
      itemClick() {
        //vue-router@3.1版本重写了push方法, 当this.$route.path(当前活跃页面)和this.$router.puah(跳转的页面)重复时报错
        //解决方法:
        if(this.$route.path != this.path){
            this.$router.push(this.path)
            // this.$router.replace(this.path)
        }
        // console.log(this.$route)
        // console.log(this.$router)
      }
    }
}
</script>

<style scoped>
.tabbaritem{
    font-size: 13px;
    text-align: center
}
.tabbaritem img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 3px;
    margin-bottom: 2px;   
}
.active{
    color: var(--color-tint)
}
</style>


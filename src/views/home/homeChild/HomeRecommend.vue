<template>
    <div class="recommend">
      <div v-for="item in recommends" class="recommend-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <p>{{item.title}}</p>
          </a>
      </div>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props: {
        recommends: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>
  .recommend{
      display: flex;
      justify-content: space-around;
      width: 100%;
      text-align: center;
      margin-top: 3px;
      padding-right: 19px;
      border-bottom: 10px solid #eee;
  }
  .recommend-item a img{
     width: 75px;
     height: 75px;
  }
  .recommend-item a p{
      font-size: var(--font-size);
      color: var(--color-high-text);
      margin: 3px 0 6px 0
  }
</style>
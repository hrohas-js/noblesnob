<template>
  <div class="container">
    <Header></Header>
    <main>
      <div class="main__container">
      <div class="main__banner">
        <div class="__banner__item">
          <img src="@/assets/jpg/noblesnob_banner.jpg" alt="banner by brand">
        </div>
        <div class="__banner__item">
          <img src="@/assets/jpg/GCDS_banner.jpg" alt="banner by brand">
        </div>
      </div>
        <div class="goods">
        <GoodsItem v-for="good in $store.state.goods" :key="good.picture" :good="good"></GoodsItem>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header";
import GoodsItem from "@/components/GoodsItem";

export default {
  name: 'Home',
  components: {GoodsItem, Header}
}
</script>

<style scoped lang="scss">
.main__container{
  padding: rem(143) rem(233) rem(151);
}
.main__banner{
  margin-bottom: rem(58);
}
.__banner__item{
  &:first-child{
    margin-bottom: rem(48);
  }
}
.goods{
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #252525;
  padding-bottom: rem(172);
}
</style>
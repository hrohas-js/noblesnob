<template>
  <div class="wishList container">
    <Header></Header>
    <main>
      <div class="wishList__container">
        <h1>ИЗБРАННОЕ</h1>
        <div class="wishList__goods">
          <GoodsItem v-for="good in $store.state.goods" :key="good.picture" :good="good" :page="'wishlist'"></GoodsItem>
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoodsItem from "@/components/GoodsItem";
export default {
  name:'WishList',
  components: {Footer, Header,GoodsItem}
}
</script>

<style scoped lang="scss">
.wishList__container{
  padding: 0 rem(110);
  margin: rem(117) 0;
}
.wishList__goods{
  display: grid;
  grid-template-columns: repeat(4,1fr);
  margin-top: rem(117);
  gap:rem(24);
}
</style>
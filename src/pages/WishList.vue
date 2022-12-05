<template>
  <div class="wishList container">
    <Header />
    <main>
      <div class="wishList__container">
        <h1>ИЗБРАННОЕ</h1>
        <div class="wishList__goods">
          <GoodsItem v-for="good in wishlist" :key="good.id" :good="good" :page="'wishlist'"></GoodsItem>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoodsItem from "@/components/GoodsItem";

export default {
  name: 'WishList',
  components: {Footer, Header, GoodsItem},
  computed: {
    wishlist() {
      return this.$store.state.wishlist
    }
  }
}
</script>

<style scoped lang="scss">
.wishList__container {
  padding: 0 rem(110);
  margin: rem(117) 0;
}

.wishList__goods {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: rem(117);
  gap: rem(24);
}

@media (max-width: em(1024, 16)) and (min-width: em(768, 16)) {
  .wishList__container {
    padding: 0 calc(0rem + (110 - 0) * ((100vw - 48rem) / (1024 - 768)));
  }
}

@media (max-width: em(767, 16)) {
  .wishList__container {
    padding: 0;
    margin: rem(20) 0;
  }
  .wishList__goods {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

<template>
  <div class="product container">
    <Header></Header>
    <main>
      <div class="product__container">
        <ul class="product__description">
          <li>
            <h2>GCDS</h2>
            <p> Свитер вязки интарсия Свитер свободного кроя. <br>Высокая горловина и длинные рукава. Логотип в технике
              интарсия Tom and Jerry.</p>
          </li>
          <li>
            <p>Срана производства: Италия </p>
            <p>Состав: 50% шерсть, 50% акрил</p>
          </li>
          <li><p>Цвет: Бежевый</p></li>
          <li><p>TJ21M020001-13</p></li>
        </ul>
        <div class="product__good">
          {{prerender.name}}
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
  name: 'Product',
  components: {GoodsItem, Footer, Header},
  computed:{
    prerender(){
      return [...this.$store.state.goods].filter(elem => elem.id == this.$route.params.id)[0];
    },
  }
}
</script>

<style scoped lang="scss">
.product__description{
  li{
    margin-bottom: rem(42);
  }
  h2{
    font-family: "Partner Condensed Bold";
    font-size: rem(21);
  }
  p{
    font-size: rem(18);
  }
}
</style>
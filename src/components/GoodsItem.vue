<template>
  <router-link :to="'/product/'+good.id">
    <div class="goods__item" :class="{mainItem:$route.path == '/'}">
      <div class="goods__item__image">
        <img :src="good.picture" alt="some photo">
      </div>
      <div class="goods__item__content">
        <p class="goods__item__name __content__item">{{ good.name }}</p>
        <p class="goods__item__description __content__item">{{ good.description }}</p>
        <p class="goods__item__price __content__item">{{ good.price }}</p>
      </div>
      <div class="goods__buttons" v-if="page == 'wishlist'">
        <div class="__item">Добавить в корзину</div>
        <div class="__item">Удалить</div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'GoodsItem',
  props: ['good','page']
}
</script>

<style scoped lang="scss">
.goods__item__image {
  margin-bottom: rem(36);
}

.__content__item {
  font-size: rem(10);
  margin-bottom: rem(6);

  &:last-child {
    margin-bottom: 0;
  }
}

.mainItem {
  min-width: rem(175);
}

.goods__item__name, .goods__item__price {
  text-transform: uppercase;
}
.goods__buttons{
  .__item{
    text-align: center;
    font-size: rem(18);
    margin-top: rem(25);
  }
  .__item:first-child{
    background-color: #3ADD9D;
    color: white;
    padding: rem(12) rem(40);
  }
}
</style>
<template>
  <div class="goods__item">
      <div class="goods__item__image">
        <img :src="good.picture" alt="some photo">
      </div>
    <div class="goods__item__content">
      <p class="goods__item__name __content__item">{{good.name}}</p>
      <p class="goods__item__description __content__item">{{good.description}}</p>
      <p class="goods__item__price __content__item">{{good.price}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodsItem',
  props:['good']
}
</script>

<style scoped lang="scss">
.goods__item__image{
  margin-bottom: rem(36);
}
.__content__item{
  font-size: rem(10);
  margin-bottom: rem(6);

  &:last-child{
    margin-bottom: 0;
  }
}
.goods__item__name,.goods__item__price{
  text-transform: uppercase;
}
</style>
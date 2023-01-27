<template>
  <router-link :to="'/product/'+good.id">
    <div class="goods__item" :class="{mainItem:$route.path === '/'}">
      <div class="goods__item__image">
        <img v-if="image !== null" :src="image" :alt="good.name" />
      </div>
      <div class="goods__item__content">
        <p class="goods__item__name __content__item">
          {{good.attributes ? good.attributes[6].options[0] : good.brand}}
        </p>
        <p class="goods__item__description __content__item">
          {{ good.name }}
        </p>
        <p class="goods__item__price __content__item">
          {{ good.price }}&nbspRUB
        </p>
      </div>
      <div v-if="page === 'wishlist'" class="goods__buttons">
        <div v-if="!inCart" class="__item">
          Добавить в корзину
        </div>
        <div class="__item" @click="deleteFromWishlist(good.id)">
          Удалить
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'GoodsItem',
  props: ['good','page'],
  computed: {
    inCart() {
      let flag = false
      this.$store.state.cart.forEach(elem => {
        if (elem.id === this.good.id) {
          flag = true
        }
      })
      return flag
    },
    image() {
      let img = null;
      if (this.good.images.length > 0) {
        img = this.good.images[0].src;
      }
      return img;
    }
  },
  methods: {
    deleteFromWishlist(id) {
      this.$store.dispatch('deleteFromWishList', id)
    }
  }
}
</script>

<style scoped lang="scss">
.goods__item__image {
  margin-bottom: rem(8);
  width: rem(175);
  height: rem(233);
  background-color: grey;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.__content__item {
  font-size: rem(10);
  margin-bottom: 0;

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
    font-size: rem(10);
    margin-top: rem(16);
    text-transform: uppercase;
  }
  .__item:first-child{
    background-color: #3ADD9D;
    color: white;
    padding: rem(12) rem(10);
  }
}

@media (max-width: em(768, 16)) {
  .goods__item__image {
    width: 100%;
  }
}
</style>

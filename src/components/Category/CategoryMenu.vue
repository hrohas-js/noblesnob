<template>
  <div class="site-bar-menu">
    <div class="close-side-mobile" v-if="$store.state.display_width < 768"
         @click="$store.commit('SET_categories_MOBILE_SHOW', false)">назад
    </div>
    <menu>
      <CategoryItem :all-category="true" :brand="false"></CategoryItem>
      <CategoryItem v-for="item in $store.state.parent_category" :brand="false" :key="item.id"
                    :category="item"></CategoryItem>
    </menu>
    <menu>
      <h2 class="brands-title">бренды</h2>
      <CategoryItem v-for="item in $store.state.brands" :key="item.id" :brand="true" :category="item"></CategoryItem>
    </menu>
  </div>
</template>

<script>
import CategoryItem from "@/components/Category/CategoryItem";

export default {
  name: 'SiteBarMenu',
  components: {
    CategoryItem
  }
}
</script>

<style scoped lang="scss">

.site-bar-menu {
  menu:last-child {
   margin-top: rem(35);
  }
}

.__item-brand {
  margin-top: rem(40);

  &:last-child {
    margin-top: 0;
  }
}

.brands-title {
  font-size: rem(18);
  text-transform: uppercase;
}

@media (max-width: em(768, 16)) {
  menu {
    border-top: 1px solid black;
    padding-top: rem(20);
    margin-top: rem(20);
  }
  .close-side-mobile {
    text-transform: uppercase;
    font-size: rem(24);
    cursor: pointer;
  }
}
</style>

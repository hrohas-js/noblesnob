<template>
  <div class="site-bar-menu">
    <div
        v-if="$store.state.display_width < 768"
        class="close-side-mobile"
        @click="$store.commit('SET_CATEGORIES_MOBILE_SHOW', false)"
    >
      назад
    </div>
    <menu>
      <CategoryItem
          :all-category="true"
          :brand="false"
      />
      <CategoryItem
          v-for="item in $store.state.parent_category"
          :brand="false"
          :key="item.id"
          :category="item"
      />
    </menu>
    <menu>
      <h2
          class="brands-title"
          :class="{'brands-title_active': $route.params.brand === 'all-brand'}"
          @click="fetchAllBrands"
      >
        бренды
      </h2>
      <CategoryItem
          v-for="item in $store.state.brands"
          :key="item.id"
          :brand="true"
          :category="item"
      />
    </menu>
  </div>
</template>

<script>
import CategoryItem from "@/components/Category/CategoryItem";

export default {
  name: 'SiteBarMenu',
  components: {
    CategoryItem
  },
  methods: {
    fetchAllBrands () {
      this.$router.push({
        name: 'Catalog',
        params: {
          sex: this.$route.params.sex,
          category: this.$route.params.category,
          subCategory: this.$route.params.subCategory,
          brand: 'all-brand',
          pageNumber: 1
        }
      })
    }
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
  font-size: rem(14);
  text-transform: uppercase;
  padding-bottom: rem(10);
  cursor: pointer;
}

.brands-title_active {
  font-weight: bold;
}

@media (max-width: em(768, 16)) {
  menu {
    border-top: 1px solid black;
    padding-top: rem(20);
    margin-top: rem(20);
  }
  .close-side-mobile {
    text-transform: uppercase;
    font-size: rem(12);
    cursor: pointer;
  }
}
</style>

<template>
  <li v-if="allCategory && brand==false" class="site-bar-menu__item main-category"
      :class="{'active':$route.params.category == 'all'}">
    <router-link to="" @click="request">Все категории</router-link>
  </li>
  <li v-else-if="brand==false" class="site-bar-menu__item main-category"
      :class="{'active':$route.params.category == category.id}">
    <router-link to="" @click="request">{{ category.name }}</router-link>
    <ul class="site-bar-menu__sub-menu"
        v-if="$store.state.sub_category.length != 0 && category.id == $route.params.category">
      <li class="site-bar-menu__item __sub-menu__item" v-for="item in $store.state.sub_category" :key="item.id"
          :class="{'active_sub':$route.params.subCategory == item.id}" @click="sub_request(item)">{{ item.name }}
      </li>
    </ul>
  </li>
  <li v-else-if="brand" class="site-bar-menu__item main-category" :class="{'active':$route.params.brand == category.id}">
    <router-link to="" @click="brand_request">{{ category.name }}</router-link>
  </li>
</template>

<script>

export default {
  name: 'CategoryItem',
  props: ['category', 'allCategory', 'brand'],
  methods: {
    request() {
      if (this.allCategory) {
        this.$store.commit('SET_CURRENT_CATEGORY', 'ВСЕ КАТЕГОРИИ');
      } else {
        this.$store.commit('SET_CURRENT_CATEGORY', this.category.name);
      }
      this.$store.commit('CLEAR_SUB_CATEGORY');
      if (this.allCategory) {
        this.$store.dispatch('FetchCatalog', {
          sex: this.$route.params.sex,
          id: 'all',
          page_number: 1
        })
        this.$store.dispatch('FetchPagination', {
          sex: this.$route.params.sex,
          id: 'all'
        })
        this.$router.push({
          name: 'Catalog',
          params: {
            sex: this.$route.params.sex,
            category: 'all',
            subCategory: 'null',
            brand: 'all-brands',
            pageNumber: 1
          }
        })
      } else {
        this.$store.dispatch('FetchCatalog', {
          sex: this.$route.params.sex,
          id: this.category.id,
          page_number: 1
        })
        this.$store.dispatch('FetchPagination', {
          sex: this.$route.params.sex,
          id: this.category.id
        })
        this.$router.push({
          name: 'Catalog',
          params: {
            sex: this.$route.params.sex,
            category: this.category.id,
            subCategory: 'null',
            brand: 'all-brands',
            pageNumber: 1
          }
        })
        this.$store.commit('SET_SUB_CATEGORY', this.category.id);
      }
    },
    sub_request(item) {
      this.$store.commit('SET_CURRENT_CATEGORY', item.name);
      this.$store.dispatch('FetchCatalog', {
        sex: this.$route.params.sex,
        id: item.id,
        page_number: 1
      });
      this.$store.dispatch('FetchPagination', {
        sex: this.$route.params.sex,
        id: item.id
      });
      this.$router.push({
        name: 'Catalog',
        params: {
          sex: this.$route.params.sex,
          category: this.$route.params.category,
          subCategory: item.id,
          brand: 'all-brands',
          pageNumber: 1
        }
      })
    },
    brand_request() {
      this.$store.commit('SET_PAGINATION', Math.ceil(this.category.count / 12));
      this.$store.dispatch('FetchCatalog', {
        sex: this.$route.params.sex,
        id: this.$route.params.subCategory != 'null' ? this.$route.params.subCategory : this.$route.params.category,
        page_number: 1,
        attribute: 'pa_brand',
        attribute_term: this.category.id
      });
      this.$router.push({
        name: 'Catalog',
        params: {
          sex: this.$route.params.sex,
          category: this.$route.params.category,
          subCategory: this.$route.params.subCategory,
          brand: this.category.id,
          pageNumber: 1
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.active, .active_sub {
  font-family: "Partner Condensed Bold" !important;
}

.__sub-menu__item {
  text-transform: none;
  font-family: "Partner Condensed";
  cursor: pointer;
}

.site-bar-menu__item {
  padding-bottom: rem(10);

  a {
    font-size: rem(18);
    text-transform: uppercase;
  }

  &:last-child {
    padding-bottom: 0;
  }
}

.site-bar-menu__sub-menu {
  transform: translateX(rem(20));
  padding-top: rem(10);
}

@media (max-width: em(768, 16)) {
  .main-category {
    padding-bottom: rem(40) !important;
  }
  .site-bar-menu__item {
    font-size: rem(46);
    text-transform: uppercase;

    a {
      display: flex;
      justify-content: space-between;
      font-size: rem(46);

      &:after {
        display: inline-block;
        content: url("https://u1600792.isp.regruhosting.ru/NOBLESNOB__TEMP/arrow.svg");
      }
    }

    &:first-child a:after {
      content: none;
    }
  }
}
</style>
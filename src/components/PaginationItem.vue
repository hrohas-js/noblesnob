<template>
  <div class="pagination__item" :class="{'active':count == this.$route.params.pageNumber}" @click="request">
    {{ count }}
  </div>
</template>

<script>
export default {
  name: 'PaginationItem',
  props: ['count'],
  methods: {
    request() {
      this.$store.dispatch('FetchCatalog', {
        sex: this.$route.params.sex,
        page_number: this.count,
        id: this.$route.params.subCategory != 'null' ? this.$route.params.subCategory : this.$route.params.category,
        attribute: this.$route.params.brand != 'all-brands' ? 'pa_brand' : '',
        attribute_term: this.$route.params.brand != 'all-brands' ? this.$route.params.brand : ''
      })
      this.$router.push({
        name: 'Catalog',
        params: {
          sex: this.$route.params.sex,
          category: this.$route.params.category,
          subCategory: this.$route.params.subCategory,
          pageNumber: this.count
        }
      });
      this.$store.dispatch('FetchPagination', {
        sex: this.$route.params.sex,
        id: this.$route.params.subCategory != 'null' ? this.$route.params.subCategory : this.$route.params.category,
      })
    }
  }
}
</script>

<style scoped lang="scss">
.active {
  background-color: #39dd9d;
  color: white;
}

.pagination__item {
  padding: rem(2) rem(8);
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #39dd9d;
    color: white;
  }
}
</style>
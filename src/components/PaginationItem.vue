<template>
  <div
      class="pagination__item"
      :class="{'active':count === parseInt($route.params.pageNumber)}"
      @click="request"
  >
    {{ count }}
  </div>
</template>

<script>
export default {
  name: 'PaginationItem',
  props: ['count'],
  methods: {
    request() {
      this.$router.push({
        name: 'Catalog',
        params: {
          sex: this.$route.params.sex,
          category: this.$route.params.category,
          subCategory: this.$route.params.subCategory,
          pageNumber: this.count
        }
      });
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
  font-size: rem(14);
  padding: rem(2) rem(8);
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #39dd9d;
    color: white;
  }
}
</style>

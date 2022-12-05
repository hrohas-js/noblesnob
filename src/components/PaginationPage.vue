<template>
  <div class="pagination">
    <PaginationItem
        v-for="item in $store.state.pagination"
        :key="item"
        :count="item"
    />
    <div
        v-if="$store.state.pagination.length >= 7"
        class="pagination__item"
    >
      ДАЛЕЕ
    </div>
  </div>
</template>

<script>
import PaginationItem from "@/components/PaginationItem";

export default {
  name: 'PaginationPage',
  components: {PaginationItem},
  created() {
    this.$store.dispatch('FetchPagination', {
        sex: this.$route.params.sex,
        id:this.$route.params.category
    });
  }
}
</script>

<style scoped lang="scss">

.pagination {
  display: flex;
  gap: rem(20);
}

.pagination__item {
  padding: rem(2) rem(8);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #39dd9d;
    color: white;
  }
}
</style>

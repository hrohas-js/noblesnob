<template>
  <div class="pagination">
    <div class="pagination__item">1</div>
    <div class="pagination__item">2</div>
    <div class="pagination__item">3</div>
    <div class="pagination__item">4</div>
    <div class="pagination__item">5</div>
    <div class="pagination__item">6</div>
    <div class="pagination__item">7</div>
    <div class="pagination__item">...</div>
    <div class="pagination__item">ДАЛЕЕ</div>
  </div>
</template>

<script>
export default {
  name:'PaginationPage'
}
</script>

<style scoped lang="scss">
.pagination{
  display: flex;
  gap: rem(20);
}
.pagination__item{
  padding: rem(2) rem(8);
  transition: all 0.2s;
  &:hover{
    background-color: #39dd9d;
    color:white;
  }
}
</style>
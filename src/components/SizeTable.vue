<template>
  <div class="size-table">
    <div class="size-table__header">
      <p>Размерная таблица</p>
      <div class="close__button" @click="this.$store.commit('SER_SIZE_TABLE',false)">
        <img src="@/assets/svg/close__button.svg" alt="close button">
      </div>
    </div>
    <div class="size-table__container">
      <div class="__row">
        <div class="__coll">
          S/M/L
        </div>
        <div class="__coll">
          XXS
        </div>
        <div class="__coll">
          XS
        </div>
        <div class="__coll">
          S
        </div>
        <div class="__coll">
          M
        </div>
        <div class="__coll">
          L
        </div>
        <div class="__coll">
          XL
        </div>
        <div class="__coll">
          XXL
        </div>
      </div>
      <div class="__row">
        <div class="__coll">
          1/2/3
        </div>
        <div class="__coll">
          00
        </div>
        <div class="__coll">
          0
        </div>
        <div class="__coll">
          1
        </div>
        <div class="__coll">
          2
        </div>
        <div class="__coll">
          3
        </div>
        <div class="__coll">
          4
        </div>
        <div class="__coll">
          5
        </div>
      </div>
      <div class="__row">
        <div class="__coll">
          ИТАЛИЯ
        </div>
        <div class="__coll">
          36
        </div>
        <div class="__coll">
          38
        </div>
        <div class="__coll">
          40
        </div>
        <div class="__coll">
          42
        </div>
        <div class="__coll">
          44
        </div>
        <div class="__coll">
          46
        </div>
        <div class="__coll">
          48
        </div>
      </div>
      <div class="__row">
        <div class="__coll">
          США
        </div>
        <div class="__coll">
          36
        </div>
        <div class="__coll">
          38
        </div>
        <div class="__coll">
          40
        </div>
        <div class="__coll">
          42
        </div>
        <div class="__coll">
          44
        </div>
        <div class="__coll">
          46
        </div>
        <div class="__coll">
          48
        </div>
      </div>
      <div class="__row">
        <div class="__coll">
          ВЕЛИКОБРИТАНИЯ
        </div>
        <div class="__coll">
          36
        </div>
        <div class="__coll">
          38
        </div>
        <div class="__coll">
          40
        </div>
        <div class="__coll">
          42
        </div>
        <div class="__coll">
          44
        </div>
        <div class="__coll">
          46
        </div>
        <div class="__coll">
          48
        </div>
      </div>
      <div class="__row">
        <div class="__coll">
          ДАНИЯ
        </div>
        <div class="__coll">
          30
        </div>
        <div class="__coll">
          32
        </div>
        <div class="__coll">
          34
        </div>
        <div class="__coll">
          36
        </div>
        <div class="__coll">
          38
        </div>
        <div class="__coll">
          40
        </div>
        <div class="__coll">
          42
        </div>
      </div>
      <div class="__row">
        <div class="__coll">
          ФРАНЦИЯ
        </div>
        <div class="__coll">
          32
        </div>
        <div class="__coll">
          34
        </div>
        <div class="__coll">
          36
        </div>
        <div class="__coll">
          38
        </div>
        <div class="__coll">
          40
        </div>
        <div class="__coll">
          42
        </div>
        <div class="__coll">
          44
        </div>
      </div>
    </div>
    <p>Конверсии размеров варьируются в зависимости от бренда и могут не полностью соответствовать приведенным выше размерам.
      Если вы не уверены в своем размере, пожалуйста, свяжитесь с нами.</p>
  </div>
</template>

<script>
export default {
  name: 'SizeTable'
}
</script>

<style scoped lang="scss">
.size-table {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.93);
  P{
    font-size: rem(18);
  }
  p:first-child{
    text-transform: uppercase;
  }
  p:last-child{
    margin-bottom: rem(158);
    line-height: rem(24);
  }
}

.size-table__header {
  display: flex;
  justify-content: space-between;
}
.size-table__container{
  margin: rem(115) 0 rem(73);
  .__row:first-child{
    background-color: #3ADD9D;
    color: white;
  }
}
.__row {
  display: grid;
  grid-template-columns:repeat(8, 1fr);
  border-bottom: 1px solid;
  &:last-child{
    border-bottom: none;
  }
}

.__coll {
  padding: rem(20) rem(12);

}
</style>
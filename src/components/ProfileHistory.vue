<template>
  <div class="history-profile">
    <h1>ИСТОРИЯ ЗАКАЗОВ</h1>
    <p>Ваши прошлые и текущие заказы</p>
    <div class="history-profile__table">
      <div class="__row">
        <div class="__coll">заказ</div>
        <div class="__coll">сумма</div>
        <div class="__coll">дата заказа</div>
        <div class="__coll">статус</div>
        <div class="__coll">внести изменения</div>
      </div>
      <div class="__row">
        <div class="__coll">
          <ul>
            <li>
              <p>GCDS</p>
              <p>Свитер вязки интарсия</p>
            </li>
            <li>
              <p>TJ21M020001-13</p>
            </li>
          </ul>
        </div>
        <div class="__coll">₽ 16.000 RUB</div>
        <div class="__coll">25.07.21</div>
        <div class="__coll">ДОСТАВЛЕН</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoryProfile'
}
</script>

<style scoped lang="scss">
.history-profile__table{
  margin-top: rem(44);
  p{
    font-size: rem(13);
  }
}
.history-profile__table>.__row{
  padding:rem(20) 0;
}
.__row{
  display: grid;
  grid-template-columns: repeat(5,1fr);
  border-bottom: 1px solid;
  &:last-child{
    padding: rem(10) 0;
    border: none;
  }
}
.__coll{
  ul>li{
    margin-bottom: rem(33);
  }
}
</style>
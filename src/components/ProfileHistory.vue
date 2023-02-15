<template>
  <div class="history-profile">
    <h1>
      ИСТОРИЯ ЗАКАЗОВ
    </h1>
    <p>
      Ваши прошлые и текущие заказы
    </p>
    <div class="history-profile__table">
      <div class="__row">
        <div class="__coll">
          детали
        </div>
        <div class="__coll">
          сумма
        </div>
        <div class="__coll">
          дата заказа
        </div>
        <div class="__coll">
          статус
        </div>
      </div>
      <div
          v-for="order in orders"
          :key="order.id"
          class="__row"
      >
        <div class="__coll">
          <ul>
            <li
                v-for="item in order.line_items"
                :key="item.id"
            >
              <p>
                {{ item.name }}
              </p>
              <p>
                {{ item.sku }}
              </p>
            </li>
          </ul>
        </div>
        <div class="__coll">
          ₽ {{ parseInt(order.total) }} RUB
        </div>
        <div class="__coll">
          {{ new Date(Date.parse(order.date_created)).getDate() }}.
          {{ new Date(Date.parse(order.date_created)).getMonth() + 1 }}.
          {{ new Date(Date.parse(order.date_created)).getFullYear() }}
        </div>
        <div class="__coll">ДОСТАВЛЕН</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: 'HistoryProfile',
  computed: {
    ...mapState({
      orders: 'orders'
    })
  }
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
  grid-template-columns: repeat(4, 1fr);
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
<template>
  <menu class="profile-menu">
    <li :class="{active:$route.params.name == 'main'}"><router-link to="/profile/main">ЛИЧНЫЙ КАБИНЕТ</router-link></li>
    <li :class="{active:$route.params.name == 'addAddress'}"><router-link to="/profile/addAddress">ДОБАВИТЬ АДРЕС</router-link></li>
    <li :class="{active:$route.params.name == 'historyOrders'}"><router-link to="/profile/historyOrders">ИСТОРИЯ ЗАКАЗОВ</router-link></li>
    <li>выход</li>
  </menu>
</template>

<script>
export default {
  name:'ProfileMenu'
}
</script>

<style scoped lang="scss">
.active{
  font-family: "Partner Condensed Bold";
}
li{
  margin-bottom: rem(37);
  &:last-child{
    margin-bottom: 0;
  }
}
</style>
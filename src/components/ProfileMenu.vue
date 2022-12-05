<template>
  <menu class="profile-menu">
    <li :class="{active:$route.params.name === 'main'}">
      <router-link to="/profile/main">
        ЛИЧНЫЙ КАБИНЕТ
      </router-link>
    </li>
    <li :class="{active:$route.params.name === 'addAddress'}">
      <router-link to="/profile/addAddress">
        ДОБАВИТЬ АДРЕС
      </router-link>
    </li>
    <li :class="{active:$route.params.name === 'historyOrders'}">
      <router-link to="/profile/historyOrders">
        ИСТОРИЯ ЗАКАЗОВ
      </router-link>
    </li>
    <li @click="logout">выход</li>
  </menu>
</template>

<script>
export default {
  name:'ProfileMenu',
  methods: {
    logout() {
      this.$router.push('/');
      this.$store.commit('SET_USER', {});
      sessionStorage.removeItem('user_noblesnob');
      this.$store.dispatch('FetchAuthToken', {
        username: 'noblesnobwp',
        password: 'Festachubko1717'
      });
      this.$store.commit('SET_CART', [])
      this.$store.commit('SET_WISHLIST', [])
      this.$store.commit('SET_PROFILE_MENU', {
        name: 'вход',
        path: '/registration'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.active{
  font-family: "Partner Condensed Bold", sans-serif;
}
li{
  margin-bottom: rem(37);
  cursor: pointer;
  &:last-child{
    margin-bottom: 0;
  }
}
</style>

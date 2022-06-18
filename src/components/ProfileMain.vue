<template>
  <div class="profile__main">
    <h1>персональные данные</h1>
    <div class="profile__table">
      <div class="__item">
        <p>ИМЯ</p>
        <input type="text"></div>
      <div class="__item">
        <p>ФАМИЛИЯ</p>
        <input type="text"></div>
      <div class="__item">
        <p>EMAIL</p>
        <input type="text"></div>
      <div class="__item">
        <p>ТЕЛЕФОН</p>
        <input type="text"></div>
    </div>
    <div class="profile__password">
      <h2>пароль от аккаунта</h2>
      <div class="profile__table">
        <div class="__item">
          <p>текущий пароль</p>
          <input type="text"></div>
        <div class="__item sub">
          <p>Новый</p>
          <p class="show-password">показать</p>
          <input type="text"></div>
      </div>
    </div>
    <div class="profile__button">
      сохранить изменения
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileMain'
}
</script>

<style scoped lang="scss">
.profile__main {
  margin-bottom: rem(200);
}

.profile__password {
  margin-top: rem(60);
}

.profile__button {
  text-align: center;
  width: 50%;
  margin: rem(50) auto 0;
  padding: rem(15) rem(0);
  background-color: #3ADD9D;
  color: white;
  cursor: pointer;
}

.sub {
  position: relative;

  p:nth-child(2) {
    color: #606060;
    position: absolute;
    right: rem(13);
    bottom: 0;
    font-size: rem(14);
    cursor: pointer;
  }
}
</style>
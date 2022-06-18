<template>
  <div class="profile-add-address">
    <h1>Адрес</h1>
    <div class="profile__table">
      <div class="__item">
        <p>имя</p>
        <input type="text"></div>
      <div class="__item">
        <p>фамилия</p>
        <input type="text"></div>
      <div class="__item sub">
        <p>страна/республика</p>
        <img src="@/assets/svg/arrow_down.svg" alt="arrow">
        <input type="text"></div>
      <div class="__item">
        <p>город</p>
        <input type="text"></div>
      <div class="__item">
        <p>регион/область</p>
        <input type="text"></div>
      <div class="__item">
        <p>улица,дом,корпус,квартира</p>
        <input type="text"></div>
      <div class="__item">
        <p>индекс/zip</p>
        <input type="text"></div>
      <div class="__item">
        <p>телефон</p>
        <input type="text"></div>
    </div>
    <div class="__save-settings custom__grin-box">
      <input type="checkbox" id="check">
      <label for="check">Установить как адрес для выставления счетов по умолчанию</label>
      <input type="checkbox" id="deff">
      <label for="deff">Установить как адрес доставки по умолчанию</label>
    </div>
    <div class="profile__buttons">
      <input type="submit" value="отмена">
      <input type="submit" value="сохранить изменения">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileAddAddress'
}
</script>

<style scoped lang="scss">
.profile-add-address {
  margin-bottom: rem(150);
}

.sub {
  position: relative;

  img {
    position: absolute;
    right: rem(15);
    top: 60%;
  }
}

.__save-settings {
  margin-top: rem(38);

  label {
    font-size: rem(13);
    margin-bottom: rem(20);

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.profile__buttons {
  display: flex;
  justify-content: space-between;
  margin-top: rem(50);
  input {
    width: 45%;
    text-transform: uppercase;
    cursor: pointer;
  }

  input:first-child {
    background-color: #fff;
  }
  input:last-child{
    background-color: #3ADD9D;
    border: none;
    color: white;
  }
}
</style>
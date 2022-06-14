<template>
  <div class="registration container">
    <Header></Header>
    <div class="registration__container">
      <div class="registration__form">
        <div class="registration__choose-action">
          <input type="text">
          <input type="submit" class="active" value="СОЗДАТЬ АККАУНТ">
          <input type="submit" value="Войти">
        </div>
        <input type="text" placeholder="ИМЯ">
        <input type="text" placeholder="ФАМИЛИЯ">
        <input type="text" placeholder="EMAIL">
        <input type="text" placeholder="ТЕЛЕФОН">
        <input type="text" placeholder="ПАРОЛЬ">
        <input type="text" placeholder="ПОДДТВЕРДИТЕ ПАРОЛЬ">
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'Registration',
  components: {Footer, Header}
}
</script>

<style scoped lang="scss">
.active {
  background-color: #3ADD9D;
  color: white;
}

input {
  width: 100%;
  height: rem(60);
  text-transform: uppercase;
  background-color: #fff;
  font-size: rem(24);

}

.registration__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: rem(120) 0 rem(128);

}

.registration__form {
  width: rem(648);
}

.registration__choose-action {
  position: relative;


  input[type='submit'] {
    position: absolute;
    width: 50%;
    transition: all 0.2s;

    &:hover {
      background-color: #3ADD9D;
      color: white;
    }
  }

  input[type='submit']:nth-child(2) {
    left: 0;
    border-right: none;


  }

  input[type='submit']:last-child {
    right: 0;
    border-left: none;
  }
}
</style>
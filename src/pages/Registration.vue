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
        <div class="__form__main-info">
          <input type="text" placeholder="ИМЯ">
          <input type="text" placeholder="ФАМИЛИЯ">
          <input type="text" placeholder="EMAIL">
          <input type="text" placeholder="ТЕЛЕФОН">
          <input type="text" placeholder="ПАРОЛЬ">
          <input type="text" placeholder="ПОДДТВЕРДИТЕ ПАРОЛЬ">
        </div>
        <div class="registration__fallow">
          <h1>ПОДПИШИТЕСЬ НА РАССЫЛКУ И БУДЬТЕ В КУРСЕ НОВИНОК, АКЦИЙ И ТРЕНДОВ</h1>
          <div class="__fallow__items">
            <CustomFolofingChackbox :page="'registration'"></CustomFolofingChackbox>
          </div>
          <div>
            <div class="__registration-button">
              РЕГИСТРАЦИЯ
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomFolofingChackbox from "@/components/CustomFallowCheckbox";

export default {
  name: 'Registration',
  components: {CustomFolofingChackbox, Footer, Header}
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
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: rem(120) 0 rem(128);

}

.registration__form {
  width: rem(648);

  input {
    margin-bottom: rem(33);
  }
}

.registration__choose-action {
  position: relative;


  input[type='submit'] {
    position: absolute;
    width: 50%;
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

.__form__main-info {
  input {
    padding: 0 rem(16);

    &::placeholder {
      border-left: 1px solid #3ADD9D;
      padding-left: rem(10);
    }
  }
}

.registration__fallow {
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
  }
}

.__registration-button {
  display: inline-flex;
  justify-content: center;
  margin-top: rem(71);
  background-color: #3ADD9D;
  padding: rem(11) rem(92);
  color: white;
}
</style>
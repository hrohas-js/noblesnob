<template>
  <div class="registration container">
    <Header></Header>
    <div class="registration__container">
      <div v-if="!$store.state.ForgetPassword" class="registration__form">
        <div class="registration__choose-action">
          <input type="text">
          <input type="submit" value="СОЗДАТЬ АККАУНТ" @click="this.$store.commit('SET_CABINETIN','registration')" :class="{active:$store.state.CabinetIn === 'registration'}">
          <input type="submit" value="Войти" @click="this.$store.commit('SET_CABINETIN','auf')" :class="{active:$store.state.CabinetIn === 'auf'}">
        </div>
        <div class="__form__main-info" v-if="$store.state.CabinetIn === 'registration'">
          <input type="text" placeholder="ИМЯ" v-model="registration.name" :class="{empty:emptyRegistrationCheck && registration.name === ''}">
          <input type="text" placeholder="ФАМИЛИЯ" v-model="registration.surname" :class="{empty:emptyRegistrationCheck && registration.surname === ''}">
          <input type="email" placeholder="EMAIL" v-model="registration.email" :class="{empty:emptyRegistrationCheck && registration.email === ''}">
          <input type="tel" placeholder="ТЕЛЕФОН" v-model="registration.phone" :class="{empty:emptyRegistrationCheck && registration.phone === ''}">
          <input type="password" placeholder="ПАРОЛЬ" v-model="registration.password" :class="{empty:emptyRegistrationCheck && registration.password === ''}">
          <input type="password" placeholder="ПОДДТВЕРДИТЕ ПАРОЛЬ" v-model="registration.passwordConfirm" :class="{empty:emptyRegistrationCheck && registration.passwordConfirm === ''}">
          <div class="registration__fallow">
            <h1>ПОДПИШИТЕСЬ НА РАССЫЛКУ И БУДЬТЕ В КУРСЕ НОВИНОК, АКЦИЙ И ТРЕНДОВ</h1>
            <div class="__fallow__items">
              <CustomFollowingCheckbox :page="'registration'" />
            </div>
            <div>
              <div class="__registration-button" @click="sendRegistration">
                РЕГИСТРАЦИЯ
              </div>
            </div>
          </div>
        </div>
        <div class="__auf" v-if="$store.state.CabinetIn === 'auf'">
          <input type="text" placeholder="EMAIL">
          <input type="text" placeholder="ПАРОЛЬ">
          <div class="__forget-auf-button">
            <p class="__forget" @click="this.$store.commit('SET_FORGETPASSWORD',true)">
              Забыли свой пароль ?
            </p>
            <div class="__auf-button">
              ВХОД
            </div>
          </div>
        </div>
      </div>
      <div v-if="$store.state.ForgetPassword" class="forget-password__container">
        <ForgetPassword />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomFollowingCheckbox from "@/components/CustomFallowCheckbox";
import ForgetPassword from "@/components/RecoveryPassword";

export default {
  name: 'Registration',
  components: {ForgetPassword, CustomFollowingCheckbox, Footer, Header},
  data: () => ({
    registration: {
      name: '',
      surname: '',
      email: '',
      phone: '',
      password: '',
      passwordConfirm: ''
    },
    auth: {},
    emptyRegistrationCheck: false
  }),
  computed: {
    followFlag() {
      if (this.$store.state.follow === '') {
        return false;
      }
      else {
        return true;
      }
    },
    agreeFlag() {
      return this.$store.state.agree;
    },
    passwordConfirmFlag() {
      return this.registration.password === this.registration.passwordConfirm;
    }
  },
  mounted() {
    this.$store.commit('SET_CABINETIN','registration');
    this.$store.commit('SET_FORGETPASSWORD', false);
  },
  methods: {
    sendRegistration() {
      if (this.registration.name === '' || this.registration.surname === '' || this.registration.email === '' || this.registration.phone === '' || this.registration.password === '' || this.registration.passwordConfirm === '') {
        this.emptyRegistrationCheck = true;
      }
      else {
        this.emptyRegistrationCheck = false;
      }
      if (!this.emptyRegistrationCheck && this.followFlag && this.agreeFlag && this.passwordConfirmFlag) {
        this.$store.dispatch('Registration', this.registration);
      }
    }
  }
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
  font-size: rem(19);

}

.registration__container {
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: rem(120) 0 rem(128);
}

.registration__form,.forget-password__container {
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

.__form__main-info, .__auf {
  input {
    padding: 0 rem(16);

    &::placeholder {
      border-left: 1px solid #3ADD9D;
      padding-left: rem(10);
      font-size: rem(24);
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
  cursor: pointer;
  justify-content: center;
  margin-top: rem(71);
  background-color: #3ADD9D;
  padding: rem(11) rem(42);
  color: white;
}
.__forget-auf-button{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.__forget{
  cursor: pointer;
  color: #636363;
  font-size: 14px;
  margin-bottom: rem(40);
}
.__auf-button{
  cursor: pointer;
  font-size: rem(24);
  padding: rem(11) rem(42);
  background-color: #3ADD9D;
  color: white;
}

.empty {
  border: 2px solid red;
}

@media (max-width: em(768, 16)) {
  .registration__form,.forget-password__container {
    width: 100%;
  }
}
</style>

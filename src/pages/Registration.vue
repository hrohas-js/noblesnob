<template>
  <div class="registration container">
    <Header />
    <div class="registration__container">
      <div v-if="!$store.state.ForgetPassword" class="registration__form">
        <div class="registration__choose-action">
          <input type="text" />
          <input
              type="submit"
              value="СОЗДАТЬ АККАУНТ"
              :class="{active: $store.state.CabinetIn === 'registration'}"
              @click="changeForm('registration')"
          />
          <input
              type="submit"
              value="ВОЙТИ"
              :class="{active: $store.state.CabinetIn === 'auf'}"
              @click="changeForm('auf')"
          />
        </div>
        <form
            v-if="$store.state.CabinetIn === 'registration'"
            class="__form__main-info"
        >
          <input
              type="text"
              placeholder="ИМЯ"
              v-model="registration.name"
              :class="{empty: emptyRegistrationCheck && registration.name === ''}"
              @input="registration.name = registration.name.replace(/[^ a-zа-яё]/ui,'')"
          />
          <input
              type="text"
              placeholder="ФАМИЛИЯ"
              v-model="registration.surname"
              :class="{empty: emptyRegistrationCheck && registration.surname === ''}"
              @input="registration.surname = registration.surname.replace(/[^ a-zа-яё]/ui,'')"
          />
          <input
              type="email"
              placeholder="EMAIL"
              v-model="registration.email"
              :class="{empty: (emptyRegistrationCheck && registration.email === '') || !emailValidation}"
              @blur="emailValidate(registration.email)"
          />
          <input
              type="tel"
              placeholder="ТЕЛЕФОН"
              v-model="registration.phone"
              :class="{empty:emptyRegistrationCheck && registration.phone === ''}"
          />
          <input
              type="password"
              autocomplete="on"
              placeholder="ПАРОЛЬ"
              v-model="registration.password"
              :class="{empty:emptyRegistrationCheck && registration.password === ''}"
          />
          <input
              type="password"
              autocomplete="on"
              placeholder="ПОДДТВЕРДИТЕ ПАРОЛЬ"
              v-model="registration.passwordConfirm"
              :class="{empty:emptyRegistrationCheck && registration.passwordConfirm === ''}"
          />
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
        </form>
        <form v-if="$store.state.CabinetIn === 'auf'" class="__auf">
          <input
              type="email"
              placeholder="EMAIL"
              v-model="auth.username"
              :class="{empty:emptyAufCheck && auth.username === ''}"
              @blur="emailValidate(auth.username)"
          />
          <input
              type="password"
              autocomplete="on"
              placeholder="ПАРОЛЬ"
              v-model="auth.password"
              :class="{empty:emptyAufCheck && auth.password === ''}"
          />
          <div class="__forget-auf-button">
            <p class="__forget" @click="this.$store.commit('SET_FORGETPASSWORD',true)">
              Забыли свой пароль ?
            </p>
            <div class="__auf-button" @click="sendAuf">
              ВХОД
            </div>
          </div>
        </form>
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
    auth: {
      username: '',
      password: ''
    },
    emptyRegistrationCheck: false,
    emailValidation: true,
    emptyAufCheck: false
  }),
  computed: {
    followFlag() {
      return this.$store.state.follow !== '';
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
    changeForm(value) {
      this.$store.commit('SET_CABINETIN',value);
      this.emailValidation = true;
    },
    emailValidate(value) {
      if (value !== '') {
        this.emailValidation = !!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
      }
    },
    sendRegistration() {
      this.emptyRegistrationCheck = this.registration.name === '' || this.registration.surname === '' || this.registration.email === '' || this.registration.phone === '' || this.registration.password === '' || this.registration.passwordConfirm === '';
      if (!this.emptyRegistrationCheck && this.followFlag && this.agreeFlag && this.passwordConfirmFlag && this.emailValidation) {
        this.$store.dispatch('Registration', this.registration);
        window.scrollTo({top: 0, behavior: 'smooth'});
      }
    },
    sendAuf() {
      this.emptyAufCheck = this.auth.username === '' || this.auth.password === ''
      if (!this.emptyAufCheck && this.emailValidation) {
        this.$store.dispatch('Login', this.auth);
        window.scrollTo({top: 0, behavior: 'smooth'});
        this.$router.push('/');
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
  height: rem(40);
  background-color: #fff;
  font-size: rem(14);
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
    margin-bottom: rem(21);
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
      font-size: rem(14);
    }
  }
}

.registration__fallow {
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: "Partner Condensed Bold", sans-serif;
    text-align: center;
    font-size: rem(12);
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
  font-size: rem(14);
  margin-bottom: rem(40);
}
.__auf-button{
  cursor: pointer;
  font-size: rem(14);
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

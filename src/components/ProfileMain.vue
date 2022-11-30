<template>
  <div class="profile__main">
    <h1>персональные данные</h1>
    <div class="profile__table">
      <div class="__item">
        <p>ИМЯ</p>
        <input
            type="text"
            v-model="profileInfo.name"
            @input="profileInfo.name = profileInfo.name.replace(/[^ a-zа-яё]/ui,'')"
        />
      </div>
      <div class="__item">
        <p>ФАМИЛИЯ</p>
        <input
            type="text"
            v-model="profileInfo.surname"
            @input="profileInfo.surname = profileInfo.surname.replace(/[^ a-zа-яё]/ui,'')"
        />
      </div>
      <div class="__item">
        <p>EMAIL</p>
        <input type="email" v-model="profileInfo.email">
      </div>
      <div class="__item">
        <p>ТЕЛЕФОН</p>
        <input type="tel" v-model="profileInfo.phone">
      </div>
    </div>
    <form class="profile__password">
      <h2>пароль от аккаунта</h2>
      <div class="profile__table">
        <div class="__item">
          <p>текущий пароль</p>
          <input type="password" v-model="oldPassword">
        </div>
        <div class="__item sub">
          <p>Новый</p>
          <p class="show-password" @click="isShowedPassword">
            {{ showPasswordText }}
          </p>
          <input :type="showPasswordType" v-model="newPassword">
        </div>
      </div>
    </form>
    <div class="profile__button" @click="update">
      сохранить изменения
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileMain',
  data: () => ({
    profileInfo: {
      name: '',
      surname: '',
      email: '',
      phone: ''
    },
    oldPassword: '',
    newPassword: '',
    showPassword: false,
    showPasswordText: 'показать',
    showPasswordType: 'password'
  }),
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  mounted() {
    this.profileInfo.name = this.user.meta.name[0];
    this.profileInfo.surname = this.user.meta.surname[0];
    this.profileInfo.email = this.user.meta.email[0];
    this.profileInfo.phone = this.user.meta.phone[0];
  },
  methods: {
    update() {
      this.$store.dispatch('updateUser', this.profileInfo)
      if (this.oldPassword !== '' && this.newPassword !== '') {
        this.$store.dispatch('updateUserPassword', {
          id: this.user.id,
          password: this.oldPassword,
          new_password: this.newPassword
        })
        this.oldPassword = ''
        this.newPassword = ''
      }
      window.scrollTo({top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
    isShowedPassword() {
      this.showPassword = !this.showPassword;
      if (this.showPassword) {
        this.showPasswordText = 'скрыть';
        this.showPasswordType = 'text';
      } else {
        this.showPasswordText = 'показать';
        this.showPasswordType = 'password';
      }
    }
  }
}
</script>

<style scoped lang="scss">
input {
  padding: 0 rem(20);
}

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

.show-password {
  cursor: pointer;
  user-select: none;
}
</style>

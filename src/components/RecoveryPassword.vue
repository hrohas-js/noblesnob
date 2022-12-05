<template>
  <div class="forget-password">
    <h1>забыли пароль?</h1>
    <p>введите адрес электронной почты и мы отправим вам ссылку для сброса пароля</p>
    <div class="__choose-recovery">
      <input type="text" placeholder="EMAIL" v-model="email">
    </div>
    <div class="forget-password__go-beck-form">
      <input type="text">
      <input type="submit" value="ВОССТАНОСИТЬ" @click="reset">
      <input type="submit" value="АВТОРИЗАЦИЯ" @click="goBack">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgetPassword',
  data:()=>({
    email: ''
  }),
  methods:{
    reset() {
      if (this.email !== '') {
        this.$store.dispatch('ResetPassword', this.email)
      } else {
        this.$store.commit('ADD_STATUS', 'Введите адрес электронной почты')
      }
    },
    goBack(){
      this.$store.commit('SET_CABINETIN','auf');
      this.$store.commit('SET_FORGETPASSWORD', false)
    }
  }
}
</script>

<style scoped lang="scss">
input {
  width: 100%;
  height: rem(60);
  background-color: #fff;
}

h1 {
  font-family: "Partner Condensed Bold", sans-serif;
  font-size: rem(24);
  text-transform: uppercase;
  text-align: center;
}

p {
  font-size: rem(18);
  text-transform: uppercase;
  text-align: center;
}

input[placeholder='EMAIL'], input[placeholder='ТЕЛЕФОН']{
  padding: 0 rem(16);

  &::placeholder {
    border-left: 1px solid #3ADD9D;
    padding-left: rem(10);
    font-size: rem(24);
  }
}
.forget-password{
  p:nth-child(2){
    margin: rem(22) 0 rem(50);
  }
}
.__choose-recovery{
  p:nth-child(2){
    margin: rem(30) 0 rem(67);
    text-decoration: underline;
    cursor: pointer;
  }
}
.forget-password__go-beck-form{
  position: relative;
  font-size: rem(24);
  input[type='submit']{
    cursor: pointer;
    position: absolute;
    width: 50%;
  }
  input[type='submit']:nth-child(2){
    left: 0;
    border-right: none;
    background-color: #3ADD9D;
    color: white;
  }
  input[type='submit']:last-child{
    right: 0;
    border-left: none;
  }
}
</style>

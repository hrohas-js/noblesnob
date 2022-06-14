<template>
  <div class="registration container">
    <Header></Header>
    <div class="registration__container">
      <div class="registration__form">
        <div class="registration__choose-action">
          <input type="text">
          <input type="submit">
          <input type="submit">
        </div>
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
input {
  width: 100%;
  height: rem(60);
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
  }

  input[type='submit']:nth-child(2) {
    left: 0;

  }

  input[type='submit']:last-child {
    right: 0;
  }
}
</style>
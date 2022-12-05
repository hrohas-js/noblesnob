<template>
  <div class="wrapper">
    <router-view/>
  </div>
  <StatusBox :statuses="statuses" />
</template>

<script>
import StatusBox from "@/components/StatusBox";
export default {
  name: 'App',
  components: { StatusBox },
  computed: {
    statuses() {
      return this.$store.state.statuses
    }
  },
  created() {
    this.$store.commit('SET_AXIOS_INSTANCE');
    this.$store.dispatch('FetchAuthToken', {
      username: 'noblesnobwp',
      password: 'Festachubko1717'
    });
  },
  mounted() {
    if (sessionStorage.getItem('user_noblesnob') !== null) {
      this.$store.commit('SET_PROFILE_MENU', {
        name: 'аккаунт',
        path: '/profile/main'
      })
    }
    this.$store.dispatch('setCart')
    this.$store.dispatch('setWishList')
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Partner Condensed Bold';
  src: url('~@/assets/fonts/PartnerCondensed/partnercondensed_bold.otf');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Partner Condensed';
  src: url('~@/assets/fonts/PartnerCondensed/partnercondensed.otf');
  font-weight: normal;
  font-style: normal;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

input {
  border: 1px solid black;
  border-radius: 0;
  outline: none;
}

html {
  font-family: 'Partner Condensed', sans-serif;
  height: 100%;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

img {
  max-width: 100%;
}

ul, li {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: #000;
}

h1, h2, h3, h4, h5 {
  font-size: unset;
  font-weight: normal;
}

.wrapper {
  max-width: rem(1440);
  margin: 0 auto;
}

.container {
  padding: rem(16) rem(35) 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1 0 auto;
  }
}

//cтили страниц футера
.__content__item {
  margin-bottom: rem(120);

  h2 {
    font-family: "Partner Condensed Bold", sans-serif;
    font-size: rem(20);
    margin-bottom: rem(35);
    text-transform: uppercase;

    &:last-child {
      margin-bottom: 0;
    }
  }

  p {
    margin-bottom: rem(40);

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.nomb {
  margin-bottom: 0;
}

//кастомный чекбокс(крест)
.custom__grin-box, .custom__cross {
  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  input + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }

  input + label::before {
    content: '';
    display: inline-block;
    width: rem(25);
    height: rem(25);
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid black;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
}

.custom__grin-box {
  input:checked + label::before {
    background-color: #3ADD9D;
    border-color: #3ADD9D;
  }
}

.custom__cross {
  input + label::before {
    width: rem(13);
    height: rem(13);
  }

  input:checked + label::before {
    background-image: url('https://u1600792.isp.regruhosting.ru/NOBLESNOB__TEMP/checkbox_rule/closeRule.svg');
    background-size: cover;
  }
}

//общие стили личного кабинета
.profile {
  text-transform: uppercase;

  input {
    width: 100%;
    height: rem(40);
  }

  h1, h2 {
    font-family: 'Partner Condensed Bold', sans-serif;
    font-size: rem(18);
  }

  p {
    font-size: rem(18);
  }

  .profile__table {
    margin-top: rem(38);
  }

  .__item {
    margin-bottom: rem(26);

    &:last-child {
      margin-bottom: 0;
    }
  }
}

@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  .container {
    padding: rem(16) calc(1rem + (35 - 16) * ((100vw - 64rem) / (1440 - 1024))) 0;
  }
}

@media (max-width: em(724, 16)) and (min-width: em(220, 16)) {
  .container {
    padding: calc(0.5rem + (16 - 8) * ((100vw - 13.75rem) / (724 - 220))) calc(0.3125rem + (16 - 5) * ((100vw - 13.75rem) / (724 - 220))) 0;
  }
}
</style>

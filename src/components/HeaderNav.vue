<template>
  <nav v-if="$store.state.display_width >= 1024 || page =='footer'">
    <router-link v-for="item in menuItems" :to="item.path" :key="item.name" @click="this.rebootForm">{{ item.name }}</router-link>
  </nav>
  <nav v-else>
    <div class="header-nav__container" v-if="menuItemsMobile == 'left'">
      <div class="header-nav__item header-nav__burger-menu" @click="$store.commit('SET_BURGER_SHOW')"><img src="@/assets/svg/burger-menu.svg" alt="menu"></div>
      <div class="header-nav__item header-nav__search"><img src="@/assets/svg/search.svg" alt="search"></div>
    </div>
    <div class="header-nav__container" v-if="menuItemsMobile == 'right'">
      <div class="header-nav__item header-nav__burger-menu"><img src="@/assets/svg/cabinet.svg" alt="cabinet" @click="this.$router.push('/registration')"></div>
      <div class="header-nav__item header-nav__search"><img src="@/assets/svg/basket.svg" alt="basket" @click="this.$router.push('/basket')"></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderNav',
  props: ['menuItems', 'menuItemsMobile','page'],
  methods:{
    rebootForm(){
      this.$store.commit('SET_CABINETIN','registration');
      this.$store.commit('SET_FORGETPASSWORD', false);
    }
  }
}
</script>

<style scoped lang="scss">
  nav,.header-nav__container{
    display: flex;
    align-items: center;

  a {
    font-size: rem(10);
    text-transform: uppercase;
    margin-left: rem(18);
    padding: rem(5);
    transition: all 0.2s;

    &:first-child {
      margin-left: 0;
    }

    &:hover {
      background-color: #3adc9c;
      color: white;
    }
  }
}
  nav{
    &:first-child{
      .header-nav__item{
        margin-left: rem(27.5);
        &:first-child{
          margin-left: 0;
        }
      }
    }
    &:last-child{
      .header-nav__item{
        margin-left: rem(40.5);
        &:first-child{
          margin-left: 0;
        }
      }
    }
  }
.header-nav__container{
  align-items: center;
}
.header-nav__item{
  img{
    height: rem(34);
  }
}
  @media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  nav {
    a {
      margin-left: calc(0.625rem + (18 - 10) * ((100vw - 64rem) / (1440 - 1024)));
    }
  }
  }
  @media (max-width: em(724, 16)) and (min-width: em(220, 16)){
    nav{
      &:first-child{
        .header-nav__item{
          margin-left: calc(0.4375rem + (27.5 - 7) * ((100vw - 13.75rem) / (724 - 220)));
          &:first-child{
            margin-left: 0;
          }
        }
      }
      &:last-child{
        .header-nav__item{
          margin-left: calc(0.75rem + (40.5 - 10) * ((100vw - 13.75rem) / (724 - 220)));
          &:first-child{
            margin-left: 0;
          }
        }
      }
    }
    .header-nav__item{
      img{
        height: calc(1rem + (34 - 16) * ((100vw - 13.75rem) / (724 - 220)));
      }
    }
  }

</style>
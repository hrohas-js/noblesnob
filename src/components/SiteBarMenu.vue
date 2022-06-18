<template>
  <div class="site-bar-menu">
    <div class="close-side-mobile" @click="$store.commit('SET_CATEGORYS_MOBILE_SHOW', false)">назад</div>
    <menu>
      <li class="site-bar-menu__item">
        <router-link to="">Все категории</router-link>
      </li>
      <li class="site-bar-menu__item" :class="{'dress':showSubMenu}" @click="this.showSubMenu = !this.showSubMenu">
        <router-link to="">Одежда</router-link>
        <ul class="site-bar-menu__sub-menu" v-if="showSubMenu">
          <li class="site-bar-menu__item __sub-menu__item">Куртки и бомберы</li>
          <li class="site-bar-menu__item __sub-menu__item">Пуховики</li>
          <li class="site-bar-menu__item __sub-menu__item">Мех и дубленки</li>
          <li class="site-bar-menu__item __sub-menu__item">Пиджаки</li>
        </ul>
      </li>
      <li class="site-bar-menu__item">
        <router-link to="">Акссесуары</router-link>
      </li>
      <li class="site-bar-menu__item">
        <router-link to="">Обувь</router-link>
      </li>
      <li class="site-bar-menu__item">
        <router-link to="">Сумки</router-link>
      </li>
      <li class="site-bar-menu__item __item-brand">
        <router-link to="">Бренды</router-link>
      </li>
      <li class="site-bar-menu__item __item-brand">
        <router-link to="">GCDS</router-link>
      </li>
    </menu>
  </div>
</template>

<script>
export default {
  name: 'SiteBarMenu',
  data: () => ({
    showSubMenu: false
  }),
}
</script>

<style scoped lang="scss">

.site-bar-menu__item {
  padding-bottom: rem(10);

  a {
    font-size: rem(18);
    text-transform: uppercase;
  }

  &:last-child {
    padding-bottom: 0;
  }
}

.site-bar-menu__sub-menu {
  transform: translateX(rem(20));
  padding-top: rem(10);
}

.__sub-menu__item {
  text-transform: none;
  font-family: "Partner Condensed";
  cursor: pointer;
}
.__item-brand{
  margin-top: rem(40);
  &:last-child{
    margin-top: 0;
  }
}
.dress {
  font-family: "Partner Condensed Bold";
}

@media (max-width: em(768, 16)) {
  menu {
    border-top: 1px solid black;
    padding-top: rem(20);
    margin-top: rem(20);
  }
  menu > li {
    padding-bottom: rem(40) !important;
  }
  .close-side-mobile {
    text-transform: uppercase;
    font-size: rem(24);
    cursor: pointer;
  }
  .site-bar-menu__item {
    font-size: rem(46);
    text-transform: uppercase;
    a {
      display: flex;
      justify-content: space-between;
      font-size: rem(46);

      &:after {
        display: inline-block;
        content: url("https://u1600792.isp.regruhosting.ru/NOBLESNOB__TEMP/arrow.svg");
      }
    }

    &:first-child a:after {
      content: none;
    }
  }
}
</style>
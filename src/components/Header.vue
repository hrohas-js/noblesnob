<template>
  <header>
    <div class="header__container">
      <HeaderNav :menuItems="$store.state.headerNavLeft" :menuItemsMobile="'left'" />
      <div class="header__container__logo">
        <router-link to="/">
          <img src="@/assets/svg/noblesnob.svg" alt="logo">
        </router-link>
      </div>
      <HeaderNav :menuItems="$store.state.headerNavRight" :menuItemsMobile="'right'" />
    </div>
    <div v-if="$store.state.burgerShow" class="burger-mobile-container">
      <router-link
          v-for="item in $store.state.burger"
          :to="item.path"
          :key="item.name"
          :class="{bottom:item.name === 'избранное' || item.name === 'карьера'}"
          @click="$store.commit('SET_BURGER_SHOW')"
      >
        {{ item.name }}
      </router-link>
    </div>
  </header>
</template>

<script>
import HeaderNav from "@/components/HeaderNav";

export default {
  name: 'Header',
  components: {HeaderNav},
  mounted() {
    this.$store.commit('SET_DISPLAY_WIDTH', window.innerWidth);
    window.addEventListener("resize", () => {
      this.$store.commit('SET_DISPLAY_WIDTH', window.innerWidth);
    });
  }
}
</script>

<style scoped lang="scss">
header {
  flex: 0 0 auto;
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.burger-mobile-container {
  display: flex;
  flex-direction: column;
  padding: rem(20) 0;
  gap: rem(40);
  position: absolute;
  width: 100%;
  z-index: 99999;
  background-color: white;
  a {
    font-size: rem(24);
    text-transform: uppercase;
  }
}

.bottom {
  border-bottom: 1px solid black;
  padding-bottom: rem(20);
}

@media (max-width: em(724, 16)) and (min-width: em(220, 16)) {
  header {
    padding: calc(0.5rem + (16 - 8) * ((100vw - 13.75rem) / (724 - 220))) calc(0.3125rem + (16 - 5) * ((100vw - 13.75rem) / (724 - 220)));
  }
  .header__container__logo {
    img {
      height: calc(0.75rem + (29 - 12) * ((100vw - 13.75rem) / (724 - 220)));
    }
  }
  .burger-mobile-container {
    margin-left: calc(-0.625rem + (-32 + 10) * ((100vw - 13.75rem) / (724 - 220)));
  }
}
</style>

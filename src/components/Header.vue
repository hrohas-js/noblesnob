<template>
  <header>
    <div class="header__container">
      <HeaderNav :menuItems="$store.state.headerNavLeft" :menuItemsMobile="'left'"></HeaderNav>
      <div class="header__container__logo"><router-link to="/"><img src="@/assets/svg/noblesnob.svg" alt="logo"></router-link></div>
      <HeaderNav :menuItems="$store.state.headerNavRight" :menuItemsMobile="'right'"></HeaderNav>
    </div>
  </header>
</template>

<script>
import HeaderNav from "@/components/HeaderNav";
export default {
  name:'Header',
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
header{

}
.header__container{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
  @media (max-width: em(1440, 16)) and (min-width: em(1024, 16)){
  }
  @media (max-width: em(724, 16)) and (min-width: em(220, 16)){
    header{
      padding:calc(0.5rem + (16 - 8) * ((100vw - 13.75rem) / (724 - 220))) calc(0.3125rem + (16 - 5) * ((100vw - 13.75rem) / (724 - 220))) 0;
    }
    .header__container__logo{
      img{
        height:calc(0.75rem + (29 - 12) * ((100vw - 13.75rem) / (724 - 220))) ;
      }
    }
  }
</style>
<template>
  <footer>
    <div class="footer__container">
      <header-nav
          v-if="$store.state.display_width > 768"
          :page="'footer'"
          :menuItems="$store.state.FooterNavLeft"
      />
      <div v-else class="region">страна/регион: россия</div>
      <div class="footer-ico">
        <a href="">
          <img src="@/assets/png/social/telegrammIco.png" alt="telegramm social">
        </a>
        <a href="">
          <img src="@/assets/png/social/facebookIco.png" alt="facebook social">
        </a>
        <a href="">
          <img src="@/assets/png/social/insagramIco.png" alt="instagram social">
        </a>
      </div>
      <header-nav
          :page="'footer'"
          :menuItems="$store.state.FooterNavRight"
      />
      <router-link
          v-if="$store.state.display_width <= 768"
          to="/"
          class="region"
      >
        2021 noblesnob.com
      </router-link>
    </div>
  </footer>
</template>

<script>
import HeaderNav from "@/components/HeaderNav";
export default {
  name:'Footer',
  components: {HeaderNav}
}
</script>

<style scoped lang="scss">
footer{
  flex: 0 0 auto;
}
.footer__container,.footer-ico{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-ico{
  gap:rem(12);
}
.region {
  font-size: rem(12);
  text-transform: uppercase;
}

@media (max-width: em(768, 16)) {
  footer {
    margin-top: rem(50);
  }
  .footer__container {
    flex-direction: column;
  }
}
</style>

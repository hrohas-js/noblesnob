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
          <img src="@/assets/svg/tg.svg" alt="telegramm social">
        </a>
        <a href="">
          <img src="@/assets/svg/fb.svg" alt="facebook social">
        </a>
        <a href="">
          <img src="@/assets/svg/inst.svg" alt="instagram social">
        </a>
      </div>
      <header-nav
          :page="'footer'"
          :menuItems="$store.state.FooterNavRight"
          :menuItemsMobile="'right'"
      />
      <router-link
          v-if="$store.state.display_width <= 768"
          to="/"
          class="region"
      >
        2023 noblesnob.com
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
  img {
    height: rem(20);
  }
}
.region {
  font-size: rem(12);
  text-transform: uppercase;
}

@media (max-width: em(768, 16)) {
  footer {
    margin: rem(26) 0;
  }
  .footer__container {
    flex-direction: column;
    gap: rem(10);
  }
  .footer-ico{
    gap:rem(8);
    img {
      height: rem(16);
    }
  }
}
</style>

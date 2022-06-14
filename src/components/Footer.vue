<template>
  <footer>
    <div class="footer__container">
      <header-nav :page="'footer'" :menuItems="$store.state.FooterNavLeft"></header-nav>
      <div class="footer-ico">
        <a href=""><img src="@/assets/png/social/telegrammIco.png" alt="telegramm social"></a>
        <a href=""><img src="@/assets/png/social/facebookIco.png" alt="facebook social"></a>
        <a href=""><img src="@/assets/png/social/insagramIco.png" alt="instagram social"></a>
      </div>
      <header-nav :page="'footer'" :menuItems="$store.state.FooterNavRight"></header-nav>
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
</style>
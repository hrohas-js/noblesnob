<template>
  <div class="about container">
    <Header></Header>
    <main>
      <AboutMenu v-if="$store.state.display_width > 768"></AboutMenu>
      <div class="about__content">
        <Delivery v-if="$route.params.aboutVariant == 'delivery'"></Delivery>
        <Confident v-if="$route.params.aboutVariant == 'confident'"></Confident>
        <Payback v-if="$route.params.aboutVariant == 'payback'"></Payback>
        <Oferta v-if="$route.params.aboutVariant == 'oferta'"></Oferta>
        <Partnership v-if="$route.params.aboutVariant == 'partnership'"></Partnership>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutMenu from "@/components/AboutMenu";
import Delivery from "@/components/Delivery";
import Confident from "@/components/Confident";
import Payback from "@/components/Payback";
import Oferta from "@/components/Oferta";
import Partnership from "@/components/Partnership";

export default {
  name: 'About',
  components: {Partnership, Oferta, Payback, Confident, Delivery, AboutMenu, Header, Footer}
}
</script>

<style scoped lang="scss">
main {
  display: flex;
  margin-top: rem(169);
}

.about__content {
  margin-left: rem(180);
}

@media (max-width: em(768, 16)) {
  main {
    display: block;
    margin-top: rem(40);
  }
  .about__content {
    margin-left: 0;
  }
}
</style>
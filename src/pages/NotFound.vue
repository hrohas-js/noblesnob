<template>
  <div class="container">
    <Header />
    <main>
      <div class="not-found">
        упс, кажется такой страницы не существует...
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name:'Profile',
  components: { Footer, Header }
}
</script>

<style lang="scss" scoped>
.not-found {
  width: 100%;
  padding: rem(100) 0;
  text-align: center;
  text-transform: uppercase;
  font-size: rem(24);
}
</style>

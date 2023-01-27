<template>
  <div class="container">
    <Header />
    <main>
      <div class="main__container">
        <div class="main__banner">
          <div class="__banner__item">
            <video autoplay loop playsinline preload muted>
              <source src="https://tdsfashiongroup.com/NOBLESNOB__TEMP/video_baner/main_baner.mp4" type="video/mp4"/>
              <source src="https://tdsfashiongroup.com/NOBLESNOB__TEMP/video_baner/main_baner.webm" type="video/webm"/>
            </video>
          </div>
          <div class="__banner__item">
            <img src="@/assets/jpg/GCDS_banner.jpg" alt="banner by brand">
          </div>
        </div>
        <div class="new-title">
          новинки
        </div>
        <div class="goods">
          <GoodsItem
              v-for="good in $store.state.new_products"
              :key="good.picture"
              :good="good"
          />
        </div>
        <div class="contact-form">
          <contact-form />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header";
import GoodsItem from "@/components/GoodsItem";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default {
  name: 'Home',
  components: {
    Footer,
    ContactForm,
    GoodsItem,
    Header
  },
}
</script>

<style scoped lang="scss">
video {
  max-width: 100%;
}

.main__container {
  padding: rem(143) rem(233) rem(151);
}

.main__banner {
  margin-bottom: rem(58);
}

.__banner__item {
  &:first-child {
    margin-bottom: rem(48);
  }
  img {
    width: 100%;
  }
}

.goods {
  display: flex;
  justify-content: space-between;
  border-bottom: 1.5px solid #252525;
  padding-bottom: rem(172);
}

.contact-form {
  padding-top: rem(40);
}

.new-title {
  margin-bottom: rem(33);
  font-size: rem(24);
  text-transform: uppercase;
}

@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  .main__container {
    padding: calc(0rem + (143 - 0) * ((100vw - 64rem) / (1440 - 1024))) calc(0rem + (233 - 0) * ((100vw - 64rem) / (1440 - 1024))) calc(0rem + (151 - 0) * ((100vw - 64rem) / (1440 - 1024)));
  }
}

@media (max-width: em(1023, 16)) {
  .main__container {
    padding: 0;
  }
}

@media (max-width: em(724, 16)) and (min-width: em(220, 16)) {
  .main__container {
    margin-left: calc(-0.3125rem + (-16 + 5) * ((100vw - 13.75rem) / (724 - 220)));
    margin-right: calc(-0.3125rem + (-16 + 5) * ((100vw - 13.75rem) / (724 - 220)));
  }
  .__banner__item {
    &:first-child {
      margin-bottom: rem(35);
    }
  }
  .new-title {
    padding-left: rem(20);
  }
  .goods {
    min-width: 100%;
    overflow-x: auto;
    gap: rem(25);
    padding-left: rem(20);
    padding-bottom: rem(35);
  }
  .goods::-webkit-scrollbar {
    display: none;
  }
  .contact-form {
    padding-top: rem(22);
  }
}
</style>

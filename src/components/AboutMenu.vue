<template>
  <div class="about-menu__container">
    <menu>
      <li>
        <router-link
            :to="{name:'About',params:{aboutVariant:'delivery'}}"
            :class="{active:$route.params.aboutVariant === 'delivery'}"
        >
          ДОСТАВКА И<br> ОПЛАТА
        </router-link>
      </li>
      <li>
        <router-link
            :to="{name:'About',params:{aboutVariant:'payback'}}"
            :class="{active:$route.params.aboutVariant === 'payback'}"
        >
          ВОЗВРАТ ТОВАРА
        </router-link>
      </li>
      <li>
        <router-link
            :to="{name:'About',params:{aboutVariant:'aboutUs'}}"
            :class="{active:$route.params.aboutVariant === 'aboutUs'}"
        >
          О НАС
        </router-link>
      </li>
      <li>
        <router-link
            :to="{name:'About',params:{aboutVariant:'contact'}}"
            :class="{active:$route.params.aboutVariant === 'contact'}"
        >
          КОНТАКТЫ
        </router-link>
      </li>
      <li>
        <router-link
            :to="{name:'About',params:{aboutVariant:'confident'}}"
            :class="{active:$route.params.aboutVariant === 'confident'}"
        >
          КОНФИДЕНЦИАЛЬНОСТЬ
        </router-link>
      </li>
      <li>
        <router-link
            :to="{name:'About',params:{aboutVariant:'partnership'}}"
            :class="{active:$route.params.aboutVariant === 'partnership'}"
        >
          ПАРТНЕРСТВО
        </router-link>
      </li>
      <li>
        <router-link
            :to="{name:'About',params:{aboutVariant:'oferta'}}"
            :class="{active:$route.params.aboutVariant === 'oferta'}"
        >
          ОФЕРТА
        </router-link>
      </li>
      <li>
        <router-link
            :to="{name:'About',params:{aboutVariant:'care'}}"
            :class="{active:$route.params.aboutVariant === 'care'}"
        >
          КАРЬЕРА
        </router-link>
      </li>
    </menu>
  </div>
</template>

<script>
export default {
  name: 'AboutMenu'
}
</script>

<style scoped lang="scss">
li {
  margin-bottom: rem(30);
  font-size: rem(14);
}

.active {
  font-family: "Partner Condensed Bold", sans-serif;
}
</style>

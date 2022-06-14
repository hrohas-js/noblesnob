<template>
  <div class="about-menu__container">
    <menu>
      <li>
        <router-link :class="{active:$route.params.aboutVariant =='delivery'}"
                     :to="{name:'About',params:{aboutVariant:'delivery'}}">ДОСТАВКИ И<br> ОПЛАТА
        </router-link>
      </li>
      <li>
        <router-link :class="{active:$route.params.aboutVariant =='payback'}"
                     :to="{name:'About',params:{aboutVariant:'payback'}}">ВОЗВРАТ ТОВАРА
        </router-link>
      </li>
      <li>
        <router-link :class="{active:$route.params.aboutVariant =='aboutUs'}"
                     :to="{name:'About',params:{aboutVariant:'aboutUs'}}">О НАС
        </router-link>
      </li>
      <li>
        <router-link :class="{active:$route.params.aboutVariant =='contact'}"
                     :to="{name:'About',params:{aboutVariant:'contact'}}">КОНТАКТЫ
        </router-link>
      </li>
      <li>
        <router-link :class="{active:$route.params.aboutVariant =='confident'}"
                     :to="{name:'About',params:{aboutVariant:'confident'}}">КОНФИДЕНЦИАЛЬНОСТЬ
        </router-link>
      </li>
      <li>
        <router-link :class="{active:$route.params.aboutVariant =='partnership'}"
                     :to="{name:'About',params:{aboutVariant:'partnership'}}">ПАРТНЕРСТВО
        </router-link>
      </li>
      <li>
        <router-link :class="{active:$route.params.aboutVariant =='oferta'}"
                     :to="{name:'About',params:{aboutVariant:'oferta'}}">ОФЕРТА
        </router-link>
      </li>
      <li>
        <router-link :class="{active:$route.params.aboutVariant =='care'}"
                     :to="{name:'About',params:{aboutVariant:'care'}}">КАРЬЕРА
        </router-link>
      </li>
    </menu>
  </div>
</template>

<script>
export default {
  name:'AboutMenu'
}
</script>

<style scoped lang="scss">
li{
  margin-bottom: rem(46);
  font-size: rem(24);
}
.active{
  font-family: "Partner Condensed Bold";
}
</style>
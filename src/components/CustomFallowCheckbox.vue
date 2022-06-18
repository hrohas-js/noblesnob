<template>
  <div class="Custom-Fallow-Checkbox">
  <div class="__following__agree-fallow" :class="{registration:page=='registration' , contactForm:page=='contactForm'}">
    <div class="__agree-fallow__item custom__grin-box">
      <input type="radio" id="fallow" name="agreefollow">
      <label for="fallow">ПОДПИСАТЬСЯ</label>
    </div>
    <div class="__agree-fallow__item custom__grin-box">
      <input type="radio" id="unfallow" name="agreefollow">
      <label for="unfallow">НЕТ,СПАСИБО</label>
    </div>
  </div>
  <div class="agree-rule custom__cross" :class="{mtRegistration:page=='registration' , mtContactForm:page=='contactForm'}">
    <input type="checkbox" id="agree">
    <label for="agree">Я СОГЛАШАЮСЬ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ</label>
  </div>
  </div>
</template>

<script>
export default {
  name:'CustomFolofingChackbox',
  props:['page']
}
</script>

<style scoped lang="scss">
.__following__agree-fallow {
  display: flex;
  justify-content: center;
  margin-top: rem(25);
  gap: rem(20);
}
.contactForm{
  gap: rem(25);
}
.registration{
  gap:rem(95);
}
.__agree-fallow__item, .agree-rule {
  display: flex;
  align-items: center;
  justify-content: center;
}
.mtRegistration{
  margin-top: rem(75);
}
.mtContactForm{
  margin-top: rem(19);
}
</style>
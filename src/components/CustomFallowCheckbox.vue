<template>
  <div class="Custom-Fallow-Checkbox">
  <div class="__following__agree-fallow" :class="{registration:page=='registration' , contactForm:page=='contactForm'}">
    <div class="__agree-fallow__item">
      <input type="radio" id="fallow" name="agreefollow">
      <label for="fallow">ПОДПИСАТЬСЯ</label>
    </div>
    <div class="__agree-fallow__item">
      <input type="radio" id="unfallow" name="agreefollow">
      <label for="unfallow">НЕТ,СПАСИБО</label>
    </div>
  </div>
  <div class="agree-rule">
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

.__agree-fallow__item, .agree-rule {
  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  input + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }

  input + label::before {
    content: '';
    display: inline-block;
    width: rem(25);
    height: rem(25);
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid black;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
}
.__agree-fallow__item{
  input:checked + label::before {
    background-color:#3ADD9D;
    border-color: #3ADD9D;
  }
}
.agree-rule {
  margin-top: rem(50);
  input + label::before {
    width: rem(13);
    height: rem(13);
  }

  input:checked + label::before {
    background-image:url('https://u1600792.isp.regruhosting.ru/NOBLESNOB__TEMP/checkbox_rule/closeRule.svg');
    background-size: cover;
  }
}
</style>
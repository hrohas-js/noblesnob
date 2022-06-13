<template>
  <div class="contact-form__container">
    <div class="contact-form__contact-following">
      <div class="contact-form__our-contact">
        <H2>НУЖНА ПОМОЩЬ С ЗАКАЗОМ?</H2>
        <a href="tel='+79854273757'">+7 985 427-37-57</a>
        <p>MAIL TO : <a href="mailto='hi@noblesnob.com'">hi@noblesnob.com</a></p>
      </div>
      <div class="contact-form__following">
        <H2>БУДЬ В КУРСЕ</H2>
        <div class="__following__submit">
          <input type="email">
          <input type="submit" value="подписка">
        </div>
        <div class="__following__agree-fallow">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>

<style scoped lang="scss">
h2 {
  font-family: "Partner Condensed Bold";
  font-size: rem(18);
  margin-bottom: rem(33);
}

.contact-form__our-contact a, .contact-form__our-contact p, .contact-form__following input, .__agree-fallow__item input p, .agree-rule input, .agree-rule p {
  cursor: pointer;
}

.contact-form__contact-following {
  display: flex;
  gap: rem(205);
}

.contact-form__our-contact {
  flex: 1 1 40%;
}

.contact-form__following {
  flex: 1 1 60%;
}

.__following__submit {
  position: relative;
}

.__following__submit input[type='email'] {
  height: rem(41);
  width: 100%;
}

.__following__submit input[type='submit'] {
  position: absolute;
  right: 0;
  height: rem(41);
  width: 40%;
  background-color: #3ADD9D;
  color: white;
  text-transform: uppercase;
}

.__following__agree-fallow {
  display: flex;
  justify-content: center;
  gap: rem(25);
  margin-top: rem(25);
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
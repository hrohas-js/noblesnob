<template>
  <div class="contact-form__container">
    <div class="contact-form__contact-following">
      <div class="contact-form__our-contact">
        <h2>НУЖНА ПОМОЩЬ С ЗАКАЗОМ?</h2>
        <a href="tel='+79854273757'">+7 985 427-37-57</a>
        <p>MAIL TO : <a href="mailto='hi@noblesnob.com'">hi@noblesnob.com</a></p>
      </div>
      <div class="contact-form__following">
        <H2>БУДЬ В КУРСЕ</H2>
        <div class="__following__submit">
          <input type="email">
          <input type="submit" value="подписка">
        </div>
        <CustomFolofingChackbox :page="'contactForm'"></CustomFolofingChackbox>
      </div>
    </div>
  </div>
</template>

<script>
import CustomFolofingChackbox from "@/components/CustomFallowCheckbox";
export default {
  name: 'ContactForm',
  components: {CustomFolofingChackbox}
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
</style>
<template>
  <div class="contact-form__container">
    <div class="contact-form__contact-following">
      <div class="contact-form__our-contact">
        <h2>НУЖНА ПОМОЩЬ С ЗАКАЗОМ?</h2>
        <a href="tel:+79854273757">+7 985 427-37-57</a>
        <p>MAIL TO : <a href="mailto:hi@noblesnob.com">hi@noblesnob.com</a></p>
      </div>
      <div class="contact-form__following">
        <h2>БУДЬ В КУРСЕ</h2>
        <div class="__following__submit">
          <input type="email" placeholder="EMAIL">
          <input type="submit" value="подписка">
        </div>
        <CustomFollowingCheckbox :page="'contactForm'"/>
      </div>
    </div>
  </div>
</template>

<script>
import CustomFollowingCheckbox from "@/components/CustomFallowCheckbox";

export default {
  name: 'ContactForm',
  components: {CustomFollowingCheckbox}
}
</script>

<style scoped lang="scss">
h2 {
  font-family: "Partner Condensed Bold", sans-serif;
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

input[type="email"] {
  padding-left: rem(10);
}

@media (max-width: em(768, 16)) {
  .contact-form__contact-following {
    gap: 0;
    flex-direction: column;
  }
  h2 {
    text-align: center;
  }
  .contact-form__our-contact {
    text-align: center;
  }
  .contact-form__following {
    margin-top: rem(30);
    border-top: 1.5px solid black;
    padding: rem(16) rem(20) 0 rem(20);
  }
}
</style>

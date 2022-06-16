<template>
  <div class=__content__item :class="{nomb:$route.params.aboutVariant=='partnership'}">
    <h2>партнерство</h2>
    <p>Мы предлагаем наш интернет-магазин как площадку для продажи товаров класса «премиум» и «люкс».</p>
    <p>Мы всегда находимся в поиске новых партнеров и будем рады рассмотреть ваше предложение!</p>
    <p>Чтобы стать партнером по модели маркетплейс на <a href="noblesnob.com">noblesnob.com</a>, присылайте заявки на
      <a href="diana@noblesnob.com">diana@noblesnob.com</a></p>
    <p>В заявке укажите следующую информацию:<br>
      -История бренда<br>
      - Актуальный лукбук с розничными ценами,<br>
      - Контактное лицо для обсуждения условий сотрудничества
    </p>
  </div>
</template>

<script>
export default {
  name: 'partnership'
}
</script>

<style scoped>

</style>
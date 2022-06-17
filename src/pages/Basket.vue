<template>
  <div class="basket container">
    <Header></Header>
    <main>
      <div class="basket__container">
        <div class="__item">
          <h1>Корзина</h1>
          <div class="__basket-table">
            <div class="__row"></div>
            <div class="__row">
              <div class="__coll __coll__picture">
                <img src="@/assets/temp/tempJpg.jpg" alt="some photo">
              </div>
              <div class="__coll">
                <ul>
                  <li>
                    <p>GSDC</p>
                    <p>ТОЛСТОВКА</p>
                  </li>
                  <li class="__coll__size">
                    <p>размер:M</p>
                    <p style="cursor: pointer">изменить</p>
                  </li>
                  <li>
                    <p>TJ21M020001-13</p>
                  </li>
                  <li class="__coll__count">
                    <p>КОЛЛИЧЕСТВО:</p>
                    <div class="__count__item">
                      1
                      <input type="submit" value="+">
                      <input type="submit" value="-">
                    </div>
                    <p class="little-count">1 экземпляр!</p>
                  </li>
                  <li class="__coll__go-wishlist">
                    <p>переместить в избранное</p>
                  </li>
                </ul>
              </div>
              <div class="__coll">
                <p>₽ 16.000 RUB</p>
              </div>
              <div class="__coll dell-item">
                <img src="@/assets/svg/close__button.svg" alt="close button">
              </div>
            </div>
            <div class="__row">
              <div class="__coll grid-start">
                <ul>
                  <li>
                    <p>ИТОГО</p>
                    <p>ДОСТАВКА</p>
                  </li>
                  <li>
                    <p>Всего</p>
                  </li>
                </ul>
              </div>
              <div class="__coll">
                <ul>
                  <li>
                    <p>₽ 16.000 RUB</p>
                    <p>Рассчитывается при оформлении заказа</p>
                  </li>
                  <li>
                    <p>₽ 16.000 RUB</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="__item">
          <div class="__action-order__description">
            <h2>ОФОРМЛЕНИЕ ЗАКАЗА</h2>
            <p>введите адрес электронной почты, чтобы войти в систему либо продолжайте покупки без авторизации</p>
            <p> Возврат товара конфиденциальность</p>
          </div>
          <div class="__action-order__form">
            <p>EMAIL</p>
            <input type="text">
            <input type="submit" value="ПЕРЕЙТИ К ОПЛАТЕ">
          </div>
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'Basket',
  components: {Footer, Header}
}
</script>

<style scoped lang="scss">
.basket__container{
  display: flex;
  gap:rem(150)
}
.__item, .__basket-table {
  margin-top: rem(118);
}
.__item:first-child{
  flex: 1 1 75%;
}
.__item:last-child{
  flex: 1 1 25%;
}
.__row {
  display: grid;
  grid-template-columns: rem(133) 1fr repeat(2,0.5fr);
  grid-gap: rem(40);
  border-bottom: 1px solid;

  &:last-child {
    border-bottom: none;
  }

  p {
    text-transform: uppercase;
  }
}

.__coll {
  padding: rem(20) 0;

  li {
    margin-bottom: rem(16);

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.__coll__picture {
  align-self: center;
}

.__coll__size, .__coll__count {
  display: flex;
  gap: rem(10);

  p:last-child {
    text-decoration: underline;
  }
}

.__count__item {
  margin-left: 8px;
  position: relative;

  input[type='submit'] {
    cursor: pointer;
    position: absolute;
    background-color: #fff;
    border: none;
    top: 0;
  }

  input[type='submit']:first-child {
    left: rem(-12);
    top: rem(1);
  }

  input[type='submit']:last-child {
    right: rem(-6);
  }
}

.dell-item {
  justify-self: end;
  cursor: pointer;
}

.little-count {
  color: #7B7B7B;
  text-transform: lowercase !important;
}

.grid-start {
  grid-column-start: 2;
}
.__action-order__description{
  h2{
    font-family: "Partner Condensed Bold";
    font-size: rem(18);
  }
  p{
    font-size: rem(14);
    text-transform: uppercase;
    margin-top: rem(30);
  }
}
.__action-order__form{
  margin-top: rem(30);
  p{
    font-size: rem(14);
  }
  input{
    width: 100%;
    height: rem(46);
  }
  input[type='submit']{
    border: none;
    background-color: #3ADD9D;
    color: white;
    margin-top: rem(20);
    cursor: pointer;
  }
}
</style>
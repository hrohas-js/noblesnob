<template>
  <div class="ordering container">
    <Header></Header>
    <main>
      <h1>ОФОРМЛЕНИЕ ЗАКАЗА</h1>
      <div class="ordering__address-delivery">
        <p>Адресс доставки</p>
        <div class="__address-delivery__item address">
          <div class="__item">
            <input type="text" placeholder="ИМЯ*" v-model="name">
            <input type="text" placeholder="CТРАНА/РЕСПУБЛИКА">
            <input type="text" placeholder="ГОРОД*">
            <input type="text" placeholder="ИНДЕКС/ZIP">
            <input type="text" placeholder="EMAIL">
            <div class="__sub-item">
              <p>КОММЕНТАРИИ К ЗАКАЗУ</p>
              <input type="text" value="">
              <div class="address__checkbox custom__cross">
                <input type="checkbox" id="address">
                <label for="address">Использовать в качестве платежного адреса</label>
              </div>
            </div>
          </div>
          <div class="__item">
            <input type="text" placeholder="ФАМИЛИЯ*">
            <input type="text" placeholder="РЕГИОН/ОБЛАСТЬ*">
            <input type="text" placeholder="УЛИЦА,ДОМ,КОРПУС,КВАРТИРА">
            <input type="text" placeholder="ТЕЛЕФОН">
          </div>
        </div>
        <div class="ordering__delivery-option">
          <div class="__row">
            <div class="__coll">СПОСОБ ДОСТАВКИ</div>
            <div class="__coll">ЦЕНА</div>
          </div>
          <div class="__address-delivery__item">
            <div class="__row">
              <div class="__coll custom__grin-box">
                <input type="radio" name="delivery" id="inMoscow">
                <label for="inMoscow">ДОСТАВКА КУРЬЕРОМ ПО МОСКВЕ</label>
              </div>
              <div class="__coll">
                <p>₽ 600</p>
              </div>
            </div>
            <div class="__row">
              <div class="__coll custom__grin-box">
                <input type="radio" name="delivery" id="pickUp">
                <label for="pickUp">САМОВЫВОЗ</label>
              </div>
              <div class="__coll">
                <p>₽ 0</p>
              </div>
            </div>
            <div class="__row">
              <div class="__coll custom__grin-box">
                <input type="radio" name="delivery" id="DHL">
                <label for="DHL">DHL Express</label>
              </div>
              <div class="__coll">
                <p>₽ 2300</p>
              </div>
            </div>
            <div class="__row">
              <div class="__coll custom__grin-box">
                <input type="radio" name="delivery" id="yandex">
                <label for="yandex">YANDEX</label>
              </div>
              <div class="__coll">
                <p>₽ 2300</p>
              </div>
            </div>
          </div>
        </div>
        <div class="ordering__sub-address-delivery">
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
      <div class="ordering__you-orders"></div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'Ordering',
  components: {Footer, Header},
  data:()=>({
    name:'',
    city:'',
    index:'',
    country:''
  })
}
</script>

<style scoped lang="scss">
main {
  padding: rem(153) rem(250) rem(86) rem(250);
}

h1 {
  font-family: "Partner Condensed Bold";
  font-size: rem(18);
  text-transform: uppercase;
}

p {
  font-size: rem(13);
  text-transform: uppercase;
}

input {
  width: 100%;
  padding: rem(20) rem(16);
  margin-bottom: rem(27);

  &:last-child {
    margin-bottom: 0;
  }
}

input[value] {
  color: #C4C4C4;
  font-size: 13px;
}

.ordering__address-delivery {
  margin-top: rem(45);
}

.__address-delivery__item {
  border-top: 1px solid;
}

.address {
  display: flex;
  justify-content: space-between;
  gap: rem(42);
  margin-top: rem(18);
  padding-top: rem(27);

  .__sub-item {
    margin-top: rem(32);

    p {
      margin-bottom: rem(15);
    }

    input[type='text'] {
      margin-bottom: rem(42);
    }

    .address__checkbox {
      display: flex;
      align-items: center;

      input[type='checkbox'] {
        width: auto;
        margin-bottom: 0;
      }
    }
  }
}
.ordering__delivery-option{
  margin-top: rem(55);
}
.__row{
  display: grid;
  grid-template-columns: repeat(2,1fr);
}
.__coll{
  padding:rem(23) 0;
}
</style>
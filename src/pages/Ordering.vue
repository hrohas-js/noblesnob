<template>
  <div class="ordering container">
    <Header></Header>
    <main>
      <h1>ОФОРМЛЕНИЕ ЗАКАЗА</h1>
      <div class="ordering__container">
        <div class="ordering__address-delivery">
          <p>Адресс доставки</p>
          <div class="__address-delivery__item address">
            <div class="__item">
              <input type="text" placeholder="ИМЯ*" v-model="name">
              <input type="text" placeholder="CТРАНА/РЕСПУБЛИКА" v-model="country">
              <input type="text" placeholder="ГОРОД*" v-model="city">
              <input type="text" placeholder="ИНДЕКС/ZIP" v-model="index">
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
              <input type="text" placeholder="ФАМИЛИЯ*" v-model="surname">
              <input type="text" placeholder="РЕГИОН/ОБЛАСТЬ*">
              <input type="text" placeholder="УЛИЦА,ДОМ,КОРПУС,КВАРТИРА" v-model="address">
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
            <p>АДРЕС ДОСТАВКИ</p>
            <div class="__you-contact">
              <p>{{ name }} {{ surname }}</p>
              <p>{{ address }}</p>
              <p>{{ city }} {{ index }} {{ country }}</p>
            </div>
          </div>
        </div>
        <div class="ordering__you-orders">
          <p>Ваш заказ</p>
          <div class="__you-orders__table">
            <div class="__row">
              <div class="__coll">
                <img src="@/assets/temp/tempJpg.jpg" alt="some photo">
              </div>
              <div class="__coll">
                <ul>
                  <li>
                    <p>GSDC</p>
                    <p>ТОЛСТОВКА</p>
                  </li>
                  <li class="change-size">
                    <p>
                      РАЗМЕР:M
                    </p>
                    <p>
                      изменить размер
                    </p>
                  </li>
                  <li>
                    <p>TJ21M020001-13</p>
                  </li>
                </ul>
              </div>
              <div class="__coll">
                <p>₽ 16.000 </p>
              </div>
            </div>
          </div>
          <div class="__you-orders__description">
            <ul>
              <li>
                <p>СТРАНА / РЕГИОН : РОССИЯ</p>
              </li>
              <li>
                <p>СУММА ЗАКАЗА</p>
                <p>₽ 16.000 </p>
              </li>
              <li>
                <p>ДОСТАВКА</p>
                <p>₽ 600 </p>
              </li>
              <li>
                <p>ИТОГО</p>
                <p>₽ 16.600 </p>
              </li>
            </ul>
          </div>
          <div class="__you-orders__button">
            <input type="submit">
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
  name: 'Ordering',
  components: {Footer, Header},
  data: () => ({
    name: '',
    surname: '',
    city: '',
    index: '',
    address: '',
    country: ''
  })
}
</script>

<style scoped lang="scss">
main {
  padding: rem(50) rem(20) rem(215) rem(80);
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

.ordering__container {
  display: flex;
  gap: rem(198);
  margin-top: rem(45);
}

.ordering__address-delivery {
  flex: 1 1 70%;
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

.ordering__sub-address-delivery {
  margin-top: rem(40);

  &>p{
    margin-bottom: rem(23);
  }
}
.__you-contact{
  border-top: 1px solid;
  padding-top:rem(23);
  p{
    font-style: rem(13);
    margin-bottom: rem(9);
  }
  &:last-child{
    margin-bottom: 0;
  }
}
.ordering__delivery-option {
  margin-top: rem(55);
}

.ordering__you-orders {
  flex: 1 1 30%
}

.__row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.__coll {
  padding: rem(23) 0;
}

.__you-orders__table {
  .__row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-top: 1px solid;
    margin-top: rem(18);

    .__coll:last-child {
      justify-self: end;
    }
  }

  .change-size {
    p:last-child {
      font-size: rem(10);
    }
  }

  li {
    margin-bottom: rem(17);

    p {
      font-size: rem(14);
    }
  }
}

.__you-orders__description {
  li {
    display: flex;
    justify-content: space-between;
    padding: rem(17) 0;
    border-top: 1px solid;

    &:first-child {
      border-top: none;
    }
  }
}

.__you-orders__button {
  input[type='submit'] {
    border: none;
    background-color: #3adc9c;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
  }
}
</style>
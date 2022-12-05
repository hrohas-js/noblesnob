<template>
  <div class="profile-add-address">
    <h1>Адрес</h1>
    <div class="profile__table">
      <div class="__item">
        <p>имя</p>
        <input
            type="text"
            v-model="adr.first_name"
            @input="adr.first_name = adr.first_name.replace(/[^ a-zа-яё]/ui,'')"
        />
      </div>
      <div class="__item">
        <p>фамилия</p>
        <input
            type="text"
            v-model="adr.last_name"
            @input="adr.last_name = adr.last_name.replace(/[^ a-zа-яё]/ui,'')"
        />
      </div>
      <div class="__item sub">
        <p>страна/республика</p>
        <input
            type="text"
            v-model="adr.country"
            @input="adr.country = adr.country.replace(/[^ a-zа-яё]/ui,'')"
        />
      </div>
      <div class="__item">
        <p>город</p>
        <input
            type="text"
            v-model="adr.city"
            @input="adr.city = adr.city.replace(/[^ a-zа-яё]/ui,'')"
        />
      </div>
      <div class="__item">
        <p>регион/область</p>
        <input
            type="text"
            v-model="adr.state"
            @input="adr.state = adr.state.replace(/[^ a-zа-яё]/ui,'')"
        />
      </div>
      <div class="__item">
        <p>улица,дом,корпус,квартира</p>
        <input
            type="text"
            v-model="adr.address_1"
            @input="adr.address_1 = adr.address_1.replace(/[^ a-zа-яё]/ui,'')"
        />
      </div>
      <div class="__item">
        <p>индекс/zip</p>
        <input
            type="text"
            v-model="adr.postcode"
        />
      </div>
      <div class="__item">
        <p>телефон</p>
        <input
            type="text"
            v-model="adr.phone"
            @input="adr.phone = adr.phone.replace(/^[^0-9]$/ui,'')"
        />
      </div>
    </div>
    <div class="__save-settings custom__grin-box">
      <input type="checkbox" id="deff" v-model="setDefault">
      <label for="deff">Установить как адрес доставки по умолчанию</label>
    </div>
    <div class="profile__buttons">
      <input type="submit" value="отмена" @click="reboot">
      <input type="submit" value="сохранить изменения" @click="saveAddress">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileAddAddress',
  data: () => ({
    adr: {
      first_name: '',
      last_name: '',
      city: '',
      postcode: '',
      address_1: '',
      country: '',
      state: '',
      phone: ''
    },
    setDefault: false
  }),
  computed: {
    isEmptyAddress() {
      let flag = false
      Object.values(this.adr).forEach(elem => {
        if (elem === '') {
          flag = true
        }
      })
      return flag
    },
    userEmail() {
      if (Object.keys(this.$store.state.user).length > 0) {
        return this.$store.state.user.meta.email[0]
      } else {
        return ''
      }
    }
  },
  mounted() {
    if (this.$store.state.user.meta.address.length > 0) {
      const obj = this.$store.state.user.meta.address[0]
      this.adr.first_name = obj.first_name
      this.adr.last_name = obj.last_name
      this.adr.city = obj.city
      this.adr.country = obj.country
      this.adr.state = obj.state
      this.adr.address_1 = obj.address_1
      this.adr.postcode = obj.postcode
      this.adr.phone = obj.phone
      this.setDefault = obj.is_default
    }
  },
  methods: {
    saveAddress() {
      if (!this.isEmptyAddress) {
        this.$store.dispatch('updateUser', {
          meta: {
            address: [{
              first_name: this.adr.first_name,
              last_name: this.adr.last_name,
              city: this.adr.city,
              postcode: this.adr.postcode,
              address_1: this.adr.address_1,
              country: this.adr.country,
              state: this.adr.state,
              phone: this.adr.phone,
              email: this.userEmail,
              is_default: this.setDefault
            }]
          }
        })
      } else {
        this.$store.commit('ADD_STATUS', 'Ошибка при заполнении адреса')
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    },
    reboot() {
      this.adr = {
        first_name: '',
        last_name: '',
        city: '',
        postcode: '',
        address_1: '',
        country: '',
        state: '',
        phone: ''
      }
      this.setDefault = false
    }
  }
}
</script>

<style scoped lang="scss">
.profile__table input {
  padding: 0 rem(20);
}

.profile-add-address {
  margin-bottom: rem(150);
}

.sub {
  position: relative;
}

.__save-settings {
  margin-top: rem(38);

  label {
    font-size: rem(13);
    margin-bottom: rem(20);

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.profile__buttons {
  display: flex;
  justify-content: space-between;
  margin-top: rem(50);
  input {
    width: 45%;
    text-transform: uppercase;
    cursor: pointer;
  }

  input:first-child {
    background-color: #fff;
  }
  input:last-child{
    background-color: #3ADD9D;
    border: none;
    color: white;
  }
}
</style>

<template>
  <div class="booking-form">
    <form action @submit.prevent="submit()">
      <div class="modal-card">
        <header class="modal-card-head">
          <!-- <div> -->
          <p class="modal-card-title">Uttranchal Holidays: Booking Form</p>
          <!-- <p>Fill the booking form our travel expert will contact you within 24hrs</p> -->
          <!-- </div> -->
          <button type="button" class="delete" @click="close()" />
        </header>

        <section class="modal-card-body">
          <p class="modal-card-heading">
            Fill the booking form our travel expert will contact you within
            24hrs
          </p>

          <h5 class="title is-4">{{ title }}</h5>
          <b-field>
            <b-input
              type="text"
              v-model="formData.name"
              placeholder="Your Name"
              required
            ></b-input>
          </b-field>
          <b-field>
            <b-input
              type="email"
              v-model="formData.email"
              placeholder="Your Email"
              required
            ></b-input>
          </b-field>
          <b-field>
            <b-input
              placeholder="Phone Number"
              v-model="formData.phoneNumber"
              type="number"
            ></b-input>
          </b-field>
          <div class="adult-child">
            <b-field>
              <b-select placeholder="Adult" v-model="formData.adult">
                <option v-for="(item, i) in adults" :key="i" :value="item">
                  {{ item }}
                </option>
              </b-select>
            </b-field>
            <b-field>
              <b-select placeholder="Children" v-model="formData.children">
                <option v-for="(item, i) in children" :key="i" :value="item">
                  {{ item }}
                </option>
              </b-select>
            </b-field>
          </div>
          <b-field>
            <div class="date-picker1" v-on:click="scrollToView('date-picker1')">
              <b-datepicker
                v-model="formData.date"
                :show-week-number="showWeekNumber"
                :locale="'en-GB'"
                placeholder="Click to select..."
                icon="calendar-today"
                trap-focus
              ></b-datepicker>
            </div>
          </b-field>
          <b-field>
            <b-input
              v-model="formData.requirement"
              maxlength="200"
              type="textarea"
              placeholder="Requirement"
            ></b-input>
          </b-field>
        </section>
        <footer class="modal-card-foot">
          <button type="button" class="button" @click.prevent="close()">
            Close
          </button>
          <button type="submit" class="button is-blue" @click.prevent="submit()">Submit</button>
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'BookingForm',
  components: {},
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    scrollToView(className) {
      document.querySelector('.' + className).scrollIntoView({
        behavior: 'smooth',
      });
    },
    close() {
      this.$emit('close');
    },
    submit() {
      console.log({
        subject: `Quotation request for ${this.formData.selectedTour}`,
        data: this.formData
      });
      this.$emit('close');
    }
  },
  data() {
    return {
      name: '',
      phoneNo: '',
      emailId: '',
      query: '',
      adults: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      children: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      selected: null,
      showWeekNumber: false,
      formData: {
        selectedTour: this.title,
        name: '',
        email: '',
        phoneNumber: '',
        adult: null,
        children: null,
        date: null,
        requirement: '',
      },
    };
  },
  created() {},
};
</script>

<style lang="scss">
.booking-form {
  .title {
    color: #47caf0 !important;
  }
}
.adult-child {
  display: flex;
  select {
    width: 290px;

    &:first-child {
      margin-right: 12px;
    }
  }
}
.modal-card-heading {
  padding: 0 0 10px 0;
}

.modal-card-head {
  background-color: #47caf0 !important;
}

.is-blue {
  border-color: #44f3ca;
}
</style>

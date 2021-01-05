<template>
  <div class="booking-form">
    <form action @submit.prevent="submit()" v-if="!isSubmitted">
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Uttranchal Holidays: Booking Form</p>
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
              name="name"
              v-model="formData.name"
              placeholder="Your Name"
              required
            ></b-input>
          </b-field>
          <b-field>
            <b-input
              type="email"
              name="email"
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
              name="phoneNumber"
              required
            ></b-input>
          </b-field>
          <div class="adult-child">
            <b-field>
              <b-select
                placeholder="Adult"
                v-model="formData.adult"
                required
                name="adult"
              >
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
                v-model="selectedDate"
                :show-week-number="showWeekNumber"
                :locale="'en-GB'"
                placeholder="Click to select..."
                icon="calendar-today"
                trap-focus
                name="selectedDate"
                required
              ></b-datepicker>
            </div>
          </b-field>
          <b-field>
            <b-input
              v-model="formData.requirement"
              maxlength="200"
              type="textarea"
              placeholder="Requirement"
              required
              name="requirement"
            ></b-input>
          </b-field>
        </section>
        <footer class="modal-card-foot">
          <button type="button" class="button" @click.prevent="close()">
            Close
          </button>
          <button type="submit" class="button is-blue">Submit</button>
        </footer>
      </div>
    </form>
    <div class="modal-card" v-else>
      <b-message type="is-success" auto-close has-icon>
        <span>Thanks for choosing Uttranchalholidays.com, <br />
        Our travel expert team will contact you within 24hrs</span>
      </b-message>
    </div>
  </div>
</template>

<script>
import { functions } from '../firebase/firebase';
import moment from 'moment';

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
      const callable = functions.httpsCallable('genericEmail');

      return callable({
        subject: `Quotation required for ${this.formData.selectedTour}`,
        user: this.formData,
      }).then(() => {
        console.log('Mail sent!!!');
        this.isSubmitted = !this.isSubmitted;
        // setTimeout(() => {
        //   this.$emit('close');
        // }, 3000);
      });
    },
  },
  computed: {
    selectedDate: {
      get() {
        return this.formData.date ? new Date(this.formData.date) : null;
      },
      set(value) {
        this.formData.date = value ? moment(value).format() : null;
      },
    },
  },
  data() {
    return {
      name: '',
      phoneNo: '',
      emailId: '',
      query: '',
      adults: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
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
      isSubmitted: false,
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

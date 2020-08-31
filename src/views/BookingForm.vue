<template>
  <div class="booking-form">
    <form action>
      <div class="modal-card">
        <header class="modal-card-head">
          <!-- <div> -->
          <p class="modal-card-title">Uttranchal Holidays: Booking Form</p>
          <!-- <p>Fill the booking form our travel expert will contact you within 24hrs</p> -->
          <!-- </div> -->
          <button type="button" class="delete" @click="$emit('close')" />
        </header>

        <section class="modal-card-body">
          <p
            class="modal-card-heading"
          >Fill the booking form our travel expert will contact you within 24hrs</p>

          <b-field>
            <b-input type="text" :value="name" placeholder="Your Name" required></b-input>
          </b-field>
          <b-field>
            <b-input type="email" :value="emailId" placeholder="Your Email" required></b-input>
          </b-field>
          <b-field>
            <b-input placeholder="Phone Number" type="number" min="10" max="10"></b-input>
          </b-field>
          <div class="adult-child">
            <b-field>
              <b-select placeholder="Adult">
                <option v-for="(item, i) in adults" :key="i" :value="item">{{ item }}</option>
              </b-select>
            </b-field>
            <b-field>
              <b-select placeholder="Children">
                <option v-for="(item, i) in children" :key="i" :value="item">{{ item }}</option>
              </b-select>
            </b-field>
          </div>
          <b-field>
            <div class="date-picker1" v-on:click="scrollToView('date-picker1')">
              <b-datepicker
                v-model="selected"
                :show-week-number="showWeekNumber"
                :locale="'en-GB'"
                placeholder="Click to select..."
                icon="calendar-today"
                trap-focus
              ></b-datepicker>
            </div>
          </b-field>
          <b-field>
            <b-input maxlength="200" type="textarea" placeholder="Requirement"></b-input>
          </b-field>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click="$emit('close')">Close</button>
          <button class="button is-blue">Submit</button>
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "BookingForm",
  components: {},
  methods: {
    scrollToView(className) {
      console.log(className);
      // let el = this.$el.getElementsByClassName(className);
      document.querySelector("." + className).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
  data() {
    return {
      name: "",
      phoneNo: "",
      emailId: "",
      query: "",
      adults: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      children: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      selected: null,
      showWeekNumber: false,
    };
  },
  created() {},
};
</script>

<style lang="scss">
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

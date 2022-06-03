<template>
  <div class="submit-form">
    <div v-if="!submitted">

      <div class="form-group">
        <label for="email">Email</label>
        <input
            type="text"
            class="form-control"
            id="email"
            required
            v-model="user.email"
            name="email"
        />
        </div>

      <div class="form-group">
        <label for="pass">Password</label>
        <input
            type="text"
            class="form-control"
            id="pass"
            required
            v-model="user.password"
            name="pass"
        />
      </div>

      <button @click="signIn" class="btn btn-success">Вход</button>
    </div>

    <div v-else>
      <div>Здравейте</div>
    </div>
  </div>
</template>

<script>
import ScheduleDataService from "../service/ScheduleDataService";

export default {
  name: "SignIn",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        isAdmin: false
      },
      submitted: false
    };
  },
  methods: {

    signIn() {
      ScheduleDataService.signIn(this.user)
          .then(response => {



            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });

    },



  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>

<template>
  <div class="submit-form">
    <div v-if="!submitted">

      <div class="form-group">
        <label for="name">Име</label>
        <input
            type="text"
            class="form-control"
            id="name"
            required
            v-model="user.name"
            name="name"
        />
      </div>
      <div class="form-group">
        <label for="email">Имейл</label>
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
        <label for="pass">Парола</label>
        <input
            class="form-control"
            id="pass"
            required
            v-model="user.pass"
            name="pass"
        />

      </div>

      <button @click="saveUser" class="btn btn-success">Регистрация</button>
    </div>

    <div v-else>
      <h4>Успешна регистрация!</h4>
    </div>
  </div>
</template>

<script>
import ScheduleDataService from "../service/ScheduleDataService";

export default {
  name: "AddUser",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        isAdmin:false,
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveUser() {
      let data = {
        name: this.name,
        email: this.email,
        pass: this.pass,
      };

      ScheduleDataService.register(data)
          .then(response => {
            this.user.id= response.data.id;
            console.log(response.data);
            this.submitted = true;
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

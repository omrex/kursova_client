<template>
  <div v-if="currentScheduleRow" class="edit-form">
    <h4>Product</h4>
    <form>
      <div class="form-group">
        <label for="category">Category</label>
        <input type="text" class="form-control" id="category"
               v-model="currentScheduleRow.id"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description"
               v-model="currentScheduleRow.groupID"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentScheduleRow.published ? "Published" : "Pending" }}
      </div>
    </form>

    <button class="badge badge-primary mr-2"
            v-if="currentScheduleRow.published"
            @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button v-else class="badge badge-primary mr-2"
            @click="updatePublished(true)"
    >
      Publish
    </button>

    <button class="badge badge-danger mr-2"
            @click="deleteRow"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
            @click="updateRow"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Schedule Row...</p>
  </div>
</template>

<script>
import ScheduleDataService from "../service/ScheduleDataService";

export default {
  name: "ScheduleRow",
  data() {
    return {
      currentScheduleRow: null,
      message: ''
    };
  },
  methods: {
    getSchedule(id) {
      ScheduleDataService.getScheduleByID(id)
          .then(response => {
            this.currentScheduleRow = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    updatePublished(status) {
      let data = {
        id_product: this.currentScheduleRow.id_product,
        id_cat: this.currentScheduleRow.id_cat,
        price: this.currentScheduleRow.price,
        desc_product: this.currentScheduleRow.desc_product,
        published: status
      };

      ScheduleDataService.update(this.currentScheduleRow.id_product, data)
          .then(response => {
            console.log(response.data);
            this.currentScheduleRow.published = status;
            this.message = 'The status was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
    },

    updateRow() {
      ScheduleDataService.update(this.currentScheduleRow.id, this.currentScheduleRow)
          .then(response => {
            console.log(response.data);
            this.message = 'The row was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
    },

    deleteRow() {
      ScheduleDataService.delete(this.currentScheduleRow.id_product)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: "schedule" });
          })
          .catch(e => {
            console.log(e);
          });
    }
  },
  mounted() {
    this.message = '';
    this.getSchedule(this.$router.params.id_product);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>

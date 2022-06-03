<template>
  <div class="submit-form">
    <div v-if="!submitted">

      <div class="form-group">
        <label for="groupID">Група</label>
        <input
            type="text"
            class="form-control"
            id="groupID"
            required
            v-model="schedule.groupID"
            name="groupID"
        />
      </div>
      <div class="form-group">
        <label for="year">Година</label>
        <input
            type="text"
            class="form-control"
            id="year"
            required
            v-model="schedule.year"
            name="year"
        />
      </div>

      <div class="form-group">
        <label for="month">Месец</label>
        <input
            class="form-control"
            id="month"
            required
            v-model="schedule.month"
            name="month"
        />
      </div>

      <div class="form-group">
        <label for="date">Дата</label>
        <input
            class="form-control"
            id="date"
            required
            v-model="schedule.date"
            name="date"
        />
      </div>

      <div class="form-group">
        <label for="startHour">Час започва</label>
        <input
            class="form-control"
            id="startHour"
            required
            v-model="schedule.startHour"
            name="startHour"
        />
      </div>

      <div class="form-group">
        <label for="endHour">Час завършва</label>
        <input
            class="form-control"
            id="endHour"
            required
            v-model="schedule.endHour"
            name="endHour"
        />
      </div>

      <div class="form-group">
        <label for="disciplineID">Код на дисциплината</label>
        <input
            class="form-control"
            id="disciplineID"
            required
            v-model="schedule.disciplineID"
            name="disciplineID"
        />
      </div>

      <div class="form-group">
        <label for="classNumber">Номер на занятие</label>
        <input
            class="form-control"
            id="classNumber"
            required
            v-model="schedule.classNumber"
            name="classNumber"
        />
      </div>

      <div class="form-group">
        <label for="classType">Вид занятие</label>
        <input
            class="form-control"
            id="classType"
            required
            v-model="schedule.endHour"
            name="classType"
        />
      </div>

      <div class="form-group">
        <label for="hours">Брой часове</label>
        <input
            class="form-control"
            id="hours"
            required
            v-model="schedule.hours"
            name="hours"
        />
      </div>

      <div class="form-group">
        <label for="departmentID">Код на факултет</label>
        <input
            class="form-control"
            id="departmentID"
            required
            v-model="schedule.departmentID"
            name="departmentID"
        />
      </div>

      <div class="lecturerID">
        <label for="lecturerID">Код на преподавател</label>
        <input
            class="form-control"
            id="lecturerID"
            required
            v-model="schedule.lecturerID"
            name="lecturerID"
        />
      </div>

      <div class="form-group">
        <label for="room">Стая</label>
        <input
            class="form-control"
            id="room"
            required
            v-model="schedule.room"
            name="room"
        />
      </div>

      <button @click="saveSchedule" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newSchedule">Добави още</button>
    </div>
  </div>
</template>

<script>
import ScheduleDataService from "../service/ScheduleDataService";

export default {
  name: "AddSchedule",
  data() {
    return {
      schedule: {
        groupID: null,
        year: null,
        month: null,
        date: null,
        startHour: null,
        endHour: null,
        disciplineID:null,
        classNumber:null,
        classType:null,
        hours:null,
        departmentID:null,
        lecturerID:null,
        room:null,
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveSchedule() {
      let data = {
        groupID: this.schedule.groupID,
        year: this.schedule.year,
        month: this.month,
        date: this.date,
        startHour: this.startHour,
        endHour: this.endHour,
        disciplineID:this.disciplineID,
        classNumber:this.classNumber,
        classType:this.classType,
        hours:this.hours,
        departmentID:this.departmentID,
        lecturerID:this.lecturerID,
        room:this.room
      };

      ScheduleDataService.create(data)
          .then(response => {
            this.schedule.id= response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
    },

    newSchedule() {
      this.submitted = false;
      this.schedule = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>

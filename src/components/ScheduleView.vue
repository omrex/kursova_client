<template>
  <h1>Разписание на ВВМУ</h1>
  <h5> Моля въведи критерий за търсене</h5>
  <div class="list row">
    <div class="col-md-4">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Номер на класно"
               v-model="id_group"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
                  @click="this.searchByGroup()">Търси
          </button>
        </div>
      </div>
      </div>

    <div class="col-md-4">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Номер на преподавател"
               v-model="id_lec"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
                  @click="this.searchByLecturer()">Търси
          </button>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Номер зала"
               v-model="id_room"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
                  @click="this.searchByRoomID()">Търси
          </button>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <ul class="list-group">
        <li class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(scheduleRow, index) in schedule"
            :key="index"
            @click="setActiveSchedule(scheduleRow, index)"
        >
          {{ scheduleRow.date + "." + scheduleRow.month + "." +scheduleRow.year }}
        </li>
      </ul>

    </div>
    <div class="col-md-6">
      <div v-if="currentRow">
        <h4>Час: {{ currentRow.startHour }} - {{ currentRow.endHour }}</h4>
        <div>
          <label><strong>Предмет:</strong></label> {{ currentRow.disciplineID }}
        </div>
        <div>
          <label><strong>Класно:</strong></label> {{ currentRow.groupID }}
        </div>
        <div>
          <label><strong>Преподавател:</strong></label> {{ currentRow.lecturerID }}
        </div>
        <div>
          <label><strong>Зала:</strong></label> {{ currentRow.room }}
        </div>
        <div>
          <label><strong>Статут:</strong></label> {{ currentRow.published ? "Обработва се" : "Публикувано" }}
        </div>

        <router-link :to="'/schedule/' + currentRow.id" class="badge badge-warning">Edit</router-link>
      </div>
      <div v-else>
        <br />
        <p>Моля избери ред за повече инфо...</p>
      </div>
    </div>
  </div>
</template>

<script>
import ScheduleDataService from "../service/ScheduleDataService";

export default {
  name: "allSchedule",
  data() {
    return {
      schedule: [],
      currentRow: null,
      currentIndex: -1,
      id_group: null
    };
  },
  methods: {
    retrieveSchedule() {
      ScheduleDataService.getAll()
          .then(response => {
            this.schedule = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    refreshList() {
      this.retrieveSchedule();
      this.currentRow = null;
      this.currentIndex = -1;
    },

    setActiveSchedule(scheduleRow, index) {
      this.currentRow = scheduleRow;
      this.currentIndex = scheduleRow ? index : -1;
    },


    searchByGroup() {
      ScheduleDataService.findByGroupID(this.id_group)
          .then(response => {
            this.schedule = response.data;
            this.schedule.sort(
                function(a,b){
                  if (a.month===b.month){
                    return a.date - b.date;
                  }
                  return a.month>b.month ? 1 : -1;
                }
            );
            this.setActiveSchedule(null);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    searchByLecturer() {
      ScheduleDataService.findByLecturerID(this.id_lec)
          .then(response => {
            this.schedule = response.data;
            this.setActiveSchedule(null);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    searchByRoomID() {
      ScheduleDataService.findByRoomID(this.id_room)
          .then(response => {
            this.schedule = response.data;
            this.setActiveSchedule(null);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }

  },


};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>

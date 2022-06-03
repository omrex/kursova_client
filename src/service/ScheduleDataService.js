import http from "../http"


class ScheduleDataService {
    getAll() {
        return http.get("/allSchedule");
    }

    getScheduleByID(id) {
        return http.get(`/schedule/idschedule/${id}`);
    }

    create(data) {
        return http.post("/addschedule", data);
    }

    register(data) {
        return http.post("/register", data);
    }

    update(id, data) {
        return http.put(`/schedule/${id}`, data);
    }

    delete(id) {
        return http.delete(`/schedule/${id}`);
    }

    findByGroupID(groupID) {
        return http.get(`/schedule/group/${groupID}`);
    }

    findByLecturerID(lecID) {
        return http.get(`/schedule/lecturer/${lecID}`);
    }

    findByRoomID(roomID) {
        return http.get(`/schedule/room/${roomID}`);
    }

    createAdmin(data) {
        return http.post("/createAdmin", data);
    }

    signIn(data) {
        return http.get("/signIn", data);
    }



    findByID(userID) {
        return http.put(`/${userID}`);
    }

}

export default new ScheduleDataService();

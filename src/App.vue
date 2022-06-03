<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-primary">
      <router-link to="/" class="navbar-brand">ВВМУ Разписание</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/allSchedule" class="nav-link">Цялата програма</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/AddSchedule" class="nav-link">Добави програма</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/signIn" class="nav-link">Вход</router-link>
        </li>

        <li class="nav-item">
          <router-link to="/register" class="nav-link">Регистрация</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "app"
};
</script>

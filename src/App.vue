<template>
  <div id="app">
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">My Vue.js App</h2>
    </md-toolbar>

    <md-sidenav class="md-left" ref="leftSidenav">
        <md-toolbar class="md-large">
          <div class="md-toolbar-container">
            <img id="app-logo" src="./assets/logo.png">
          </div>
        </md-toolbar>
        
        <md-list>
          <md-list-item>
            <router-link :to="{ name: 'Home'}">Home</router-link>
          </md-list-item>
          <md-list-item>
            <router-link :to="{ name: 'Todo'}">Todo</router-link>
          </md-list-item>
          <md-list-item>
            <router-link :to="{ name: 'Json'}">Json</router-link>
          </md-list-item>
        </md-list>
    </md-sidenav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app-logo {
  width: 75px;
}

.md-toolbar-container {
  display: block !important;
  align-self: inherit !important;
}

.md-sidenav-content {
  width: 200px !important;
}
</style>

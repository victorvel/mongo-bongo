<template>
  <div id="app">
    <div class="header">
      <router-link to="/">
        <div class="logo">
          <img style="max-width: 180px;" src="../public/question.jpg" />
        </div>
      </router-link>
      <div class="title">
        <h1>Q&A</h1>
         <router-link to="/Answer" tag = button>Answer Questions</router-link>
         <router-link to="/Display" tag = button>View Questions</router-link>
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
    <div class="footer">
      <br>
          <a href="https://github.com/victorvel/mongo-bongo.git">
            Github Classrom Link</a>
    </div>
  </div>
</template>

<style>
#app {
  background-color: #2387E3;
}
html {
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  background-color: #2387E3;
  padding: 0px;
  margin: 0px;
}

/* Header /
.header {
  display: flex;
  padding: 10px 100px 0px 100px;
  background-color: #5bdeff;
  color: #1c454f;
}

.title {
  margin-top: 5px;
}

.title h1 {
  font-size: 30px;
}

.content {
  padding: 20px 100px;
  min-height: 500px;
}

/ Footer */
#app {
  min-height: 90vh;
  position: relative;
  padding-bottom: 50px;
}
.footer {
  height: 50px;
  padding: 20px 100px 0px 100px;
  background: #e3e3e3;
  font-size: 12px;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.footer a {
  color: #000;
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}
</style>
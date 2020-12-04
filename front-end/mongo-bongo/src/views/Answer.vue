<template>
  <div id="answer">
    <div class="header">
      <router-link to="/">
      </router-link>
      <div class="title">
        <h1>Answer Questions Below</h1>
         <router-link to="/" tag = button>Home</router-link>
      </div>
    </div>
    <div class="content">
      <div class="add">
      <div class="form">
        <div v-bind="title" name = "title"/>
        <p></p>
        <div v-bind="question" name="question" />
        <p></p>
        <input v-model="response" placeholder="Put Answer Here" />
        <input v-model="background" placeholder = "Why are you qualified to answer this Question"/>
        <button @click="upload">Post Answer</button>
      </div>
    </div>
  </div>
</template>

<style>

html {
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  background: #fff;
  padding: 0px;
  margin: 0px;
}

/* Header */
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

/* Footer */
#app {
  min-height: 90vh;
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


<script>
import axios from "axios";
export default {
  name: "Answer",
  data() {
    return {
      title: "", //Title of Question
      question: "", //Question Text
      response: "", //Answer Text
      background: "", //Answerer Experience Text
      name: "", //Name of Questioner
    
    };
  },
  computed: {
  },
  created() {
    this.getItems();
  },
  methods: {
    selectItem(item) {
      this.findTitle = "";
      this.findQuestion = "";
      this.findResponse = "";
      this.findBackground = "";
      this.findName = "";
      this.findItem = item;
    },
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        //console.log(error);//
      }
    },
    async editItem(item) {
      try {
        await axios.put("/api/items/" + item._id, {
          title: this.findItem.title,
          question: this.findItem.question,
          response: this.findItem.response,
          background: this.findItem.background,
          name: this.findItem.name,
        });
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        //console.log(error);//
      }
    },
    
    async deleteItem(item) {
      try {
        await axios.delete("/api/items/" + item._id);
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        // console.log(error);
      }
    },
    async upload() {
      try {
        let r1 = await axios.post("/api/items", {
          title: this.title,
          question: this.question,
          response: this.response,
          background: this.background,
          name: this.findItem.name,
        });
        this.addItem = r1.data;
      } catch (error) {
        //console.log(error);
      }
    },
  },
};
</script>
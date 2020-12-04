<template>
  <div id="home">
    <h1>Insert Question Here:</h1>
    <div id="box">
      <div id="input">
        <input class="form" v-model="name" placeholder="Name" />
        <input class="form" v-model="title" placeholder="Title of post" />
        <textarea
          class="form"
          v-model="question"
          name="question"
          id="question"
          cols="30"
          rows="10"
          placeholder="Question..."
        ></textarea>
        <button @click="upload" style="width: 70px">Submit</button>
      </div>
      <div class="upload" v-if="addItem">
        <h2>{{ addItem.name }}</h2>
        <h3>{{ addItem.title }}</h3>
        <p>{{ addItem.question }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      question: "",
      title: "",
      addItem: null,
      items: [],
      findName: "",
      response: "no answer yet",
      background: "none"
    };
  },
  computed: {},
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async upload() {
      try {
        let r1 = await axios.post("/api/items", {
          name: this.name,
          title: this.title,
          question: this.question,
          response: this.response,
          background: this.background
        });
        this.addItem = r1.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.form {
  background-color: lightgray;
}
#box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#input {
  display: flex;
  flex-direction: column;
  width: 50%;
}
#input input {
  margin-bottom: 10px;
}
</style>

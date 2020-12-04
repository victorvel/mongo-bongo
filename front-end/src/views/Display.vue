<template>
    <div id="display">
        <h1>Questions:</h1>
        <div id="qs" v-for="item in items" :key="item.id">
            <h2>{{item.title}}</h2>
            <p style="font-size: 18px;">"{{item.question}}"</p>
            <p>-{{item.name}}</p>
            <p>{{item.response}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
     items: [],
     findItem: null
    }
  },
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
    async editItem(item) {
      try {
        await axios.put("/api/items/" + item._id, {
          title: this.findItem.title,
          description: this.findItem.description
        });
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteItem(item) {
      try {
        await axios.delete("/api/items/" + item._id);
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
#display {
    color: white;
}
#qs {
    border: groove 1px black;
    padding: 20px;
    margin-bottom: 15px;
}
#qs h2 {
    text-decoration: underline;
    font-size: 20px;
}
</style>
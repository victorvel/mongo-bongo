<template>
    <div id="display">
        <h1>Questions:</h1>
        <div id="qs" v-for="item in items" :key="item.id">
            <h2>{{item.name}}</h2>
            <h2>{{item.title}}</h2>
            <p>{{item.question}}</p>
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
  }
}
</script>

<style scoped>

</style>
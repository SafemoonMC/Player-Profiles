<template>
<div class="h-screen bg-gray-500 pt-24 px-14">
    <div class="rounded-lg bg-white">
        <div v-if="this.name.length === 0">
            Player not found!
        </div>
        <div v-else>
            <div class="flex mx-auto p-5">
                <div>
                    <img :src="skinUrl">
                </div>
                <div class="ml-10">
                    <h1 class="font-bold text-4xl">{{this.name.charAt(0).toUpperCase() + this.name.slice(1)}}</h1>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      name: "",
      data: null,
    };
  },
  mounted() {
    this.name = this.$route.params.name;
    axios.get('https://mcapi.safemoon.net/player/' + this.name)
        .then(response => (this.data = response.data))
  },
  computed: {
      skinUrl() {
          return `https://crafatar.com/renders/body/${this.data.uuid}`
      }
  }
  
};
</script>
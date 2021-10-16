<template>
<div class="h-screen bg-gray-500 pt-24 px-14">
    <div class="rounded-lg bg-white">
        <div v-if="this.name.length === 0" class="items-center text-center">
            <div class="py-16">
                <h3 class="text-3xl font-bold pb-4">Player not found!</h3>            
                <img class="block lg:hidden h-48 w-auto mx-auto" src="@/assets/sadcreeper.png" alt="Mooncraft" />
            </div>
        </div>
        <div v-else>
            <div class="flex mx-auto p-5">
                <div>
                    <img :src="skinUrl">
                </div>
                <div class="ml-10">
                    <h1 class="font-bold text-4xl">{{this.name.charAt(0).toUpperCase() + this.name.slice(1)}}</h1>
                    <h1 class="">* Donator Rank Here*</h1>
                    <h1 class="pt-2">Last online: {{convertDate(this.data.loginData.lastJoin)}}</h1>
                    <h1 class="">First online: {{convertDate(this.data.loginData.firstJoin)}}</h1>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
import dateFormat from 'dateformat'
export default {
  name: 'App',
  data() {
    return {
      name: "",
      data: null,
    };
  },
  methods: {
      convertDate(time) {
          return dateFormat(time, "dddd, mmmm dS, yyyy, h:MM:ss TT")
      },
      convertDateNoTime(time) {
          return dateFormat(time, "fullDate");
      }
  },
  mounted() {
    this.name = this.$route.params.name;
    axios.get('https://mcapi.safemoon.net/player/' + this.name)
        .then(response => (this.data = response.data))
  },
  computed: {
      skinUrl() {
          return `https://crafatar.com/renders/body/${this.data.uuid}`
      },
  }
  
};
</script>
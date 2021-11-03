<template>
<CollectionsModal v-if="this.data" :collections="this.data.starfruitData.collections" ref="collectionsModal"/>
<div class="bg-gray-500 pt-24 px-14 flex justify-center">
    <div class="rounded-lg bg-white md:w-5/6 lg:w-4/6 2xl:w-3/6">
        <div v-if="this.name.length === 0" class="items-center text-center">
            <div class="py-16">
                <h3 class="text-3xl font-bold pb-4">Player not found!</h3>            
                <img class="block lg:hidden h-48 w-auto mx-auto" src="@/assets/sadcreeper.png" alt="Mooncraft" />
            </div>
        </div>
        <div v-else>
            <div class="flex mx-auto p-5 justify-center">
                <div>
                    <img :src="getSkin(this.data.uuid)">
                </div>
                <div class="ml-10">
                    <h1 class="font-bold text-4xl">{{this.name.charAt(0).toUpperCase() + this.name.slice(1)}}</h1>
                    <h1 class="">* Highest Rank Here*</h1>
                    <h1 class="pt-2">Last online: {{convertDate(this.data.loginData.lastJoin)}}</h1>
                    <h1 class="">First online: {{convertDate(this.data.loginData.firstJoin)}}</h1>
                    <h1 class="">Times joined: {{this.data.loginData.totalJoins}}</h1>
                </div>
            </div>
            <div class="grid md:grid-cols-2 grid-cols-1 gap-5 p-8">
                <div class="bg-gray-100 rounded-sm shadow-lg">
                    <div class="text-center">
                        <p class="text-2xl font-semibold">Azkaban</p>
                        <p class="text-lg font-semibold opacity-40 pb-2">RPG Prison</p>
                        <div class="grid-cols-2 gap-2 flex">
                            <div class="text-left pl-4 pb-2">
                                <p>Prestige:</p>
                                <p>Current Mine:</p>
                                <p>Blocks Broken:</p>
                            </div>
                            <div class="text-left">
                                <p>{{this.data.opPrisonData.prestige}}</p>
                                <p>{{this.data.opPrisonData.currentMine}}</p>
                                <p>{{this.data.opPrisonData.blocksBroken}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-100 rounded-sm shadow-lg">
                    <div class="text-center">
                        <p class="text-2xl font-semibold">Alkatraz</p>
                        <p class="text-lg font-semibold opacity-40 pb-2">OG Prison</p>
                        <div class="grid-cols-2 gap-2 flex">
                            <div class="text-left pl-4 pb-2">
                                <p>Prestige:</p>
                                <p>Current Mine:</p>
                                <p>Blocks Broken:</p>
                            </div>
                            <div class="text-left">
                                <p>{{this.data.ogPrisonData.prestige}}</p>
                                <p>{{this.data.ogPrisonData.currentMine}}</p>
                                <p>{{this.data.ogPrisonData.blocksBroken}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-100 rounded-sm shadow-lg">
                    <div class="text-center">
                        <p class="text-2xl font-semibold">BedWars</p>
                        <p class="text-lg font-semibold opacity-40 pb-2">Classic</p>
                        <div class="grid-cols-2 gap-2 flex">
                            <div class="text-left pl-4 pb-2">
                                <p>Wins:</p>
                                <p>Losses:</p>
                                <p>Kills:</p>
                                <p>Deaths:</p>
                                <p>KDR:</p>
                                <p>Final Kills:</p>
                                <p>Beds Broken:</p>
                                <p class="font-semibold">Looted Items</p>
                                <ul class="list-disc pl-6">
                                    <li>Iron:</li>
                                    <li>Gold:</li>
                                    <li>Diamonds:</li>
                                    <li>Emeralds:</li>
                                </ul>
                                <p class="font-semibold">Used Items</p>
                                <ul class="list-disc pl-6">
                                    <li>Bed Buds:</li>
                                    <li>Bridge Eggs:</li>
                                    <li>Pop-up Towers:</li>
                                    <li>Dream Defenders:</li>
                                </ul>
                            </div>
                            <div class="text-left">
                                <p>{{this.data.bedwarsData.wins}}</p>
                                <p>{{this.data.bedwarsData.losses}}</p>
                                <p>{{this.data.bedwarsData.kills}}</p>
                                <p>{{this.data.bedwarsData.deaths}}</p>
                                <p>{{this.data.bedwarsData.kills / this.data.bedwarsData.deaths}}</p>
                                <p>{{this.data.bedwarsData.finalKills}}</p>
                                <p>{{this.data.bedwarsData.bedsBroken}}</p>
                                <br />
                                <p>{{this.data.bedwarsData.ironLooted}}</p>
                                <p>{{this.data.bedwarsData.goldLooted}}</p>
                                <p>{{this.data.bedwarsData.diamondsLooted}}</p>
                                <p>{{this.data.bedwarsData.emeraldsLooted}}</p>
                                <br />
                                <p>{{this.data.bedwarsData.bedbugsThrown}}</p>
                                <p>{{this.data.bedwarsData.bridgeEggsThrown}}</p>
                                <p>{{this.data.bedwarsData.towersUsed}}</p>
                                <p>{{this.data.bedwarsData.dreamDefendersUsed}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-100 rounded-sm shadow-lg">
                    <div class="text-center">
                        <p class="text-2xl font-semibold">Starfruit</p>
                        <p class="text-lg font-semibold opacity-40 pb-2">MMO Skyblock</p>
                        <div class="grid-cols-2 gap-2 flex">
                            <div class="text-left pl-4 pb-2">
                                <p class="font-semibold">Stats</p>
                                <ul class="list-disc pl-6">
                                    <li>Mining:</li>
                                    <li>Archaeology:</li>
                                    <li>Construction:</li>
                                    <li>Adventuring:</li>
                                    <li>Foraging:</li>
                                    <li>Smithing:</li>
                                    <li>Zoology:</li>
                                    <li>Dueling:</li>
                                    <li>Fishing:</li>
                                    <li>Warfare:</li>
                                    <li>Farming:</li>
                                    <br />
                                </ul>
                                <p class="font-semibold">Collections</p>
                                <p class="pl-4">Total Collected:</p>
                            </div>
                            <div class="text-left">
                                <br />
                                <p>{{this.data.starfruitData.stats.Mining}}</p>
                                <p>{{this.data.starfruitData.stats.Archaeology}}</p>
                                <p>{{this.data.starfruitData.stats.Construction}}</p>
                                <p>{{this.data.starfruitData.stats.Adventuring}}</p>
                                <p>{{this.data.starfruitData.stats.Foraging}}</p>
                                <p>{{this.data.starfruitData.stats.Smithing}}</p>
                                <p>{{this.data.starfruitData.stats.Zoology}}</p>
                                <p>{{this.data.starfruitData.stats.Dueling}}</p>
                                <p>{{this.data.starfruitData.stats.Fishing}}</p>
                                <p>{{this.data.starfruitData.stats.Warfare}}</p>
                                <p>{{this.data.starfruitData.stats.Farming}}</p>
                                <br />
                                <br />
                                <p>{{getTotalCollected()}}</p>
                            </div>
                        </div>
                        <div class="px-10 pb-2 w-72 mx-auto">
                            <button @click="toggleCollectionsModal()" class="block w-full rounded-md border border-transparent py-1 bg-blue-400 text-base font-medium text-white shadow hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 sm:px-10">Collection Data</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
</template>
<script>
import CollectionsModal from "@/components/CollectionsModal.vue"
import axios from 'axios'
import dateFormat from 'dateformat'
export default {
  name: 'App',
  components: {
      CollectionsModal
  },
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
      },
      getSkin(uuid) {
          return `https://crafatar.com/renders/body/${uuid}?default=MHF_Steve&overlay`
      },
      getTotalCollected() {
          var collections = this.data.starfruitData.collections;
          var count = 0;
          collections.forEach(type => {
              count += type.items.length;
          })
          return count;
      },
    toggleCollectionsModal() {
      this.$refs.collectionsModal.open = true;
    },
  },
  mounted() {
    this.name = this.$route.params.name;
    axios.get('https://mcapi.safemoon.net/player/' + this.name)
        .then(response => (this.data = response.data))
  },
  computed: {
  }
  
};
</script>
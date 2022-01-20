<template>
<CollectionsModal v-if="this.data" :collections="this.data.starfruitData.collections" ref="collectionsModal"/>
<div class="min-h-screen pt-24 px-14 flex justify-center">
    <div class="rounded-lg md:w-5/6 lg:w-4/6 2xl:w-3/6 pb-6" :style="{backgroundColor:`#F5F5F7`}">
        <div v-if="!doesPlayerExist && isLoaded" class="items-center text-center">
            <div class="py-16">
                <h3 class="text-3xl font-bold pb-4">Player not found!</h3>            
                <img class="block h-48 w-auto mx-auto" src="@/assets/sadcreeper.png" alt="Mooncraft" />
            </div>
        </div>
        <div v-else-if="!isLoaded" class="items-center text-center">
            <div class="py-16">
                <h3 class="text-3xl font-bold pb-4">Loading Profile</h3>            
                <img class="block h-48 w-auto mx-auto" src="@/assets/steve.png" alt="Mooncraft" />
            </div>
        </div>
        <div v-else>
            <div class="flex mx-auto p-5 justify-center">
                <div>
                    <img :src="getSkin(this.data.uuid)">
                </div>
                <div class="ml-10">
                    <h1 class="font-bold text-4xl">{{this.name.charAt(0).toUpperCase() + this.name.slice(1)}}</h1>
                    <h1 class="font-bold">{{this.data.rank.charAt(0).toUpperCase() + this.data.rank.slice(1)}}</h1>
                    <h1 class="pt-2">Last online: {{convertDate(this.data.playerLoginData.lastJoin)}}</h1>
                    <h1 class="">First online: {{convertDate(this.data.playerLoginData.firstJoin)}}</h1>
                    <h1 class="">Times joined: {{this.data.playerLoginData.totalJoins}}</h1>
                </div>
            </div>
            <div class="grid md:grid-cols-2 grid-cols-1 gap-5 p-8">
                <div class="bg-gray-100 rounded-sm shadow-lg">
                    <div class="text-center">
                        <p class="text-2xl font-semibold">Azkaban</p>
                        <p class="text-lg font-semibold opacity-40 pb-2">OP Prison</p>
                        <div class="grid-cols-2 gap-2 flex">
                            <div class="text-left pl-4 pb-2">
                                <p class="font-semibold">Stats</p>
                                <ul class="list-disc pl-6">
                                    <li>Prestige:</li>
                                    <li>Current Mine:</li>
                                    <li>Blocks Broken:</li>
                                </ul>
                            </div>
                            <div class="text-left pl-4">
                                <br/>
                                <ul>
                                    <li class="stat">{{this.data.opPrisonData.prestige}}</li>
                                    <li class="stat">{{this.data.opPrisonData.currentMine}}</li>
                                    <li class="stat">{{this.data.opPrisonData.blocksBroken}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-100 rounded-sm shadow-lg">
                    <div class="text-center">
                        <p class="text-2xl font-semibold">Alcatraz</p>
                        <p class="text-lg font-semibold opacity-40 pb-2">OG Prison</p>
                        <div class="grid-cols-2 gap-2 flex">
                            <div class="text-left pl-4 pb-2">
                                <p class="font-semibold">Stats</p>
                                <ul class="list-disc pl-6">
                                    <li>Prestige:</li>
                                    <li>Current Mine:</li>
                                    <li>Blocks Broken:</li>
                                </ul>
                            </div>
                            <div class="text-left pl-4">
                                <br/>
                                <ul>
                                    <li class="stat">{{this.data.ogPrisonData.prestige}}</li>
                                    <li class="stat">{{this.data.ogPrisonData.currentMine}}</li>
                                    <li class="stat">{{this.data.ogPrisonData.blocksBroken}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-100 rounded-sm shadow-lg">
                    <div class="text-center">
                        <p class="text-2xl font-semibold">BedWars</p>
                        <p class="text-lg font-semibold opacity-40 pb-2">Competitive</p>
                        <div class="grid-cols-2 gap-2 flex">
                            <div class="text-left pl-4 pb-2">
                                <p class="font-semibold">Stats</p>
                                <ul class="list-disc pl-6">
                                    <li>Wins:</li>
                                    <li>Losses:</li>
                                    <li>Kills:</li>
                                    <li>Deaths:</li>
                                    <li>KDR:</li>
                                    <li>Final Kills:</li>
                                    <li>Beds Broken:</li>
                                    <li>Prestige</li>
                                 </ul>
                                <br />
                                <p class="font-semibold">Looted Items</p>
                                <ul class="list-disc pl-6">
                                    <li>Iron:</li>
                                    <li>Gold:</li>
                                    <li>Diamonds:</li>
                                    <li>Emeralds:</li>
                                </ul>
                            </div>
                            <div class="text-left pl-4">
                                <br/>
                                <ul>
                                    <li class="stat">{{this.data.bedwarsData.wins}}</li>
                                    <li class="stat">{{this.data.bedwarsData.losses}}</li>
                                    <li class="stat">{{this.data.bedwarsData.kills}}</li>
                                    <li class="stat">{{this.data.bedwarsData.deaths}}</li>
                                    <li class="stat">{{roundNumber(this.data.bedwarsData.kills / this.data.bedwarsData.deaths)}}</li>
                                    <li class="stat">{{this.data.bedwarsData.finalKills}}</li>
                                    <li class="stat">{{this.data.bedwarsData.bedsBroken}}</li>
                                    <li class="stat">{{capitalizeLetter(this.data.bedwarsData.prestige.toLowerCase())}}</li>
                                    <li class="stat"><br/></li>
                                    <li class="stat"><br/></li>
                                    <li class="stat">{{this.data.bedwarsData.ironLooted}}</li>
                                    <li class="stat">{{this.data.bedwarsData.goldLooted}}</li>
                                    <li class="stat">{{this.data.bedwarsData.diamondsLooted}}</li>
                                    <li class="stat">{{this.data.bedwarsData.emeraldsLooted}}</li>
                                </ul>
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
                            <div class="text-left pl-4">
                                <ul>
                                <br />
                                <li class="stat">0</li>
                                <li class="stat">0</li>
                                <li class="stat">0</li>
                                <li class="stat">0</li>
                                <li class="stat">0</li>
                                <li class="stat">0</li>
                                <li class="stat">0</li>
                                <li class="stat">0</li>
                                <li class="stat">0</li>
                                <li class="stat">0</li>
                                <li class="stat">0</li>
                                <br />
                                <br />
                                <li class="stat">{{getTotalCollected()}}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="px-2 pb- mx-auto" style="max-width: 250px;">
                            <button @click="toggleCollectionsModal()" class="block w-full rounded-md border border-transparent py-1 bg-blue-400 text-base font-medium text-white shadow hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 sm:px-10" :style="{marginTop:`9px`}">Collection Data</button>
                        </div>
                        <br/>
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
      doesPlayerExist: false,
      isLoaded: false,
    };
  },
  methods: {
      roundNumber(number) {
          return number.toFixed(2)
      },
      capitalizeLetter(word) {
          return word.charAt(0).toUpperCase() + word.slice(1);
      },
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
    }
  },
  mounted() {
    this.name = this.$route.params.name;
    axios.get('https://api.mooncraft.gg/player/' + this.name)
        .then(response => {
            this.data = response.data
            this.doesPlayerExist = true
        })
        .catch(() => {
            this.doesPlayerExist = false
            this.isLoaded = true
        })
        .finally(() => (this.isLoaded = true))
  },
  computed: {
  }
};
</script>
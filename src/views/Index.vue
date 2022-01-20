<template>
  <div class="py-16 sm:py-24">
    <img src="@/assets/logo.png" class="max-w-xs mx-auto">
    <div class="relative sm:py-16">
      <div aria-hidden="true" class="hidden sm:block">
        <!-- <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-500 rounded-r-3xl" /> -->
      </div>
      <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="relative rounded-2xl px-6 py-10 bg-mc-light overflow-hidden shadow-xl sm:px-12 sm:py-20">
          <div aria-hidden="true" class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
            <svg class="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1463 360">
              <path class="text-mc-dark text-opacity-40" fill="currentColor" d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z" />
              <path class="text-mc-dark text-opacity-40" fill="currentColor" d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z" />
            </svg>
          </div>
          <div class="relative">
            <div class="sm:text-center">
              <h2 class="text-3xl font-extrabold text-gray-600 tracking-tight sm:text-4xl">
                Check out your player profile!
              </h2>
              <p class="mt-6 mx-auto max-w-2xl text-lg text-gray-500">
                Player profiles are a fun way to compare your accomplishments to others!
              </p>
            </div>
            <form class="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
              <div class="min-w-0 flex-1">
                <label for="name" class="sr-only">Player Name</label>
                <input v-model="name" type="name" class="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500" placeholder="Enter a player name" />
              </div>
              <div class="mt-4 sm:mt-0 sm:ml-3">
                <button @click="getPlayerName()" class="block w-full rounded-md border border-transparent px-5 py-3 bg-blue-400 text-base font-medium text-white shadow hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 sm:px-10">Find!</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    
</template>
<script>
export default {
  components: {
  },
    methods: {
        getPlayerName() {
            this.$router.push("/profile/" + this.name)
        }
    },
  data() {
    return {
      name: "",
    };
  },
};
</script>

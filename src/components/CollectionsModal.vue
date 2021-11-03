<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="open = false">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
            <div>
              <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <ChartBarIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
              </div>
              <div class="mt-3 text-center sm:mt-5">
                <DialogTitle as="h3" class="text-xl leading-6 font-medium text-gray-900">
                  Collections Data
                </DialogTitle>
                <div v-for="type in this.collections" :key="type.name" class="pt-4">
                    <p class="font-semibold text-lg">{{type.name}}</p>
                    <div class="grid-cols-2 gap-4 flex justify-center">
                        <div class="text-left pb-2">
                            <div v-for="item in type.items" :key="item.name">
                                <p>{{formatString(item.name)}}</p>
                            </div>
                        </div>
                        <div class="text-left">
                            <div v-for="item in type.items" :key="item.amount">
                                <p>{{item.amount}}</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div class="mt-5 sm:mt-6">
              <button type="button" class="block w-full rounded-md border border-transparent py-1 bg-blue-400 text-base font-medium text-white shadow hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 sm:px-10" @click="open = false">
                Back to Profile
              </button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ChartBarIcon } from '@heroicons/vue/outline'

export default {
  props: ["collections"],
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    ChartBarIcon,
  },
  data() {
      return {
        types: this.getTypes(),
      }
  },
  methods: {
      getTypes() {
          return this.collections.forEach(type => {
              return type.name
          })
      },
    formatString(string) {
        string = string.replace("_", " ");
        return string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
  },
  setup() {
    const open = ref(false)

    return {
      open,
    }
  },
}
</script>
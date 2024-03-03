<template>
  <transition name="fade">
    <div v-if="isOpen" class="backdrop"></div>
  </transition>

  <transition name="fade">
    <div v-if="isOpen" class="modal">
      <h2>Select Genres</h2>
      <div v-for="(genre, index) in genres" :key="index">
        <input type="checkbox" :id="'genre_' + index" :value="genre" v-model="filteredGenres">
        <label :for="'genre_' + index">{{ genre }}</label>
      </div>
      <button @click="submitGenres">Submit</button>
    </div>
  </transition>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  name: 'SeriesFilter',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    genres: {
      type: Array as () => string[],
      required: true
    }
  },
  emits: ['close', 'filteredGenres'],
  setup(props, { emit }) {
    const filteredGenres = ref<string[]>([]);

    const submitGenres = () => {
      emit('filteredGenres', filteredGenres.value);
      emit('close');
    };

    return {
      filteredGenres,
      submitGenres
    };
  },
  methods: {

  },
}
</script>

<style scoped lang="scss">
@import './../assets/colors.scss';

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999; /* Adjust as needed */
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Ensure modal is displayed above the backdrop */
  color: $text-color-light;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>

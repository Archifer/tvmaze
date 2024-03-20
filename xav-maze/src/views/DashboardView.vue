<template>
  <div>
    <div class="buttonWrapper">
      <button class="moreShowsButton" @click="showModal = true">Filter genres</button>
      <filter-modal :isOpen="showModal"
                     :genres="genres"
                     @close="showModal = false"
                     @filteredGenres="handleFilteredGenres"
                     @filteredRating="handleFilteredRating" />

      <input class="searchBox" type="text" v-model="searchText" @input="searchShows" placeholder='Search for a show'>
    </div>
    <series-preview-list :series-list=getSeries />
    <div class="buttonWrapperCenter">
      <button @click="addShows" class="moreShowsButton">Load more shows</button>
    </div>
  </div>
</template>

<script lang="ts">
import SeriesPreviewList from '@/components/SeriesPreviewList.vue'
import axios from 'axios'
import FilterModal from '@/components/FilterModal.vue'

const axiosClient = axios.create({
  baseURL: 'https://api.tvmaze.com/'
})

export default {
  components: {
    "series-preview-list": SeriesPreviewList,
    "filter-modal": FilterModal,
  },
  data() {
    return {
      seriesList: [] as Series[],
      searchSeriesList: [] as Series[],
      showModal: false,
      // TODO Extend with api information
      genres: ['Action', 'Crime', 'Science-Fiction', 'Adventure', 'Comedy', 'Drama', 'Fantasy'] as string[],
      filteredGenres: [] as string[],
      filteredRating: 0,

      // TODO Move to own component but ran out of time to do cleanly :C
      searchText: '',
    };
  },
  computed: {
    getSeries(): Series[] {
      let filteredSeries: Series[] = [];
      let completeList: Series[] = [];

      if (this.searchSeriesList.length != 0) {
        completeList = this.searchSeriesList;
      } else {
        completeList = this.seriesList;
      }

      for (let i = 0; i < completeList.length; i++) {
        let serie = completeList[i];

        if (this.filteredRating > 0 && ((typeof (serie.rating) === 'object') || this.filteredRating > parseInt(serie.rating))) {
          continue;
        }

        // Check for overlap in genres
        if (this.filteredGenres.length == 0) {
          filteredSeries.push(serie);
          continue;
        }

        if (!(serie.genres.some(item => this.filteredGenres.includes(item)))) {
          continue;
        }

        filteredSeries.push(serie);
      }

      return filteredSeries;
    }
  },
  methods: {
    async fetchAddShows(startId: number) {
      const showIncrement = 10;

      for (let i = startId; i < startId + showIncrement; i++) {
        try {
          const seriesResponse = await axiosClient.get('/shows/' + i);

          const series: Series = {
            description: seriesResponse.data.summary.toString(),
            imageUrl: seriesResponse.data.image.medium.toString(),
            seriesId: seriesResponse.data.id.toString(),
            title: seriesResponse.data.name.toString(),
            genres: seriesResponse.data.genres,
            rating: seriesResponse.data.rating.average,
          }

          this.seriesList.push(series);
        } catch (error) {
          // TODO Error handling for invalid object or id for example with a monitor tool
          console.log("There was an invalid object :(")
        }
      }
    },
    addShows() {
      let lastId = this.seriesList[this.seriesList.length - 1].seriesId;
      this.fetchAddShows(parseInt(lastId) + 1);
    },
    handleFilteredGenres(genres: string[]) {
      this.filteredGenres = genres;
    },
    handleFilteredRating(filteredRating: number) {
      this.filteredRating = filteredRating;
    },
    async searchShows() {
      try {
        const seriesResponse = await axiosClient.get('/search/shows?q=' + this.searchText);
        let foundSeries: Series[] = [];

        for (let i = 0; i < seriesResponse.data.length; i++) {
          let seriesResponseItem = seriesResponse.data[i].show;

          const series: Series = {
            description: seriesResponseItem.summary.toString(),
            imageUrl: seriesResponseItem.image.medium.toString(),
            seriesId: seriesResponseItem.id.toString(),
            title: seriesResponseItem.name.toString(),
            genres: seriesResponseItem.genres,
            rating: seriesResponseItem.rating.average,
          }

          foundSeries.push(series)
        }

        this.searchSeriesList = foundSeries;
      } catch (error) {
        console.log("There was an invalid object :(")
      }
    }
  },
  async mounted() {
    await this.fetchAddShows(1);
  },
};
</script>

<style scoped lang="scss">
@import './../assets/colors.scss';
.searchBox {
  margin: 10px;
}

.buttonWrapperCenter {
  width: 100%;
  display: flex;
  justify-content: center;
}

.buttonWrapper {
  width: 100%;
  display: flex;
}

.moreShowsButton {
  background-color: $button-bg-dark;
  border-radius: 5px;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px;

  transition: background-color 0.3s ease, cursor 0.3s ease; // Transition the color change over 0.3 seconds with ease
  &:hover {
    background-color: $button-bg-dark-hover;
    cursor: pointer;
  }
}
</style>

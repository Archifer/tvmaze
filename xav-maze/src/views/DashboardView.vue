<template>
  <div>
    <series-preview-list :series-list=getSeries />
  </div>
</template>

<script lang="ts">
import SeriesPreviewList from '@/components/SeriesPreviewList.vue'
import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://api.tvmaze.com/'
})

export default {
  components: {
    "series-preview-list": SeriesPreviewList
  },
  data() {
    return {
      seriesList: [] as Series[],
    };
  },
  computed: {
    getSeries(): Series[] {
      return this.seriesList;
    }
  },
  methods: {
    async fetchBaseShows() {
      const baseShowAmount = 10;

      for (let i = 1; i < baseShowAmount + 1; i++) {
        const seriesResponse = await axiosClient.get('/shows/' + i);

        // TODO STRIP HTML FROM STRINGS
        const series: Series = {
          description: seriesResponse.data.summary.toString(),
          imageUrl: seriesResponse.data.image.medium.toString(),
          seriesId: seriesResponse.data.id.toString(),
          title: seriesResponse.data.name.toString()
        }

        this.seriesList.push(series);
      }
    },
  },
  async mounted() {
    await this.fetchBaseShows()
  },
};
</script>

<style scoped lang="scss">

</style>

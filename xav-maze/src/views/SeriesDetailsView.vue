<template>
  <div>
    <div class="wrapperContainer" v-if="loadStatus === 1">
      <h1>Requested series could not be found right now :(</h1>
    </div>
    <div class="wrapperContainer" v-else-if="loadStatus === 2">
      <h1>Received API Object structure was incorrect</h1>
    </div>
    <div class="wrapperContainer" v-else-if="loadStatus === 3">
      <SeriesDetailsCard :series=seriesDetails />
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import SeriesDetailsCard from '@/components/SeriesDetailsCard.vue'

const axiosClient = axios.create({
  baseURL: 'https://api.tvmaze.com/'
})
export default {
  components: { SeriesDetailsCard },
  data() {
    return {
      seriesDetails: {} as SeriesDetails,
      loadStatus: 0,
    };
  },
  methods: {
    async fetchSeriesDetails() {
      const seriesId = this.$route.params.id;
      let seriesResponse;

      try {
        seriesResponse = await axiosClient.get('/shows/' + seriesId);
      } catch (error) {
        // Show not found or call incorrect
        this.loadStatus = 1
        return;
      }

      try {
        this.seriesDetails = {
          description: seriesResponse.data.summary.toString(),
          imageUrl: seriesResponse.data.image.medium.toString(),
          imageOriginalUrl: seriesResponse.data.image.original.toString(),
          seriesId: seriesResponse.data.id.toString(),
          title: seriesResponse.data.name.toString(),
          airsTime: seriesResponse.data.schedule.time.toString(),
          airsDate: seriesResponse.data.schedule.days,
          genres: seriesResponse.data.genres,
          status: seriesResponse.data.status,
          rating: seriesResponse.data.rating.average,
        }

        this.loadStatus = 3;
      } catch (error) {
        this.loadStatus = 2
        return;
      }
    }
  },
  async mounted() {
    await this.fetchSeriesDetails();
  },
}
</script>

<style lang="scss">
.wrapperContainer {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>


<template>
  <div>
    <ul class="seriesList">
      <li class="seriesCard" v-for="(item, index) in seriesList" :key="index">
        <series-preview-card :series=item />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import SeriesPreviewCard from '@/components/SeriesPreviewCard.vue'

export default {
  name: 'SeriesPreviewList',
  components: { "series-preview-card": SeriesPreviewCard },
  props: {
    seriesList: {
      type: Array as () => Series[],
      required: true,
    },
  },
  computed: {}
}
</script>

<style lang="scss">
.seriesList {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.seriesCard {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

</style>

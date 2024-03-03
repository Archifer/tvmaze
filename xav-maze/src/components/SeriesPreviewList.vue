
<template>
  <div v-if="seriesList.length > 0">
    <ul class="seriesList">
      <li class="seriesCard" v-for="(item, index) in seriesList" :key="index">
        <RouterLink class="routerLink" :to="'/series/' + item.seriesId">
          <series-preview-card :series=item />
        </RouterLink>
      </li>
    </ul>
  </div>
  <div v-else>
    <h1>No shows were found</h1>
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
  }
}
</script>

<style lang="scss">
@import './../assets/colors.scss';
h1 {
  color: $text-header-color;
  text-align: center;
}


.routerLink {
  text-decoration: none;
}

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

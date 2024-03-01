<script lang="ts">
import SeriesPreviewCard from './../components/SeriesPreviewCard.vue'

export default {
    components: {
        "series-preview-card": SeriesPreviewCard
    },
  setup() {
    return {
      SeriesPreviewCard,
    };
  },
};
</script>

<template>
  <div>
    <series-preview-card title="titel" description="dwd" imageUrl="https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg" seriesID=1 />
  </div>
</template>

<style scoped lang="scss">

</style>

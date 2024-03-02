<template>
  <div class="seriesPreviewCard" :id=dynamicId>
    <img :src=series.imageUrl alt="Avatar">
    <div class="container">
      <h3><b>{{series.title}}</b></h3>
      <p>{{stripDescription(series.description)}}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
    name: 'SeriesPreviewCard',
    props: {
      series: {
        type: Object as () => Series,
        required: true
      },
    },
    methods: {
      stripDescription(description: string): string {
        let cleanDescription: string = description.replace(/<[^>]*>/g, '');

        const wordsInDescription = 30; // amount of words generally in 2 sentences

        const words = cleanDescription.split(/\s+/)

        if (words.length <= wordsInDescription) {
          return words.join(' ');
        } else {
          return words.slice(0, wordsInDescription).join(' ') + ' ...';
        }
      }
    },
    computed: {
      dynamicId(): string {
        // Use the componentName property to generate the dynamic id
        return `series-card-${this.series.seriesId}`;
      }
    }
  }
</script>

<style scoped lang="scss">
@import './../assets/colors.scss';

.seriesPreviewCard {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  margin: 15px;
  transition: 0.3s;
  border-radius: 5px;
  color: $text-color-light;
  background-color: $bg-color-light;
  width: 210px;
}

.seriesPreviewCard:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

img {
  border-radius: 5px 5px 0 0;
}

.container {
  padding: 2px 16px;
}
</style>

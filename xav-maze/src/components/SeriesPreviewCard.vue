<template>
  <div class="seriesPreviewCard" :id=dynamicId>
    <img :src=imageUrl alt="Avatar" style="width:100%">
    <div class="container">
      <h3><b>{{title}}</b></h3> 
      <p>{{description}}</p> 
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'SeriesPreviewCard',
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      imageUrl: {
        type: String,
        required: true
      },
      seriesID: {
        type: String,
        required: true
      }

    },
    computed: {
      dynamicId(): string {
        // Use the componentName property to generate the dynamic id
        return `series-card-${this.seriesID}`;
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
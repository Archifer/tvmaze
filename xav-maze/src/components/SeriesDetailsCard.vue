<template>
<div class="detailsCard">
  <div class="container">
    <div class="column">
      <img class="detailsImage" :src=series.imageOriginalUrl alt="Series image" />
    </div>
    <div class="column">
      <div class="wrapper">
        <ul class="detailInformation">
          <li>
            <h1>{{ series.title }}</h1>
          </li>
          <li>
            <h2>Description</h2>
            <p>{{ stripDescription(series.description) }}</p>
          </li>
          <li>
            <h2>Rating</h2>
            <p>{{ series.rating }}/10</p>
          </li>
          <li>
            <h2>Genres</h2>
            <p>{{ getGenres() }}</p>

          </li>
          <li>
            <h2>Status</h2>
            <p>{{ series.status }}</p>
          </li>
          <li>
            <h2>Airs on</h2>
            <p>{{ getAirString() }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
export default {
  name: 'SeriesDetailsCard',
  props: {
    series: {
      type: Object as () => SeriesDetails,
      required: true
    },
  },
  methods: {
    stripDescription(description: string): string {
      return  description.replace(/<[^>]*>/g, '');
    },
    getGenres(): string {
      let resultString = "";
      const genresLength = this.series.genres.length;

      if (genresLength == 0) {
        return "This series has no genres";
      } else {
        for (let i = 0; i < genresLength - 1; i++) {
          resultString = resultString + this.series.genres[i] + ", "
        }

        return resultString + this.series.genres[genresLength - 1]
      }
    },
    getAirString(): string {
      const airDays = this.series.airsDate;

      if (airDays.length == 0) {
        return 'This show is currently not airing';
      }

      let airString = 'This show airs on ';

      for (let i = 0; i < airDays.length - 1; i++) {
        airString = airString + airDays[i] + ', ';
      }

      airString = airString + airDays[airDays.length - 1] + ' at ';

      return airString + this.series.airsTime;


    }
  },
}
</script>

<style scoped lang="scss">
@import './../assets/colors.scss';

.detailsCard {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 5px;
  width: 80%;
}

.detailsImage {
  width: 100%;
}

.wrapper {
  background: $bg-color-light-white;
  color: $text-color-light;
  height: 100%;
}

.detailInformation {
  list-style: none;
  margin-top: 0;
  padding: 15px;

  h1 {
    margin-top: 0;
  }
}

.container {
  display: flex;
  flex-direction: row; /* Arrange columns vertically */
}

.column {
  flex: 1;
}

/* Media query for mobile responsiveness */
@media (max-width: 767px) {
  .container {
    flex-direction: column; /* Change to vertical layout for mobile */
  }
}

</style>

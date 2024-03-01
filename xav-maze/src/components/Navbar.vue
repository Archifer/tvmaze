<script lang="ts">
  export default {
    name: 'NavBar'
  }
</script>

<template>
  <div id="navbar">
    <ul>
      <li class="icon">
        <h3>XAV TV MAZE</h3>
      </li>
      <li>
        Genre
      </li>
      <li>
        Min Rating
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import './../assets/colors.scss';

#navbar {
  width: 100%;
  display: flex;
}

#navbar li {
  display: inline-block;
  padding: 15px;

  transition: background-color 0.3s ease, cursor 0.3s ease; // Transition the color change over 0.3 seconds with ease
    &:hover {
      background-color: $bg-color-black-mute;
      cursor: pointer;
    }
}



.icon {
  color: $text-header-color;

  h3 {
    margin-top: 0px;
    margin-bottom: 0px;
  }
}
</style>
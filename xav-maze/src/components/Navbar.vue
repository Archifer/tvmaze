<script lang="ts">
  export default {
    name: 'NavBar'
  }
</script>

<template>
  <nav id="navbar">
    <ul>
      <li class="icon">
        <RouterLink class="routerLink" to='/'><h3>XAV TV MAZE</h3></RouterLink>
      </li>
    </ul>
  </nav>
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
  h3 {
    margin-top: 0px;
    margin-bottom: 0px;
    color: $text-header-color;
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }
}
</style>

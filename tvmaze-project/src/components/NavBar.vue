<script lang="ts">
  export default {
    name: 'NavBar'
  }
</script>

<template>
  <div>
    <b-row>
        <b-nav>
          <b-nav-item active><RouterLink to="/">Dashboard</RouterLink></b-nav-item>
          <b-nav-item><RouterLink to="/about">About</RouterLink></b-nav-item>
          <b-nav-item>Another Link</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </b-row>
  </div>
</template>
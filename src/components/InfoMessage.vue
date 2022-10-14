<template>
  <div class="info-msg">
    <h3><slot name="title">Choose a country</slot></h3>
    <p>
      <slot name="message"
        >Select a country from the list in order to show its information.</slot
      >
    </p>
  </div>
</template>

<script setup></script>

<style scoped>
.info-msg {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

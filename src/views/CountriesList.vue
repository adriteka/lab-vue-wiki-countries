<template>
  <main>
    <nav>
      <p v-if="!countries">Loading countries…</p>
      <ul v-else>
        <li v-for="country in countries">
          <router-link
            :to="{ name: 'details', params: { code: country.alpha3Code } }"
          >
            <figure>
              <img
                :src="
                  'https://flagpedia.net/data/flags/icon/72x54/' +
                  country.alpha2Code.toLowerCase() +
                  '.png'
                "
                :alt="'Flag of ' + country.name.common"
              />
              <figcaption>{{ country.name.common }}</figcaption>
            </figure>
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getCountries } from "../helpers";
const countries = ref(undefined);

onMounted(async () => {
  countries.value = await getCountries();
});
</script>

<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

nav {
  background-color: bisque;
}

p {
  text-align: center;
  margin-top: 2rem;
}

ul {
  overflow: hidden;
  overflow-y: auto;
  max-height: 90vh;
}

section {
  background-color: aquamarine;
}

figure {
  padding-bottom: 0.75rem;
}

img {
  display: block;
  margin: 0 auto;
  padding-bottom: 0.5rem;
}
figcaption {
  text-align: center;
}
</style>

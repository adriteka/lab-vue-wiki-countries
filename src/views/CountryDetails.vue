<template>
  <article>
    <h1>{{ country ? country.name.common : "" }}</h1>
    <img
      :src="
        country
          ? 'https://flagpedia.net/data/flags/h120/' +
            country.alpha2Code.toLowerCase() +
            '.png'
          : ''
      "
      :alt="country ? 'Flag of ' + country.name.common : ''"
    />
    <section class="country-info">
      <h2>Capital</h2>
      <p>{{ country ? country.capital[0] : "" }}</p>
      <h2>Area</h2>
      <p>{{ country ? country.area : "" }} Km²</p>
      <h2>Borders</h2>
      <ul v-if="borderCountries">
        <li v-for="b in borderCountries">
          <router-link
            :to="{ name: 'details', params: { code: b.alpha3Code } }"
            >{{ b.name.common }}</router-link
          >
        </li>
      </ul>
    </section>
  </article>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import countries from "../assets/countries.json";

const country = ref(undefined);
const borderCountries = ref([]);
const route = useRoute();

watch(
  () => route.params.code,
  (newValue) => {
    loadCountry();
  }
);

onMounted(() => {
  loadCountry();
});

const loadCountry = () => {
  country.value = countries.filter((c) => {
    return c.alpha3Code === route.params.code;
  })[0];
  borderCountries.value = countries.filter((c) => {
    return country.value.borders.includes(c.alpha3Code);
  });
};
</script>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  align-items: center;
}
section {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

img {
  order: -1;
}

h2,
p {
  font-size: medium;
  margin-top: 0;
}
/* p {
  margin: auto 0;
} */
</style>

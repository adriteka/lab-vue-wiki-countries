<template>
  <article v-if="country">
    <h1>{{ country.name.common }}</h1>
    <img
      :src="
        'https://flagpedia.net/data/flags/h120/' +
        country.alpha2Code.toLowerCase() +
        '.png'
      "
      :alt="'Flag of ' + country.name.common"
    />
    <!--
    comprobar country != undefined al no disponer de un estado "loading" que muestre
    otras etiquetas que no dependan de variables pendientes de cargar 
    -->
    <section class="country-info">
      <h2>Capital</h2>
      <p>{{ country.capital[0] }}</p>
      <h2>Area</h2>
      <p>{{ country.area }} Km²</p>
      <h2>Borders</h2>
      <ul>
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
import { getCountry, getCountries} from "../helpers";

const country = ref(undefined);
const borderCountries = ref([]);
const route = useRoute();

watch(
  () => route.params.code,
  (newValue) => {
    if (newValue) loadCountry();
  }
);

onMounted(() => {
  loadCountry();
});

const loadCountry = async () => {
  country.value = await getCountry(route.params.code);
  // const paises = ;
  // console.log("paises", paises);
  borderCountries.value = (await getCountries()).filter((c) => {
    return country.value.borders.includes(c.alpha3Code);
  });
};
</script>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}
section {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

img {
  order: -1;
  box-shadow: 1px 1px 2px black;
}

h2,
p {
  font-size: medium;
  margin-top: 0;
}

li {
  padding-bottom: 0.5rem;
}
</style>

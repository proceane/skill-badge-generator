<template>
  <v-app>
    <NavBar/>

    <v-main class="ml-3 mr-3 mt-3">
        <MainLayout/>
    </v-main>

    <ContentFooter/>
  </v-app>
</template>

<script>
import NavBar from './layout/NavBar';
import ContentFooter from './layout/ContentFooter';
import MainLayout from './layout/MainLayout';

export default {
  name: 'App',

  components: {
    NavBar,
    ContentFooter,
    MainLayout,
  },

  data: () => ({
    //
  }),
};
</script>

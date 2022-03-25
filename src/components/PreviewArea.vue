<template>
  <v-card>
    <v-card-title>Preview</v-card-title>

    <v-card-text>
      <h3>Front-End</h3>
      <br>
      <div id="front-end-preview-area" v-html="skillList">
        <!-- <img src="https://img.shields.io/badge/html-E34F26?style=flat-square&logo=html5&logoColor=white"> -->
      </div>
    </v-card-text>
    
  </v-card>
</template>

<script>
export default {
  props: {
    skillList: {
      type: String
    }
  },
}
</script>
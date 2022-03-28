<template>
  <v-card>
    <v-card-title>Preview</v-card-title>

    <v-card-text>
      <h3 class="mb-2">Language</h3>
      <div id="language-preview-area" v-html="langSkillList">
      </div>

      <br>
      <h3 class="mb-2">Front-End</h3>
      <div id="front-end-preview-area" v-html="frontSkillList">
      </div>
    </v-card-text>
    
  </v-card>
</template>

<script>
export default {
  props: {
    langSkillList: {
      type: String
    },
    frontSkillList: {
      type: String
    },
  },
}
</script>
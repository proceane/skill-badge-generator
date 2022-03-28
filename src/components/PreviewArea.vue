<template>
  <v-card>
    <v-card-title>Preview</v-card-title>

    <v-card-text>
      <h3>Language</h3>
      <br>
      <div id="language-preview-area" v-html="langSkillList">
      </div>

      <h3>Front-End</h3>
      <br>
      <div id="front-end-preview-area" v-html="skillList">
      </div>
    </v-card-text>
    
  </v-card>
</template>

<script>
export default {
  props: {
    skillList: {
      type: String
    },
    langSkillList: {
      type: String
    },
  },
}
</script>
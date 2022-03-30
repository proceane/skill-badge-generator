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

      <br>
      <h3 class="mb-2">Back-End</h3>
      <div id="back-end-preview-area" v-html="backSkillList">
      </div>

      <br>
      <h3 class="mb-2">Mobile</h3>
      <div id="mobile-preview-area" v-html="mobileSkillList">
      </div>

      <br>
      <h3 class="mb-2">Database</h3>
      <div id="database-preview-area" v-html="dbSkillList">
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
    backSkillList: {
      type: String
    },
    dbSkillList: {
      type: String
    },
    mobileSkillList: {
      type: String
    },
  },
}
</script>
<template>
  <v-card>
    <v-card-title>Preview</v-card-title>

    <v-card-text>
      <div 
        v-html="allSkillList"
        v-if="allSkillList != null"
      ></div>
      <div
        v-html="customSkillList"
        v-if="customSkillList != null"
      ></div>
    </v-card-text>
    
  </v-card>
</template>

<script>
export default {
  data: () => ({

  }),
  props: {
    allSkillList: {
      type: String
    },
    customSkillList: {
      type: String
    },
  },
  methods: {
    
  }
}
</script>
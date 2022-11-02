<template>
  <v-card>
    <v-card-title>Preview</v-card-title>

    <v-card-text>
      <div 
        v-html="allSkillList"
        v-if="allSkillList != null"
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
    }
  },
  methods: {
    
  }
}
</script>
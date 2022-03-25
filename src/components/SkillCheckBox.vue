<template>
  <v-row>
    <v-checkbox
      v-model="skillList"
      label="Vue.js"
      v-bind:value="{'name': 'Vue.js', 'color': '41b883'}"
      hide-details
      @change="onChange"
    >
    </v-checkbox>
    <v-checkbox
      v-model="skillList"
      label="React"
      v-bind:value="{'name': 'React', 'color': '61dafb'}"
      hide-details
      @change="onChange"
    >
    </v-checkbox>
  </v-row>  
</template>

<script>

export default {
  name: "SkillCheckBox",
  data: () => ({
    skillList: [],
  }),
  methods: {
    onChange() {
      this.$emit('selectSkillList', this.skillList);
    },
  },
}
</script>
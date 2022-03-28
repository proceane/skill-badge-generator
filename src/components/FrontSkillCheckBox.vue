<template>
  <v-row>
    <v-checkbox
      v-for="item in frontSkillList"
      :key="item.skill"
      :label="item.skill"
      v-model="skillList"
      v-bind:value="{'logo': item.logo, 'name': item.skill, 'color': item.color}"
      hide-details
      @change="onChange"
    >
    </v-checkbox>
  </v-row>  
</template>

<script>

import frontSkillList from "../static/dev_skills_front.json";

export default {
  name: "FrontSkillCheckBox",
  data: () => ({
    skillList: [],
    frontSkillList: frontSkillList,
  }),
  methods: {
    onChange() {
      this.$emit('selectFrontSkillList', this.skillList);
    },
  },
}
</script>
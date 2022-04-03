<template>
  <v-row>
    <v-checkbox
      v-for="item in backSkillList"
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

import backSkillList from "../static/dev_skills_back.json";

export default {
  name: "BackSkillCheckBox",
  data: () => ({
    skillList: [],
    backSkillList: backSkillList,
  }),
  methods: {
    onChange() {
      this.$emit('selectBackSkillList', this.skillList);
    },
    executeResetCommand() {
      this.skillList = [];
    },
  },
}
</script>
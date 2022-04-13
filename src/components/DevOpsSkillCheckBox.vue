<template>
  <v-row>
    <v-checkbox
      v-for="item in devOpsSkillList"
      :key="item.skill"
      :label="item.skill"
      v-model="skillList"
      v-bind:value="{'logo': item.logo, 'skill': item.skill, 'color': item.color}"
      hide-details
      @change="onChange"
    >
    </v-checkbox>
  </v-row>  
</template>

<script>

import devOpsSkillList from "../static/dev_skills_devops.json";

export default {
  name: "DevOpsSkillCheckBox",
  data: () => ({
    skillList: [],
    devOpsSkillList: devOpsSkillList,
  }),
  methods: {
    onChange() {
      this.$emit('selectDevOpsSkillList', this.skillList);
    },
    executeResetCommand() {
      this.skillList = [];
    },
  },
}
</script>
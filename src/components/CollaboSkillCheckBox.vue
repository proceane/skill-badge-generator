<template>
  <v-row>
    <v-checkbox
      v-for="item in collaboSkillList"
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

import collaboSkillList from "../static/dev_skills_collaborate.json";

export default {
  name: "CollaboSkillCheckBox",
  data: () => ({
    skillList: [],
    collaboSkillList: collaboSkillList,
  }),
  methods: {
    onChange() {
      this.$emit('selectCollaboSkillList', this.skillList);
    },
    executeResetCommand() {
      this.skillList = [];
    },
  },
}
</script>
<template>
  <v-row>
    <v-checkbox
      v-for="item in mobileSkillList"
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

import mobileSkillList from "../static/dev_skills_mobile.json";

export default {
  name: "MobileSkillCheckBox",
  data: () => ({
    skillList: [],
    mobileSkillList: mobileSkillList,
  }),
  methods: {
    onChange() {
      this.$emit('selectMobileSkillList', this.skillList);
    },
    executeResetCommand() {
      this.skillList = [];
    },
  },
}
</script>
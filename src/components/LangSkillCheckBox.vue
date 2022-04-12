<template>
  <v-row>
    <v-checkbox
      v-for="item in langSkillList"
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

import langSkillList from "../static/dev_skills_lang.json";

export default {
  name: "LangSkillCheckBox",
  data: () => ({
    skillList: [],
    langSkillList: langSkillList,
    backupList: langSkillList,
  }),
  methods: {
    onChange() {
      this.$emit('selectLangSkillList', this.skillList);
    },
    executeResetCommand() {
      this.skillList = [];
    },
    searchSkill(value) {
      console.log("search lang skill : " + value);
    },
  },
}
</script>
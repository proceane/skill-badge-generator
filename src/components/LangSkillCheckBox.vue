<template>
  <v-autocomplete
    v-model="skillList"
    :items="langSkillList"
    item-text="skill"
    return-object
    dense
    chips
    label="Language"
    multiple
    @change="onChange"
  ></v-autocomplete>
</template>

<script>

import langSkillList from "../static/dev_skills_lang.json";

export default {
  name: "LangSkillCheckBox",
  data: () => ({
    skillList: [],
    langSkillList: langSkillList,
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
<template>
  <!-- <v-row>
    <v-checkbox
      v-for="item in langSkillList"
      :key="item.skill"
      :label="item.skill"
      v-model="skillList"
      v-bind:value="{'logo': item.logo, 'skill': item.skill, 'color': item.color}"
      hide-details
      @change="onChange"
    >
    </v-checkbox>
  </v-row>   -->
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
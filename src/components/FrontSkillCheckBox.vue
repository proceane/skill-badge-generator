<template>
  <v-autocomplete
    v-model="skillList"
    :items="frontSkillList"
    item-text="skill"
    return-object
    dense
    chips
    label="Front-End"
    multiple
    @change="onChange"
  ></v-autocomplete>
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
    executeResetCommand() {
      this.skillList = [];
    },
  },
}
</script>
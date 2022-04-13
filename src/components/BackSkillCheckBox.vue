<template>
  <v-autocomplete
    v-model="skillList"
    :items="backSkillList"
    item-text="skill"
    return-object
    dense
    chips
    label="Back-End"
    multiple
    @change="onChange"
  ></v-autocomplete>
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
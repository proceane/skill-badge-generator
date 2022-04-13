<template>
  <v-autocomplete
    v-model="skillList"
    :items="devOpsSkillList"
    item-text="skill"
    return-object
    dense
    chips
    label="DevOps"
    multiple
    @change="onChange"
  ></v-autocomplete>
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
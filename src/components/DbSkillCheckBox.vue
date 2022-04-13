<template>
  <v-autocomplete
    v-model="skillList"
    :items="dbSkillList"
    item-text="skill"
    return-object
    dense
    chips
    label="Database"
    multiple
    @change="onChange"
  ></v-autocomplete>
</template>

<script>

import dbSkillList from "../static/dev_skills_db.json";

export default {
  name: "DbSkillCheckBox",
  data: () => ({
    skillList: [],
    dbSkillList: dbSkillList,
  }),
  methods: {
    onChange() {
      this.$emit('selectDbSkillList', this.skillList);
    },
    executeResetCommand() {
      this.skillList = [];
    },
  },
}
</script>
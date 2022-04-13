<template>
  <v-autocomplete
    v-model="skillList"
    :items="collaboSkillList"
    item-text="skill"
    return-object
    dense
    chips
    label="Collaborate"
    multiple
    @change="onChange"
  ></v-autocomplete>
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
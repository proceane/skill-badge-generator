<template>
  <v-autocomplete
    v-model="skillList"
    :items="mobileSkillList"
    item-text="skill"
    return-object
    dense
    chips
    label="Mobile"
    multiple
    @change="onChange"
  ></v-autocomplete>
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
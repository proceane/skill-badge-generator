<template>
  <!-- <v-row>
    <v-checkbox
      v-for="item in frontSkillList"
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
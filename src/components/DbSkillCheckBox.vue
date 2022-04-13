<template>
  <v-row>
    <v-checkbox
      v-for="item in dbSkillList"
      :key="item.skill"
      :label="item.skill"
      v-model="skillList"
      v-bind:value="{'logo': item.logo, 'skill': item.skill, 'color': item.color}"
      hide-details
      @change="onChange"
    >
    </v-checkbox>
  </v-row>  
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
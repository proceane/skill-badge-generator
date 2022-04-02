<template>
  <v-row>
    <v-row>
      <v-col
        cols="4"
      >
        <v-text-field
        label="search"
        outlined
        append-icon="mdi-magnify"
        @input="onSearch"
      ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-checkbox
        v-for="item in backSkillList"
        :key="item.skill"
        :label="item.skill"
        v-model="skillList"
        v-bind:value="{'logo': item.logo, 'name': item.skill, 'color': item.color}"
        hide-details
        @change="onChange"
      >
      </v-checkbox>
    </v-row>
  </v-row>  
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
    onSearch(value) {
      if (value == '') {
        this.backSkillList = backSkillList;
      }
      this.backSkillList = this.backSkillList.filter((e) => {
        return e.skill.substr(0, value.length).toUpperCase() == value.toUpperCase();
      });
    }
  },
}
</script>
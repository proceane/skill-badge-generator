<template>
  <v-autocomplete
    v-model="skillList"
    :items="allSkillList"
    item-text="skill"
    return-object
    chips
    label="Skills"
    multiple
    @change="onChange"
  >
    <template v-slot:selection="data">
      <v-chip
        v-bind="data.attrs"
        :input-value="data.selected"
        close
        @click="data.select"
        @click:close="remove(data.item)"
        :color="'#' + data.item.color"
        text-color="white"
        small
      >
        {{ data.item.skill }}
      </v-chip>
    </template>
  </v-autocomplete>
</template>

<script>

import allSkillList from "../../static/dev_skills.json";

export default {
  name: "AllSkillCheckBox",
  data: () => ({
    skillList: [],
    allSkillList: allSkillList,
  }),
  methods: {
    onChange() {
      this.$emit('selectSkillList', {'skill': 'all', 'skillList': this.skillList});
    },
    executeResetCommand() {
      this.skillList = [];
    },
    remove(item) {
      const index = this.skillList.findIndex(i => i.skill == item.skill);
      if (index >= 0) {
        this.skillList.splice(index, 1);
        this.onChange();
      }
    },
  },
}
</script>
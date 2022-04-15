<template>
  <v-autocomplete
    v-model="skillList"
    :items="devOpsSkillList"
    item-text="skill"
    return-object
    chips
    label="DevOps"
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

import devOpsSkillList from "../../static/dev_skills_devops.json";

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
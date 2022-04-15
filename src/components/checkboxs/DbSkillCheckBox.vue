<template>
  <v-autocomplete
    v-model="skillList"
    :items="dbSkillList"
    item-text="skill"
    return-object
    chips
    label="Database"
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

import dbSkillList from "../../static/dev_skills_db.json";

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
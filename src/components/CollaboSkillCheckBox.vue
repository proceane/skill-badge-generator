<template>
  <v-autocomplete
    v-model="skillList"
    :items="collaboSkillList"
    item-text="skill"
    return-object
    chips
    label="Collaborate"
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
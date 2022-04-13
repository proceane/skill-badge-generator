<template>
  <v-autocomplete
    v-model="skillList"
    :items="langSkillList"
    item-text="skill"
    return-object
    chips
    label="Language"
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

import langSkillList from "../static/dev_skills_lang.json";

export default {
  name: "LangSkillCheckBox",
  data: () => ({
    skillList: [],
    langSkillList: langSkillList,
  }),
  methods: {
    onChange() {
      this.$emit('selectLangSkillList', this.skillList);
    },
    executeResetCommand() {
      this.skillList = [];
    },
    searchSkill(value) {
      console.log("search lang skill : " + value);
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
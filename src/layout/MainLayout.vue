<template>
  <v-row>
    <v-col cols="12" lg="6">
      <ButtonArea :skillList="markdownSkillList"/>
      <SelectArea @sendHtmlSkillList="sendSkillListToPreview" @sendMarkdownSkillList="sendSkillListToGenerate"/>
    </v-col>
    <v-col cols="12" lg="6">
      <PreviewArea :skillList="htmlSkillList"/>
    </v-col>
  </v-row>
</template>

<script>
import ButtonArea from '../components/ButtonArea';
import SelectArea from '../components/SelectArea';
import PreviewArea from '../components/PreviewArea';

export default {
  name: "MainLayout",
  components: {
    ButtonArea,
    SelectArea,
    PreviewArea,
  },
  data: () => ({
    htmlSkillList: null,
    markdownSkillList: null,
  }),
  methods: {
    sendSkillListToPreview(skillList) {
      this.htmlSkillList = skillList;
    },
    sendSkillListToGenerate(skillList) {
      this.markdownSkillList = skillList;
    },
  }
}
</script>
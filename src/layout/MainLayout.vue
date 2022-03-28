<template>
  <v-row>
    <v-col cols="12" lg="6">
      <ButtonArea :skillList="frontMarkdownSkillList" :langSkillList="langMarkdownSkillList"/>
      <SelectArea 
        @sendFrontHtmlSkillList="sendFrontSkillListToPreview" 
        @sendFrontMarkdownSkillList="sendFrontSkillListToGenerate"
        @sendLangHtmlSkillList="sendLangSkillListToPreview"
        @sendLangMarkdownSkillList="sendLangSkillListToGenerate"
      />
    </v-col>
    <v-col cols="12" lg="6">
      <PreviewArea :frontSkillList="frontHtmlSkillList" :langSkillList="langHtmlSkillList"/>
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
    frontHtmlSkillList: null,
    frontMarkdownSkillList: null,
    langHtmlSkillList: null,
    langMarkdownSkillList: null,
  }),
  methods: {
    sendFrontSkillListToPreview(skillList) {
      this.frontHtmlSkillList = skillList;
    },
    sendFrontSkillListToGenerate(skillList) {
      this.frontMarkdownSkillList = skillList;
    },
    sendLangSkillListToPreview(skillList) {
      this.langHtmlSkillList = skillList;
    },
    sendLangSkillListToGenerate(skillList) {
      this.langMarkdownSkillList = skillList;
    }
  }
}
</script>
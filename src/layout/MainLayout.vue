<template>
  <v-row>
    <v-col cols="12" lg="6">
      <ButtonArea :skillList="markdownSkillList" :langSkillList="langMarkdownSkillList"/>
      <SelectArea 
        @sendHtmlSkillList="sendSkillListToPreview" 
        @sendMarkdownSkillList="sendSkillListToGenerate"
        @sendHtmlLangSkillList="sendLangSkillListToPreview"
        @sendMarkdownLangSkillList="sendLangSkillListToGenerate"
      />
    </v-col>
    <v-col cols="12" lg="6">
      <PreviewArea :skillList="htmlSkillList" :langSkillList="langHtmlSkillList"/>
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
    langHtmlSkillList: null,
    langMarkdownSkillList: null,
  }),
  methods: {
    sendSkillListToPreview(skillList) {
      this.htmlSkillList = skillList;
    },
    sendSkillListToGenerate(skillList) {
      this.markdownSkillList = skillList;
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
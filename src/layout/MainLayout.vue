<template>
  <v-row>
    <v-col cols="12" lg="6">
      <ButtonArea 
        :langSkillList="langMarkdownSkillList"
        :frontSkillList="frontMarkdownSkillList" 
        :backSkillList="backMarkdownSkillList"
      />
      <SelectArea 
        @sendFrontHtmlSkillList="sendFrontSkillListToPreview" 
        @sendFrontMarkdownSkillList="sendFrontSkillListToGenerate"
        @sendLangHtmlSkillList="sendLangSkillListToPreview"
        @sendLangMarkdownSkillList="sendLangSkillListToGenerate"
        @sendBackHtmlSkillList="sendBackSkillListToPreview"
        @sendBackMarkdownSkillList="sendBackSkillListToGenerate"
      />
    </v-col>
    <v-col cols="12" lg="6">
      <PreviewArea 
        :langSkillList="langHtmlSkillList" 
        :frontSkillList="frontHtmlSkillList" 
        :backSkillList="backHtmlSkillList"
      />
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
    langHtmlSkillList: null,
    langMarkdownSkillList: null,
    frontHtmlSkillList: null,
    frontMarkdownSkillList: null,
    backHtmlSkillList: null,
    backMarkdownSkillList: null,
  }),
  methods: {
    sendLangSkillListToPreview(skillList) {
      this.langHtmlSkillList = skillList;
    },
    sendLangSkillListToGenerate(skillList) {
      this.langMarkdownSkillList = skillList;
    },
    sendFrontSkillListToPreview(skillList) {
      this.frontHtmlSkillList = skillList;
    },
    sendFrontSkillListToGenerate(skillList) {
      this.frontMarkdownSkillList = skillList;
    },
    sendBackSkillListToPreview(skillList) {
      this.backHtmlSkillList = skillList;
    },
    sendBackSkillListToGenerate(skillList) {
      this.backMarkdownSkillList = skillList;
    }
  }
}
</script>
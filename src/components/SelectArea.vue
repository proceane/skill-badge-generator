<template>
<!-- 로고 유형은 여기에서 구현후 html 생성 코드에 파라미터로 추가 -->
  <v-row class="ml-3 mr-3">
    <v-expansion-panels>
      <v-expansion-panel class="">
        <v-expansion-panel-header>Language</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container fluid>
              <LangSkillCheckBox @selectLangSkillList="sendLangSkillList"/>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel class="">
        <v-expansion-panel-header>Front-End</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container fluid>
              <FrontSkillCheckBox @selectFrontSkillList="sendFrontSkillList"/>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
import FrontSkillCheckBox from './FrontSkillCheckBox';
import LangSkillCheckBox from './LangSkillCheckBox';
import listToHtml from '../function/convertListToHtml';
import listToMarkdown from '../function/convertListToMarkdown';

export default {
  components: {
    FrontSkillCheckBox,
    LangSkillCheckBox,
  },
  methods: {
    sendFrontSkillList(skillList) {
      this.$emit('sendFrontHtmlSkillList', listToHtml(skillList));
      this.$emit('sendFrontMarkdownSkillList', listToMarkdown(skillList));
    },
    sendLangSkillList(skillList) {
      this.$emit('sendLangHtmlSkillList', listToHtml(skillList));
      this.$emit('sendLangMarkdownSkillList', listToMarkdown(skillList));
    }
  },
}
</script>
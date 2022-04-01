<template>
<!-- 로고 유형은 여기에서 구현후 html 생성 코드에 파라미터로 추가 -->
  <v-row class="ml-3 mr-3">
    <v-expansion-panels>
      <v-expansion-panel class="">
        <v-expansion-panel-header>Language</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container fluid>
              <LangSkillCheckBox @selectLangSkillList="sendLangSkillList" ref="lang"/>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel class="">
        <v-expansion-panel-header>Front-End</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container fluid>
              <FrontSkillCheckBox @selectFrontSkillList="sendFrontSkillList" ref="front"/>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel class="">
        <v-expansion-panel-header>Back-End</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container fluid>
              <BackSkillCheckBox @selectBackSkillList="sendBackSkillList" ref="back"/>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel class="">
        <v-expansion-panel-header>Mobile</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container fluid>
              <MobileSkillCheckBox @selectMobileSkillList="sendMobileSkillList" ref="mobile"/>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel class="">
        <v-expansion-panel-header>Database</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container fluid>
              <DbSkillCheckBox @selectDbSkillList="sendDbSkillList" ref="database"/>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel class="">
        <v-expansion-panel-header>DevOps</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container fluid>
              <DevOpsSkillCheckBox @selectDevOpsSkillList="sendDevOpsSkillList" ref="devOps"/>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel class="">
        <v-expansion-panel-header>Collaborate</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container fluid>
              <CollaboSkillCheckBox @selectCollaboSkillList="sendCollaboSkillList" ref="collabo"/>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
import FrontSkillCheckBox from './FrontSkillCheckBox';
import LangSkillCheckBox from './LangSkillCheckBox';
import BackSkillCheckBox from './BackSkillCheckBox';
import DbSkillCheckBox from './DbSkillCheckBox';
import MobileSkillCheckBox from './MobileSkillCheckBox';
import DevOpsSkillCheckBox from './DevOpsSkillCheckBox';
import CollaboSkillCheckBox from './CollaboSkillCheckBox';

import listToHtml from '../function/convertListToHtml';
import listToMarkdown from '../function/convertListToMarkdown';

export default {
  components: {
    FrontSkillCheckBox,
    LangSkillCheckBox,
    BackSkillCheckBox,
    DbSkillCheckBox,
    MobileSkillCheckBox,
    DevOpsSkillCheckBox,
    CollaboSkillCheckBox,
  },
  methods: {
    sendFrontSkillList(skillList) {
      this.$emit('sendFrontHtmlSkillList', listToHtml(skillList));
      this.$emit('sendFrontMarkdownSkillList', listToMarkdown(skillList));
    },
    sendLangSkillList(skillList) {
      this.$emit('sendLangHtmlSkillList', listToHtml(skillList));
      this.$emit('sendLangMarkdownSkillList', listToMarkdown(skillList));
    },
    sendBackSkillList(skillList) {
      this.$emit('sendBackHtmlSkillList', listToHtml(skillList));
      this.$emit('sendBackMarkdownSkillList', listToMarkdown(skillList));
    },
    sendDbSkillList(skillList) {
      this.$emit('sendDbHtmlSkillList', listToHtml(skillList));
      this.$emit('sendDbMarkdownSkillList', listToMarkdown(skillList));
    },
    sendMobileSkillList(skillList) {
      this.$emit('sendMobileHtmlSkillList', listToHtml(skillList));
      this.$emit('sendMobileMarkdownSkillList', listToMarkdown(skillList));
    },
    sendDevOpsSkillList(skillList) {
      this.$emit('sendDevOpsHtmlSkillList', listToHtml(skillList));
      this.$emit('sendDevOpsMarkdownSkillList', listToMarkdown(skillList));
    },
    sendCollaboSkillList(skillList) {
      this.$emit('sendCollaboHtmlSkillList', listToHtml(skillList));
      this.$emit('sendCollaboMarkdownSkillList', listToMarkdown(skillList));
    },
    executeResetCommand() {
      this.$refs.lang.executeResetCommand();
      this.$refs.front.executeResetCommand();
      this.$refs.back.executeResetCommand();
      this.$refs.mobile.executeResetCommand();
      this.$refs.database.executeResetCommand();
      this.$refs.devOps.executeResetCommand();
      this.$refs.collabo.executeResetCommand();
    }
  },
}
</script>
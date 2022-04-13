<template>
    <v-card>
      <v-card-text>
        <LangSkillCheckBox @selectLangSkillList="sendLangSkillList" ref="lang"/>
        <FrontSkillCheckBox @selectFrontSkillList="sendFrontSkillList" ref="front"/>
        <BackSkillCheckBox @selectBackSkillList="sendBackSkillList" ref="back"/>
        <MobileSkillCheckBox @selectMobileSkillList="sendMobileSkillList" ref="mobile"/>
        <DbSkillCheckBox @selectDbSkillList="sendDbSkillList" ref="database"/>
        <DevOpsSkillCheckBox @selectDevOpsSkillList="sendDevOpsSkillList" ref="devOps"/>
        <CollaboSkillCheckBox @selectCollaboSkillList="sendCollaboSkillList" ref="collabo"/>
      </v-card-text>
    </v-card>
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
    },
  },
}
</script>
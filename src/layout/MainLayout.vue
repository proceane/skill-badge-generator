<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" lg="12">
      <ButtonArea 
        :langSkillList="langMarkdownSkillList"
        :frontSkillList="frontMarkdownSkillList" 
        :backSkillList="backMarkdownSkillList"
        :dbSkillList="dbMarkdownSkillList"
        :mobileSkillList="mobileMarkdownSkillList"
        :devOpsSkillList="devOpsMarkdownSkillList"
        :collaboSkillList="collaboMarkdownSkillList"
        @executeResetCommand="executeResetCommand"
        @isShowTitle="sendIsShowTitle"
        @sendBadgeColor="setBadgeColor"
        @sendBadgeStyle="setBadgeStyle"
        @isShowLogo="setShowLogo"
      />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="6">
        <SelectArea 
          @sendLangSkillList="sendLangSkillList"
          @sendFrontSkillList="sendFrontSkillList"
          @sendBackSkillList="sendBackSkillList"
          @sendDbSkillList="sendDbSkillList"
          @sendMobileSkillList="sendMobileSkillList"
          @sendDevOpsSkillList="sendDevOpsSkillList"
          @sendCollaboSkillList="sendCollaboSkillList"
          ref="selectArea"
        />
      </v-col>
      <v-col cols="12" lg="6">
        <PreviewArea 
          :langSkillList="langHtmlSkillList" 
          :frontSkillList="frontHtmlSkillList" 
          :backSkillList="backHtmlSkillList"
          :dbSkillList="dbHtmlSkillList"
          :mobileSkillList="mobileHtmlSkillList"
          :devOpsSkillList="devOpsHtmlSkillList"
          :collaboSkillList="collaboHtmlSkillList"
          ref="previewArea"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ButtonArea from '../components/ButtonArea';
import SelectArea from '../components/SelectArea';
import PreviewArea from '../components/PreviewArea';

import listToHtml from '../function/convertListToHtml';
import listToMarkdown from '../function/convertListToMarkdown';

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
    dbHtmlSkillList: null,
    dbMarkdownSkillList: null,
    mobileHtmlSkillList: null,
    mobileMarkdownSkillList: null,
    devOpsHtmlSkillList: null,
    devOpsMarkdownSkillList: null,
    collaboHtmlSkillList: null,
    collaboMarkdownSkillList: null,
    badgeColor: 'FFFFFF',
    badgeStyle: 'flat-square',
    showLogo: true,
  }),
  methods: {
    sendLangSkillList(skillList) {
      this.langHtmlSkillList = listToHtml(skillList, this.badgeColor, this.badgeStyle, this.showLogo);
      this.langMarkdownSkillList = listToMarkdown(skillList, this.badgeColor, this.badgeStyle, this.showLogo);
    },
    sendFrontSkillList(skillList) {
      this.frontHtmlSkillList = listToHtml(skillList, this.badgeColor, this.badgeStyle, this.showLogo);
      this.frontMarkdownSkillList = listToMarkdown(skillList, this.badgeColor, this.badgeStyle, this.showLogo);
    },
    sendBackSkillList(skillList) {
      this.backHtmlSkillList = listToHtml(skillList, this.badgeColor, this.badgeStyle, this.showLogo);
      this.backMarkdownSkillList = listToMarkdown(skillList, this.badgeColor, this.badgeStyle, this.showLogo);
    },
    sendDbSkillList(skillList) {
      this.dbHtmlSkillList = listToHtml(skillList, this.badgeColor, this.badgeStyle, this.showLogo);
      this.dbMarkdownSkillList = listToMarkdown(skillList, this.badgeColor, this.badgeStyle, this.showLogo);
    },
    sendMobileSkillList(skillList) {
      this.mobileHtmlSkillList = listToHtml(skillList, this.badgeColor, this.badgeStyle, this.showLogo);
      this.mobileMarkdownSkillList = listToMarkdown(skillList, this.badgeColor, this.badgeStyle, this.showLogo);
    },
    sendDevOpsSkillList(skillList) {
      this.devOpsHtmlSkillList = listToHtml(skillList, this.badgeColor, this.badgeStyle, this.showLogo);
      this.devOpsMarkdownSkillList = listToMarkdown(skillList, this.badgeColor, this.badgeStyle, this.showLogo);
    },
    sendCollaboSkillList(skillList) {
      this.collaboHtmlSkillList = listToHtml(skillList, this.badgeColor, this.badgeStyle, this.showLogo);
      this.collaboMarkdownSkillList = listToMarkdown(skillList, this.badgeColor, this.badgeStyle, this.showLogo);
    },
    executeResetCommand() {
      this.langHtmlSkillList = null;
      this.langMarkdownSkillList = null;
      this.frontHtmlSkillList = null;
      this.frontMarkdownSkillList = null;
      this.backHtmlSkillList = null;
      this.backMarkdownSkillList = null;
      this.mobileHtmlSkillList = null;
      this.mobileMarkdownSkillList = null;
      this.dbHtmlSkillList = null;
      this.dbMarkdownSkillList = null;
      this.devOpsHtmlSkillList = null;
      this.devOpsMarkdownSkillList = null;
      this.collaboHtmlSkillList = null;
      this.collaboMarkdownSkillList = null;
      this.$refs.selectArea.executeResetCommand();
    },
    sendIsShowTitle(isShow) {
      this.$refs.previewArea.sendIsShowTitle(isShow);
    },
    setBadgeColor(color) {
      this.badgeColor = color;
    },
    setBadgeStyle(style) {
      this.badgeStyle = style;
    },
    setShowLogo(isShow) {
      this.showLogo = isShow;
    }
  }
}
</script>
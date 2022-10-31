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
        :allSkillList="allMarkdownSkillList"
        @executeResetCommand="executeResetCommand"
        @isShowTitle="sendIsShowTitle"
        @sendBadgeColor="setBadgeColor"
        @sendBadgeStyle="setBadgeStyle"
        @isShowLogo="setShowLogo"
      />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="6" md="6">
        <SelectArea 
          @sendSkillList="sendSkillList"
          ref="selectArea"
        />
      </v-col>
      <v-col cols="12" lg="6" md="6">
        <PreviewArea 
          :langSkillList="langHtmlSkillList" 
          :frontSkillList="frontHtmlSkillList" 
          :backSkillList="backHtmlSkillList"
          :dbSkillList="dbHtmlSkillList"
          :mobileSkillList="mobileHtmlSkillList"
          :devOpsSkillList="devOpsHtmlSkillList"
          :collaboSkillList="collaboHtmlSkillList"
          :allSkillList="allHtmlSkillList"
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
    allHtmlSkillList: null,
    allMarkdownSkillList: null,
    badgeColor: 'FFFFFF',
    badgeStyle: 'flat-square',
    showLogo: true,
  }),
  methods: {
    sendSkillList(value) {
      switch (value.skill) {
        case 'lang':
          this.langHtmlSkillList = listToHtml(value.skillList, this.badgeColor, this.badgeStyle, this.showLogo);
          this.langMarkdownSkillList = listToMarkdown(value.skillList, this.badgeColor, this.badgeStyle, this.showLogo);
          break;
        case 'front':
          this.frontHtmlSkillList = listToHtml(value.skillList, this.badgeColor, this.badgeStyle, this.showLogo);
          this.frontMarkdownSkillList = listToMarkdown(value.skillList, this.badgeColor, this.badgeStyle, this.showLogo);
          break;
        case 'back':
          this.backHtmlSkillList = listToHtml(value.skillList, this.badgeColor, this.badgeStyle, this.showLogo);
          this.backMarkdownSkillList = listToMarkdown(value.skillList, this.badgeColor, this.badgeStyle, this.showLogo);
          break;
        case 'mobile':
          this.mobileHtmlSkillList = listToHtml(value.skillList, this.badgeColor, this.badgeStyle, this.showLogo);
          this.mobileMarkdownSkillList = listToMarkdown(value.skillList, this.badgeColor, this.badgeStyle, this.showLogo);
          break;
        case 'database':
          this.dbHtmlSkillList = listToHtml(value.skillList, this.badgeColor, this.badgeStyle, this.showLogo);
          this.dbMarkdownSkillList = listToMarkdown(value.skillList, this.badgeColor, this.badgeStyle, this.showLogo);
          break;
        case 'devOps':
          this.devOpsHtmlSkillList = listToHtml(value.skillList, this.badgeColor, this.badgeStyle, this.showLogo);
          this.devOpsMarkdownSkillList = listToMarkdown(value.skillList, this.badgeColor, this.badgeStyle, this.showLogo);
          break;
        case 'collabo':
          this.collaboHtmlSkillList = listToHtml(value.skillList, this.badgeColor, this.badgeStyle, this.showLogo);
          this.collaboMarkdownSkillList = listToMarkdown(value.skillList, this.badgeColor, this.badgeStyle, this.showLogo);
          break;
        case 'all':
          this.allHtmlSkillList = listToHtml(value.skillList, this.badgeColor, this.badgeStyle, this.showLogo);
          this.allMarkdownSkillList = listToMarkdown(value.skillList, this.badgeColor, this.badgeStyle, this.showLogo);
          break;
        default:
          break;
      }
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
      this.allHtmlSkillList = null;
      this.allMarkdownSkillList = null;
      this.$refs.selectArea.executeResetCommand();
    },
    sendIsShowTitle(isShow) {
      this.$refs.previewArea.sendIsShowTitle(isShow);
    },
    setBadgeColor(color) {
      this.badgeColor = color;
      this.$refs.selectArea.executeResendCommand();
    },
    setBadgeStyle(style) {
      this.badgeStyle = style;
      this.$refs.selectArea.executeResendCommand();
    },
    setShowLogo(isShow) {
      this.showLogo = isShow;
      this.$refs.selectArea.executeResendCommand();
    }
  }
}
</script>
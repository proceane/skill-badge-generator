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
      />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="6">
        <SelectArea 
          @sendFrontHtmlSkillList="sendFrontSkillListToPreview" 
          @sendFrontMarkdownSkillList="sendFrontSkillListToGenerate"
          @sendLangHtmlSkillList="sendLangSkillListToPreview"
          @sendLangMarkdownSkillList="sendLangSkillListToGenerate"
          @sendBackHtmlSkillList="sendBackSkillListToPreview"
          @sendBackMarkdownSkillList="sendBackSkillListToGenerate"
          @sendDbHtmlSkillList="sendDbSkillListToPreview"
          @sendDbMarkdownSkillList="sendDbSkillListToGenerate"
          @sendMobileHtmlSkillList="sendMobileSkillListToPreview"
          @sendMobileMarkdownSkillList="sendMobileSkillListToGenerate"
          @sendDevOpsHtmlSkillList="sendDevOpsSkillListToPreview"
          @sendDevOpsMarkdownSkillList="sendDevOpsSkillListToGenerate"
          @sendCollaboHtmlSkillList="sendCollaboSkillListToPreview"
          @sendCollaboMarkdownSkillList="sendCollaboSkillListToGenerate"
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
    },
    sendDbSkillListToPreview(skillList) {
      this.dbHtmlSkillList = skillList;
    },
    sendDbSkillListToGenerate(skillList) {
      this.dbMarkdownSkillList = skillList;
    },
    sendMobileSkillListToPreview(skillList) {
      this.mobileHtmlSkillList = skillList;
    },
    sendMobileSkillListToGenerate(skillList) {
      this.mobileMarkdownSkillList = skillList;
    },
    sendDevOpsSkillListToPreview(skillList) {
      this.devOpsHtmlSkillList = skillList;
    },
    sendDevOpsSkillListToGenerate(skillList) {
      this.devOpsMarkdownSkillList = skillList;
    },
    sendCollaboSkillListToPreview(skillList) {
      this.collaboHtmlSkillList = skillList;
    },
    sendCollaboSkillListToGenerate(skillList) {
      this.collaboMarkdownSkillList = skillList;
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
  }
}
</script>
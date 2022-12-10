<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" lg="12">
        <ButtonArea 
          :allSkillList="allMarkdownSkillList"
          @executeResetCommand="executeResetCommand"
          @sendBadgeColor="setBadgeColor"
          @sendBadgeStyle="setBadgeStyle"
          @isShowLogo="setShowLogo"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="6" md="6">
        <div class="text-caption ml-2">
          No skill in list? 
          <a href="https://github.com/proceane/skill-badge-generator/issues/new/choose" target="_blank">Request in here</a>
        </div>
        <SelectArea
          @sendSkillList="sendSkillList"
          ref="selectArea"
        />
      </v-col>
      <v-col cols="12" lg="6" md="6">
        <PreviewArea 
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
    allHtmlSkillList: null,
    allMarkdownSkillList: null,
    badgeColor: 'FFFFFF',
    badgeStyle: 'flat-square',
    showLogo: true,
  }),
  methods: {
    sendSkillList(value) {
      this.allHtmlSkillList = listToHtml(value.skillList, this.badgeColor, this.badgeStyle, this.showLogo);
      this.allMarkdownSkillList = listToMarkdown(value.skillList, this.badgeColor, this.badgeStyle, this.showLogo);
    },
    executeResetCommand() {
      this.allHtmlSkillList = null;
      this.allMarkdownSkillList = null;
      this.$refs.selectArea.executeResetCommand();
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
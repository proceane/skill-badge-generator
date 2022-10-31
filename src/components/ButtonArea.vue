<template>
  <v-row class="mt-3 mb-3 ml-3 d-flex align-center">
    <v-btn class="mr-3"
      @click="executeResetCommand"
    >Reset</v-btn>

    <OptionDialog
      @isShowTitle="sendIsShowTitle"
      @isShowLogo="sendIsShowLogo"
      @sendBadgeColor="sendBadgeColor"
      @sendBadgeStyle="sendBadgeStyle"
    ></OptionDialog>
    
    <v-spacer></v-spacer>

    <MarkdownDialog
      :langSkillList="langSkillList"
      :frontSkillList="frontSkillList" 
      :backSkillList="backSkillList"
      :dbSkillList="dbSkillList"
      :mobileSkillList="mobileSkillList"
      :devOpsSkillList="devOpsSkillList"
      :collaboSkillList="collaboSkillList"
      :allSkillList="allSkillList"
      :titleSwitch="titleSwitch"
    ></MarkdownDialog>
  </v-row>
</template>

<script>
import OptionDialog from './dialogs/OptionDialog';
import MarkdownDialog from './dialogs/MarkdownDialog';

export default {
  components: {
    OptionDialog,
    MarkdownDialog,
  },
  data: () => ({
    titleSwitch: false,
  }),
  props: {
    langSkillList: {
      type: String
    },
    frontSkillList: {
      type: String
    },
    backSkillList: {
      type: String
    },
    dbSkillList: {
      type: String
    },
    mobileSkillList: {
      type: String
    },
    devOpsSkillList: {
      type: String
    },
    collaboSkillList: {
      type: String
    },
    allSkillList: {
      type: String
    },
  },
  methods: {
    executeResetCommand() {
      this.$emit("executeResetCommand");
    },
    sendBadgeColor(color) {
      this.$emit("sendBadgeColor", color);
    },
    sendBadgeStyle(style) {
      this.$emit("sendBadgeStyle", style);
    },
    sendIsShowTitle(isShow) {
      this.titleSwitch = isShow;
      this.$emit("isShowTitle", isShow);
    },
    sendIsShowLogo(isShow) {
      this.$emit("isShowLogo", isShow);
    },
  },
}
</script>
<template>
  <v-row class="mt-3 mb-3 ml-3 d-flex align-center">
    <v-btn class="mr-3"
      @click="executeResetCommand"
    >Reset</v-btn>

    <OptionDialog
      @isShowLogo="sendIsShowLogo"
      @sendBadgeColor="sendBadgeColor"
      @sendBadgeStyle="sendBadgeStyle"
    ></OptionDialog>
    <div class="text-caption ml-2">
      No skill in list?
      <a href="https://github.com/proceane/skill-badge-generator/issues/new/choose" target="_blank">Request in here</a>
    </div>
    <v-spacer></v-spacer>

    <MarkdownDialog
      :allSkillList="allSkillList"
      :customSkillList="customSkillList"
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
    allSkillList: {
      type: String
    },
    customSkillList: {
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
    sendIsShowLogo(isShow) {
      this.$emit("isShowLogo", isShow);
    },
  },
}
</script>
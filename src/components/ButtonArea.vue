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
    
    <v-spacer></v-spacer>

    <MarkdownDialog
      :allSkillList="allSkillList"
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
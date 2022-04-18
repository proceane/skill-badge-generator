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

    <v-dialog
      v-model="generateDialog"
      max-width="800px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          class="mr-5"
        >
          Generate
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span generateDialog="text-h5">Generate Markdown</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <code 
                lang="markdown"
                v-if="existList"
                style="width: 100%;"
              >
                {{ titleSwitch && langSkillList != null ? '### Language' : ''}}
                <br v-if="titleSwitch && langSkillList != null">
                {{langSkillList}}

                <br v-if="titleSwitch && frontSkillList != null">
                {{ titleSwitch && frontSkillList != null ? '### Front-End' : ''}}
                <br v-if="titleSwitch && frontSkillList != null">
                {{frontSkillList}}

                <br v-if="titleSwitch && backSkillList != null">
                {{ titleSwitch && backSkillList != null ? '### Back-End' : ''}}
                <br v-if="titleSwitch && backSkillList != null">
                {{backSkillList}}

                <br v-if="titleSwitch && mobileSkillList != null">
                {{ titleSwitch && mobileSkillList != null ? '### Mobile' : ''}}
                <br v-if="titleSwitch && mobileSkillList != null">
                {{mobileSkillList}}

                <br v-if="titleSwitch && dbSkillList != null">
                {{ titleSwitch && dbSkillList != null ? '### Database' : ''}}
                <br v-if="titleSwitch && dbSkillList != null">
                {{dbSkillList}}
                
                <br v-if="titleSwitch && devOpsSkillList != null">
                {{ titleSwitch && devOpsSkillList != null ? '### DevOps' : ''}}
                <br v-if="titleSwitch && devOpsSkillList != null">
                {{devOpsSkillList}}

                <br v-if="titleSwitch && collaboSkillList != null">
                {{ titleSwitch && collaboSkillList != null ? '### Collaborate' : ''}}
                <br v-if="titleSwitch && collaboSkillList != null">
                {{collaboSkillList}}

              </code>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="generateDialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import OptionDialog from './dialogs/OptionDialog';

export default {
  components: {
    OptionDialog,
  },
  data: () => ({
    generateDialog: false,
    optionDialog: false,
    titleSwitch: false,
    logoSwitch: true,
    sampleBadgeColor: "blue",
    sampleBadgeStyle: "flat-square",
    sampleBadgeMaxWidth: "67px",
    sampleBadgeMaxHeight: "20px",
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
  },
  computed: {
    existList() {
      return this.langSkillList != null || 
            this.frontSkillList != null || 
            this.backSkillList != null || 
            this.mobileSkillList != null ||
            this.dbSkillList != null ||
            this.devOpsSkillList != null ||
            this.collaboSkillList != null;
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
      this.$emit("isShowTitle", isShow);
    },
    sendIsShowLogo(isShow) {
      this.$emit("isShowLogo", isShow);
    },
  },
}
</script>
<template>
  <v-row class="mt-3 mb-3 ml-3">
    <v-btn class="mr-3"
      @click="executeResetCommand"
    >Reset</v-btn>
    <v-dialog
      v-model="generateDialog"
      max-width="800px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          class="mr-3"
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
            <v-row v-if="langSkillList">
              <code lang="markdown">
                {{langSkillList}}
              </code>
            </v-row>
            <v-row v-if="frontSkillList">
              <code lang="markdown">
                {{frontSkillList}}
              </code>
            </v-row>
            <v-row v-if="backSkillList">
              <code lang="markdown">
                {{backSkillList}}
              </code>
            </v-row>
            <v-row v-if="mobileSkillList">
              <code lang="markdown">
                {{mobileSkillList}}
              </code>
            </v-row>
            <v-row v-if="dbSkillList">
              <code lang="markdown">
                {{dbSkillList}}
              </code>
            </v-row>
            <v-row v-if="devOpsSkillList">
              <code lang="markdown">
                {{devOpsSkillList}}
              </code>
            </v-row>
            <v-row v-if="collaboSkillList">
              <code lang="markdown">
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

    <v-dialog
      v-model="optionDialog"
      max-width="800px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
        >
          Option
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Option</v-card-title>
        <v-card-text>
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <v-switch
                v-model="titleSwitch"
                label="Title in Markdown"
              ></v-switch>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-switch
                v-model="logoSwitch"
                label="Logo in Badge"
              ></v-switch>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <BadgeColorSelect></BadgeColorSelect>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <BadgeStyleSelect></BadgeStyleSelect>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import BadgeStyleSelect from './BadgeStyleSelect';
import BadgeColorSelect from './BadgeColorSelect';

export default {
  components: {
    BadgeStyleSelect,
    BadgeColorSelect,
  },
  data: () => ({
    generateDialog: false,
    optionDialog: false,
    titleSwitch: false,
    logoSwitch: false,
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
  methods: {
    executeResetCommand() {
      this.$emit("executeResetCommand");
    },
  },
}
</script>
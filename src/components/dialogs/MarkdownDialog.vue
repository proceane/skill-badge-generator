<template>
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
</template>

<script>
export default {
  data: () => ({
    generateDialog: false,
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
}
</script>
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
        <v-spacer></v-spacer>
        <v-btn 
          @click="copyMarkdown"
        >
          Copy
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <code 
              lang="markdown"
              v-if="existList"
              style="width: 100%;"
              ref="markdownText"
            >
              {{allSkillList}} 
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
    allSkillList: {
      type: String
    },
  },
  computed: {
    existList() {
      return this.allSkillList != null;
    },
  },
  methods: {
    copyMarkdown() {
      navigator.clipboard.writeText(this.$refs.markdownText.textContent.trim());
      alert("copy complete!");
    },
  },
}
</script>
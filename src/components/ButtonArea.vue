<template>
  <v-row class="mt-3 mb-3 ml-3">
    <v-btn class="mr-3">Reset</v-btn>
    <v-dialog
      v-model="dialog"
      max-width="800px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
        >
          Generate
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Generate Markdown</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <code lang="markdown">
                {{langSkillList}}
              </code>
            </v-row>
            <v-row>
              <code lang="markdown">
                {{skillList}}
              </code>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
  props: {
    skillList: {
      type: String
    },
    langSkillList: {
      type: String
    },
  },
}
</script>
<template>
  <v-card>
    <v-card-title>Preview</v-card-title>

    <v-card-text>
      <h3 class="mb-2" v-if="isShow">Language</h3>
      <div id="language-preview-area" v-html="langSkillList">
      </div>

      <br>
      <h3 class="mb-2" v-if="isShow">Front-End</h3>
      <div id="front-end-preview-area" v-html="frontSkillList">
      </div>

      <br>
      <h3 class="mb-2" v-if="isShow">Back-End</h3>
      <div id="back-end-preview-area" v-html="backSkillList">
      </div>

      <br>
      <h3 class="mb-2" v-if="isShow">Mobile</h3>
      <div id="mobile-preview-area" v-html="mobileSkillList">
      </div>

      <br>
      <h3 class="mb-2" v-if="isShow">Database</h3>
      <div id="database-preview-area" v-html="dbSkillList">
      </div>

      <br>
      <h3 class="mb-2" v-if="isShow">DevOps</h3>
      <div id="devOps-preview-area" v-html="devOpsSkillList">
      </div>

      <br>
      <h3 class="mb-2" v-if="isShow">Collaborate</h3>
      <div id="collabo-preview-area" v-html="collaboSkillList">
      </div>
    </v-card-text>
    
  </v-card>
</template>

<script>
export default {
  data: () => ({
    isShow: false,
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
    sendIsShowTitle(isShow) {
      this.isShow = isShow;
    } 
  }
}
</script>
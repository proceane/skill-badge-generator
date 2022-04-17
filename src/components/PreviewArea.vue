<template>
  <v-card>
    <v-card-title>Preview</v-card-title>

    <v-card-text>
      <h3 class="mb-2" v-if="isShow && langSkillList != null">Language</h3>
      <div 
        v-html="langSkillList"
        v-if="langSkillList != null"
      ></div>

      <br v-if="isShow && frontSkillList != null">
      <h3 class="mb-2" v-if="isShow && frontSkillList != null">Front-End</h3>
      <div 
        v-html="frontSkillList"
        v-if="frontSkillList != null"
      ></div>

      <br v-if="isShow && backSkillList != null">
      <h3 class="mb-2" v-if="isShow && backSkillList != null">Back-End</h3>
      <div 
        v-html="backSkillList"
        v-if="backSkillList != null"
      ></div>

      <br v-if="isShow && mobileSkillList != null">
      <h3 class="mb-2" v-if="isShow && mobileSkillList != null">Mobile</h3>
      <div 
        v-html="mobileSkillList"
        v-if="mobileSkillList != null"
      ></div>

      <br v-if="isShow && dbSkillList != null">
      <h3 class="mb-2" v-if="isShow && dbSkillList != null">Database</h3>
      <div 
        v-html="dbSkillList"
        v-if="dbSkillList != null"
      ></div>

      <br v-if="isShow && devOpsSkillList != null">
      <h3 class="mb-2" v-if="isShow && devOpsSkillList != null">DevOps</h3>
      <div 
        v-html="devOpsSkillList"
        v-if="devOpsSkillList != null"
      ></div>

      <br v-if="isShow && collaboSkillList != null">
      <h3 class="mb-2" v-if="isShow && collaboSkillList != null">Collaborate</h3>
      <div 
        v-html="collaboSkillList"
        v-if="collaboSkillList != null"  
      ></div>
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
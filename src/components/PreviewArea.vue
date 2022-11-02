<template>
  <v-card>
    <v-card-title>Preview</v-card-title>

    <v-card-text>
      <h3 class="mb-2" v-if="isShow && allSkillList != null">All</h3>
      <div 
        v-html="allSkillList"
        v-if="allSkillList != null"
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
    allSkillList: {
      type: String
    }
  },
  methods: {
    sendIsShowTitle(isShow) {
      this.isShow = isShow;
    } 
  }
}
</script>
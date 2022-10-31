<template>
    <v-card>
      <v-card-text>
        <LangSkillCheckBox @selectSkillList="sendSkillList" ref="lang"/>
        <FrontSkillCheckBox @selectSkillList="sendSkillList" ref="front"/>
        <BackSkillCheckBox @selectSkillList="sendSkillList" ref="back"/>
        <MobileSkillCheckBox @selectSkillList="sendSkillList" ref="mobile"/>
        <DbSkillCheckBox @selectSkillList="sendSkillList" ref="database"/>
        <DevOpsSkillCheckBox @selectSkillList="sendSkillList" ref="devOps"/>
        <CollaboSkillCheckBox @selectSkillList="sendSkillList" ref="collabo"/>
        <AllSkillCheckBox @selectSkillList="sendSkillList" ref="all"/>
      </v-card-text>
    </v-card>
</template>

<script>
import FrontSkillCheckBox from './checkboxs/FrontSkillCheckBox';
import LangSkillCheckBox from './checkboxs/LangSkillCheckBox';
import BackSkillCheckBox from './checkboxs/BackSkillCheckBox';
import DbSkillCheckBox from './checkboxs/DbSkillCheckBox';
import MobileSkillCheckBox from './checkboxs/MobileSkillCheckBox';
import DevOpsSkillCheckBox from './checkboxs/DevOpsSkillCheckBox';
import CollaboSkillCheckBox from './checkboxs/CollaboSkillCheckBox';
import AllSkillCheckBox from './checkboxs/AllSkillCheckBox.vue';

export default {
  components: {
    FrontSkillCheckBox,
    LangSkillCheckBox,
    BackSkillCheckBox,
    DbSkillCheckBox,
    MobileSkillCheckBox,
    DevOpsSkillCheckBox,
    CollaboSkillCheckBox,
    AllSkillCheckBox,
  },
  methods: {
    sendSkillList(value) {
      this.$emit('sendSkillList', value);
    },
    executeResetCommand() {
      this.$refs.lang.executeResetCommand();
      this.$refs.front.executeResetCommand();
      this.$refs.back.executeResetCommand();
      this.$refs.mobile.executeResetCommand();
      this.$refs.database.executeResetCommand();
      this.$refs.devOps.executeResetCommand();
      this.$refs.collabo.executeResetCommand();
      this.$refs.all.executeResetCommand();
    },
    executeResendCommand() {
      this.$refs.lang.onChange();
      this.$refs.front.onChange();
      this.$refs.back.onChange();
      this.$refs.mobile.onChange();
      this.$refs.database.onChange();
      this.$refs.devOps.onChange();
      this.$refs.collabo.onChange();
      this.$refs.all.onChange();
    },
  },
}
</script>
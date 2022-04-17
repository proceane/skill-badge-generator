<template>
    <v-card>
      <v-card-text>
        <LangSkillCheckBox @selectLangSkillList="sendLangSkillList" @selectSkillList="sendSkillList" ref="lang"/>
        <FrontSkillCheckBox @selectFrontSkillList="sendFrontSkillList" @selectSkillList="sendSkillList" ref="front"/>
        <BackSkillCheckBox @selectBackSkillList="sendBackSkillList" @selectSkillList="sendSkillList" ref="back"/>
        <MobileSkillCheckBox @selectMobileSkillList="sendMobileSkillList" @selectSkillList="sendSkillList" ref="mobile"/>
        <DbSkillCheckBox @selectDbSkillList="sendDbSkillList" @selectSkillList="sendSkillList" ref="database"/>
        <DevOpsSkillCheckBox @selectDevOpsSkillList="sendDevOpsSkillList" @selectSkillList="sendSkillList" ref="devOps"/>
        <CollaboSkillCheckBox @selectCollaboSkillList="sendCollaboSkillList" @selectSkillList="sendSkillList" ref="collabo"/>
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

export default {
  components: {
    FrontSkillCheckBox,
    LangSkillCheckBox,
    BackSkillCheckBox,
    DbSkillCheckBox,
    MobileSkillCheckBox,
    DevOpsSkillCheckBox,
    CollaboSkillCheckBox,
  },
  methods: {
    sendFrontSkillList(skillList) {
      this.$emit('sendFrontSkillList', skillList);
    },
    sendLangSkillList(skillList) {
      this.$emit('sendLangSkillList', skillList);
    },
    sendBackSkillList(skillList) {
      this.$emit('sendBackSkillList', skillList);
    },
    sendDbSkillList(skillList) {
      this.$emit('sendDbSkillList', skillList);
    },
    sendMobileSkillList(skillList) {
      this.$emit('sendMobileSkillList', skillList);
    },
    sendDevOpsSkillList(skillList) {
      this.$emit('sendDevOpsSkillList', skillList);
    },
    sendCollaboSkillList(skillList) {
      this.$emit('sendCollaboSkillList', skillList);
    },
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
    },
  },
}
</script>
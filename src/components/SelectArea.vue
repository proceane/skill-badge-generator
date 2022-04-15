<template>
    <v-card>
      <v-card-text>
        <LangSkillCheckBox @selectLangSkillList="sendLangSkillList" ref="lang"/>
        <FrontSkillCheckBox @selectFrontSkillList="sendFrontSkillList" ref="front"/>
        <BackSkillCheckBox @selectBackSkillList="sendBackSkillList" ref="back"/>
        <MobileSkillCheckBox @selectMobileSkillList="sendMobileSkillList" ref="mobile"/>
        <DbSkillCheckBox @selectDbSkillList="sendDbSkillList" ref="database"/>
        <DevOpsSkillCheckBox @selectDevOpsSkillList="sendDevOpsSkillList" ref="devOps"/>
        <CollaboSkillCheckBox @selectCollaboSkillList="sendCollaboSkillList" ref="collabo"/>
      </v-card-text>
    </v-card>
</template>

<script>
import FrontSkillCheckBox from './FrontSkillCheckBox';
import LangSkillCheckBox from './LangSkillCheckBox';
import BackSkillCheckBox from './BackSkillCheckBox';
import DbSkillCheckBox from './DbSkillCheckBox';
import MobileSkillCheckBox from './MobileSkillCheckBox';
import DevOpsSkillCheckBox from './DevOpsSkillCheckBox';
import CollaboSkillCheckBox from './CollaboSkillCheckBox';

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
<template>
    <v-card>
      <v-card-text>
        <AllSkillCheckBox @selectSkillList="sendSkillList" ref="all"/>
      </v-card-text>
    </v-card>
</template>

<script>
import AllSkillCheckBox from './checkboxs/AllSkillCheckBox.vue';

export default {
  components: {
    AllSkillCheckBox,
  },
  methods: {
    sendSkillList(value) {
      this.$emit('sendSkillList', value);
    },
    executeResetCommand() {
      this.$refs.all.executeResetCommand();
    },
    executeResendCommand() {
      this.$refs.all.onChange();
    },
  },
}
</script>
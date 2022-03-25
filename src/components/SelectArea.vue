<template>
<!-- 로고 유형은 여기에서 구현후 html 생성 코드에 파라미터로 추가 -->
  <v-row class="ml-3 mr-3">
    <v-expansion-panels>
      <v-expansion-panel class="">
        <v-expansion-panel-header>Front-End</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container fluid>
              <SkillCheckBox @selectSkillList="sendSkillList"/>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
import SkillCheckBox from './SkillCheckBox';
import listToHtml from '../function/convertListToHtml';
import listToMarkdown from '../function/convertListToMarkdown';

export default {
  components: {
    SkillCheckBox,
  },
  methods: {
    sendSkillList(skillList) {
      this.$emit('sendHtmlSkillList', listToHtml(skillList));
      this.$emit('sendMarkdownSkillList', listToMarkdown(skillList));
    }
  },
}
</script>
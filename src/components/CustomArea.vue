<template>
    <v-expansion-panels class="mt-2">
      <v-expansion-panel>
        <v-expansion-panel-header>
          Custom
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form
            ref="form"
            lazy-validation
          >
            <v-row>
              <v-col cols="12" md="3" lg="3">
                <v-text-field
                  v-model="name"
                  :rules="[rules.required, rules.name]"
                  label="name"
                  clearable
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3" lg="3">
                <v-text-field
                  v-model="logo"
                  label="logo"
                  hint="https://simpleicons.org"
                  persistent-hint
                  clearable
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3" lg="3">
                <BadgeColorSelect @selectColor="setCustomBadgeColor"/>
              </v-col>
              <v-col cols="12" md="3" lg="3">
                <v-btn
                  color="primary"
                  class="mt-md-1 mt-lg-1"
                  @click="sendCustomBadge"
                >
                  MAKE
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
import BadgeColorSelect from '../components/selects/BadgeColorSelect';

export default {
  name: "CustomArea",
  components: {
    BadgeColorSelect,
  },
  data: () => ({
    name: '',
    logo: '',
    color: '#FFFFFF',
    skillList: [],
    rules: {
      required: value => !!value || 'Required.',
    },
  }),
  methods: {
    setCustomBadgeColor(color) {
      this.color = color.substring(1) == 'FFFFFF' ? 'blue' : color.substring(1);
    },
    sendCustomBadge() {
      const isValid = this.$refs.form.validate();
      if (isValid) {
        this.color = this.color.substring(1) == 'FFFFFF' ? 'blue' : this.color;
        this.skillList.push({"name": this.name, "logo": this.logo, "color": this.color});
        this.$emit('sendSkillList', {'skill': 'custom', 'skillList': this.skillList});
        this.$refs.form.resetValidation();
      }
    },
    executeResetCommand() {
      this.skillList = [];
    },
  },
}
</script>
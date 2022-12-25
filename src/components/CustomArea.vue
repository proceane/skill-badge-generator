<template>
    <v-expansion-panels class="mt-2">
      <v-expansion-panel>
        <v-expansion-panel-header>
          Custom
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col cols="12" md="3" lg="3">
              <v-text-field
                v-model="name"
                label="name"
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3" lg="3">
              <v-text-field
                v-model="logo"
                label="logo"
                hint="https://simpleicons.org/"
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
              >
                MAKE
              </v-btn>
            </v-col>
          </v-row>
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
  }),
  methods: {
    setCustomBadgeColor(color) {
      this.color = color.substring(1) == 'FFFFFF' ? 'blue' : color.substring(1);
      this.$emit("sendBadgeColor", color.substring(1));
    },
  },
}
</script>
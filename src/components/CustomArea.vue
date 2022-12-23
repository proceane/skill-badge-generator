<template>
    <v-expansion-panels class="mt-2">
      <v-expansion-panel>
        <v-expansion-panel-header>
          Custom
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col cols="12" md="4" lg="4">
              <v-text-field
                label="name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" lg="4">
              <v-text-field
                label="logo"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" lg="4">
              <BadgeColorSelect/>
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
    color: '#FFFFFF',
  }),
  
}
</script>
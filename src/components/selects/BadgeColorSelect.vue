<template>
  <v-text-field
    label="Badge Color"
    hint="White Color(#FFFFFF) is set as the default color for the dev-skill"
    :value="color"
  >
    <template v-slot:append>
      <v-menu 
        v-model="colorPicker"
        top
        :close-on-content-click="false"
        offset-x
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            :color="color"
            dark
            v-bind="attrs"
            v-on="on"
            x-small
            class="mr-3"
          >
          </v-btn>
        </template>
        <v-card>
          <v-color-picker
            v-model="color"
            hide-inputs
            @input="changeColor"
          ></v-color-picker>
        </v-card>
      </v-menu>
    </template>
  </v-text-field>
</template>

<script>
export default {
  name: "BadgeColorSelect",
  data: () => ({
    colorPicker: false,
    color: '#FFFFFF',
  }),
  methods: {
    changeColor() {
      this.$emit("selectColor", this.color);
    }
  },
}
</script>
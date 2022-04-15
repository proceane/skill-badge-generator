<template>
  <v-select
    label="Badge Style"
    :items="badgeStyleList"
    @change="selectStyle"
  ></v-select>
</template>

<script>
export default {
  name: "BadgeStyleSelect",
  data: () => ({
    badgeStyleList: ['plastic', 'flat', 'flat-square', 'for-the-badge', 'social'],
  }),
  methods: {
    selectStyle(style) {
      this.$emit("selectStyle", style);
    }
  },
}
</script>
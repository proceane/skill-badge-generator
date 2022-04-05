<template>
  <v-select
    label="Badge Style"
    :items="badgeStyleList"
  ></v-select>
</template>

<script>
export default {
  name: "BadgeStyleSelect",
  data: () => ({
    badgeStyleList: ['plastic', 'flat', 'flat-square', 'for-the-badge', 'social'],
  }),
}
</script>
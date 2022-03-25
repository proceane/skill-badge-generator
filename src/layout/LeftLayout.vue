<template>
  <v-col cols="12" lg="6">
    <ButtonArea/>
    <SelectArea/>
  </v-col>
</template>

<script>
import ButtonArea from '../components/ButtonArea';
import SelectArea from '../components/SelectArea';

export default {
  components: {
    ButtonArea,
    SelectArea,
  },
}
</script>
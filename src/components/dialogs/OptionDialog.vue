<template>
  <v-dialog
      v-model="optionDialog"
      max-width="800px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
        >
          Option
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Option</v-card-title>
        <v-card-text>
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <v-switch
                v-model="titleSwitch"
                label="Title in Markdown"
                @change="sendIsShowTitle"
              ></v-switch>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-switch
                v-model="logoSwitch"
                label="Logo in Badge"
                @change="setSampleBadgeSize(sampleBadgeStyle, logoSwitch)"
              ></v-switch>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <BadgeColorSelect @selectColor="setSampleBadgeColor"></BadgeColorSelect>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <BadgeStyleSelect @selectStyle="setSampleBadgeStyle"></BadgeStyleSelect>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-img
            :src="`https://img.shields.io/badge/sample-${sampleBadgeColor}?style=${sampleBadgeStyle}${logoSwitch ? '&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFPSURBVEiJtdU9SxxRFMbxnwqipc0GhRTKgsRCCDYqBiQEAsL6SRRS+BW2UuwiWPtS+CEsLPwENmot6Qxosq5GXYuZkXGccV4yPnCaO+f8n3sPd86lnHaxU7KmsKbxiB4+v4fBfgjvYa9u+Dj+xQzu0azTYCsGj+JnXfAGOikGNxjNK+4vYPADwynrQ1jJKx7IWJvAHFpYC2FpmsYdRgQ37Epwumf1YQlfMBlGE4N5O8vQHc5xijMcwS+v+1tXXMBs7Gh1xp+wM2Ae1zXC/2Ix2b+F0PV/4R18TcIjfRPc76rwW8GleVPf0a0Ib+XBI7UrGLTTQFl/8oeiO4mpUcZgqoJBqZpL5Vv0uyh8rAI8ilfTNa1FnzKMu1gPo5uRU6hNq4ldPeJAMGEjfcQ2HhK5ueObl6/XsWCMZGkGh7H8Qq/cJk6wXCQ51HJYs5H88ARiAtcZ55K5EwAAAABJRU5ErkJggg==&logoColor=white' : ''}`"
            :max-width="sampleBadgeMaxWidth"
            :max-height="sampleBadgeMaxHeight"
            class="ml-2"
          ></v-img>
          <v-btn
            color="green darken-1"
            text
            @click="optionDialog = false"
            class="ml-2"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import BadgeStyleSelect from '../selects/BadgeStyleSelect';
import BadgeColorSelect from '../selects/BadgeColorSelect';

export default {
  components: {
    BadgeStyleSelect,
    BadgeColorSelect,
  },
  data: () => ({
    optionDialog: false,
    titleSwitch: false,
    logoSwitch: true,
    sampleBadgeColor: "blue",
    sampleBadgeStyle: "flat-square",
    sampleBadgeMaxWidth: "67px",
    sampleBadgeMaxHeight: "20px",
  }),
  methods: {
    setSampleBadgeColor(color) {
      this.sampleBadgeColor = color.substring(1) == 'FFFFFF' ? 'blue' : color.substring(1);
      this.$emit("sendBadgeColor", color.substring(1));
    },
    setSampleBadgeStyle(style) {
      this.sampleBadgeStyle = style;
      this.setSampleBadgeSize(style, this.logoSwitch);
      this.$emit("sendBadgeStyle", style);
    },
    setSampleBadgeSize(style, existLogo) {
      switch (style) {
        case 'plastic':
          this.sampleBadgeMaxWidth = existLogo ? "67px" : "49px";
          this.sampleBadgeMaxHeight = "18px";
          break;
        case 'flat': 
        case 'flat-square':
          this.sampleBadgeMaxWidth = existLogo ? "67px" : "49px";
          this.sampleBadgeMaxHeight = "20px";
          break;
        case 'for-the-badge':
          this.sampleBadgeMaxWidth = existLogo ? "96px" : "76px";
          this.sampleBadgeMaxHeight = "28px";
          break;
        case 'social':
          this.sampleBadgeMaxWidth = existLogo ? "79px" : "65px";
          this.sampleBadgeMaxHeight = "20px";
          break;
      }

      this.sendIsShowLogo(existLogo);
    },
    sendIsShowTitle(isShow) {
      this.$emit("isShowTitle", isShow);
    },
    sendIsShowLogo(isShow) {
      this.$emit("isShowLogo", isShow);
    },
  },
}
</script>
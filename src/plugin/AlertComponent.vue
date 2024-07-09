<template>
  <div
    :class="[
      'alert alert-dismissible fade',
      `alert-${severity != 'error' ? severity : 'danger'}`,
      `${isHidden ? 'hide' : 'show'}`,
    ]"
    @mouseenter="pauseAlert"
    @mouseleave="resumeAlert"
    role="alert"
  >
    <div class="wrapper">
      <i :class="icon" v-if="icon"></i>
      <div class="main">
        <h6 v-if="summary">{{ summary }}</h6>
        <span v-html="message"></span>
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          v-if="closeAble"
          @click="destroyAlert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div
        class="progress"
        :style="{
          animationDuration: duration + 'ms',
          animationPlayState: animationState,
          backgroundColor: `var(--${severity})`
        }"
        @animationend="destroyAlert"
        @animationstart="playSound"
      ></div>
    </div>
  </div>
</template>

<script>
const success = require("@/components/common/modals/alertbox/alert.mp3");
const failed = require("@/components/common/modals/alertbox/alert-failed.mp3");
const warning = require("@/components/common/modals/alertbox/alert-warning.mp3");
const info = require("@/components/common/modals/alertbox/alert-info.mp3");
export default {
  name: "AlertComponent",
  props: {
    message: {
      type: String,
      required: true,
    },
    severity: {
      type: String,
      default: "info", // Default variant (e.g., info, success, warning, error)
    },
    duration: {
      type: Number,
      required: true,
    },
    summary: {
      type: String,
      default: null,
    },
    closeAble: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: ''
    },
    enableSound: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      isHidden: true,
      animationState: "running",
    };
  },
  mounted() {
    setTimeout(() => {
      this.isHidden = false;
    }, 1);
  },
  methods: {
    destroyAlert() {
      this.isHidden = true
      setTimeout(() => {
        this.$emit("onHide"); 
      }, 500);
    },
    pauseAlert() {
      this.animationState = "paused";
    },
    resumeAlert() {
      this.animationState = "running";
    },
    playSound() {
      if (!this.enableSound) {
        return
      }
      let sound = new Audio(success);
      if (this.severity === "error") {
        sound = new Audio(failed);
      } else if (this.severity === "warning") {
        sound = new Audio(warning);
      } else if (this.severity === "info") {
        sound = new Audio(info);
      }
      sound.play();
    },
  },
};
</script>

<style scoped>
:root{
  --error: #ff5050;
  --warning: #F2C010;
  --info: #50A3B9;
  --success: var(--theme-text)
}
.alert {
  position: relative;
  box-shadow: 0 6px 20px -5px rgba(0, 0, 0, 0.1);
  max-width: 300px;
}

.alert .wrapper {
  display: flex;
  align-items: flex-start;
  gap: .5rem;
}
.alert .progress {
  height: 2px;
  background-color: var(--success);
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  animation: progressbar linear forwards;
}

@keyframes progressbar {
  0% {
    width: 100%;
  }
  100% {
    width: 0;
  }
}
</style>

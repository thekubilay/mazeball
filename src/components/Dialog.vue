<template>
  <transition appear>
    <div v-if="modelValue" class="dialog flex align-center justify-center">
      <div ref="target" class="window relative">
        <button @click="close()" class="close"><i class="fa-sharp fa-solid fa-xmark"></i></button>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import {PropType, ref} from "vue";
import {onClickOutside} from '@vueuse/core'

interface Emit {
  (e: "update:modelValue", modelValue: boolean): void
}

const emits = defineEmits<Emit>()
const props = defineProps({
  modelValue: Boolean as PropType<boolean>,
})

const target = ref<HTMLDivElement>()
const close = () => {
  emits("update:modelValue", false)
}

onClickOutside(target, close)


</script>

<style scoped>
.dialog {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.dialog .window {
  border: 2px solid #1a1a1a;
  max-width: 90%;
  width: 100%;
  background-color: #ffffff;
  /*padding: 20px;*/
}

.dialog .window button.close {
  position: absolute;
  z-index: 2;
  width: 40px;
  height: 40px;
  right: 0;
  top: 0;
  font-size: 1.4rem;
}
</style>
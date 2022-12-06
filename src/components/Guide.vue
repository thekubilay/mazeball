<template>
  <div class="guide relative">
    <h3>ゲームの遊び方</h3>

    <div v-if="slideType===1" class="slide flex">
      <div class="left"></div>
      <div class="center">
        <p class="flex-column justify-center">
          <span class="flex justify-center">迷路の中の <span class="ball"></span><span>チェックポイントを</span></span>
          <span>全て通過しよう</span>
          <span class="flex justify-center"><span class="selected">５箇所のチェックポイント</span> <span>を</span></span>
          <span>全て通過できた方には</span>
          <span>プレゼントをご用意！</span>
        </p>
      </div>
      <div @click="slideType=2" class="right flex align-center justify-center">
        <i class="fa-sharp fa-solid fa-caret-right"></i>
      </div>
    </div>

    <div v-if="slideType===2" class="slide flex">
      <div @click="slideType=1" class="left flex align-center justify-center">
        <i class="fa-sharp fa-solid fa-caret-left"></i>
      </div>
      <div class="center">
        <p class="flex-column justify-center">
          <span>ゴール後に日時表示されます</span>
          <span>スクリーンショットで保存して</span>
          <span>ご来場時に定員にお店ください。</span>
        </p>
        <Button text="ゲームスタート" @click="setMotionDetection()"/>
      </div>
      <div class="right"></div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import {PropType, ref} from "vue";
import Button from "./Button.vue";

const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
  (e: 'update:modelValue', modelValue: boolean): void
}>()

const props = defineProps({
  modelValue: Boolean as PropType<boolean>,
})

const slideType = ref(1)

const setMotionDetection = (): void => {
  (DeviceMotionEvent as any).requestPermission().then((response: NotificationPermission) => {
    if (response == "granted") {
      emits("update:modelValue", true)
    } else {
      window.location.reload();
    }
  });

};

</script>

<style>
.guide {
  position: relative;
  z-index: 1;
  padding: 20px 0 40px 0;
}

.guide h3 {
  margin-top: 10px;
  text-align: center;
  margin-bottom: 20px;
}

.guide .slide {

}

.guide .slide .left,
.guide .slide .right {
  cursor: pointer;
  width: 40px;
  color: #f1c40f;
  font-size: 1.7rem;
}

.guide .slide .center {
  text-align: center;
  width: calc(100% - 80px);
}

.guide .slide .center p {
  line-height: 1.7;
}

.guide .slide .center p span.ball {
  display: block;
  min-width: 25px;
  height: 25px;
  background-color: #f1c40f;
  border-radius: 50%;
}

.guide .slide .center p span.selected {
  background-color: #f1c40f;
}

.guide .slide .center button.button {
  font-weight: 600;
  padding: 7px 30px;
  margin-top: 20px;
  font-size: 1rem;
}
</style>
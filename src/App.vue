<template>
  <div class="scene">
    <img class="header" src="./assets/img/header.png" alt="header.png">

    <Dialog v-model="dialog" :unclose="unclose">
      <component v-model="permission" :time="time" :is="component"/>
    </Dialog>

    <div class="bg flex justify-center">
      <canvas ref="canvas" style="width: 400px; height:450px" class="canvas"></canvas>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Dialog from "./components/Dialog.vue";

import * as THREE from "three";
import {nextTick, onMounted, ref, shallowRef, watch} from "vue";
import {
  BALL,
  BALL_BB,
  BALL_INTERSECT, GOAL, GOAL_BB,
  LIGHTS,
  MAZE,
  MAZE_WALLS, MAZE_WALLS_BB,
  POINTS, PROJECT1_BB, PROJECT2_BB, PROJECT3_BB, PROJECT4_BB, PROJECT5_BB, PROJECT6_BB,
  SQUARE,
  SQUARE_BB
} from "./utils/scene"
import {GUI} from "dat.gui";

const canvas = ref<HTMLCanvasElement>()
const dialog = ref(true)
const flag = ref(false)
const goalFlag = ref(false)
const permission = ref(false)
const posX = ref(0)
const posY = ref(0)
const component = shallowRef()

const time = ref<string>("")

const project1 = ref(false)
const project2 = ref(false)
const project3 = ref(false)
const project4 = ref(false)
const project5 = ref(false)
const unclose = ref(false)


const setDeviceOrient = (event: DeviceOrientationEvent) => {
  posX.value = event.gamma || 0;
  posY.value = event.beta || 0;
}

watch(dialog, val => {
  if (!val) {
    flag.value = false
  }
})

watch(permission, val => {
  if (val) {
    dialog.value = false
    window.addEventListener("deviceorientation", setDeviceOrient);
  }
})

setInterval(countTimer, 1000);
let totalSeconds = 0;

function countTimer() {
  ++totalSeconds;
  let hour: any = Math.floor(totalSeconds / 3600);
  let minute: any = Math.floor((totalSeconds - hour * 3600) / 60);
  let seconds: any = totalSeconds - (hour * 3600 + minute * 60);
  if (hour < 10)
    hour = "0" + hour;
  if (minute < 10)
    minute = "0" + minute;
  if (seconds < 10)
    seconds = "0" + seconds;

  if (!goalFlag.value) time.value = hour + ":" + minute + ":" + seconds;
}

onMounted(() => {
  nextTick(() => {
    import("./components/Guide.vue").then((res) => {
      unclose.value = true
      component.value = res?.default;
    })

    const ww = 400;
    const wh = 400;
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas.value,
      alpha: true,
    });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, ww / wh, 0.1, 1000);

    renderer.setSize(ww, wh);
    camera.position.z = 60;


    const square = SQUARE()

    LIGHTS(scene)
    MAZE(square, scene)
    const walls = MAZE_WALLS(scene)

    const ball = BALL(scene)
    const ballBB = BALL_BB(ball)
    const points = POINTS(scene)
    const goal = GOAL(scene)

    function animate() {
      requestAnimationFrame(animate);
      render();
    }

    function render() {
      points.project1.rotation.z += .005
      points.project1.rotation.y += .005
      points.project2.rotation.z += .005
      points.project2.rotation.y += .005
      points.project3.rotation.z += .005
      points.project3.rotation.y += .005
      points.project4.rotation.z += .005
      points.project4.rotation.y += .005
      points.project5.rotation.z += .005
      points.project5.rotation.y += .005

      if (dialog.value) return;

      unclose.value = false

      const x = posX.value / 40;
      const y = posY.value / 40;
      const ballIntersect = BALL_INTERSECT(ball, ballBB, x, y)

      if (PROJECT6_BB(points.project6, ballIntersect)) {
        import("./components/Goal.vue").then((res) => {
          component.value = res?.default;
          dialog.value = goalFlag.value = flag.value = true
          goalFlag.value = true
        })
      }

      if (PROJECT1_BB(points.project1, ballIntersect) && !project1.value) {
        import("./components/Project1.vue").then((res) => {
          component.value = res?.default;
          project1.value = flag.value = true
          dialog.value = true
          points.project1.removeFromParent()
        })
      }
      if (PROJECT2_BB(points.project2, ballIntersect) && !project2.value) {
        import("./components/Project2.vue").then((res) => {
          component.value = res?.default;
          project2.value = flag.value = true
          dialog.value = true
          points.project2.removeFromParent()
        })
      }
      if (PROJECT3_BB(points.project3, ballIntersect) && !project3.value) {
        import("./components/Project3.vue").then((res) => {
          component.value = res?.default;
          project3.value = flag.value = true
          dialog.value = true
          points.project3.removeFromParent()
        })
      }
      if (PROJECT4_BB(points.project4, ballIntersect) && !project4.value) {
        import("./components/Project4.vue").then((res) => {
          component.value = res?.default;
          project4.value = flag.value = true
          dialog.value = true
          points.project4.removeFromParent()
        })
      }
      if (PROJECT5_BB(points.project5, ballIntersect) && !project5.value) {
        import("./components/Project5.vue").then((res) => {
          component.value = res?.default;
          project5.value = flag.value = true
          dialog.value = true
          points.project5.removeFromParent()
        })
      }

      if (!SQUARE_BB(square, ballIntersect) && !MAZE_WALLS_BB(walls, ballIntersect)) {
        if (!flag.value) {
          ball.position.x += x
          ball.position.y -= y

          camera.position.x = ball.position.x
          camera.position.y = ball.position.y
        }
      }


      renderer.render(scene, camera);
    }

    animate();
  });
});

</script>
<style>
img.header {
  width: 100%;
}

.bg {
  position: relative;
  top: -5px;
  width: 100%;
  padding: 10px;
  height: 430px;
  background-size: cover;
  object-fit: cover;
  background-image: url("./assets/img/maze-bg.png");
}

.scene {
  width: 100%;
  height: 100%;
}
</style>
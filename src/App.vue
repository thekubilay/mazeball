<template>
  <div class="scene">

    <Dialog v-model="dialog">
      <component v-model="permission" :is="component"/>
    </Dialog>

    <canvas ref="canvas" class="canvas"></canvas>

  </div>
</template>

<script lang="ts" setup>

import * as THREE from "three";
import {nextTick, onMounted, ref, shallowRef, watch} from "vue";
import Dialog from "./components/Dialog.vue";
import {
  LIGHT,
  BALL,
  PROJECT1,
  PROJECT2,
  PROJECT3,
  PROJECT4,
  PROJECT5,
  BALL_BOUNDING,
  GROUND,
  PROJECT1_BB,
  PROJECT2_BB,
  PROJECT3_BB,
  PROJECT4_BB,
  PROJECT5_BB
} from "./utils/meshes";

import {
  UPPER_WALL,
  UPPER_WALL_BB,
  LEFT_WALL,
  LEFT_WALL_BB,
  RIGHT_WALL,
  RIGHT_WALL_BB,
  BOTTOM_WALL,
  BOTTOM_WALL_BB,
  WALL1,
  WALL1_BB,
  WALL2,
  WALL2_BB,
  WALL3,
  WALL3_BB,
  WALL4,
  WALL4_BB,
  WALL5,
  WALL5_BB,
  WALL6,
  WALL6_BB,
  WALL7,
  WALL7_BB,
  WALL8,
  WALL8_BB,
  WALL9,
  WALL9_BB,
  WALL10,
  WALL10_BB,
  WALL11,
  WALL11_BB,
  WALL12,
  WALL12_BB,
  WALL13,
  WALL13_BB,
  WALL14,
  WALL14_BB,
  WALL15,
  WALL15_BB,
  WALL16,
  WALL16_BB,
  WALL17,
  WALL17_BB,
  WALL18,
  WALL18_BB,
  WALL19,
  WALL19_BB,
  WALL20,
  WALL20_BB,
  WALL21,
  WALL21_BB,
  WALL22,
  WALL22_BB,
  WALL23,
  WALL23_BB,
  WALL24,
  WALL24_BB,
  WALL25,
  WALL25_BB,
  WALL26,
  WALL26_BB,
  WALL27,
  WALL27_BB,
  WALL28,
  WALL28_BB,
  WALL29,
  WALL29_BB,
  WALL30,
  WALL30_BB,
  WALL31,
  WALL31_BB,
  WALL32,
  WALL32_BB,
  WALL33,
  WALL33_BB,
  WALL34,
  WALL34_BB,
  WALL35,
  WALL35_BB,
  WALL36,
  WALL36_BB,
  WALL37,
  WALL37_BB,
  WALL38,
  WALL38_BB,
  WALL39,
  WALL39_BB,
  WALL40,
  WALL40_BB,
  WALL41,
  WALL41_BB,
  WALL42,
  WALL42_BB,
  WALL43,
  WALL43_BB,
  WALL44,
  WALL44_BB,
  WALL45,
  WALL45_BB,
  WALL46,
  WALL46_BB,
  WALL47,
  WALL47_BB,
  WALL48,
  WALL48_BB,
} from "./utils/maze";

const canvas = ref<HTMLCanvasElement>()
const dialog = ref(true)
const flag = ref(false)
const project1Flag = ref(false)
const project2Flag = ref(false)
const project3Flag = ref(false)
const project4Flag = ref(false)
const project5Flag = ref(false)
const permission = ref(false)
const posX = ref(0)
const posY = ref(0)
const component = shallowRef()

const setDeviceOrient = (event: DeviceOrientationEvent) => {
  posX.value = event.gamma || 0;
  posY.value = event.beta || 0;
}

watch(dialog, val => {
  if (!val) flag.value = false
})

watch(permission, val => {
  if (val) {
    dialog.value = false
    window.addEventListener("deviceorientation", setDeviceOrient);
  }
})

onMounted(() => {
  nextTick(() => {
    import("./components/Guide.vue").then((res) => {
      component.value = res?.default;
    })

    const ww = window.innerWidth;
    const wh = window.innerHeight;
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas.value,
      alpha: true,
    });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, ww / wh, 0.1, 1000);
    const light = LIGHT();
    const ball = BALL();
    const project1 = PROJECT1();
    const project2 = PROJECT2();
    const project3 = PROJECT3();
    const project4 = PROJECT4();
    const project5 = PROJECT5();
    const ball_bounding = BALL_BOUNDING(ball);
    const ground = GROUND(ww);

    const upper_wall = UPPER_WALL(ww * .1)
    const left_wall = LEFT_WALL(ww * .1)
    const right_wall = RIGHT_WALL(ww * .1)
    const bottom_wall = BOTTOM_WALL(ww * .1)

    // MAZE
    const wall1 = WALL1()
    const wall2 = WALL2()
    const wall3 = WALL3()
    const wall4 = WALL4()
    const wall5 = WALL5()
    const wall6 = WALL6()
    const wall7 = WALL7()
    const wall8 = WALL8()
    const wall9 = WALL9()
    const wall10 = WALL10()
    const wall11 = WALL11()
    const wall12 = WALL12()
    const wall13 = WALL13()
    const wall14 = WALL14()
    const wall15 = WALL15()
    const wall16 = WALL16()
    const wall17 = WALL17()
    const wall18 = WALL18()
    const wall19 = WALL19()
    const wall20 = WALL20()
    const wall21 = WALL21()
    const wall22 = WALL22()
    const wall23 = WALL23()
    const wall24 = WALL24()
    const wall25 = WALL25()
    const wall26 = WALL26()
    const wall27 = WALL27()
    const wall28 = WALL28()
    const wall29 = WALL29()
    const wall30 = WALL30()
    const wall31 = WALL31()
    const wall32 = WALL32()
    const wall33 = WALL33()
    const wall34 = WALL34()
    const wall35 = WALL35()
    const wall36 = WALL36()
    const wall37 = WALL37()
    const wall38 = WALL38()
    const wall39 = WALL39()
    const wall40 = WALL40()
    const wall41 = WALL41()
    const wall42 = WALL42()
    const wall43 = WALL43()
    const wall44 = WALL44()
    const wall45 = WALL45()
    const wall46 = WALL46()
    const wall47 = WALL47()
    const wall48 = WALL48()

    renderer.shadowMap.enabled = true;
    renderer.setSize(window.innerWidth, window.innerHeight);
    // camera.position.x = 15;
    // camera.position.z = 140;
    // camera.position.y = -14;

    camera.position.z = 70;
    // camera.rotation.y = 2;


    scene.add(ball);
    scene.add(project1);
    scene.add(project2);
    scene.add(project3);
    scene.add(project4);
    scene.add(project5);
    scene.add(ground);
    scene.add(light);
    scene.add(upper_wall);
    scene.add(left_wall);
    scene.add(right_wall);
    scene.add(bottom_wall);

    scene.add(wall1);
    scene.add(wall2);
    scene.add(wall3);
    scene.add(wall4);
    scene.add(wall5);
    scene.add(wall6);
    scene.add(wall7);
    scene.add(wall8);
    scene.add(wall9);
    scene.add(wall10);
    scene.add(wall11);
    scene.add(wall12);
    scene.add(wall13);
    scene.add(wall14);
    scene.add(wall15);
    scene.add(wall16);
    scene.add(wall17);
    scene.add(wall18);
    scene.add(wall19);
    scene.add(wall20);
    scene.add(wall21);
    scene.add(wall22);
    scene.add(wall23);
    scene.add(wall24);
    scene.add(wall25);
    scene.add(wall26);
    scene.add(wall27);
    scene.add(wall28);
    scene.add(wall29);
    scene.add(wall30);
    scene.add(wall31);
    scene.add(wall32);
    scene.add(wall33);
    scene.add(wall34);
    scene.add(wall35);
    scene.add(wall36);
    scene.add(wall37);
    scene.add(wall38);
    scene.add(wall39);
    scene.add(wall40);
    scene.add(wall41);
    scene.add(wall42);
    scene.add(wall43);
    scene.add(wall44);
    scene.add(wall45);
    scene.add(wall46);
    scene.add(wall47);
    scene.add(wall48);

    function animate() {
      requestAnimationFrame(animate);
      render();
    }

    function render() {

      project1.rotation.z += .005
      project1.rotation.y += .005

      project2.rotation.z += .005
      project2.rotation.y += .005

      project3.rotation.z += .005
      project3.rotation.y += .005

      project4.rotation.z += .005
      project4.rotation.y += .005

      project5.rotation.z += .005
      project5.rotation.y += .005

      const x = posX.value / 20;
      const y = posY.value / 20;

      if (ball.geometry.boundingSphere !== null) {
        ball.geometry.computeBoundingSphere();
        ball_bounding.copy(ball.geometry.boundingSphere).applyMatrix4(ball.matrixWorld);
      }

      const ballIntersect = ball_bounding.clone()

      ballIntersect.center.x += x
      ballIntersect.center.y -= y

      if (!LEFT_WALL_BB(left_wall, ballIntersect) &&
          !UPPER_WALL_BB(upper_wall, ballIntersect) &&
          !BOTTOM_WALL_BB(bottom_wall, ballIntersect) &&
          !RIGHT_WALL_BB(right_wall, ballIntersect) &&
          !WALL1_BB(wall1, ballIntersect) &&
          !WALL2_BB(wall2, ballIntersect) &&
          !WALL3_BB(wall3, ballIntersect) &&
          !WALL4_BB(wall4, ballIntersect) &&
          !WALL5_BB(wall5, ballIntersect) &&
          !WALL6_BB(wall6, ballIntersect) &&
          !WALL7_BB(wall7, ballIntersect) &&
          !WALL8_BB(wall8, ballIntersect) &&
          !WALL9_BB(wall9, ballIntersect) &&
          !WALL10_BB(wall10, ballIntersect) &&
          !WALL11_BB(wall11, ballIntersect) &&
          !WALL12_BB(wall12, ballIntersect) &&
          !WALL13_BB(wall13, ballIntersect) &&
          !WALL14_BB(wall14, ballIntersect) &&
          !WALL15_BB(wall15, ballIntersect) &&
          !WALL16_BB(wall16, ballIntersect) &&
          !WALL17_BB(wall17, ballIntersect) &&
          !WALL18_BB(wall18, ballIntersect) &&
          !WALL19_BB(wall19, ballIntersect) &&
          !WALL20_BB(wall20, ballIntersect) &&
          !WALL21_BB(wall21, ballIntersect) &&
          !WALL22_BB(wall22, ballIntersect) &&
          !WALL23_BB(wall23, ballIntersect) &&
          !WALL24_BB(wall24, ballIntersect) &&
          !WALL25_BB(wall25, ballIntersect) &&
          !WALL26_BB(wall26, ballIntersect) &&
          !WALL27_BB(wall27, ballIntersect) &&
          !WALL28_BB(wall28, ballIntersect) &&
          !WALL29_BB(wall29, ballIntersect) &&
          !WALL30_BB(wall30, ballIntersect) &&
          !WALL31_BB(wall31, ballIntersect) &&
          !WALL32_BB(wall32, ballIntersect) &&
          !WALL33_BB(wall33, ballIntersect) &&
          !WALL34_BB(wall34, ballIntersect) &&
          !WALL35_BB(wall35, ballIntersect) &&
          !WALL36_BB(wall36, ballIntersect) &&
          !WALL37_BB(wall37, ballIntersect) &&
          !WALL38_BB(wall38, ballIntersect) &&
          !WALL39_BB(wall39, ballIntersect) &&
          !WALL40_BB(wall40, ballIntersect) &&
          !WALL41_BB(wall41, ballIntersect) &&
          !WALL42_BB(wall42, ballIntersect) &&
          !WALL43_BB(wall43, ballIntersect) &&
          !WALL44_BB(wall44, ballIntersect) &&
          !WALL45_BB(wall45, ballIntersect) &&
          !WALL46_BB(wall46, ballIntersect) &&
          !WALL47_BB(wall47, ballIntersect) &&
          !WALL48_BB(wall48, ballIntersect)
      ) {

        if (PROJECT1_BB(project1, ballIntersect) && !project1Flag.value) {
          import("./components/Project1.vue").then((res) => {
            component.value = res?.default;
            project1Flag.value = flag.value = true
            dialog.value = true
            project1.removeFromParent()
          })
        }

        if (PROJECT2_BB(project2, ballIntersect)) {
          import("./components/Project1.vue").then((res) => {
            component.value = res?.default;
            project2Flag.value = flag.value = true
            dialog.value = true
            project5.removeFromParent()
          })
        }

        if (PROJECT3_BB(project3, ballIntersect)) {
          import("./components/Project1.vue").then((res) => {
            component.value = res?.default;
            project3Flag.value = flag.value = true
            dialog.value = true
            project5.removeFromParent()
          })
        }

        if (PROJECT4_BB(project4, ballIntersect)) {
          import("./components/Project1.vue").then((res) => {
            component.value = res?.default;
            project4Flag.value = flag.value = true
            dialog.value = true
            project5.removeFromParent()
          })
        }

        if (PROJECT5_BB(project5, ballIntersect)) {
          import("./components/Project1.vue").then((res) => {
            component.value = res?.default;
            project5Flag.value = flag.value = true
            dialog.value = true
            project5.removeFromParent()
          })
        }

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
import * as THREE from "three";

type Square = {
  left: THREE.Mesh,
  top: THREE.Mesh,
  bottom: THREE.Mesh,
  right: THREE.Mesh,
}

type Points = {
  project1: THREE.Mesh,
  project2: THREE.Mesh,
  project3: THREE.Mesh,
  project4: THREE.Mesh,
  project5: THREE.Mesh,
  project6: THREE.Mesh,
}

export const LIGHTS = (scene: THREE.Scene): void => {
  const light = new THREE.SpotLight(0xffffff, 1);
  light.position.set(100, 1, 0);
  light.castShadow = true;
  light.position.set(0, 0, 35);

  scene.add(light)
};

export const SQUARE = (): Square => {
  const vg = new THREE.BoxGeometry(50, .3, 5) // vertical geometry
  const hg = new THREE.BoxGeometry(60, .3, 5) // horizontal geometry

  const material = new THREE.MeshBasicMaterial({color: "#005db2"})

  const vertical = new THREE.Mesh(vg, material)
  const horizontal = new THREE.Mesh(hg, material)

  vertical.castShadow = false
  vertical.receiveShadow = false

  const left = vertical.clone()
  const top = horizontal.clone()
  const bottom = horizontal.clone()
  const right = vertical.clone()

  left.rotation.set(0, 0, -Math.PI / 2)
  left.position.set(-29.85, 0, 2.45)

  top.rotation.set(0, 0, 0)
  top.position.set(0, -24.9, 2.45)

  bottom.rotation.set(0, 0, 0)
  bottom.position.set(0, 24.9, 2.45)

  right.rotation.set(0, 0, -Math.PI / 2)
  right.position.set(29.85, 0, 2.45)

  return {
    left: left,
    top: top,
    bottom: bottom,
    right: right,
  };
}


export const SQUARE_BB = (square: Square, sphere: THREE.Sphere): boolean => {
  const left = new THREE.Box3().setFromObject(square.left).intersectsSphere(sphere);
  const top = new THREE.Box3().setFromObject(square.top).intersectsSphere(sphere);
  const bottom = new THREE.Box3().setFromObject(square.bottom).intersectsSphere(sphere);
  const right = new THREE.Box3().setFromObject(square.right).intersectsSphere(sphere);

  return left || top || bottom || right
}

export const BALL = (scene: THREE.Scene): THREE.Mesh => {
  const geometry = new THREE.SphereGeometry(1.4, 20, 20);
  const material = new THREE.MeshLambertMaterial({color: "#f1c40f"});
  const ball = new THREE.Mesh(geometry, material);

  ball.position.x = -3
  ball.position.y = 12.8

  ball.castShadow = false;
  ball.receiveShadow = false;

  scene.add(ball)
  return ball
}

export const BALL_BB = (ball: THREE.Mesh): THREE.Sphere => {
  return new THREE.Sphere(ball.position, 3);
}

export const BALL_INTERSECT = (ball: THREE.Mesh, bounding: any, x: number, y: number): THREE.Sphere => {
  if (ball.geometry.boundingSphere !== null) {
    ball.geometry.computeBoundingSphere();
    bounding.copy(ball.geometry.boundingSphere).applyMatrix4(ball.matrixWorld);
  }

  const sphereIntersect = bounding.clone()

  sphereIntersect.center.x += x
  sphereIntersect.center.y -= y

  return sphereIntersect
}

export const MAZE_WALLS = (scene: THREE.Scene): THREE.Mesh[] => {
  const walls: THREE.Mesh[] = []
  const geometry = new THREE.BoxGeometry(5.5, .3, 5)
  const material = new THREE.MeshBasicMaterial({color: "#005db2"})

  const raw = new THREE.Mesh(geometry, material)


  raw.position.z = 2.5
  raw.castShadow = false
  raw.receiveShadow = false

  const vertical = raw.clone();
  const horizontal = raw.clone();

  vertical.rotation.z = -Math.PI / 2

  /* walls */
  const wall0 = horizontal.clone()
  const wall1 = vertical.clone()
  const wall2 = horizontal.clone()
  const wall3 = horizontal.clone()
  const wall4 = vertical.clone()
  const wall5 = vertical.clone()
  const wall6 = horizontal.clone()
  const wall7 = vertical.clone()
  const wall8 = horizontal.clone()
  const wall9 = horizontal.clone()
  const wall10 = horizontal.clone()
  const wall11 = vertical.clone()
  const wall12 = horizontal.clone()
  const wall13 = vertical.clone()
  const wall14 = vertical.clone()
  const wall15 = horizontal.clone()
  const wall16 = horizontal.clone()
  const wall17 = horizontal.clone()
  const wall18 = vertical.clone()
  const wall19 = horizontal.clone()
  const wall20 = horizontal.clone()
  const wall21 = vertical.clone()
  const wall22 = horizontal.clone()
  const wall23 = horizontal.clone()
  const wall24 = horizontal.clone()
  const wall25 = vertical.clone()
  const wall26 = horizontal.clone()
  const wall27 = vertical.clone()
  const wall28 = horizontal.clone()
  const wall29 = vertical.clone()
  const wall30 = vertical.clone()
  const wall31 = horizontal.clone()
  const wall32 = horizontal.clone()
  const wall33 = horizontal.clone()
  const wall34 = horizontal.clone()
  const wall35 = vertical.clone()
  const wall36 = horizontal.clone()
  const wall37 = horizontal.clone()
  const wall38 = vertical.clone()
  const wall39 = vertical.clone()
  const wall40 = horizontal.clone()
  const wall41 = vertical.clone()
  const wall42 = vertical.clone()
  const wall43 = vertical.clone()
  const wall44 = horizontal.clone()
  const wall45 = horizontal.clone()
  const wall46 = horizontal.clone()

  wall1.position.y = 2.5
  wall1.geometry.dispose()
  wall1.geometry = new THREE.BoxGeometry(45, .3, 5) // vertical geometry
  walls.push(wall1)
  scene.add(wall1)

  wall2.position.x = -27
  wall2.position.y = 20
  walls.push(wall2)
  scene.add(wall2)

  wall3.position.x = -21.2
  wall3.position.y = 15
  walls.push(wall3)
  scene.add(wall3)

  wall4.position.x = -24
  wall4.position.y = 12.4
  walls.push(wall4)
  scene.add(wall4)

  wall5.position.x = -18.5
  wall5.position.y = 12.8
  wall5.position.y = 12.7
  wall5.geometry.dispose()
  wall5.geometry = new THREE.BoxGeometry(15, .3, 5) // vertical geometry
  walls.push(wall5)
  scene.add(wall5)

  wall6.position.x = -27
  wall6.position.y = 5.15
  walls.push(wall6)
  scene.add(wall6)

  wall7.position.x = -24
  wall7.position.y = -4.7
  wall7.geometry.dispose()
  wall7.geometry = new THREE.BoxGeometry(10, .3, 5) // vertical geometry
  walls.push(wall7)
  scene.add(wall7)

  wall8.position.x = -26.9
  wall8.position.y = -9.56
  walls.push(wall8)
  scene.add(wall8)


  wall9.position.x = -25
  wall9.position.y = -20
  wall9.geometry.dispose()
  wall9.geometry = new THREE.BoxGeometry(10, .3, 5) // vertical geometry
  walls.push(wall9)
  scene.add(wall9)


  wall10.position.x = -12.5
  wall10.position.y = -15
  wall10.geometry.dispose()
  wall10.geometry = new THREE.BoxGeometry(12.5, .3, 5) // vertical geometry
  walls.push(wall10)
  scene.add(wall10)


  wall11.position.x = -12.5
  wall11.position.y = -20
  wall11.geometry.dispose()
  wall11.geometry = new THREE.BoxGeometry(10, .3, 5) // vertical geometry
  walls.push(wall11)
  scene.add(wall11)

  wall12.position.x = -6.2
  wall12.position.y = -9.5
  wall12.geometry.dispose()
  wall12.geometry = new THREE.BoxGeometry(12.5, .3, 5) // vertical geometry
  walls.push(wall12)
  scene.add(wall12)

  wall13.position.x = -18.5
  wall13.position.y = -4.7
  wall13.geometry.dispose()
  wall13.geometry = new THREE.BoxGeometry(10, .3, 5) // vertical geometry
  walls.push(wall13)
  scene.add(wall13)

  wall14.position.x = -12.5
  wall14.position.y = -7
  wall14.geometry.dispose()
  wall14.geometry = new THREE.BoxGeometry(5, .3, 5) // vertical geometry
  walls.push(wall14)
  scene.add(wall14)

  wall15.position.x = -9.4
  wall15.position.y = -4.5
  wall15.geometry.dispose()
  wall15.geometry = new THREE.BoxGeometry(6.5, .3, 5)
  walls.push(wall15)
  scene.add(wall15)

  wall16.position.x = -17.4
  wall16.position.y = .45
  wall16.geometry.dispose()
  wall16.geometry = new THREE.BoxGeometry(13.5, .3, 5)
  walls.push(wall16)
  scene.add(wall16)

  wall17.position.x = -2.6
  wall17.position.y = .45
  wall17.geometry.dispose()
  wall17.geometry = new THREE.BoxGeometry(5, .3, 5)
  walls.push(wall17)
  scene.add(wall17)

  wall18.position.x = -10.5
  wall18.position.y = 2.8
  wall18.geometry.dispose()
  wall18.geometry = new THREE.BoxGeometry(5, .3, 5)
  walls.push(wall18)
  scene.add(wall18)

  wall19.position.x = -12.2
  wall19.position.y = 5.3
  wall19.geometry.dispose()
  wall19.geometry = new THREE.BoxGeometry(12.8, .3, 5)
  walls.push(wall19)
  scene.add(wall19)

  wall20.position.x = -6.4
  wall20.position.y = 10.3
  wall20.geometry.dispose()
  wall20.geometry = new THREE.BoxGeometry(13, .3, 5)
  walls.push(wall20)
  scene.add(wall20)

  wall21.position.x = -12.8
  wall21.position.y = 15.3
  wall21.geometry.dispose()
  wall21.geometry = new THREE.BoxGeometry(9.8, .3, 5)
  walls.push(wall21)
  scene.add(wall21)

  wall22.position.x = -8.9
  wall22.position.y = 20.1
  wall22.geometry.dispose()
  wall22.geometry = new THREE.BoxGeometry(7.5, .3, 5)
  walls.push(wall22)
  scene.add(wall22)

  wall23.position.x = -3.8
  wall23.position.y = 15.2
  wall23.geometry.dispose()
  wall23.geometry = new THREE.BoxGeometry(7.5, .3, 5)
  walls.push(wall23)
  scene.add(wall23)

  /* RIGHT SIDE START ↓　*/

  wall24.position.x = 2.5
  wall24.position.y = 15.2
  wall24.geometry.dispose()
  wall24.geometry = new THREE.BoxGeometry(5, .3, 5)
  walls.push(wall24)
  scene.add(wall24)

  wall25.position.x = 5
  wall25.position.y = 10.2
  wall25.geometry.dispose()
  wall25.geometry = new THREE.BoxGeometry(10, .3, 5)
  walls.push(wall25)
  scene.add(wall25)

  wall26.position.x = 14.6
  wall26.position.y = 20
  wall26.geometry.dispose()
  wall26.geometry = new THREE.BoxGeometry(18.6, .3, 5)
  walls.push(wall26)
  scene.add(wall26)

  wall27.position.x = 23.8
  wall27.position.y = 17.5
  wall27.geometry.dispose()
  wall27.geometry = new THREE.BoxGeometry(5, .3, 5)
  walls.push(wall27)
  scene.add(wall27)

  wall28.position.x = 20.2
  wall28.position.y = 15
  wall28.geometry.dispose()
  wall28.geometry = new THREE.BoxGeometry(7.5, .3, 5)
  walls.push(wall28)
  scene.add(wall28)

  wall29.position.x = 10.6
  wall29.position.y = 10.2
  wall29.geometry.dispose()
  wall29.geometry = new THREE.BoxGeometry(19.5, .3, 5)
  walls.push(wall29)
  scene.add(wall29)

  wall30.position.x = 16.5
  wall30.position.y = 10.2
  wall30.geometry.dispose()
  wall30.geometry = new THREE.BoxGeometry(10, .3, 5)
  walls.push(wall30)
  scene.add(wall30)

  wall31.position.x = 25.5
  wall31.position.y = 10.2
  wall31.geometry.dispose()
  wall31.geometry = new THREE.BoxGeometry(8.5, .3, 5)
  walls.push(wall31)
  scene.add(wall31)

  wall32.position.x = 20.2
  wall32.position.y = 5.2
  wall32.geometry.dispose()
  wall32.geometry = new THREE.BoxGeometry(7.5, .3, 5)
  walls.push(wall32)
  scene.add(wall32)

  wall33.position.x = 9
  wall33.position.y = .45
  wall33.geometry.dispose()
  wall33.geometry = new THREE.BoxGeometry(20, .3, 5)
  walls.push(wall33)
  scene.add(wall33)

  wall34.position.x = 27
  wall34.position.y = .5
  walls.push(wall34)
  scene.add(wall34)

  wall35.position.x = 18.9
  wall35.position.y = -2
  wall35.geometry.dispose()
  wall35.geometry = new THREE.BoxGeometry(5, .3, 5)
  walls.push(wall35)
  scene.add(wall35)

  wall36.position.x = 3
  wall36.position.y = -9.5
  wall36.geometry.dispose()
  wall36.geometry = new THREE.BoxGeometry(11.7, .3, 5)
  walls.push(wall36)
  scene.add(wall36)

  wall37.position.x = 9.5
  wall37.position.y = -4.6
  wall37.geometry.dispose()
  wall37.geometry = new THREE.BoxGeometry(8, .3, 5)
  walls.push(wall37)
  scene.add(wall37)

  wall38.position.x = 13.5
  wall38.position.y = -12
  wall38.geometry.dispose()
  wall38.geometry = new THREE.BoxGeometry(14.8, .3, 5)
  walls.push(wall38)
  scene.add(wall38)

  wall39.position.x = 4.5
  wall39.position.y = -20
  wall39.geometry.dispose()
  wall39.geometry = new THREE.BoxGeometry(10, .3, 5)
  walls.push(wall39)
  scene.add(wall39)

  wall40.position.x = 19.1
  wall40.position.y = -9.5
  wall40.geometry.dispose()
  wall40.geometry = new THREE.BoxGeometry(11, .3, 5)
  walls.push(wall40)
  scene.add(wall40)

  wall41.position.x = 24.4
  wall41.position.y = -4.5
  wall41.geometry.dispose()
  wall41.geometry = new THREE.BoxGeometry(10, .3, 5)
  walls.push(wall41)
  scene.add(wall41)

  wall42.position.x = 9
  wall42.position.y = -14.4
  wall42.geometry.dispose()
  wall42.geometry = new THREE.BoxGeometry(10, .3, 5)
  walls.push(wall42)
  scene.add(wall42)

  wall43.position.x = 24.4
  wall43.position.y = -20
  wall43.geometry.dispose()
  wall43.geometry = new THREE.BoxGeometry(10, .3, 5)
  walls.push(wall43)
  scene.add(wall43)

  wall44.position.x = 22
  wall44.position.y = -15
  wall44.geometry.dispose()
  wall44.geometry = new THREE.BoxGeometry(5, .3, 5)
  walls.push(wall44)
  scene.add(wall44)

  wall45.position.x = 16
  wall45.position.y = -19.3
  wall45.geometry.dispose()
  wall45.geometry = new THREE.BoxGeometry(5, .3, 5)
  walls.push(wall45)
  scene.add(wall45)

  wall46.position.x = -3.8
  wall46.position.y = -20
  wall46.geometry.dispose()
  wall46.geometry = new THREE.BoxGeometry(7.5, .3, 5)
  walls.push(wall46)
  scene.add(wall46)


  return walls
}

export const MAZE_WALLS_BB = (walls: THREE.Mesh[], sphere: THREE.Sphere): boolean => {
  let intersect = false
  for (const key in walls) {
    if (new THREE.Box3().setFromObject(walls[key]).intersectsSphere(sphere)) {
      intersect = true
      break;
    }
  }

  return intersect
}


export const POINTS = (scene: THREE.Scene): Points => {
  const geometry = new THREE.BoxGeometry(2.6, 2.6, 2.6);
  const material = new THREE.MeshBasicMaterial({
    color: "#f1c40f",
    map: new THREE.TextureLoader().load("/smile.jpg")
  });

  const mesh = new THREE.Mesh(geometry, material);

  mesh.position.z = 1

  const project1 = mesh.clone()
  const project2 = mesh.clone()
  const project3 = mesh.clone()
  const project4 = mesh.clone()
  const project5 = mesh.clone()

  project1.position.x = -9
  project1.position.y = 12.8

  project1.rotation.z = -6
  project1.rotation.x = -4
  project1.rotation.y = 2.3

  scene.add(project1)

  project2.position.x = -9
  project2.position.y = 22.8

  project2.rotation.z = -6
  project2.rotation.x = -4
  project2.rotation.y = 2.3

  scene.add(project2)

  project3.position.x = -9
  project3.position.y = -18

  project3.rotation.z = -6
  project3.rotation.x = -4
  project3.rotation.y = 2.3

  scene.add(project3)

  project4.position.x = 11
  project4.position.y = -22

  project4.rotation.z = -6
  project4.rotation.x = -4
  project4.rotation.y = 2.3

  scene.add(project4)

  project5.position.x = 8
  project5.position.y = 8

  project5.rotation.z = -6
  project5.rotation.x = -4
  project5.rotation.y = 2.3

  scene.add(project5)

  const gm = new THREE.BoxGeometry(2.6, 2.6, 2.6);
  const mt = new THREE.MeshBasicMaterial({
    color: "#f1c40f",
    opacity: 0,
    transparent: true
  });

  const project6 = new THREE.Mesh(gm, mt);

  project6.position.x = 2.5
  project6.position.y = 11

  scene.add(project6)

  return {
    project1: project1,
    project2: project2,
    project3: project3,
    project4: project4,
    project5: project5,
    project6: project6,
  }
}

export const PROJECT1_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}
export const PROJECT2_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}
export const PROJECT3_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}
export const PROJECT4_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}
export const PROJECT5_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const PROJECT6_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const GOAL = (scene: THREE.Scene): THREE.Mesh => {
  const geometry = new THREE.PlaneGeometry(3.5, 1.3);
  const material = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("/goal.png")
  });

  const mesh = new THREE.Mesh(geometry, material);

  mesh.position.y = 13.5
  mesh.position.z = .1
  mesh.position.x = 2.5

  scene.add(mesh)
  return mesh;
}

export const GOAL_BB = (goal: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(goal).intersectsSphere(sphere)
}


export const MAZE = (square: Square, scene: THREE.Scene): void => {
  const gg = new THREE.PlaneGeometry(60, 50) // ground geometry;
  const gm = new THREE.MeshBasicMaterial({color: "#f7f1e3", opacity: .7, transparent: true}) // ground material;
  const ground = new THREE.Mesh(gg, gm)

  ground.add(square.left)
  ground.add(square.top)
  ground.add(square.bottom)
  ground.add(square.right)

  scene.add(ground)
}



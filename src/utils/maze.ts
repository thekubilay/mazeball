import * as THREE from "three";

export const UPPER_WALL = (ww: number) => {
  const geometry = new THREE.BoxGeometry(50, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.position.z = 2.5
  mesh.position.y = 30
  mesh.receiveShadow = true

  return mesh;
}

export const UPPER_WALL_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const LEFT_WALL = (ww: number) => {
  const geometry = new THREE.BoxGeometry(60, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 2.5
  mesh.position.y = 0
  mesh.position.x = -25

  mesh.receiveShadow = true


  return mesh;
}

export const LEFT_WALL_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}


export const RIGHT_WALL = (ww: number) => {
  const geometry = new THREE.BoxGeometry(60, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 2.5
  mesh.position.y = 0
  mesh.position.x = 25
  mesh.receiveShadow = true

  return mesh;
}

export const RIGHT_WALL_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}


export const BOTTOM_WALL = (ww: number) => {
  const geometry = new THREE.BoxGeometry(50, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.position.z = 2.5
  mesh.position.y = -30
  mesh.receiveShadow = true

  return mesh;
}

export const BOTTOM_WALL_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}


// MAZE
// MAZE
// MAZE

export const WALL1 = () => {
  const geometry = new THREE.BoxGeometry(10, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 2.5
  mesh.position.x = -19.8
  mesh.position.y = 25

  return mesh;
}

export const WALL1_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}


export const WALL2 = () => {
  const geometry = new THREE.BoxGeometry(5, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 2.5
  mesh.position.x = -10
  mesh.position.y = 27.5

  return mesh;
}

export const WALL2_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}


export const WALL3 = () => {
  const geometry = new THREE.BoxGeometry(10, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.position.z = 2.5
  mesh.position.x = -5.15
  mesh.position.y = 25

  return mesh;
}

export const WALL3_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL4 = () => {
  const geometry = new THREE.BoxGeometry(5, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 2.5
  mesh.position.x = -.3
  mesh.position.y = 22.65

  return mesh;
}

export const WALL4_BB =(wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL5 = () => {
  const geometry = new THREE.BoxGeometry(10, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.position.z = 2.5
  mesh.position.x = -5.3
  mesh.position.y = 20.3

  return mesh;
}

export const WALL5_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL6 = () => {
  const geometry = new THREE.BoxGeometry(5, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 2.5
  mesh.position.x = 5.5
  mesh.position.y = 27.5

  return mesh;
}

export const WALL6_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL7 = () => {
  const geometry = new THREE.BoxGeometry(5, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 2.5
  mesh.position.x = 20
  mesh.position.y = 27.5

  return mesh;
}

export const WALL7_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}


export const WALL8 = () => {
  const geometry = new THREE.BoxGeometry(5, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.position.z = 2.5
  mesh.position.x = 13
  mesh.position.y = 25

  return mesh;
}

export const WALL8_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL9 = () => {
  const geometry = new THREE.BoxGeometry(5, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 2.5
  mesh.position.x = 15.35
  mesh.position.y = 22.55

  return mesh;
}

export const WALL9_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL10 = () => {
  const geometry = new THREE.BoxGeometry(14.5, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.position.z = 2.5
  mesh.position.x = 13
  mesh.position.y = 20.22

  return mesh;
}

export const WALL10_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL11 = () => {
  const geometry = new THREE.BoxGeometry(19, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 2.5
  mesh.position.x = -14.8
  mesh.position.y = 15.5

  return mesh;
}

export const WALL11_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL12 = () => {
  const geometry = new THREE.BoxGeometry(10.1, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.position.z = 2.5
  mesh.position.x = -20
  mesh.position.y = 15.5

  return mesh;
}

export const WALL12_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL13 = () => {
  const geometry = new THREE.BoxGeometry(10, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 2.5
  mesh.position.x = -19.8
  mesh.position.y = 5

  return mesh;
}

export const WALL13_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL14 = () => {
  const geometry = new THREE.BoxGeometry(44.5, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.position.z = 3.5
  mesh.position.x = 2.6
  mesh.position.y = 0

  return mesh;
}

export const WALL14_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL15 = () => {
  const geometry = new THREE.BoxGeometry(15.5, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 3.5
  mesh.position.x = -10
  mesh.position.y = 7.8

  return mesh;
}

export const WALL15_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL16 = () => {
  const geometry = new THREE.BoxGeometry(5, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.position.z = 3.5
  mesh.position.x = -7.6
  mesh.position.y = 15.5

  return mesh;
}

export const WALL16_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL17 = () => {
  const geometry = new THREE.BoxGeometry(10.5, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 3.5
  mesh.position.x = -5.2
  mesh.position.y = 10.4

  return mesh;
}

export const WALL17_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL18 = () => {
  const geometry = new THREE.BoxGeometry(9.8, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 3.5
  mesh.position.x = -.3
  mesh.position.y = 15.6

  return mesh;
}

export const WALL18_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL19 = () => {
  const geometry = new THREE.BoxGeometry(6, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.position.z = 3.5
  mesh.position.x = 2.7
  mesh.position.y = 10.9

  return mesh;
}

export const WALL19_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL20 = () => {
  const geometry = new THREE.BoxGeometry(9.4, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 3.5
  mesh.position.x = 5.8
  mesh.position.y = 15.4


  return mesh;
}

export const WALL20_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL21 = () => {
  const geometry = new THREE.BoxGeometry(5.5, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 3.5
  mesh.position.x = 5.8
  mesh.position.y = 8

  return mesh;
}

export const WALL21_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL22 = () => {
  const geometry = new THREE.BoxGeometry(5, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 3.5
  mesh.position.x = 0
  mesh.position.y = 2.5

  return mesh;
}

export const WALL22_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL23 = () => {
  const geometry = new THREE.BoxGeometry(15, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 3.5
  mesh.position.x = 10.8
  mesh.position.y = 7.5

  return mesh;
}

export const WALL23_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL24 = () => {
  const geometry = new THREE.BoxGeometry(9.5, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.position.z = 3.5
  mesh.position.x = 15.4
  mesh.position.y = 15

  return mesh;
}

export const WALL24_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}


export const WALL25 = () => {
  const geometry = new THREE.BoxGeometry(10, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 3.5
  mesh.position.x = 20
  mesh.position.y = 10

  return mesh;
}

export const WALL25_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL26 = () => {
  const geometry = new THREE.BoxGeometry(10, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 3.5
  mesh.position.x = 15.5
  mesh.position.y = 5

  return mesh;
}

export const WALL26_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL27 = () => {
  const geometry = new THREE.BoxGeometry(10, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.position.z = 3.5
  mesh.position.x = -19.8
  mesh.position.y = -5

  return mesh;
}

export const WALL27_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL28 = () => {
  const geometry = new THREE.BoxGeometry(10, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 3.5
  mesh.position.x = -10
  mesh.position.y = -5

  return mesh;
}

export const WALL28_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL29 = () => {
  const geometry = new THREE.BoxGeometry(10, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.position.z = 3.5
  mesh.position.x = -15
  mesh.position.y = -10

  return mesh;
}

export const WALL29_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL30 = () => {
  const geometry = new THREE.BoxGeometry(20, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 3.5
  mesh.position.x = 0
  mesh.position.y = -10

  return mesh;
}

export const WALL30_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL31 = () => {
  const geometry = new THREE.BoxGeometry(10, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 3.5
  mesh.position.x = -5
  mesh.position.y = -10

  return mesh;
}

export const WALL31_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL32 = () => {
  const geometry = new THREE.BoxGeometry(15, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.position.z = 3.5
  mesh.position.x = -12.3
  mesh.position.y = -15

  return mesh;
}

export const WALL32_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}


export const WALL33 = () => {
  const geometry = new THREE.BoxGeometry(5, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 3.5
  mesh.position.x = -19.8
  mesh.position.y = -17.3

  return mesh;
}

export const WALL33_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL34 = () => {
  const geometry = new THREE.BoxGeometry(10, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 3.5
  mesh.position.x = -10
  mesh.position.y = -20

  return mesh;
}

export const WALL34_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL35 = () => {
  const geometry = new THREE.BoxGeometry(10, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.position.z = 3.5
  mesh.position.x = -5.2
  mesh.position.y = -25

  return mesh;
}

export const WALL35_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL36 = () => {
  const geometry = new THREE.BoxGeometry(5, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.position.z = 3.5
  mesh.position.x = -2.4
  mesh.position.y = -20

  return mesh;
}

export const WALL36_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}


export const WALL37 = () => {
  const geometry = new THREE.BoxGeometry(10, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.position.z = 3.5
  mesh.position.x = -20
  mesh.position.y = -25

  return mesh;
}

export const WALL37_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL38 = () => {
  const geometry = new THREE.BoxGeometry(5, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 3.5
  mesh.position.x = -15
  mesh.position.y = -22.7

  return mesh;
}

export const WALL38_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL39 = () => {
  const geometry = new THREE.BoxGeometry(5, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 3.5
  mesh.position.x = 0
  mesh.position.y = -27.3

  return mesh;
}

export const WALL39_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL40 = () => {
  const geometry = new THREE.BoxGeometry(5, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 3.5
  mesh.position.x = 15.5
  mesh.position.y = -2.5

  return mesh;
}

export const WALL40_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}


export const WALL41 = () => {
  const geometry = new THREE.BoxGeometry(10, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.position.z = 3.5
  mesh.position.x = 10.6
  mesh.position.y = -5

  return mesh;
}

export const WALL41_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL42 = () => {
  const geometry = new THREE.BoxGeometry(20, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.position.z = 3.5
  mesh.position.x = 10
  mesh.position.y = -10

  return mesh;
}

export const WALL42_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL43 = () => {
  const geometry = new THREE.BoxGeometry(20, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 3.5
  mesh.position.x = 20
  mesh.position.y = -15

  return mesh;
}

export const WALL43_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL44 = () => {
  const geometry = new THREE.BoxGeometry(5, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.position.z = 3.5
  mesh.position.x = 17.6
  mesh.position.y = -25

  return mesh;
}

export const WALL44_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL45 = () => {
  const geometry = new THREE.BoxGeometry(10, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 3.5
  mesh.position.x = 15.2
  mesh.position.y = -20.2

  return mesh;
}

export const WALL45_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL46 = () => {
  const geometry = new THREE.BoxGeometry(10, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.position.z = 3.5
  mesh.position.x = 10.2
  mesh.position.y = -15.3

  return mesh;
}

export const WALL46_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL47 = () => {
  const geometry = new THREE.BoxGeometry(10, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 3.5
  mesh.position.x = 5.2
  mesh.position.y = -20.3

  return mesh;
}

export const WALL47_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const WALL48 = () => {
  const geometry = new THREE.BoxGeometry(10, .3, 5)
  const material = new THREE.MeshPhongMaterial({color: "#2f3542"})
  const mesh = new THREE.Mesh(geometry, material)

  mesh.rotation.z = -Math.PI / 2

  mesh.position.z = 3.5
  mesh.position.x = 10
  mesh.position.y = -25

  return mesh;
}

export const WALL48_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}
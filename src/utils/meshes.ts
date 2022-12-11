import * as THREE from "three";

export const LIGHT = () => {
  const light = new THREE.SpotLight(0xffffff, 1);
  light.position.set(100, 1, 0);
  light.castShadow = true;
  light.position.set(0, 0, 35);

  return light;
};

export const BALL = () => {
  const geometry = new THREE.SphereGeometry(1.4, 10, 10);
  const material = new THREE.MeshLambertMaterial({color: "#f1c40f"});
  const mesh = new THREE.Mesh(geometry, material);

  mesh.position.x = 13
  mesh.position.y = 3

  mesh.castShadow = true;
  mesh.receiveShadow = false;
  return mesh;
};

export const PROJECT1 = () => {
  const geometry = new THREE.BoxGeometry(2.5, 2.5, 2.5);
  const material = new THREE.MeshLambertMaterial({
    color: "#f1c40f",
    map: new THREE.TextureLoader().load("/smile.png")
  });
  const mesh = new THREE.Mesh(geometry, material);

  mesh.rotation.z = 0
  mesh.rotation.x = -3
  mesh.rotation.y = 2.3

  mesh.position.x = 13
  mesh.position.z = 2.5
  mesh.position.y = 8

  mesh.castShadow = true;
  mesh.receiveShadow = false;
  return mesh;
};

export const PROJECT1_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const PROJECT2 = () => {
  const geometry = new THREE.BoxGeometry(2.5, 2.5, 2.5);
  const material = new THREE.MeshLambertMaterial({
    color: "#f1c40f",
    map: new THREE.TextureLoader().load("/smile.png")
  });
  const mesh = new THREE.Mesh(geometry, material);

  mesh.rotation.z = -6
  mesh.rotation.x = -4
  mesh.rotation.y = 2.3

  mesh.position.x = 22.5
  mesh.position.z = 2.5
  mesh.position.y = 3

  mesh.castShadow = true;
  mesh.receiveShadow = false;
  return mesh;
};

export const PROJECT2_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const PROJECT3 = () => {
  const geometry = new THREE.BoxGeometry(2.5, 2.5, 2.5);
  const material = new THREE.MeshLambertMaterial({
    color: "#f1c40f",
    map: new THREE.TextureLoader().load("/smile.png")
  });
  const mesh = new THREE.Mesh(geometry, material);

  mesh.rotation.z = -6
  mesh.rotation.x = -3
  mesh.rotation.y = 2.3

  mesh.position.x = -16.5
  mesh.position.z = 2.5
  mesh.position.y = 4

  mesh.castShadow = true;
  mesh.receiveShadow = false;
  return mesh;
};

export const PROJECT3_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}


export const PROJECT4 = () => {
  const geometry = new THREE.BoxGeometry(2.5, 2.5, 2.5);
  const material = new THREE.MeshLambertMaterial({
    color: "#f1c40f",
    map: new THREE.TextureLoader().load("/smile.png")
  });
  const mesh = new THREE.Mesh(geometry, material);

  mesh.rotation.z = -2
  mesh.rotation.x = -3
  mesh.rotation.y = 2.3

  mesh.position.x = -22
  mesh.position.z = 2.5
  mesh.position.y = -12.5

  mesh.castShadow = true;
  mesh.receiveShadow = false;
  return mesh;
};

export const PROJECT4_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}


export const PROJECT5 = () => {
  const geometry = new THREE.BoxGeometry(2.5, 2.5, 2.5);
  const material = new THREE.MeshLambertMaterial({
    color: "#f1c40f",
    map: new THREE.TextureLoader().load("/smile.png")
  });
  const mesh = new THREE.Mesh(geometry, material);

  mesh.rotation.z = -6
  mesh.rotation.x = -3
  mesh.rotation.y = 1.3

  mesh.position.x = 10
  mesh.position.z = 2.5
  mesh.position.y = -8

  mesh.castShadow = true;
  mesh.receiveShadow = false;
  return mesh;
};

export const PROJECT5_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}

export const GOAL = () => {
  const geometry = new THREE.BoxGeometry(5.5, 3.5, 2.5);
  const material = new THREE.MeshBasicMaterial({
    color: "#FFFFFF",
    map: new THREE.TextureLoader().load("/goal.png")
  });

  const mesh = new THREE.Mesh(geometry, material);

  mesh.position.x = 12
  mesh.position.z = 2.5
  mesh.position.y = -2.5

  mesh.castShadow = true;
  mesh.receiveShadow = false;
  return mesh;
};

export const GOAL_BB = (wall: THREE.Mesh, sphere: any) => {
  return new THREE.Box3().setFromObject(wall).intersectsSphere(sphere)
}


export const BALL_BOUNDING = (sphere: THREE.Mesh) => {
  return new THREE.Sphere(sphere.position, 3);
};

export const GROUND = (ww: number) => {
  const geometry = new THREE.PlaneGeometry(50, 60)
  const material = new THREE.MeshBasicMaterial({color: "#2ecc71", opacity: 0, transparent: true})
  const mesh = new THREE.Mesh(geometry, material)
  return mesh;
}

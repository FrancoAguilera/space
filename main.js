const W_I_H = window.innerHeight;
const W_I_W = window.innerWidth;

let camera;
let scene;
let renderer;
let material;
let mouseX = 0;
let mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

function init() {
  camera = new THREE.PerspectiveCamera(50, W_I_W / W_I_H, 5, 2000);
  camera.position.z = 500;

  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0xb026ff, 0.001);

  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  const size = 20000;

  for (let i = 0; i < 800000; i++) {
    const x = (Math.random() * size + Math.random() * size) / 2 - size / 2;
    const y = Math.random() * 25;
    const z = (Math.random() * size + Math.random() * size) / 2 - size / 2;

    vertices.push(x, y, z);
  }

  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

  material = new THREE.PointsMaterial({
    size: 0.5,
    color: 0x00ff00,
  });

  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  document.body.style.touchAction = "none";
  document.body.addEventListener("pointermove", onPointerMove);
  window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onPointerMove(event) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

init();
animate();

function render() {
  camera.position.x += (mouseX - camera.position.x) * 0.002;
  camera.position.y += (-mouseY - camera.position.y) * 0.002;

  camera.lookAt(scene.position);
  renderer.render(scene, camera);

  scene.rotation.x += 0.0001;
  scene.rotation.y += 0.0001;
  scene.rotation.y += 0.0001;
}

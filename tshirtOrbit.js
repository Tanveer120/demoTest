import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.rotation.y = 45 / 180 * Math.PI;
camera.position.x = 800;
camera.position.y = 300;
camera.position.z = 2000;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Adjust camera position
// camera.position.set(1, 1, 1); // Adjust as needed

// camera.lookAt(1, 1, 1);
// Add a basic light
const ambientLight = new THREE.AmbientLight(0xffffff, 100);
scene.add(ambientLight);

// Optional: Add a directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 100);
directionalLight.position.set(0, 1, 0).normalize();
scene.add(directionalLight);

const controls = new OrbitControls(camera, renderer.domElement);

//controls.update() must be called after any manual changes to the camera's transform
// camera.position.set(3, 1, 1);
camera.position.set(0, 1.3, 0.8);
// controls.update();



const loader = new GLTFLoader();

loader.load('highNeck.gltf', function (gltf) {
	gltf.scene.scale.set(1.5, 1.5, 1.5); // Example scale adjustment

	scene.add(gltf.scene);

	console.log("loaded");

}, undefined, function (error) {

	console.error(error);

});


function animate() {

	requestAnimationFrame(animate);

	// required if controls.enableDamping or controls.autoRotate are set to true

	// camera.lookAt(scene);
	// controls.update();
	// controls.autoRotate = true;

	renderer.render(scene, camera);

}
animate()

// function animate() {
//     renderer.render(scene, camera);
// }
// renderer.setAnimationLoop(animate);
// // animate()
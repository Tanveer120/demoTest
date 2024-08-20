import * as THREE from 'three';

// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Adjust camera position
camera.position.set(0, 1.3, 0.8); // Adjust as needed

// Add a basic light
const ambientLight = new THREE.AmbientLight(0xffffff, 100);
scene.add(ambientLight);

// Optional: Add a directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

const loader = new GLTFLoader();

loader.load('highNeck.gltf', function (gltf) {
    scene.add(gltf.scene);
    console.log("loaded");

}, undefined, function (error) {

    console.error(error);

});

function animate() {
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
// animate()
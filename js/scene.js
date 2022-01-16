const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.PlaneGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const floor = new THREE.Mesh( geometry, material );
scene.add( floor );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
    floor.rotation.x += 0.01;
    floor.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();

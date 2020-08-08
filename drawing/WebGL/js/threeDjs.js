let camera, scene, renderer, controls;
let geometry, material, mesh, sphere;

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

let width;
let height;


function setup(){

	width = window.innerWidth;
	height = window.innerHeight;


	// set the css display size
	canvas.style.width = width + 'px';
	canvas.style.height = height + 'px';


    // set actual, device pixel size (scaled for extra pixel density)
    let scale = window.devicePixelRatio;
    canvas.width = width * scale;
    canvas.height = height * scale;


    // normalize coordinate system to use CSS pixels
    context.scale(scale, scale);
     
    init();
	animate();
	// backdrop();
     
};

// function backdrop(){
// 	let pixels = context.getImageData(0, 0, canvas.width, canvas.height);
//     let pixelData = pixels.data;
    
//     // pixels by x, y coordinate
//     for (let y = 0; y < canvas.height; y++) { // for every row
//       for (let x = 0; x < canvas.width; x++) { // visit every column (pixel)
//         let index = (x + y * canvas.width) * 4 // index position of every pixel!

//         pixelData[index + 0] = 255; // red
//         pixelData[index + 1] = (x / canvas.width) * 255; // green
//         pixelData[index + 2] = (y / canvas.height) * 255; // blue
//         pixelData[index + 3] = 255; // alpha
//       }
//     }

//     context.putImageData(pixels, 0, 0);

// }

function init(){
	scene = new THREE.Scene();
	let width = window.innerWidth;
	let height = window.innerHeight;



	camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 25000);
	camera.position.set(0,200,700);
	// x,y,z
	scene.add(camera);

	let light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(1,1,1);
	scene.add(light);

	// let pointLight = new THREE.PointLight(0xff00ff, 1, 1000);
	// pointLight.position.set(-400, 400, 400);
	// scene.add(pointLight);

	let spotlight = new THREE.SpotLight(0xffffff, 0.8, 2000);
	spotlight.position.set(500, 500, 500);
 	spotlight.castShadow = true;

 	// shadow map texture width in pixels; resolution of shadow; has to be a multiple of 12
  	spotlight.shadow.mapSize.width = 4096;
  	spotlight.shadow.mapSize.height = 4096;


  	// perspective shadow camera frustum near parameter
  	spotlight.shadow.camera.near = 500;
  	// perspective shadow camera frustum far parameter
  	spotlight.shadow.camera.far = 1500;
  	// perspective shadow camera frustum field of view
  	spotlight.shadow.camera.fov = 45;


  	scene.add(spotlight);

  	// let helper = new THREE.CameraHelper(spotlight.shadow.camera);
  	// scene.add(helper);

	

	let textureLoader = new THREE.TextureLoader();

	textureLoader.load('media/colorful.jpg', function(texture){
		let material = new THREE.MeshStandardMaterial({map:texture});

		let sphereGeometry = new THREE.SphereGeometry(100,50,50);
		sphere = new THREE.Mesh(sphereGeometry, material);
		// basic material is the flat general material
		// phong is 3d effect
		sphere.position.y = 100;
		sphere.castShadow = true;
		scene.add(sphere);

		let octahedronGeometry = new THREE.OctahedronGeometry(100,0);
		let octahedron = new THREE.Mesh(octahedronGeometry, material);
		octahedron.position.y = 100;
		octahedron.position.x = 250;
		octahedron.castShadow = true;
		scene.add(octahedron);

	});



		textureLoader.load('media/sand.jpg', function(texture){

			let planeGeometry = new THREE.PlaneGeometry(1000,1000,10,10);
			let planeMaterial = new THREE.MeshPhongMaterial({map:texture, side: THREE.DoubleSide});
			let plane = new THREE.Mesh(planeGeometry, planeMaterial);
			plane.rotation.x = Math.PI / 2;
			plane.receiveShadow = true;
			scene.add(plane);
		});



	renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
	// alpha = transparency
	// antialias smooths out any rough edges
	renderer.setSize(width, height);
	renderer.shadowMap.enabled = true;

	controls = new THREE.OrbitControls(camera, renderer.domElement);

	// canvas.appendChild(renderer.domElement);
	document.body.appendChild(renderer.domElement);
}



function animate(){
	renderer.render(scene, camera);
	controls.update();

	requestAnimationFrame(animate);
}



window.addEventListener('load', setup);
// resize canvas when window is resized (for full browser canvas only)
window.addEventListener('resize', setup);






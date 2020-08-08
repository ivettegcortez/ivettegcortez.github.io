let camera, scene, renderer, controls;
let geometry, material, material2, mesh, sphere, octahedron, cylinder;
let model;
let loaded = false;
let loaded2 = false;

const canvas = document.getElementById('c1');
const context = canvas.getContext('2d');
const image = document.getElementById('trees');

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
	
     
};



function init(){
	scene = new THREE.Scene();
	let width = window.innerWidth;
	let height = window.innerHeight;

	let loader = new THREE.GLTFLoader();
	loader.load(
		'scene.gltf',

		function (gltf){
			model = gltf.scene
			scene.add(model);
			model.scale.set(100,100,100)
			model.position.x = -100;
			// model.rotation.x += 0.02;


			gltf.animations; // Array<THREE.AnimationClip>
			gltf.scene; // THREE.Group
			gltf.scenes; // Array<THREE.Group>
			gltf.cameras; // Array<THREE.Camera>
			gltf.asset; // Object
			loaded2 = true;

		}


		);
	
	

	camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 25000);
	camera.position.set(0,200,700);
	// x,y,z
	scene.add(camera);

	let light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(500,500,500);
	scene.add(light);

	// let pointLight = new THREE.PointLight(0xff00ff, 1, 1000);
	// pointLight.position.set(-400, 400, 400);
	// scene.add(pointLight);

	let spotlight = new THREE.SpotLight(0xffffff, 0.3, 2000);
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

	textureLoader.load('media/bark.jpg', function(texture){
		let material = new THREE.MeshStandardMaterial({map:texture});

		let sphereGeometry = new THREE.SphereGeometry(100,50,50);
		sphere = new THREE.Mesh(sphereGeometry, material);
		// basic material is the flat general material
		// phong is 3d effect
		sphere.position.y = 100;
		sphere.position.z = 250;
		sphere.position.x = -400;
		sphere.castShadow = true;
		scene.add(sphere);

		let octahedronGeometry = new THREE.OctahedronGeometry(100,0);
		octahedron = new THREE.Mesh(octahedronGeometry, material);
		octahedron.position.y = 100;
		octahedron.position.x = 250;

		octahedron.castShadow = true;
		scene.add(octahedron);

		let cylinderGeometry = new THREE.CylinderGeometry(200,100,90);
		let material2 = new THREE.MeshStandardMaterial({map:texture});
		cylinder = new THREE.Mesh(cylinderGeometry, material);
		cylinder.position.y = -25;
		cylinder.position.x = -100;
		cylinder.castShadow = true;
		scene.add(cylinder);

		

		loaded = true;



	});

		

		




		// textureLoader.load('media/sand.jpg', function(texture){

		// 	let planeGeometry = new THREE.PlaneGeometry(1000,1000,10,10);
		// 	let planeMaterial = new THREE.MeshPhongMaterial({map:texture, side: THREE.DoubleSide});
		// 	let plane = new THREE.Mesh(planeGeometry, planeMaterial);
		// 	plane.rotation.x = Math.PI / 2;
		// 	plane.receiveShadow = true;
		// 	scene.add(plane);
		// });



	renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
	// alpha = transparency
	// antialias smooths out any rough edges
	renderer.setSize(width, height);
	renderer.shadowMap.enabled = true;

	controls = new THREE.OrbitControls(camera, renderer.domElement);

	// canvas.appendChild(renderer.domElement);
	document.body.appendChild(renderer.domElement);

	animate();
	draw();
}




function animate(){
	requestAnimationFrame(animate);

	if (loaded){
		sphere.rotation.x += 0.1;
		sphere.rotation.y += 0.01;

		octahedron.rotation.y += 0.05;
		octahedron.rotation.x += 0.03;

		cylinder.rotation.y += 0.02;


	}

	if(loaded2){
		model.rotation.y += 0.02;
	}

	


	renderer.render(scene, camera);
	controls.update();

	
}

function draw(){

    context.drawImage(image, 0, 0, width, height);


     let spacing = 80;
      let radius = 10;
      let x = 15;
      let y = 20;
      let count = 0;

      for (let row = 0; row < height; row += spacing) {
        for (let col = 0; col < width; col += spacing) {

	      // body of panda
	     context.beginPath();
		  context.ellipse(x, y, radius, radius, 0, 0, 2 * Math.PI);
		  context.fillStyle = "white";
		  context.fill();
		  context.closePath();


		  // eyes
		  context.beginPath();
		  context.ellipse(x-3,y, 2, 2, 0, 0, 2*Math.PI)
		  context.fillStyle = "black";
		  context.fill();
		  context.closePath();

		  context.beginPath();
		  context.ellipse(x+3,y, 2, 2, 0, 0, 2*Math.PI)
		  context.fill();
		  context.closePath();

		  // nose
			context.beginPath();
		  context.ellipse(x,y+5, 2, 2, 0, 0, Math.PI)
		  context.fill();
		  context.closePath();

		  // ears

		  context.beginPath();
		  context.ellipse(x-8,y-8, 4, 4, 0, 0, 2*Math.PI)
		  context.fill();
		  context.closePath();

		  context.beginPath();
		  context.ellipse(x+8,y-8, 4, 4, 0, 0, 2*Math.PI)
		  context.fill();
		  context.closePath();

		  x += spacing;


		}
		x = 15;
		y+= spacing;
	}

	
}



window.addEventListener('load', setup);

// resize canvas when window is resized (for full browser canvas only)
window.addEventListener('resize', setup);




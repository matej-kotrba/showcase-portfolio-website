<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import * as THREE from "three";
  import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

  const backgroundEffectText = "EFFIO";

  // Three animation data
  // const sizes = [500, 800];

  let mobileCanvas: HTMLCanvasElement;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set("#effio1", {
      translateX: "-100%",
    });

    gsap.set("#effio2", {
      translateX: "-100%",
    });

    gsap.set("#effio3", {
      translateX: "100%",
    });

    gsap.set("#effio4", {
      translateX: "100%",
    });

    const tl = gsap.timeline();

    tl.to("#effio1", {
      scrollTrigger: {
        trigger: "#effio1",
        start: "center center",
        end: "end top",
        scrub: 1,
      },
      translateX: 40,
    })
      .to("#effio2", {
        scrollTrigger: {
          trigger: "#effio2",
          start: "center center",
          end: "end top",
          scrub: 1,
        },
        translateX: 0,
      })
      .to("#effio3", {
        scrollTrigger: {
          trigger: "#effio3",
          start: "top bottom",
          end: "top bottom-=200px",
          scrub: 1,
        },
        translateX: 0,
      })
      .to("#effio4", {
        scrollTrigger: {
          trigger: "#effio4",
          start: "top bottom",
          end: "top bottom-=200px",
          scrub: 1,
        },
        translateX: -40,
      });
  });

  onMount(() => {
    const sizes = [window.innerWidth, window.innerHeight];

    const loader = new GLTFLoader();
    let mobileModel: THREE.Object3D<THREE.Object3DEventMap>;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);

    const camera = new THREE.PerspectiveCamera(
      75,
      sizes[0] / sizes[1],
      0.1,
      1000
    );

    let hlight = new THREE.AmbientLight(0x404040, 100);
    scene.add(hlight);

    const renderer = new THREE.WebGLRenderer({ canvas: mobileCanvas });
    renderer.setSize(sizes[0], sizes[1]);

    camera.position.z = 10;

    function animate() {
      if (mobileModel) {
        mobileModel.rotation.y += 0.005;
      }

      renderer.render(scene, camera);
    }
    renderer.setAnimationLoop(animate);

    loader.load(
      "/models/mobile.glb",
      (gtlf) => {
        scene.add(gtlf.scene);
        mobileModel = gtlf.scene.children[0];
        // object.scale.x = 1;
        // object.scale.y = 1;
        // object.scale.z = 1;
        // scene.add(object);
      },
      undefined,
      (err) => {
        console.error(err);
      }
    );
  });
</script>

<!-- <div class="relative py-[200px] grid place-content-center isolate">
  <div
    class="absolute text-landing-bg flex flex-col leading-[80%] items-center rotate-[20deg] opacity-5 -translate-x-1/2 left-1/2 select-none z-[-99]"
  >
    <span id="effio1">{backgroundEffectText}</span>
    <div class="flex">
      <span id="effio2">{backgroundEffectText}</span>
      <span id="effio3">{backgroundEffectText}</span>
    </div>
    <span id="effio4">{backgroundEffectText}</span>
  </div>
  <h3 class="text-landing text-center leading-[1]">Effio</h3>
  <p class="text-text-darker text-h3 leading-[1]">Online Test Creation Tool</p>
</div> -->
<canvas id="mobile-canvas" bind:this={mobileCanvas}></canvas>

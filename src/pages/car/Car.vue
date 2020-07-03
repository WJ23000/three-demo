<template>
  <div class="detail">
    <Header :title="title" @tzNext="toIndex" />
    <div class="content">
      <div id="container"></div>
      <div class="info"></div>
    </div>
  </div>
</template>

<script type="module">
import Header from "@/components/Header";
import * as Three from "three";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { getCarModel } from "@/services/index";

export default {
  name: "Car",
  components: {
    Header
  },
  data() {
    return {
      title: "3D汽车模型",
      archetype: ""
    };
  },
  created() {
    console.log("上级页面id:" + this.$route.query.id);
    // 获取3d模型数据
    // getCarModel().then((res) => {
    //   this.archetype = res;
    // })
  },
  mounted() {
    var scene, camera, dirLight, stats;
    var renderer, mixer, controls;

    var clock = new Three.Clock();
    var container = document.getElementById("container");

    stats = new Stats();
    container.appendChild(stats.dom);

    renderer = new Three.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = Three.sRGBEncoding;
    container.appendChild(renderer.domElement);

    scene = new Three.Scene();
    scene.background = new Three.Color(0xbfe3dd);

    camera = new Three.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      1,
      100
    );
    camera.position.set(5, 2, 8);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.5, 0);
    controls.update();
    controls.enablePan = false;
    controls.enableDamping = true;

    scene.add(new Three.HemisphereLight(0xffffff, 0x000000, 0.4));

    dirLight = new Three.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 2, 8);
    scene.add(dirLight);

    // envmap
    var path = "/textures/cube/Park2/";
    var format = ".jpg";
    var envMap = new Three.CubeTextureLoader().load([
      path + "posx" + format,
      path + "negx" + format,
      path + "posy" + format,
      path + "negy" + format,
      path + "posz" + format,
      path + "negz" + format
    ]);

    var dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("three/examples/js/libs/draco/gltf/");

    var loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    loader.load(
      "/models/LittlestTokyo.glb",
      function(gltf) {
        console.log("loader.load", gltf);
        var model = gltf.scene;
        model.position.set(1, 1, 0);
        model.scale.set(0.01, 0.01, 0.01);
        model.traverse(function(child) {
          if (child.isMesh) child.material.envMap = envMap;
        });
        scene.add(model);
        mixer = new Three.AnimationMixer(model);
        mixer.clipAction(gltf.animations[0]).play();
        animate();
      },
      undefined,
      function(e) {
        console.error("ee", e);
      }
    );

    window.onresize = function() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    function animate() {
      requestAnimationFrame(animate);
      var delta = clock.getDelta();
      mixer.update(delta);
      controls.update();
      stats.update();
      renderer.render(scene, camera);
    }
  },
  methods: {
    toIndex() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style lang="scss" scoped>
.detail {
  .content {
    font-size: 14px;
    #container {
      height: calc(100vh - 45px);
    }
  }
}
</style>

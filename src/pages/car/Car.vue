<template>
    <div class="detail">
        <Header :title="title" @tzNext="toIndex"/>
        <div class="content">
            <div id="container"></div>
            <div class="info"></div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header';
import * as THREE from 'three';
import Stats from 'three-stats';
import { OrbitControls } from 'three-orbit-controls';
import { GLTFLoader } from 'three-css2drender';
import { DRACOLoader } from 'three-obj-mtl-loader';

export default {
    name: 'Car',
    components: {
        Header
    },
    data() {
        return {
            title: "3D汽车模型",
            model: "../../assets/model/car/ferrari.glb"
        }
    },
    created() {
        console.log("上级页面id:" + this.$route.query.id);
    },
    mounted() {
        var scene, camera, dirLight, stats;
        var renderer, mixer, controls;

        var clock = new THREE.Clock();
        var container = document.getElementById( 'container' );

        stats = new Stats();
        container.appendChild( stats.dom );

        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.outputEncoding = THREE.sRGBEncoding;
        container.appendChild( renderer.domElement );

        scene = new THREE.Scene();
        scene.background = new THREE.Color( 0xbfe3dd );

        camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 100 );
        camera.position.set( 5, 2, 8 );

        controls = new OrbitControls( camera, renderer.domElement );
        controls.target.set( 0, 0.5, 0 );
        controls.update();
        controls.enablePan = false;
        controls.enableDamping = true;

        scene.add( new THREE.HemisphereLight( 0xffffff, 0x000000, 0.4 ) );

        dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
        dirLight.position.set( 5, 2, 8 );
        scene.add( dirLight );

        // envmap
        var path = 'textures/cube/Park2/';
        var format = '.jpg';
        var envMap = new THREE.CubeTextureLoader().load( [
            path + 'posx' + format, path + 'negx' + format,
            path + 'posy' + format, path + 'negy' + format,
            path + 'posz' + format, path + 'negz' + format
        ] );

        var dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath( 'js/libs/draco/gltf/' );

        var loader = new GLTFLoader();
        loader.setDRACOLoader( dracoLoader );
        loader.load( this.model, function ( gltf ) {

            var model = gltf.scene;
            model.position.set( 1, 1, 0 );
            model.scale.set( 0.01, 0.01, 0.01 );
            model.traverse( function ( child ) {

                if ( child.isMesh ) child.material.envMap = envMap;

            } );

            scene.add( model );

            mixer = new THREE.AnimationMixer( model );
            mixer.clipAction( gltf.animations[ 0 ] ).play();

            animate();

        }, undefined, function ( e ) {

            console.error( e );

        } );


        window.onresize = function () {

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize( window.innerWidth, window.innerHeight );

        };


        function animate() {

            requestAnimationFrame( animate );

            var delta = clock.getDelta();

            mixer.update( delta );

            controls.update();

            stats.update();

            renderer.render( scene, camera );

        }
    },
    methods: {
        toIndex() {
            this.$router.push({ path: '/'});
        }
    }
}
</script>

<style lang="scss" scoped>
.detail {
    .content {
        font-size: 14px;
    }
}
</style>

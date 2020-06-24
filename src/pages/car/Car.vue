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

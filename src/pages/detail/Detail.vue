<template>
    <div class="detail">
        <Header :title="title" @tzNext="toIndex"/>
        <div class="content">详情页</div>
    </div>
</template>

<script>
import Header from '@/components/Header';
import { getLineMap } from '@/services/index';

export default {
    name: 'Detail',
    components: {
        Header
    },
    data() {
        return {
            title: "详情"
        }
    },
    created() {
        console.log("上级页面id:" + this.$route.query.id);
        // 获取折线图数据
        getLineMap("map").then((res) => {
            const lineMap = res;
            console.log("返回数据", lineMap);
        })
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

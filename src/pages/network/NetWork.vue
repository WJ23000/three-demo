<template>
    <div class="network">
        <Header :title="title" @tzNext="toIndex"/>
        <div class="content">详情页</div>
    </div>
</template>

<script>
import Header from '@/components/Header';

export default {
    name: 'NetWork',
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
    },
    methods: {
        toIndex() {
            this.$router.push({ path: '/'});
        }
    }
}
</script>

<style lang="scss" scoped>
.network {
    .content {
        font-size: 14px;
    }
}
</style>

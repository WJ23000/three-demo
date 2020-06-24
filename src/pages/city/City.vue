<template>
    <div class="detail">
        <Header :title="title" @tzNext="toIndex"/>
        <div class="content">详情页</div>
    </div>
</template>

<script>
import Header from '@/components/Header';

export default {
    name: 'City',
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
.detail {
    .content {
        font-size: 14px;
    }
}
</style>

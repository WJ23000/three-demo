<template>
    <div class="header">
        <div class="title">{{title}}</div>
        <div @click="tzNext()" class="back">To</div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props:[
      "title"
    ],
    data() {
        return {
            
        }
    },
    created() {

    },
    methods: {
        tzNext() {
            console.log("触发了嘛")
            this.$emit("tzNext")
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    padding: 0px 15px;
    height: 44px;
    line-height: 44px;
    border-bottom: 1px solid #f3f2f6;
    .title {
        flex: 1;
        font-size: 16px;
        text-align: center;
    }
    .back {
        color: #3982f6;
        font-size: 14px;
    }
}
</style>>
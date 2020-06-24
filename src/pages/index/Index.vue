<template>
  <div class="index">
    <Header :title="title" @tzNext="toDetail" />
    <div class="content">
      <div class="model">
        <div
          class="cell"
          v-for="(item,index) in modelList"
          :key="index"
          @click="toModel(item.url)"
        >{{item.title}}<i class="el-icon-arrow-right"></i></div>  
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
    name: 'Index',
    components: {
        Header
    },
    data() {
        return {
            title: "首页",
            modelList: [
                {
                    title: "3D模型-汽车",
                    url: "/car"
                },
                {
                    title: "3D模型-网络设备",
                    url: "/network"
                },
                {
                    title: "3D模型-城市建设",
                    url: "/city"
                }
            ]
        }
    },
    created() {
        
    },
    methods: {
        toDetail() {
            this.$router.push({ path: '/detail', query: { id: "1" } });
        },
        toModel(url) {
            this.$router.push({ path: url, query: { id: "1" } });
        }
    }
}
</script>

<style lang="scss" scoped>
.index {
    .content {
        .model {
            padding: 0px 15px;
            .cell {
                display: flex;
                height: 44px;
                line-height: 44px;
                border-bottom: 1px solid #f3f2f6;
                font-size: 14px;
                justify-content: space-between;
                
            }
            .cell:hover {
                color: #3982f6;
            }
        }
    }
    i {
        line-height: inherit;
    }
}
</style>

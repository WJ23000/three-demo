<template>
  <div class="detail">
    <Header :title="title" @tzNext="toIndex" />
    <div class="content">
      <a-scene>
        <a-assets>
          <a-asset-item id="horse-obj" :src="archetype"></a-asset-item>
        </a-assets>
      </a-scene>
    </div>
  </div>
</template>

<script type="module">
import Header from "@/components/Header";
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
    getCarModel().then(res => {
      this.archetype = res;
    });
  },
  mounted() {},
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
    height: calc(100vh - 45px);
  }
}
</style>
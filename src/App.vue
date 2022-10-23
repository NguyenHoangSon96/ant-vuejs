<template>
  <a-layout>
    <a-layout-sider style="height: 100vh" v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo"/>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <router-link :to="{ name: 'HomePage' }">
          <a-menu-item key="1">
            <user-outlined/>
            <span>HomePage</span>
          </a-menu-item>
        </router-link>
        <router-link :to="{ name: 'SalaryPage' }">
          <a-menu-item key="2">
            <video-camera-outlined/>
            <span>Salary</span>
          </a-menu-item>
        </router-link>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
            style="font-size: 20px; margin-left: 20px"
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined style="font-size: 22px; margin-left: 16px" v-else class="trigger"
                            @click="() => (collapsed = !collapsed)"/>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import {MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, VideoCameraOutlined} from '@ant-design/icons-vue';
import {defineComponent, ref} from 'vue';

export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    // UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },

  setup() {
    return {
      selectedKeys: ref(['1']),
      collapsed: ref(false),
    };
  },

});
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
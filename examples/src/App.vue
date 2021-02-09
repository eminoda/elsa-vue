<template>
  <div id="app">
    <el-container>
      <!-- <el-header> </el-header> -->
      <el-aside style="width:200px;">
        <el-menu router :default-active="activeIndex" class="el-menu-demo">
          <template v-for="(route, index) in routes">
            <el-submenu v-if="route.children && route.children.length > 0" :key="index" :index="route.path">
              <template slot="title">{{ route.meta.title }}</template>
              <el-menu-item :index="resolvePath(route.path, childItem.path)" v-for="(childItem, index) in route.children" :key="index">{{
                childItem.meta.title
              }}</el-menu-item>
            </el-submenu>
            <el-menu-item v-else :key="index" :index="route.path">{{ route.meta.title }}</el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-main style="max-width: 80%; margin: auto;">
        <router-view />
      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </div>
</template>

<script>
import path from 'path'

export default {
  name: 'App',
  components: {},
  data() {
    const { options, currentRoute } = this.$router
    return {
      activeIndex: currentRoute.fullPath,
      routes: options.routes
    }
  },
  methods: {
    resolvePath(basePath = '', routePath = '') {
      return path.resolve(basePath, routePath)
    }
  },
  watch: {
    $route(newVal) {
      this.activeIndex = newVal.path
    }
  }
}
</script>

<style></style>

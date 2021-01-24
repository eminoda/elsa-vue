<template>
  <el-row type="flex" justify="center">
    <el-col :span="14">
      <elsa-form ref="myFormRef" :layout="layout" :config="fields" :model="model" labelWidth="auto" label-suffix=":">
        <el-row type="flex" justify="center">
          <el-button @click="submit" type="primary">提交</el-button>
          <el-button @click="reset" type="warning" style="margin-left:10px;">重置</el-button>
        </el-row>
      </elsa-form>
    </el-col>
  </el-row>
</template>

<script>
import { fields, layout } from './data/relateConfig';
export default {
  data() {
    return {
      fields,
      layout,
      model: {
        name: '',
        age: '',
        idCard: '',
        end: '',
        skill: '',
      },
    };
  },
  methods: {
    submit() {
      this.$refs.myFormRef.validate((err, data) => {
        if (err) {
          console.log(err);
          this.$message.error('表单错误');
        } else {
          console.log(data);
        }
      });
    },
    reset() {
      this.$refs.myFormRef.resetFields();
      this.$message.success('表单已重置');
    },
  },
};
</script>

<style></style>

<template>
  <el-row type="flex" justify="center">
    <el-col :span="12">
      <elsa-form ref="myFormRef" :config="fields" :model="model" labelWidth="auto" label-suffix=":">
        <template slot="upload" :slot-scope="{ model }">
          <el-button size="small" type="primary">上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </template>
        <template slot="nameCheck">
          <el-button type="primary" size="small" style="margin-left:10px;">校验</el-button>
        </template>
        <el-row type="flex" justify="center">
          <el-button @click="submit" type="primary">提交</el-button>
          <el-button @click="reset" type="warning" style="margin-left:10px;">重置</el-button>
        </el-row>
      </elsa-form>
    </el-col>
  </el-row>
</template>

<script>
import { fields } from './data/uploadConfig';
export default {
  data() {
    return {
      fields,
      model: {
        filePath: '',
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

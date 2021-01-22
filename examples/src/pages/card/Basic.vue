<template>
  <elsa-card title="标题" subTitle="小标题" bordered>
    <div>我被放在了 card 中</div>
  </elsa-card>
</template>

<script>
import { fields } from '@/pages/form/data/basicConfig';

export default {
  data() {
    return {
      fields,
      model: {
        name: '',
        password: '',
        company: [],
        desc: '',
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

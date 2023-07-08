<template>
  <div class="home">
    <el-checkbox v-model="checked1" label="Option 1" size="large" />
  </div>
</template>

<script>
import { ref } from "vue";
const checked1 = ref(true);
</script>
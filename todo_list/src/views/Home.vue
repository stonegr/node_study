<template>
  <div>
    <NavHeader></NavHeader>
    <NavMain></NavMain>
    <NavFooter></NavFooter>
    <div>{{ name }}-{{ num }}-{{ arry[0] }}-{{ obj.age }}</div>
    <div>{{ r_v.a }}-{{ r_v.o.a }}</div>
  </div>
</template>

<script>
import NavHeader from "@/components/navHeader/NavHeader";
import NavMain from "@/components/navMain/NavMain.vue";
import NavFooter from "@/components/navFooter/NavFooter.vue";
import { defineComponent, ref, reactive, toRefs } from "vue";

export default defineComponent({
  name: "Home",
  props: {},
  components: {
    NavHeader,
    NavMain,
    NavFooter,
  },
  setup(props, ctx) {
    let num = ref(10);
    let name = ref("jack");
    let arry = ref(["a", "b", "c", "d"]);
    let obj = ref({
      age: 20,
    });
    let r_v = reactive({
      a: 1,
      b: 2,
      c: 3,
      o: { a: 0 },
      num: 2,
    });
    return {
      num,
      name,
      arry,
      obj,
      r_v,
      ...toRefs(r_v),
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
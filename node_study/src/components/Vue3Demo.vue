<template>
  <div class="vue3-demo">
    <h1>Vue 3 特性演示</h1>
    
    <!-- 1. 响应式数据展示 -->
    <section class="demo-section">
      <h2>1. 响应式数据</h2>
      <p>计数器: {{ counter }}</p>
      <p>消息: {{ message }}</p>
      <button @click="increment">增加</button>
    </section>

    <!-- 2. 计算属性 -->
    <section class="demo-section">
      <h2>2. 计算属性</h2>
      <p>双倍计数: {{ doubleCounter }}</p>
      <p>消息长度: {{ messageLength }}</p>
    </section>

    <!-- 3. 方法 -->
    <section class="demo-section">
      <h2>3. 方法</h2>
      <input v-model="message" placeholder="输入消息">
      <button @click="showMessage">显示消息</button>
    </section>

    <!-- 4. 条件渲染 -->
    <section class="demo-section">
      <h2>4. 条件渲染</h2>
      <button @click="toggleShow">切换显示</button>
      <p v-if="isShow">这段文字会显示/隐藏</p>
      <p v-else>这是替代内容</p>
    </section>

    <!-- 5. 列表渲染 -->
    <section class="demo-section">
      <h2>5. 列表渲染</h2>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          {{ item.name }} - {{ item.age }}
        </li>
      </ul>
    </section>

    <!-- 6. 生命周期钩子 -->
    <section class="demo-section">
      <h2>6. 生命周期钩子</h2>
      <p>组件已挂载: {{ isMounted }}</p>
      <p>组件已更新: {{ updateCount }} 次</p>
    </section>

    <!-- 7. 组件通信 -->
    <section class="demo-section" parent-message=""自定义父组件消息>
      <h2>7. 组件通信</h2>
      <p>父组件消息: {{ props.parentMessage }}</p>
      <button @click="emitEvent">发送事件到父组件</button>
    </section>

    <!-- 8. 响应式引用 -->
    <section class="demo-section">
      <h2>8. 响应式引用</h2>
      <input ref="inputRef" type="text" placeholder="输入框">
      <button @click="focusInput">聚焦输入框</button>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUpdated, defineProps, defineEmits } from 'vue'

// 1. 响应式数据
const counter = ref(0)
const message = ref('Hello Vue 3!')
const isShow = ref(true)
const isMounted = ref(false)
const updateCount = ref(0)
const inputRef = ref(null)

// 2. 计算属性
const doubleCounter = computed(() => counter.value * 2)
const messageLength = computed(() => message.value.length)

// 3. 列表数据
const items = ref([
  { name: '张三', age: 20 },
  { name: '李四', age: 25 },
  { name: '王五', age: 30 }
])

// 4. Props 和 Emits
const props = defineProps({
  parentMessage: {
    type: String,
    default: '来自父组件的消息'
  }
})

const emit = defineEmits(['custom-event'])

// 5. 方法
const increment = () => {
  counter.value++
}

const showMessage = () => {
  alert(message.value)
}

const toggleShow = () => {
  isShow.value = !isShow.value
}

const focusInput = () => {
  inputRef.value.focus()
}

const emitEvent = () => {
  emit('custom-event', '子组件发送的消息')
}

// 6. 生命周期钩子
onMounted(() => {
  isMounted.value = true
  console.log('组件已挂载')
})

onUpdated(() => {
  updateCount.value++
  console.log('组件已更新')
})
</script>

<style scoped>
.vue3-demo {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.demo-section {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

h1 {
  color: #2c3e50;
  text-align: center;
}

h2 {
  color: #42b983;
  margin-bottom: 15px;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;
}

button:hover {
  background-color: #3aa876;
}

input {
  padding: 8px;
  margin: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 8px;
  border-bottom: 1px solid #eee;
}

li:last-child {
  border-bottom: none;
}
</style> 
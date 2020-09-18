<template>
  <img alt="table-attr logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <InputCom msg="Hello Vue 3.0 + Vite" />
  <p>bottom</p>
</template>

<script>
import HelloWorld from './components/table'
import InputCom from './components/input'

export default {
  name: 'App',
  components: {
    HelloWorld,
    InputCom
  }
}
</script>

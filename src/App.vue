<template>
  <img alt="table-attr logo" src="./assets/logo.png" />
  <!-- <InputCom  /> -->
  <TableCom  />
</template>

<script>
import TableCom from './components/table'
import InputCom from './components/input'

export default {
  name: 'App',
  components: {
    TableCom,
    InputCom
  }
}
</script>

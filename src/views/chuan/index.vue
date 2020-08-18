<template>
  <div>
    <datav2 />
  </div>
</template>

<script>
import datav from './components/datav/index.vue'
import datav2 from './components/datav/index2.vue'

export default {
  name: 'app',
  components: {
    datav,
    datav2
  },
  data () {
    return {}
  }
}
</script>



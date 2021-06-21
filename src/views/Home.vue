<template>
  <div class="home">
    <formComponent />
    <listComponent />
  </div>
</template>

<script>
import formComponent from '../components/formComponent.vue'
import listComponent from '../components/listComponent.vue'
import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'Home',
  components: {
    formComponent,
    listComponent
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapMutations(['setListState']),
    ...mapActions(['fetchData']),
  },
  computed: {
  },
  mounted() {
    this.fetchData();
  }
}
</script>

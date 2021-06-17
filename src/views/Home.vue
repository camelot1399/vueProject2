<template>
  <div class="home">
    <formComponent @add="addToList"/>
    <listComponent :list="list"/>
  </div>
</template>

<script>
import formComponent from '../components/formComponent.vue'
import listComponent from '../components/listComponent.vue'
export default {
  name: 'Home',
  components: {
    formComponent,
    listComponent
  },
  data() {
    return {
      list: [
        {
            name: 'Михаил',
            age: 10
        },
        {
            name: 'Екатерина',
            age: 22
        },
        {
            name: 'Алексей',
            age: 99
        },
        {
            name: 'Алина',
            age: 19
        }
      ]
    }
  },
  methods: {
    addToList(data) {
      this.list.push(data);
    }
  }
}
</script>

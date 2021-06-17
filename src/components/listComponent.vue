<template>
    <div>
        <div v-for="item in list" :key="item.name">{{ item.name }} {{ item.age }}</div>
    </div>
</template>
<script>
export default {
    props: {
        list: Array
    },
    data() {
        return {
           
        }
    },
    methods: {
        
    }
}
</script>
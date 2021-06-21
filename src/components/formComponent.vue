<template>
    <div>
        <button @click="form = !form" class="btn">Form</button>
        <form action="#" v-if="form">
            <input type="text" name="name" v-model="name" placeholder="name">
            <input type="number" name="number" v-model="age" placeholder="age">
            <button @click.prevent="add">add</button>
        </form>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            name: '',
            age: 20,
            form: false
        }
    },
    methods: {
        ...mapMutations(['addToListItem']),
        add() {
            let {name, age} = this;
            this.addToListItem({name, age});
        }
    }
}
</script>
<style>
    .btn {
        background: red;
    }
</style>
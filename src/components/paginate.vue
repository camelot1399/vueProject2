<template>
    <div class="paginations">
        <div @click="paginate(currentPage - 1)">left</div>
        <div class="paginate" 
            v-for="item in countPaginate" 
            :class="{'activePag': currentPage === item}"
            :key="item"
            @click="paginate(item)"
        >{{ item }}</div>
        <div @click="paginate(currentPage + 1)">right</div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props: {
        listCount: Number,
        nList: Number,
        currentPage: Number
    },
    computed: {
        countPaginate() {
            return Math.ceil(this.listCount / this.nList);
        }
    },
    methods: {
        paginate(page) {
            if (page < 1 || page > this.countPaginate) {
                return
            }

            this.$emit('paginate', page);
        }
    }
}
</script>
<style>
.paginations {
    display: flex;
    justify-content: space-between;
}

.activePag {
    background: red;
}

</style>
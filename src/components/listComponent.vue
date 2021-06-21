<template>
    <div>
        <button @click="showCountListAge">show countListAge</button>
        <div 
            v-for="item in listAge" 
            :key="item.price"
        >{{ item.name }} {{ item.age }}</div>

        <paginate 
            :listCount="listCount" 
            :nList="nList"
            :currentPage="page"
            @paginate="onPaginate"
        />
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import paginate from './paginate.vue'
export default {
  components: { paginate },
    data() {
        return {
           page: 1,
           nList: 10,
        }
    },
    methods: {
        showCountListAge() {
            console.log(this.countListAge);
        },
        onPaginate(page) {
            console.log('dfsdff');
            this.page = page;
        }
    },
    computed: {
        ...mapGetters({
            list: 'getList',
            countListAge: 'getListCountAge',
            listCount: 'getListCount'
        }),
        listAge() {
            return this.list.slice(this.nList * (this.page - 1), this.nList * (this.page - 1) + this.nList);
        },
    },
    mounted() {
        console.log(this.listCount);
    }
}
</script>
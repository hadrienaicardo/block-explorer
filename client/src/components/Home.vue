
<template>
  <div class="box">
    <LastBlockCard class="col-1" />
    <n-card class="col-1">En cours</n-card>
  </div>
</template>


<script lang="ts">
    import { useMessage, NCard } from 'naive-ui'
    import { ref, defineComponent } from 'vue'
    import { RouterLink } from 'vue-router'
    import alchemy from '.././scripts/alchemy'
    import LastBlockCard from './LastBlockCard.vue'



    export default defineComponent ({
        components: {
            RouterLink, useMessage, NCard, LastBlockCard
        },
        name: 'Home',
        
        setup () {

        }
    })
</script>


<style scoped>
</style>

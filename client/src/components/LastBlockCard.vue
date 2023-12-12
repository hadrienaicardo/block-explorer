
<template>
    <n-card>
        <h2>Last Block</h2>
        <template v-if="lastBlock">
            <p>Number : {{ lastBlock.number }}</p>
            <p>Mined : {{  timeSinceLastBlock }} seconds ago ({{ dateLastBlock }})</p>
        </template>
    </n-card>
  </template>
  
  
  <script lang="ts">
      import { useMessage, NCard } from 'naive-ui'
      import { ref, defineComponent, onMounted, computed } from 'vue'
      import { RouterLink } from 'vue-router'
      import alchemy from '.././scripts/alchemy'
  
  
      export default defineComponent ({
          components: {
              RouterLink, useMessage, NCard
          },
          name: 'LastBlockCard',
          
          setup () {
              const lastBlock = ref<Block>(null);
  
              onMounted(async () => {
                lastBlock.value = await alchemy.core.getBlock("latest"); 
              })
              
              const timeSinceLastBlock = computed(() => {
                if (lastBlock.value && lastBlock.value.timestamp) {
                    const currentTime = Math.floor(Date.now() / 1000); // convertir en secondes
                    const timeDifference = currentTime - lastBlock.value.timestamp;
                    return timeDifference;
                } else {
                    return null;
                }
                });

                const dateLastBlock = computed(() => {
                    if (lastBlock.value && lastBlock.value.timestamp) {
                        const date = new Date(lastBlock.value.timestamp * 1000); // convertir en millisecondes
                        const day = date.getDate();
                        const month = date.getMonth() + 1;
                        const year = date.getFullYear();
                        const hours = date.getHours();
                        const minutes = date.getMinutes();
                        const seconds = date.getSeconds();

                        return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
                    } else {
                        return null;
                    }
                    });
                
              return {
                lastBlock,
                timeSinceLastBlock,
                dateLastBlock
              }
          }
      })
  </script>
  
  
  <style scoped>
  </style>
  
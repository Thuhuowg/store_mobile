<template>
    <div class="container-fluid p-0">
    <div class="layout fixed-top">
        <header></header>
       
    </div>
    
        <div class="min-h-screen " >
            <router-view></router-view>
            <!-- <div class="">
                <TheBannerRace></TheBannerRace>
            </div> -->

            <!-- <div class="flex flex-col space-y-4 mt-10">
                <div>
                    <div class="ms-10 grid grid-cols-3 gap-4">
                    <div class="col-span-2">
                        <TheMenuHome />
                    </div>
                  
                    <div class="flex flex-row-reverse me-10"> 
                        <div class="">filter</div>
                        <div class="">choice</div>
                    </div>
                </div>
                </div>
                <div>02</div>
                <div>03</div>
            </div> -->
        </div>
        
        <!-- <TheProductList></TheProductList> -->
        <!-- <footer class="bg-light text-center py-5 ">
            <TheFooter></TheFooter>
        </footer> -->
        
    </div>
      <div class="layout fixed-top1">
        <TheCategory></TheCategory>
       
    </div>
    <div class="layout fixed-top2">
        <TheProductList></TheProductList>
       
    </div>
</template>
<script>

import Hello from '../components/client/Hello.vue'

import header from '../components/layout/header.vue'
import TheCategory from '../components/client/TheCategory.vue'
import TheProductList from '../components/client/TheProductList.vue'
export default {
    components:{
        header,
        TheCategory,
        TheProductList
    }
}
</script>
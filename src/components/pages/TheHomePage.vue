<template>
    <TheBanner></TheBanner>
<div class="layout fixed-top1">
        <TheCategory></TheCategory>
       
    </div>
    <div class="layout fixed-top1">
        <TheProductList></TheProductList>
       
    </div>
</template>
<script>
import TheCategory from "../client/TheCategory.vue"
import TheProductList from "../client/TheProductList.vue"
import TheBanner from "../client/TheBanner.vue"
export default {
    components: {
        TheCategory,
        TheProductList,
        TheBanner
    }
}
</script>
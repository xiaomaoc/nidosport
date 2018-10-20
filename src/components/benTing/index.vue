<template>
    <div class="benTing">
        benTing
        <div class="ben-container">

        </div>
        <app-nav />
    </div>
</template>

<script>
import appNav from '../common/appNav'
export default {
    components:{
        appNav
    }
}
</script>

<style lang="scss" scoped>
.benTing{
    display: flex;
    flex-direction: column;
    height: 100%;
}
    .ben-container{
        flex: 1;
        overflow-x: hidden;
    }
</style>

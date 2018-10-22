<template>
    <div class="benTing">
        
        <div class="ben-container">
            <div class="header">
                <li><a>广州</a></li>
                <h3>灵动</h3>
                <li><a>客服</a></li>
            </div>
            <mt-swipe :auto="4000">
              <mt-swipe-item><img src=""/></mt-swipe-item>
              <mt-swipe-item><img src=""/></mt-swipe-item>
            </mt-swipe>
        </div>
        <app-nav />
    </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import Vue from 'vue'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
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

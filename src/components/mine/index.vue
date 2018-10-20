<template>
     <div class="mine">
        mine
        <div class="mine-container">

        </div>
        <appNav />
    </div>
</template>

<script>
import appNav from "../common/appNav";
export default {
  components: {
    appNav
  }
};
</script>

<style lang="scss" scoped>
.mine {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.mine-container {
  flex: 1;
}
</style>

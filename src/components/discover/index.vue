<template>
     <div class="discover">

        发现xxxxxxxx

        <div class="dis-container">

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
.discover {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.dis-container {
  flex: 1;
}
</style>

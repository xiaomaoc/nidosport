<template>
     <div class="video">
        视讯
        <div class="video-container">

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
.video {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.video-container {
  flex: 1;
}
</style>

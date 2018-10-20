<template>
     <div class="tingBa">
        汀吧
        <div class="ting-container">

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
.tingBa {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.ting-container {
  flex: 1;
}
</style>

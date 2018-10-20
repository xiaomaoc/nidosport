<template>
    <div class="appNav">
        <ul>
            <li v-for="nav in navLists" :key="nav.icon">
                <router-link :to=nav.path tag="div">
                <v-icon :name="nav.icon"></v-icon>
                <span>{{nav.name}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      navLists: [
        {
          path: "/",
          icon: "home",
          name: "本汀"
        },
        {
          path: "/discover",
          icon: "globe",
          name: "发现"
        },
        {
          path: "/tingBa",
          icon: "comments",
          name: "汀吧"
        },
        {
          path: "/video",
          icon: "video",
          name: "视讯"
        },
        {
          path: "mine",
          icon: "user",
          name: "我的"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.appNav {
  width: 100%;
  height: 0.6rem;
  border-top: 0.01rem solid #f2f2f2;
  ul,
  li {
    list-style: none;
  }
  ul {
    display: flex;
    li {
      width: 20%;
      color: #ccc;
      display: flex;
      align-items: center;
      justify-content: center;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 0.14rem;
        svg {
          width: 0.18rem;
          height: 0.18rem;
        }
      }
    }
    .router-link-exact-active {
      color: skyblue;
    }
  }
}
</style>

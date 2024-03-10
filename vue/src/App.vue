<template>
    <div class="">
        <router-view></router-view>
    </div>
</template>
<script>
import { computed } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { mapState } from "vuex";

export default {
    components: {
        HelloWorld,
    },
};
</script>
<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

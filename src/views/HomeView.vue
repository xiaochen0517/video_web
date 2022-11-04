<template>
    <div class="home">
        <top-bar />
        <bottom-footer />
    </div>
</template>

<script>
import TopBar from "@/components/main/TopBar";
import BottomFooter from "@/components/main/BottomFooter";

export default {
    name: 'HomeView',
    components: {
        TopBar,
        BottomFooter
    },
    data() {
        return {
        }
    },
    mounted() {},
    methods: {

    }
}
</script>

<style scoped>

</style>
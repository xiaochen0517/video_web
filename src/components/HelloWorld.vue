<template>
    <div class="hello">
        <button @click="test">test</button>
    </div>
</template>

<script>
import https from "@/requests/https"

export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    methods: {
        test() {
            console.log(https);
            https.post("/mov/api/user/login", {
                username: "test",
                password: "password"
            }).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

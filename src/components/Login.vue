<template>

    <div class="container">
        <h1>Login für Ladenbesitzer</h1>
        <form class="wb-3">
            <!-- <input type="text" name="usernameField" v-model="input.username" placeholder="Username" />
            <input type="password" name="passwordField" v-model="input.password" placeholder="Password" /> -->
            <div class="form-group mb-3" style="text-align: left; margin: 0 auto;">
                <label for="usernameField">Username</label>
                <input id="usernameField" class="form-control" v-model.trim="input.username" type="text" placeholder="Username">
            </div>
            <div class="form-group mb-3" style="text-align: left; margin: 0 auto;">
                <label for="passwordField">Password</label>
                <input id="passwordField" class="form-control" v-model.trim="input.password" type="password" placeholder="Password">
            </div>
            <button type="button" class="btn btn-primary" v-on:click="login()">
                Login
            </button>
        </form>
    </div>

</template>


<script>
export default {
    name: 'RegistrationLogin',
    props: {
        input: {
            type: Object,
            default: function() {
                return {
                    username: "",
                    password: ""
                }
            }
        }
    },
    methods: {
        login() {
            // Routes to internal area if login successful
            if(this.input.username != '' && this.input.password != '') {
                if(this.input.username == this.mockAccount.username && this.input.password == this.mockAccount.password) {
                    this.$emit('authenticated', true);
                    this.$router.push({ name: 'InternalLanding' });
                } else {
                    console.log('The username and / or password is incorrect');
                }
            } else {
                console.log('Please provide your login credentials');
            }
        }
    },
    // This must be replaced with a proper password fetching
    created() {
        this.mockAccount = {
            username: "user",
            password: "pw"
        };
    }
}
</script>


<style scoped>
</style>

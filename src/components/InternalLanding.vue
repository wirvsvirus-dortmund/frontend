<template>

    <div class="container">
        <h1 class="mb-3">Interner Bereich für Ladenbesitzer</h1>
                <div class="mb-5">
                    <h3>Verwaltung</h3>
                    <button type="button" class="btn btn-primary" v-on:click="goto_management()">
                        Bestehenden Laden verwalten
                    </button>
                </div>
                <div class="mb-5">
                    <h3 >Registrierung</h3>
                    <button type="button" class="btn btn-primary" v-on:click="goto_registration()">
                        Neuen Laden registrieren
                    </button>
                </div>
    </div>

</template>


<script>
export default {
    name: 'RegistrationInternal',
    methods: {
        goto_management() {
            // Routes to management page
            this.$router.push({ name: 'InternalManagement' });
        },
        goto_registration() {
            // Routes to registration page
            this.$router.push({ name: 'InternalRegistration' });
        }
    },
}
</script>


<style scoped>
</style>

<template>
    <v-app>
        <NavBar />
        <v-main>
            <v-container fluid>
                <h1>Bienvenido al Dashboard</h1>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import NavBar from '@/components/layout/NavBar.vue'

export default {
    name: 'MainDashboard',
    components: {
        NavBar
    }
}
</script>

<style scoped>
h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: #424242;
}
</style>

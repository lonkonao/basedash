<template>
    <v-app-bar app class="navbar-mainbg">
        <v-toolbar-title class="navbar-logo">ODIN</v-toolbar-title>
        <v-spacer></v-spacer>
        <router-link to="/dashboard" class="nav-item" active-class="active-link">
            <v-btn text>
                <v-icon left>mdi-view-dashboard</v-icon>Dashboard
            </v-btn>
        </router-link>
        <router-link to="/address-book" class="nav-item" active-class="active-link">
            <v-btn text>
                <v-icon left>mdi-book-open</v-icon>Address Book
            </v-btn>
        </router-link>
        <router-link to="/components" class="nav-item" active-class="active-link">
            <v-btn text>
                <v-icon left>mdi-puzzle</v-icon>Components
            </v-btn>
        </router-link>
        <router-link to="/calendar" class="nav-item" active-class="active-link">
            <v-btn text>
                <v-icon left>mdi-calendar</v-icon>Calendar
            </v-btn>
        </router-link>
        <router-link to="/charts" class="nav-item" active-class="active-link">
            <v-btn text>
                <v-icon left>mdi-chart-bar</v-icon>Charts
            </v-btn>
        </router-link>
        <router-link to="/documents" class="nav-item" active-class="active-link">
            <v-btn text>
                <v-icon left>mdi-file-document</v-icon>Documents
            </v-btn>
        </router-link>
    </v-app-bar>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style scoped>
.navbar-mainbg {
    background-color: #CA2D04;
}

.navbar-logo {
    color: #fff;
}

.nav-item {
    text-decoration: none;
}

.nav-item .v-btn {
    color: rgba(255, 255, 255, 0.5);
    font-size: 15px;
    transition: color 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
}

.nav-item .v-btn:hover {
    color: #fff;
}

.active-link .v-btn {
    color: #fff;
}

.nav-item .v-btn::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
}

.nav-item .v-btn:hover::before,
.active-link .v-btn::before {
    visibility: visible;
    transform: scaleX(1);
}
</style>

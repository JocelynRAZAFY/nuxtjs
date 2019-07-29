<template>
    <mdb-navbar position="top" dark color="primary" scrolling>
        <mdb-navbar-brand href="#">Your Logo</mdb-navbar-brand>
        <mdb-navbar-toggler>
            <mdb-navbar-nav>
                <mdb-nav-item href="#" waves-fixed>Home</mdb-nav-item>
                <mdb-nav-item href="#" waves-fixed>Features</mdb-nav-item>
                <mdb-nav-item href="#" waves-fixed>Pricing</mdb-nav-item>
                <!-- Dropdown -->
                <mdb-dropdown tag="li" class="nav-item">
                    <mdb-dropdown-toggle tag="a" navLink color="primary" slot="toggle" waves-fixed>Dropdown</mdb-dropdown-toggle>
                    <mdb-dropdown-menu >
                        <mdb-dropdown-item>Action</mdb-dropdown-item>
                        <mdb-dropdown-item>Another action</mdb-dropdown-item>
                        <mdb-dropdown-item>Something else here</mdb-dropdown-item>
                    </mdb-dropdown-menu>
                </mdb-dropdown>
            </mdb-navbar-nav>
            <!-- Search form -->
            <form>
                <mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
            </form>
        </mdb-navbar-toggler>
    </mdb-navbar>
</template>

<script>
    import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle, mdbInput, mdbBtn, mdbNavbarBrand } from 'mdbvue';
    export default {
        name: "Navbar",
        components: {
            mdbNavbar,
            mdbNavItem,
            mdbNavbarNav,
            mdbNavbarToggler,
            mdbDropdown,
            mdbDropdownItem,
            mdbDropdownMenu,
            mdbDropdownToggle,
            mdbInput,
            mdbBtn,
            mdbNavbarBrand
        }
    }
</script>

<style scoped>
    .view {
        background: url("https://mdbootstrap.com/img/Photos/Others/img (42).jpg")no-repeat center center;
        background-size: cover;
        height: 100%;
    }

    .navbar .dropdown-menu a:hover {
        color: inherit !important;
    }
</style>
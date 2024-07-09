<template>
    <div class="row">
        <div class="col-12">
            <div class="dashboard">
                <div class="left">
                    <h6>Good Evening Osama!</h6>
                </div>
                <div class="searchbox">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search">
                </div>
                <div class="right">
                    
                    <button>
                        <i class="fa-solid fa-moon"></i>
                    </button>
                    <button>
                        <i class="fa-solid fa-bell"></i>
                    </button>
                    <button>
                        <i class="fa-solid fa-gear"></i>
                    </button>
                    <div class="dropdown">
                        <button class="dropdown-toggle" data-toggle="dropdown">
                            <img src="https://cdn.vectorstock.com/i/preview-1x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg"
                        alt="">
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">
                                <i class="fa-solid fa-sliders"></i>
                                <span>Account Settings</span>
                            </a>
                            <a class="dropdown-item" href="#">
                                <i class="fa-solid fa-user"></i>
                                <span>Profile</span>
                            </a>
                            <a class="dropdown-item" href="#">
                                <i class="fa-solid fa-right-from-bracket"></i>
                                <span>Logout</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "DashboardHeader"
}
</script>
<style scoped>
.dashboard {
    background-color: #fff;
    box-shadow: 0 0 5px 0 #00000017;
    padding: 5px 1rem;
    border-radius: .750rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.left {
    display: flex;
    align-items: center;
    gap: .5rem;
}

img {
    width: 32px;
    border-radius: 50%;
}

h6 {
    margin-bottom: 0;
    color: var(--theme-text);
}

.searchbox {
    display: flex;
    align-items: center;
    background-color: var(--theme-fade);
    border-radius: 1rem;
    padding: 3px 0.8rem;
}

.searchbox input {
    border: 0;
    outline: 0;
    background-color: transparent;
    padding: 3px 6px;
}
.searchbox i {
    color: gray;
}
.row {
    font-size: 0.9em;
}
.right{
    display: flex;
    align-items: center;
}
.right button{
    border: 0;
    outline: 0;
    background-color: transparent;
    /* color: var(--theme-text); */
    color: gray;
}
.right button:hover{
    color: var(--theme-text);
}
.dropdown-menu{
    left: auto !important;
    right: 0;
    transform: translate3d(0px, 40px, 0px) !important; 
}
.dropdown-menu .dropdown-item{
    display: flex;
    align-items: center;
    gap: .5rem;
    color: gray;
}
.dropdown-menu .dropdown-item:active{
    background-color: var(--theme-text);
    color: white;
}
.dropdown-menu .dropdown-item i{
    width: 20px;
}
</style>
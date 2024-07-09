<template>
  <div id="app">
    <div class="wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-4 col-md-3 col-lg-2 p-0 resposive-navbar">
            <Sidebar />
          </div>
          <div class="col-sm-8 col-md-9 col-lg-10">
            <div style="min-height: 80vh">
              <router-view></router-view>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/layouts/Sidebar/Sidebar.vue";
import Footer from "./components/layouts/Footer/Footer.vue";
export default {
  name: "App",
  components: {
    Sidebar,
    Footer,
  },
  beforeCreate() {
    document.title = "Kino Factory";
  },
  mounted() {
    let color = getComputedStyle(document.documentElement).getPropertyValue(
      "--theme-text"
    );
    document.documentElement.style.setProperty(
      "--theme-text-fade",
      color + "cd"
    );
    document.documentElement.style.setProperty(
      "--theme-highlight",
      color + "17"
    );
    // console.log('env log',process.env.VUE_APP_API_BASE_URL);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mooli&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;500;600;700&display=swap");
* {
  /* font-family: 'Roboto', sans-serif; */
  font-family: "Open Sans", sans-serif;
  /* font-family: 'Poppins', sans-serif; */
  /* font-family: 'Inter', sans-serif; */
  /* font-family: 'Titillium Web', sans-serif; */
  /* font-family: 'Nunito', sans-serif; */
  /* font-family: 'Montserrat', sans-serif; */
}
#alertsfortheapp {
  position: fixed;
  top: 0;
  right: 10px;
  padding: 0.4rem;
  overflow-y: auto;
  max-height: calc(100vh - 0.8rem);
}
*::selection {
  background-color: var(--theme-text);
  color: #fff;
}
body {
  background-color: rgba(245, 123, 66, 0.015);
  padding: 0.5em;
}
html {
  scroll-behavior: smooth !important;
}
:root {
  --theme-text: #4ea03a;
  --theme-highlight: #fff;
  /* --theme-text: #409ab3; */
  /* --theme-text: #4f7194; */
  --theme-text-fade: #f57b42a8;
  --theme-fade: #f1f1f1;
  --sample-bg: #ffffff;
  /* --sample-bg : #fbf9ef; */
}
.bg-theme {
  background-color: var(--theme-text);
}
.bg-fade {
  background-color: var(--theme-fade);
}
.border-l-theme {
  border-left: 1px solid #c7c6c7;
}
.btn-theme {
  background-color: var(--theme-text);
  color: #fff;
}
.btn-theme:hover {
  color: #fff;
  background-color: var(--theme-text-fade);
}
.btn-theme:active {
  background-color: var(--theme-text) !important;
  color: #fff !important;
  border-color: var(--theme-text) !important;
}
.form-control:focus,
.form-select:focus {
  box-shadow: none;
  border-color: var(--theme-text);
  color: var(--theme-text) !important;
}
.form-select,
.form-control {
  font-size: 0.9rem;
}
.text-urdu {
  font-family: "Noto Nastaliq Urdu", serif;
  text-align: end;
  font-weight: 400;
}
.labels {
  font-size: 0.9em;
  color: #585858;
  background-color: #e7e7e7;
  /* background-color: #b9b9b9; */
}
.text-min {
  font-size: 0.9em;
}
.address {
  line-height: 1rem;
  font-size: 0.8em;
  color: #696969;
}
*::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
*::-webkit-scrollbar-thumb {
  width: 5px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: var(--theme-text-fade);
}
</style>

<template>
    <div class="row">
        <div class="col-12">
            <div class="kino-cards">
                <div class="kino-card">
                    <div class="top">
                        <i class="fa-solid fa-coins"></i>
                    </div>
                    <h4>PKR 1,500000</h4>
                    <p>Sales this month</p>
                </div>

                <div class="kino-card">
                    <div class="top">
                        <i class="fa-solid fa-fan"></i>
                    </div>
                    <h4>536</h4>
                    <p>Total Orchards</p>
                </div>
                
                <div class="kino-card">
                    <div class="top">
                        <i class="fa-solid fa-people-arrows"></i>
                    </div>
                    <h4>1532</h4>
                    <p>Total Suppliers</p>
                </div>

                <div class="kino-card">
                    <div class="top">
                        <i class="fa-solid fa-coins"></i>
                    </div>
                    <h4>PKR 1,500000</h4>
                    <p>Sales this month</p>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: "DashboardTopDetails"
}
</script>
<style scoped>

.kino-cards{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    
    background-color: #fff;

    
    border: 1px solid #00000017;
    border-radius: .5rem;
}
.kino-card {
    padding: .8rem;
    /* font-size: 0.9em; */
    text-align: center;
    border-right: 1px solid #00000017;
    color: #000000a1;
    background-color: #e9efe7a6;
}
.kino-card h4{
    margin-bottom: 0px;
    font-size: 1.2rem;
}
.kino-card:last-child{
    border-right: 0;
}

.kino-card p {
    margin-bottom: 0;
    font-size: 0.8em;
}

.kino-card i{
    font-size: 1.2rem;
}


</style>
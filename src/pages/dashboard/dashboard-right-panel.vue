<template>
    <div class="row">
        <div class="col-12">
            <div class="top-bar">
                <div class="section">
                    <h6>Sales</h6>
                    <span>PKR 120</span>
                </div>
                <div class="section">
                    <h6>Pending</h6>
                    <span>PKR 93</span>
                </div>
                <div class="section">
                    <h6>Canceled</h6>
                    <span>PKR 15</span>
                </div>
                <div class="section">
                    <h6>Delivered</h6>
                    <span>PKR 12</span>
                </div>
            </div>
            <div class="orders">
                <div class="order">
                    <i class="fa-solid fa-xmark"></i>
                    <div class="details">
                    <div>Ahsan</div>
                    <span>PKR 300</span>
                    </div>
                </div>
                <div class="order">
                    <i class="fa-solid fa-xmark"></i>
                    <div class="details">
                    <div>Kamran</div>
                    <span>PKR 700</span>
                    </div>
                </div>
                <div class="order">
                    <i class="fa-solid fa-xmark"></i>
                    <div class="details">
                    <div>Khurram</div>
                    <span>PKR 800</span>
                    </div>
                </div>
                <div class="order">
                    <i class="fa-solid fa-xmark"></i>
                    <div class="details">
                    <div>Tanveer</div>
                    <span>PKR 600</span>
                    </div>
                </div>
                <div class="order">
                    <i class="fa-solid fa-xmark"></i>
                    <div class="details">
                    <div>Ahmad</div>
                    <span>PKR 100</span>
                    </div>
                </div>
                <div class="order">
                    <i class="fa-solid fa-xmark"></i>
                    <div class="details">
                    <div>Khizar</div>
                    <span>PKR 400</span>
                    </div>
                </div>
                <div class="order">
                    <i class="fa-solid fa-xmark"></i>
                    <div class="details">
                    <div>Hamza</div>
                    <span>PKR 200</span>
                    </div>
                </div>
                <div class="order">
                    <i class="fa-solid fa-xmark"></i>
                    <div class="details">
                    <div>Akram</div>
                    <span>PKR 500</span>
                    </div>
                </div>
                <div class="order">
                    <i class="fa-solid fa-xmark"></i>
                    <div class="details">
                    <div>Ahsan</div>
                    <span>PKR 300</span>
                    </div>
                </div>
                <div class="order">
                    <i class="fa-solid fa-xmark"></i>
                    <div class="details">
                    <div>Umer</div>
                    <span>PKR 1200</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : "DashboardRightPanel"
}
</script>

<style scoped>

.top-bar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f7f7f7;
    padding: 0.3em;
    font-weight: 500;
    font-size: 0.9em;
    border-bottom: 1px solid #dbdbdb;
    margin-bottom: 8px;
}
.top-bar h6{
    margin-bottom: 0;
    font-weight: 400;
    font-size: 0.9em;
}
.orders .order{
    display: flex;
    align-items: center;
    gap: 0;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0 5px 0 #00000012;
    border-radius: 5px;
    margin-bottom: 0.25em;
    padding: 5px;
    /* transition: all 2s; */
}
.orders .order .details{
    font-size: 0.9em;
    line-height: 1rem;
    padding: 2px 10px;
}
.orders .order .details > div{
    color: var(--theme-text);
}
.orders .order .details > span{
    color: gray;
    font-size: 12px;
}
.orders .order i{
    background-color: rgb(255, 106, 106);
    color: #fff;
    padding: 0.8em 0;
    cursor: pointer;
    width: 0;
    text-align: center;
    border-radius: 5px ;
    overflow: hidden;
    transition: all 500ms;
}
.orders .order:hover i{
    width: 35px;
    /* margin: 5px; */
}
.orders .order:hover{
    box-shadow: 0 0 5px 0 #409ab35e;
}
</style>
<template>
    <div class="payment mt-2">
        <h5 class="main-header">Payments</h5>
        <div class="payments">
            <div class="det-1">
                <span>Payment</span>
                <span>0</span>
            </div>
            <div class="det-2">
                <span>Advance</span>
                <span>300000</span>
            </div>
            <div class="det-3">
                <span>Arrival</span>
                <span>750000</span>
            </div>
            <div class="det-43">
                <span>Balance</span>
                <span>-750000</span>
            </div>
            <button class="payment-btn mt-2">Release Payment</button>
        </div>
    </div>
</template>
<script>
export default {
    name: "PaymentDetails"
}
</script>
<style scoped>

.payment{
    background-color: #fff;
    border-radius: 10px;
    padding: 0.5em 0.8em;
    box-shadow: 0px 0px 3px 0 rgba(0, 0, 0, 0.2);
    font-size: 0.9rem;
}

.payment .payments div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--sample-bg);
    border-radius: 10px;
    margin: 5px 0;
    padding: 5px 0;
    font-size: 0.8rem;
    color: #666666;
}


.payment .payment-btn {
    border: 0;
    outline: 0;
    width: 100%;
    background-color: var(--theme-text-fade);
    border-radius: 5px;
    padding: 0.3em 0.6em;
    color: white;
}
.payment .payment-btn:hover{
    background-color: var(--theme-text);
}

</style>
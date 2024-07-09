<template>
    <div class="profile">
        <h5 class="main-header">Profile</h5>
        <div class="data">
            <div class="details">
            <div>Farhan Akhtar</div>
            <span class="head">Name</span>
        </div>
        <div class="details">
            <div>34</div>
            <span class="head">Age</span>
        </div>
        <div class="details">
            <div>49 Chak NB, Sargodha, Punjab, Pakistan</div>
            <span class="head">Address</span>
        </div>
        <div class="details">
            <div>2022-2023</div>
            <span class="head">Session</span>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ProfileCustomer"
}
</script>
<style scoped>

.profile{
    background-color: #fff;
    border-radius: 10px;
    padding: 0.5em 0.8em;
    box-shadow: 0px 0px 3px 0 rgba(0, 0, 0, 0.2);
    font-size: 0.9rem;
}

.profile .details {
    line-height: 1.2em;
    margin-bottom: 10px;
}

.profile .details div {
    font-size: 1em;
    font-weight: 500;
    color: #313131;
}

.profile .details span {
    font-size: 0.9em;
    color: #696969;
}

</style>
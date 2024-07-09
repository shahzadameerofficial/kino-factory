<template>
    <div class="alert alert-dismissible fade hide" role="alert" :ref="'alertBox' + alert?.id">
        <div class="main" v-if="alert?.status === 'success'">
            <!-- <div class="icon">
                <i class="fa-solid fa-circle-check kino-text"></i>
            </div> -->
            <div class="wrapper">
                <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                    <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
            </div>
            <div class="content">
                <h6>Congratulations!</h6>
                <span>{{ alert?.message }}</span>
            </div>
        </div>
        <div class="main" v-else-if="alert?.status === 'failed'">
            <div class="wrapper">
                <svg class="checkmark failed" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <path class="checkmark__check" fill="none" d="M14.1 14.1l23.8 23.8 m0,-23.8 l-23.8,23.8" />
                    <circle class="checkmark_circle" cx="26" cy="26" r="25" fill="none" />
                </svg>
            </div>
            <div class="content">
                <h6>Sorry !</h6>
                <span>{{ alert?.message }}</span>
            </div>
        </div>
        <div class="main" v-else-if="alert?.status === 'warning'">
            <div class="wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" class="checkmark warning" viewBox="0 0 512 512">
                    <path
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                        fill="#F2C010" />
                </svg>

            </div>
            <div class="content">
                <h6>Attention!</h6>
                <span>{{ alert?.message }}</span>
            </div>
        </div>
        <div class="main" v-else-if="alert?.status === 'info'">
            <div class="wrapper">
                <svg class="checkmark info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                        fill="#50A3B9" />
                </svg>
            </div>
            <div class="content">
                <h6>Info!</h6>
                <span>{{ alert?.message }}</span>
            </div>
        </div>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <div class="progress" :class="alert?.status ? alert?.status : ''"></div>
    </div>
</template>

<script>
const success = require('@/components/common/modals/alertbox/alert.mp3');
const failed = require('@/components/common/modals/alertbox/alert-failed.mp3');
const warning = require('@/components/common/modals/alertbox/alert-warning.mp3');
const info = require('@/components/common/modals/alertbox/alert-info.mp3');
export default {
    name: "AlertBox",
    props: {
        alert: Object
    },
    data() {
        return {
            duration: null,
            mainTimeout: null,
            timeStamps: {
                started:null,
                ended:null
            },
            paused: false,
            waisted:{
                started:null,
                ended:null
            }
        }
    },
    mounted() {
        if (this.alert) {
            if (this.alert.status === 'success') {
                var sound = new Audio(success);
            }else if(this.alert.status === 'failed'){
                sound = new Audio(failed);
            }else if(this.alert.status === 'warning'){
                sound = new Audio(warning);
            }else if(this.alert.status === 'info'){
                sound = new Audio(info);
            }
            
            this.duration = this.alert.duration
            this.$refs['alertBox' + this.alert.id].querySelectorAll('.main').forEach(element => {
                element.addEventListener('mousedown', this.pauseAlert)
                element.addEventListener('mouseup', this.resumeAlert)
            });
            setTimeout(() => {
                
                
            sound.play()
            }, 100);
            setTimeout(() => {
                this.$refs['alertBox' + this.alert.id].classList.replace('hide', 'show');
            }, 1);
            this.$refs['alertBox' + this.alert.id].querySelector('.progress').classList.add('active')
            this.$refs['alertBox' + this.alert.id].querySelector('.progress').style.animationDuration = `${this.duration}ms`;
            this.timeStamps.started = Date.now();
            this.mainTimeout = setTimeout(() => {
                this.dismissal();
            },
                this.duration)
        }
    },
    methods: {
        pauseAlert() {
            this.$refs['alertBox' + this.alert.id].querySelector('.progress').style.animationPlayState = 'paused'; // Pausing Line Animation
            clearTimeout(this.mainTimeout); //Clearing functionality of removing alert
            
            if (!this.paused) {
                this.timeStamps.ended = Date.now(); //Add the current time when we paused the alert
            }else{
                this.timeStamps.ended = Date.now();
            }

            this.waisted.started = Date.now()
            
        },
        resumeAlert() {
            this.waisted.ended = Date.now()
            this.$refs['alertBox' + this.alert.id].querySelector('.progress').style.animationPlayState = 'running';
            let elapsedTime;
            elapsedTime = this.timeStamps.ended - this.timeStamps.started;
            if (!this.paused) {
                this.duration = this.alert.duration - elapsedTime;
            }else{
                let holdedTime = this.waisted.ended - this.waisted.started;
                let diff = this.timeStamps.started + holdedTime;
                elapsedTime = this.timeStamps.ended - diff;
                this.duration = this.alert.duration - elapsedTime
            }
            this.mainTimeout = setTimeout(() => {
                this.dismissal();
            },
                this.duration);
                
            this.paused = true;
        },
        dismissal() {
            this.$refs['alertBox' + this.alert.id].querySelector('.progress').classList.remove('active')
            this.$refs['alertBox' + this.alert.id].classList.replace('show', 'hide');
            setTimeout(() => {
                this.$emit('dismiss', this.alert)
            }, 1000);
        }
    }
}
</script>
<style scoped>
:root {
    --danger: #ff5050;
    --warning: #F2C010;
    --info: #50A3B9;
}

.alert {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    transition: all 1s;
    z-index: 5000;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 6px 20px -5px rgba(0, 0, 0, 0.1);
    padding: 17px 35px 17px 25px;
    font-size: 0.9em;
    max-width: 300px;
    min-width: 30vw;
    overflow: hidden;
}

.alert.hide {
    top: -10%;
}

.alert.show {
    top: 5%;
}

.main {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.main .icon {
    font-size: 1.5rem;
}

.main h6 {
    margin-bottom: 0.3px;
    font-size: 0.9rem;
    color: #333;
}

.main .content span {
    color: #666666;
}

button.close {
    font-size: 1.2rem;
    padding: 0.8rem 0.5rem;
}

.progress {
    height: 3px;
    width: 0;
    background-color: var(--theme-text);
    box-shadow: 0 0 3px 0 #0000008a;
    position: absolute;
    bottom: 0;
    left: 0;
}

.progress.failed {
    background-color: var(--danger);
}

.progress.warning {
    background-color: var(--warning);
}

.progress.info {
    background-color: var(--info);
}

.alert.show .progress.active {

    animation: progressbar linear forwards;
}

@keyframes progressbar {
    0% {
        width: 100%;
    }

    100% {
        width: 0;
    }
}


.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.checkmark__circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: var(--theme-text);
    fill: none;
    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards
}

.checkmark {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: block;
    stroke-width: 3;
    stroke: #fff;
    stroke-miterlimit: 10;
    margin: 10% auto;
    box-shadow: inset 0px 0px 0px var(--theme-text);
    animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both
}

.checkmark.failed {
    box-shadow: inset 0px 0px 0px var(--danger);
    animation: fill-failed .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both
}

.checkmark.warning {
    box-shadow: inset 0px 0px 0px #fff;
    animation: fill-warning .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both
}

.checkmark.info {
    box-shadow: inset 0px 0px 0px #50a2b936;
    animation: fill-info .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both
}


.checkmark__check {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards
}

@keyframes stroke {
    100% {
        stroke-dashoffset: 0
    }
}

@keyframes scale {

    0%,
    100% {
        transform: none
    }

    50% {
        transform: scale3d(1.1, 1.1, 1)
    }
}

@keyframes fill {
    100% {
        box-shadow: inset 0px 0px 0px 30px var(--theme-text)
    }
}

@keyframes fill-failed {
    100% {
        box-shadow: inset 0px 0px 0px 30px var(--danger)
    }
}

@keyframes fill-warning {
    100% {
        box-shadow: inset 0px 0px 0px 30px #fff
    }
}

@keyframes fill-info {
    100% {
        box-shadow: inset 0px 0px 0px 30px #fff
    }
}
</style>
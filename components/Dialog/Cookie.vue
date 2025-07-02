<script setup lang="ts">
const modal = useTemplateRef('dialog')
const conseptCookie = useCookie('conseptCookie')

const trigger = useState('dialogCookie', () => '')

watch(trigger, (val) => {
    if (trigger.value === 'Close') {
        modal.value?.close()
        trigger.value = ''
    } else {
        modal.value?.showModal()
    }
})

function open() {
    modal.value?.showModal()
}

function close() {
    modal.value?.close()
}

const setCookie = () => {
    const value = JSON.stringify({funCookie: funCookie.value, analCookie: analCookie.value, essCookie: essCookie.value})
    conseptCookie.value = encodeURIComponent(value)

    close()
}

const acceptAll = () => {
    funCookie.value = true
    analCookie.value = true
    tarCookie.value = true

    setCookie()
}

const essCookie = ref(true)
const funCookie = ref(false)
const analCookie = ref(false)
const tarCookie = ref(false)
const activeBlock = ref<Array<string>>([])

const activeIs = (block: string) => {
    if(!activeBlock.value.includes(block))
        activeBlock.value.push(block)
    else {
        var blocks = activeBlock.value
        blocks.splice(blocks.indexOf(block), 1)
        blocks = blocks.splice(blocks.indexOf(block), 1)
        activeBlock.value = blocks
    }

    console.log('activeBlock.value', activeBlock.value)
}

</script>

<template>
    <dialog ref="dialog" class="modal">
        <div class="modal__content" @click.self="close">
            <UICard title="Cookie Preferences">
                <p>This website uses the following types of services. Learn more from our <a href="/docs/Privacy.docx" rel="noopener noreferrer">Cookie Policy.</a></p>
                <ul class="sc-3hrznp-19 gknmxK">
                  <li @click="() => activeIs('essential')" :class="{'active': activeBlock.includes('essential')}">
                    <div class="sc-3hrznp-9 fUjIIz">
                      <i class="sc-AxjAm hCpdhY"></i>
                      <h2 class="sc-3hrznp-10 gzaHlT">Essential Cookies</h2>
                      <div class="sc-3hrznp-11 dBqCNS">Always Active</div>
                    </div>
                    <div class="sc-3hrznp-12 hwcIvQ">
                      <p class="sc-3hrznp-13 gDrLVY">These cookies are necessary for the Website to function and cannot be switched off in our systems as they enable core website functionality. They are used to carry out the transmission of a communication, provide you with the requested services or are set in response to actions made by you, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block these cookies, but that may cause some parts of the Website to not work properly. </p>
                    </div>
                  </li>
                  <li @click="() => activeIs('function')" :class="{'active': activeBlock.includes('function')}">
                    <div class="sc-3hrznp-9 fUjIIz">
                      <i class="sc-AxjAm hCpdhY"></i>
                      <h2 class="sc-3hrznp-10 gzaHlT">Functional Cookies</h2>
                      <div class="sc-3hrznp-5 dxXiLP">
                        <label class="sc-3hrznp-6 eEBcls">
                          <input type="checkbox" class="sc-3hrznp-7 iTqclt" v-model="funCookie">
                          <span class="sc-3hrznp-8" :class="{'dMJBeD': !funCookie, 'hXGEWI': funCookie}"></span>
                        </label>
                      </div>
                    </div>
                    <div class="sc-3hrznp-12 hwcIvQ">
                      <p class="sc-3hrznp-13 gDrLVY">These cookies are set to implement additional functionalities and/or to enhance features and website performance, improving your experience on the Website. This type of cookies allows us to recognize you when you return to the Website and to remember, for example, your choice of language and your preferences such as your region.</p>
                    </div>
                  </li>
                  <li @click="() => activeIs('analytic')" :class="{'active': activeBlock.includes('analytic')}">
                    <div class="sc-3hrznp-9 fUjIIz">
                      <i class="sc-AxjAm hCpdhY"></i>
                      <h2 class="sc-3hrznp-10 gzaHlT">Analytics Cookies</h2>
                      <div class="sc-3hrznp-5 dxXiLP">
                        <label class="sc-3hrznp-6 eEBcls">
                          <input type="checkbox" class="sc-3hrznp-7 iTqclt" v-model="analCookie">
                          <span class="sc-3hrznp-8" :class="{'dMJBeD': !analCookie, 'hXGEWI': analCookie}"></span>
                        </label>
                      </div>
                    </div>
                    <div class="sc-3hrznp-12 hwcIvQ">
                      <p class="sc-3hrznp-13 gDrLVY">These cookies allow us to recognize and count the number of users and to see how you use and explore the Website. For example, they allow us to carry out statistical analysis of page use, interactions, and paths you take through the Website to improve its performance. We use Google as a service provider to collect and analyze information about how you use the Website, including by collecting website activity data through first-party cookies set by our domains, and third-party cookies set by Google. </p>
                    </div>
                  </li>
                  <li @click="() => activeIs('target')" :class="{'active': activeBlock.includes('target')}">
                    <div class="sc-3hrznp-9 fUjIIz">
                      <i class="sc-AxjAm hCpdhY"></i>
                      <h2 class="sc-3hrznp-10 gzaHlT">Targeting Cookies</h2>
                      <div class="sc-3hrznp-5 dxXiLP">
                        <label class="sc-3hrznp-6 eEBcls">
                          <input type="checkbox" class="sc-3hrznp-7 iTqclt" v-model="tarCookie">
                          <span class="sc-3hrznp-8" :class="{'dMJBeD': !tarCookie, 'hXGEWI': tarCookie}"></span>
                        </label>
                      </div>
                    </div>
                    <div class="sc-3hrznp-12 hwcIvQ">
                      <p class="sc-3hrznp-13 gDrLVY">These cookies record your visits on the Website, the pages you visit and the links you follow to enable us to make the Website more relevant to your interests and to help us serve ads that might be of interest to you. We and our advertising partners set these cookies to provide behavioral advertising and re-marketing analytical data. If you choose to disable this type of cookies, you might still see advertisements, but they will not be tailored to your interests.</p>
                    </div>
                  </li>
                </ul>
                <div class="sc-3hrznp-20 hFEALw">
                  <button type="button" id="accetpAllButton" @click="acceptAll">Accept All</button>
                  <button type="button" id="accetpEssentialButton" @click="setCookie">Accept only Essential Cookies</button>
                  <button type="button" id="saveButton" @click="setCookie">Save Preferences</button>
                </div>
            </UICard>
        </div>
    </dialog>
    <div class="sc-3hrznp-2 iwCJUI" v-if="!conseptCookie">
      <p class="sc-3hrznp-3 bvWavN">We use cookies and similar technologies that are necessary to run our Website (essential cookies). We also use Analytics, Functionality and Targeting cookies to analyse our Website’s traffic, optimize your experience, personalize content, and serve targeted advertisements. You can switch off cookies at any time by visiting the Manage Cookies option at the footer of the page. Learn more in our <a href="/docs/Privacy.docx" rel="noopener noreferrer">Privacy Notice</a>. </p>
      <div class="sc-3hrznp-4 kyDSkK">
        <button type="button" @click="acceptAll">Accept All Cookies</button>
        <button type="button" @click="setCookie">Accept only Essential Cookies</button>
        <button type="button" @click="open">Manage my preferences</button>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.modal__content {
    color: #fff;
    a {
        color: var(--color-accent);
        text-decoration: none;
    }
}
.gknmxK {
    line-height: 1em;
    
}
.iwCJUI {
    -webkit-box-align: center;
    align-items: center;
    background: rgb(28, 28, 28);
    bottom: 40px;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    display: flex;
    flex-flow: column wrap;
    font-family: Roboto, "Droid Sans", sans-serif;
    font-size: 8px;
    height: auto;
    -webkit-box-pack: justify;
    justify-content: space-between;
    left: 50%;
    line-height: 1;
    padding: 12px 10px;
    position: fixed;
    row-gap: 10px;
    transform: translateX(-50%);
    text-size-adjust: 100%;
    width: 90%;
    z-index: 102;
    a {
        color: var(--color-accent);
        text-decoration: none;
    }
}
.bvWavN {
    -webkit-box-align: center;
    align-items: center;
    height: 100%;
    line-height: 1.2;
    text-align: center;
}
.kyDSkK {
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    flex-flow: wrap;
    height: 100%;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 0px;
    row-gap: 10px;
}
.kyDSkK button {
    background: rgb(0, 0, 0);
    border: 1px solid rgb(255, 255, 255);
    border-radius: 11px;
    color: rgb(255, 255, 255);
    cursor: pointer;
    flex-flow: wrap;
    font-size: 8px;
    font-weight: bold;
    height: 22px;
    min-width: 30%;
    width: 48%;
    padding: 0px 8px;
    text-align: center;
    text-transform: uppercase;
    font-family: "Bullet Trace 7";
}
.gknmxK li {
    border: 1px solid rgb(112, 112, 112);
    border-radius: 5px;
    display: inline-block;
    margin: 6px auto;
    padding: 12px 0px;
    width: 100%;
}
.fUjIIz {
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    padding: 0;
}
.gzaHlT {
    font: 900 18px / 22px "Bullet Trace 7";
    -webkit-box-flex: 2;
    flex-grow: 2;
    cursor: pointer;
}
.dBqCNS {
    background: #000;
    border-radius: 15px;
    color: #fff;
    font: 900 9px / 20px "Bullet Trace 7";
    height: 20px;
    letter-spacing: -0.28px;
    opacity: 1;
    text-align: center;
    text-transform: uppercase;
    width: 105px;
}
.dMJBeD {
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 34px;
    inset: 0px;
    cursor: pointer;
    position: absolute;
    transition: 0.4s;
    &::before {
        background-color: #fff;
        border-radius: 50%;
        bottom: 2px;
        content: "";
        height: 12px;
        left: 1px;
        position: absolute;
        width: 12px;
        transition: 0.4s;
        transform: none;
    }
}
.hXGEWI {
    background-color: #fff;
    border: 2px solid #fff;
    border-radius: 34px;
    inset: 0px;
    cursor: pointer;
    position: absolute;
    transition: 0.4s;
    &::before {
        background-color: #000;
        border-radius: 50%;
        bottom: 2px;
        content: "";
        height: 12px;
        left: 1px;
        position: absolute;
        width: 12px;
        transition: 0.4s;
        transform: translateX(20px);
    }
}
.dxXiLP {
    -webkit-box-align: center;
    align-items: center;
    display: flex;
}
.eEBcls {
    display: inline-block;
    height: 20px;
    position: relative;
    width: 40px;
}
.iTqclt {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9;
    width: 100%;
    height: 100%;
}
.hFEALw button:not([disabled]) {
    cursor: pointer;
    background: transparent;
}
.hFEALw button {
    border: 1px solid #fff;
    border-radius: 5px;
    color: #fff;
    font: 900 14px / 20px "Bullet Trace 7";
    height: 45px;
    padding: 0px 8px;
    text-align: center;
    width: 100%;
}
.hFEALw {
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    flex-flow: column;
    gap: 7px;
    height: 100%;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 10px 0px 0px;
    padding: 10px 20px 0px;
    width: 100%;
    max-width: 607px;
}
@media (width > $desktop) {
    .hFEALw {
        flex-flow: wrap;
        padding: 10px 0px;
    }
    .hFEALw #accetpEssentialButton, .hFEALw #saveButton {
        max-width: 203px;
    }
    .hFEALw #accetpAllButton {
        max-width: 100%;
    }
    .gknmxK li {
        border: 0px;
    }
    .gknmxK {
        max-width: 607px;
        padding: 20px 0px 10px;
    }
    .kyDSkK button {
        height: 27px;
        width: 100%;
        max-width: 200px;
    }
    .kyDSkK {
        column-gap: 14px;
        flex-flow: row;
        width: 44%;
    }
    .iwCJUI {
        flex-flow: wrap;
        font-size: 9px;
        row-gap: 1px;
    }
    .bvWavN {
        width: 54%;
        text-align: left;
    }
}
@media (width < $desktop) {
    .hCpdhY {
        cursor: pointer;
        display: block;
        height: 16px;
        margin: 6px 12px 0px 0px;
        position: relative;
        width: 14px;
    }
    .hCpdhY::before, .hCpdhY::after {
        border: 8px solid transparent;
        content: "";
        display: block;
        position: absolute;
    }
    .hCpdhY::before {
        top: 0px;
        border-top-color: rgb(155, 155, 155);
    }
    .hCpdhY::after {
        top: -2px;
        border-top-color: rgb(255, 255, 255);
    }
    .gDrLVY {
        overflow: hidden;
        line-height: 1.4;
    }
    .gknmxK {
        padding: 0;
        li {
            padding-left: 15px;
            padding-right: 15px;
            &:not(.active) {
                .hwcIvQ {
                    display: none;
                }
            }
        }
    }
    .hFEALw {
        padding-left: 0;
        padding-right: 0;
    }
    .kyDSkK button:nth-child(1) {
        font-size: 10px;
        order: 1;
        width: 100%;
        max-width: 100%;
    }
}
</style>

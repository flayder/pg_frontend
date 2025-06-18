<script setup lang="ts">
const client = useClient()

const { data: profile } = await client.get.profile()

const authenticated = computed(() => (profile.value) ? true : false)

const subscriptions = [
    {
        name: 'Amateur',
        oldPrice: '$21,99',
        price: '$15,99',
        include: '(VAT included)',
        trial: '10-day trial',
        description: 'All exclusive content',
        link: 'https://api.ccbill.com/wap-frontflex/flexforms/e6976f41-3183-412b-855d-125bb444b1f0'
    },
    {
        name: 'Professional',
        oldPrice: '$44,99',
        price: '$29,99',
        include: '(VAT included)',
        trial: '1-month trial',
        description: 'Best choice',
        link: 'https://api.ccbill.com/wap-frontflex/flexforms/615fdd27-48e3-4905-9c6a-4f84e1d191cd',
        discount: 'Save 30%',
        accent: true
    },
    {
        name: 'Hardcore',
        oldPrice: '$134,99',
        price: '$79,99',
        include: '(VAT included)',
        trial: '3-month trial',
        description: 'Play ‘em all',
        link: 'https://api.ccbill.com/wap-frontflex/flexforms/189f2afe-1601-4e95-9358-4324803cfff3',
        discount: 'Save 40%'
    }
]
</script>

<template>
    <PageMain title="What is Premium?">
        <div v-if="profile?.flexId" class="subscription">
            <header class="subscription__title">Your subscription</header>
            <div class="subscription__id">
                Subscription ID: {{ profile?.subscriptionId }}
            </div>
            <div class="subscription__description">{{ profile?.priceDescription }}</div>
            <div v-if="profile?.subscriptionExpires" class="subscription__status">
                End date: {{ new Date(profile.subscriptionExpires).toLocaleString() }}
            </div>
            <div class="subscription__renewal">
                Cost of renewal:
                <div class="subscription__price">
                    ${{ profile?.accountingInitialPrice }}
                </div>
            </div>
            <UIButtonLink to="https://support.ccbill.com" gradient>Cancel subscription</UIButtonLink>
        </div>
        <ul v-else class="subscriptions-list">
            <li v-for="(subscription, index) in subscriptions" :key="index" class="subscriptions-list__item">
                <SubscriptionCard :subscription :authenticated />
            </li>
        </ul>
    </PageMain>
</template>

<style lang="scss" scoped>
.subscription {
    color: var(--color-text);
    text-align: center;
    width: fit-content;
    padding-top: 8rem;
    margin: auto;

    &__title {
        font-family: "Bullet Trace 7";
        font-size: 2rem;
    }

    &__id {
        padding: 1rem 0;
    }

    &__status {
        font-size: 1.25rem;
        padding: 1rem 0;
    }

    &__renewal {
        font-size: 1.25rem;
    }

    &__price {
        font-size: 2.5rem;
        padding: 1rem 0;
    }
}

.subscriptions-list {
    list-style: none;
    margin: 0;
    padding: 2rem 0 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (width <=$container) {
        grid-template-columns: auto;
    }
}
</style>
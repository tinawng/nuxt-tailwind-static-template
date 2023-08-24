<script setup lang="ts">
const count = ref(1);

const increaseCount = () => {
    count.value++;
};
const decreaseCount = () => {
    count.value--;
};
</script>

<template>
    <div>
        <p>👋 Hello there</p>
        <div class="mt-5 flex items-center gap-5">
            <button
                class="bg-red-600 text-white rounded-md px-3 py-1 disabled:bg-red-300 disabled:cursor-not-allowed"
                :disabled="count === 0"
                @click="decreaseCount"
            >
                Decrease Count
            </button>
            <p>Count - {{ count }}</p>
            <button
                class="bg-green-600 text-white rounded-md px-3 py-1"
                @click="increaseCount"
            >
                Increase Count
            </button>
        </div>
    </div>
</template>

<style lang="postcss" scoped></style>

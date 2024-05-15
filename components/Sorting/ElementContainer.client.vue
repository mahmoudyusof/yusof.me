<template>
    <div class="flex justify-evenly">
        <button class="bg-violet-500 text-white rounded-xl px-5 py-2" @click="handleClickShuffle">
            <Icon name="mdi:shuffle-variant" size="25" class="mr-2" />
            Shuffle
        </button>
        <button class="bg-violet-500 text-white rounded-xl px-5 py-2" @click="() => sort('insertion')">
            <Icon name="mdi:set-split" size="25" class="mr-2" />
            Insertion
        </button>
        <button class="bg-violet-500 text-white rounded-xl px-5 py-2" @click="() => sort('quick')">
            <Icon name="mdi:speedometer" size="25" class="mr-2" />
            Quick
        </button>
        <button class="bg-violet-500 text-white rounded-xl px-5 py-2" @click="() => sort('bubble')">
            <Icon name="mdi:chart-bubble" size="25" class="mr-2" />
            Bubble
        </button>
    </div>
    <TransitionGroup tag="div" name="move" class="flex justify-center items-end h-fit space-x-2">
        <span v-for="(height, i) in arr" :key="height" :style="{ height: `${height * 10}px` }" :class="`w-3 ${color(state[i])}`"></span>
    </TransitionGroup>
</template>

<script setup lang="ts">
import { State } from '#imports';

let values = [];
for (let i = 0; i < 50; i++) {
    values.push(i + 1);
}

const arr: Ref<number[]> = ref<number[]>(values);
const state: Ref<State[]> = ref<State[]>(Array(50).fill(State.default));

onMounted(() => {
    shuffle(arr, state);
});

function color(state: State) {
    switch (state) {
        case State.default:
            return "bg-gray-200";
        case State.comparing:
            return "bg-red-800";
        case State.pivot:
            return "bg-yellow-300";
        case State.sorting:
            return "bg-emerald-600";
    }
}

function handleClickShuffle() {
    shuffle(arr, state);
}

function sort(stratigy: string) {
    switch (stratigy) {
        case 'insertion':
            insertionSort(arr, state, 0, arr.value.length - 1);
            break;
        case 'quick':
            quickSort(arr, state, 0, arr.value.length - 1);
            break;
        case 'bubble':
            bubbleSort(arr, state, 0, arr.value.length - 1);
            break;
    }

}
</script>

<style scoped>
/* 1. declare transition */
.move-move,
.move-enter-active,
.move-leave-active {
    transition: all 0.1s ease-in-out;
}

/* 2. declare enter from and leave to state */
.move-enter-from,
.move-leave-to {
    opacity: 0;
    transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.move-leave-active {
    position: absolute;
}
</style>
<template>
    <div class="space-y-24">
        <div class="knobs flex flex-row justify-evenly">
            <div class="space-y-5 flex flex-col">
                <label for="delay" id="delayLabel">Delay ({{ delay }} sec)</label>
                <input class="!ml-0" type="range" name="delay" step="0.02" min="0.06" max="2" v-model="delay" id="delay"
                    aria-labelledby="delayLabel">
            </div>
            <div class="space-y-5 flex flex-col">
                <label for="width" id="widthLabel">Element Width ({{ width }})</label>
                <input class="!ml-0" type="range" name="width" min="5" max="100" step="1" v-model="width" id="width"
                    aria-labelledby="widthLabel">
            </div>
        </div>
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
    </div>
    <TransitionGroup tag="div" :duration="delay*1000" id="elements-container" name="move"
        class="flex justify-center items-end h-fit">
        <span v-for="(height, i) in arr" :key="height" :style="{ height: `${height * width * 5 / 8}px`, width: `${width}px`, 'transition-duration': `${delay}s` }"
            :class="`rounded-t-full ${color(state[i])}`"></span>
    </TransitionGroup>
</template>

<script setup lang="ts">
import { State } from '#imports';

const delay = useState("delay", () => 0.2);

const width = shallowRef(20);
const arr: Ref<number[]> = ref<number[]>([]);
const state: Ref<State[]> = ref<State[]>([]);

const initialize = () => {
    const numElements = Math.floor(800 / width.value);
    const newValues = [];
    const newState = [];
    for (let i = 0; i < numElements; i++) {
        newValues.push(i + 1);
        newState.push(State.default);
    }
    arr.value = newValues;
    state.value = newState;

    shuffle(arr, state)
    console.log("initialized")
}


onMounted(() => {
    initialize();
});


watch(width, () => {
    initialize();
})

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
            insertionSort(arr, state, 0, arr.value.length - 1, delay);
            break;
        case 'quick':
            quickSort(arr, state, 0, arr.value.length - 1, delay);
            break;
        case 'bubble':
            bubbleSort(arr, state, 0, arr.value.length - 1, delay);
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
    /* transition-property: all;
    transition-timing-function: ease-in-out; */
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

#elements-container {
    margin: 0 auto;
    height: 500px;
    width: 800px;
}

#elements-container span {
    border: 1px solid black;
}
</style>
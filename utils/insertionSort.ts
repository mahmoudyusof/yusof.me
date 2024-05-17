import { State, swap } from "./common";

export const insertionSort = async (arr: Ref<number[]>, state: Ref<State[]>, start: number, end: number, delay: Ref<number>) => {
    for (let i = start + 1; i <= end; i++) {
        if (arr.value[i] < arr.value[i - 1]) {
            await insert(arr, state, i, start, delay);
        } else {
            state.value[i] = State.sorting;
        }
    }
}


const insert = async (arr: Ref<number[]>, state: Ref<State[]>, index: number, start: number, delay:Ref<number>) => {
    while (arr.value[index] < arr.value[index - 1] && index > start) {
        state.value[index] = State.comparing;
        state.value[index - 1] = State.comparing;
        await sleep(delay.value);
        swap(arr, index, index - 1);
        await sleep(delay.value);
        state.value[index] = State.sorting;
        state.value[index - 1] = State.sorting;
        index = index - 1;
    }
    state.value[index] = State.sorting;
}


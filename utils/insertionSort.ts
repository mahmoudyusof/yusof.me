import { State, swap } from "./common";

export const insertionSort = async (arr: Ref<number[]>, state: Ref<State[]>, start: number, end: number) => {
    for (let i = start + 1; i <= end; i++) {
        if (arr.value[i] < arr.value[i - 1]) {
            await insert(arr, state, i, start);
        } else {
            state.value[i] = State.sorting;
        }
    }
}


const insert = async (arr: Ref<number[]>, state: Ref<State[]>, index: number, start: number) => {
    while (arr.value[index] < arr.value[index - 1] && index > start) {
        state.value[index] = State.comparing;
        state.value[index - 1] = State.comparing;
        await sleep(100);
        swap(arr, index, index - 1);
        state.value[index] = State.sorting;
        state.value[index - 1] = State.sorting;
        index = index - 1;
    }
    state.value[index] = State.sorting;
}


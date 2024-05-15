import { swap, State } from "./common";


export const bubbleSort = async (arr: Ref<number[]>, state: Ref<State[]>, start: number, end: number) => {
    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end - i; j++) {
            state.value[j] = State.comparing;
            state.value[j + 1] = State.comparing;
            await sleep(100);
            if (arr.value[j] > arr.value[j + 1]) {
                swap(arr, j, j + 1);
            }
            state.value[j] = State.default;
            state.value[j + 1] = State.sorting;
        }
        state.value[end - i] = State.sorting;
    }
}
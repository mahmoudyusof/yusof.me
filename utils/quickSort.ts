import { State, sleep, swap } from "./common";

export const quickSort = async (arr: Ref<number[]>, state: Ref<State[]>, start: number, end: number, delay: Ref<number>) => {
    if (start >= end) return;
    let pivot = Math.floor((start + end) / 2);
    state.value[pivot] = State.pivot;
    let index = await partition(arr, state, start, end, pivot, delay);
    // if you want to see how it would look like if you use parallel processing
    // await Promise.all([this.quickSort(start, index - 1), this.quickSort(index, end)])
    // Note that javascript is single thrided, but this is how it WOULD look like
    await quickSort(arr, state, start, index - 1, delay);
    for (let i = start; i < index; i++) {
        state.value[i] = State.sorting;
    }
    await quickSort(arr, state, index, end, delay);
    for (let i = index; i <= end; i++) {
        state.value[i] = State.sorting;
    }
}

const partition = async (arr: Ref<number[]>, state: Ref<State[]>, start: number, end: number, pivot: number, delay: Ref<number>) => {
    var left = start;
    var right = end;
    var c = arr.value[pivot];
    while (left <= right) {
        while (arr.value[left] < c) {
            left += 1;
        }

        while (arr.value[right] > c) {
            right -= 1;
        }

        if (left <= right) {
            state.value[left] = State.comparing;
            state.value[right] = State.comparing;
            await sleep(delay.value);
            swap(arr, left, right);
            await sleep(delay.value);
            state.value[left] = State.default;
            state.value[right] = State.default;
            left += 1;
            right -= 1;
        }
    }
    return left;
}
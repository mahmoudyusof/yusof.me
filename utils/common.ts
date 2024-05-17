export enum State {
    default = 0,
    sorting = 1,
    comparing = 2,
    pivot = 3
}

export const sleep = async (s: number) => {
    return new Promise((resolve) => setTimeout(resolve, s * 1000));
}

export const swap = (arr: Ref<number[]>, i: number, j: number) => {
    [arr.value[i], arr.value[j]] = [arr.value[j], arr.value[i]];
}

export const shuffle = (arr: Ref<number[]>, state: Ref<State[]>) => {
    for (let i = arr.value.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      swap(arr, i, j);
      state.value[i] = State.default;
    }
    state.value[0] = State.default;
  }
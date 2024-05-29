<script setup lang="ts">

const loading = shallowRef<boolean>(false);
const model = shallowRef<tf.GraphModel | null>(null);
const cls = shallowRef<string>('0');
const imgs = ref<HTMLCanvasElement[]>([]);

import * as tf from '@tensorflow/tfjs';
onMounted(() => {
    console.log(imgs.value)
    tf.loadGraphModel("localstorage://generator_model")
        .then((m) => {
            model.value = m;
            loading.value = false;
            generate();
        })
        .catch((e) => {
            tf.loadGraphModel("/gen_web/model.json")
                .then((m) => {
                    model.value = m;
                    model.value.save("localstorage://generator_model");
                    loading.value = false;
                    generate();
                })
                .catch((e) => {
                    console.log(e)
                    loading.value = false;
                });
        });
})

const generate = () => {
    loading.value = true;
    const n = 8;
    tf.tidy(() => {
        const z = tf.randomNormal([n, 100]);
        const labels = tf.broadcastTo(tf.scalar(Number.parseInt(cls.value)), [n, 1]);

        let outs = model.value?.execute([z, labels]);
        if(outs) {
            outs = tf.add(outs as tf.Tensor, tf.scalar(1.0));
            outs = tf.div(outs, tf.scalar(2.0));
            let arr = [];
            for (let i = 0; i < n; i++) {
                let img = outs.slice(i, 1) as tf.Tensor3D;
                img = tf.reshape(img, [28, 28, 1]);
                img = tf.image.resizeNearestNeighbor(img, [200, 200]);
                arr.push(tf.browser.toPixels(img, imgs.value[i]));
            }
            Promise.all(arr).then((res) => {
                loading.value = false;
            });
        }
    })
}
</script>

<template>
<div class="container mx-auto p-20">
    <div class="flex justify-evenly mb-10">
        <button :disabled="loading" class="bg-violet-700 hover:bg-violet-950 px-5 py-3 rounded-3xl group text-white" @click.prevent="generate">
            <Icon :name="loading ? `mdi:loading` : `mdi:refresh`" :class="`group-hover:animate-spin ${loading ? 'animate-spin' : ''}`" size="25" />
            Generate
        </button>
        <input v-model="cls" type="range" min="0" max="9" />
        <p>{{ cls }}</p>
    </div>
    <div class="grid lg:grid-cols-4 lg:gap-14 gap-5 grid-cols-2">
        <div v-for="i in 8" :key="i" class="card">
            <canvas ref="imgs" class="w-full rounded-2xl shadow-2xl shadow-cyan-800"></canvas>
        </div>
    </div>
</div>
</template>

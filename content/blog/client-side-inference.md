---
project: cgan
slug: client-side-inference
title: "Client Side Inference with TFJS"
type: article
description: How to convert models to JavaScript compatible format, save them on the clients' browsers and load them for inference.
image: https://mahmoudyusof.github.io/seo_images/client-side-inference-meme.jpg
url: https://mahmoudyusof.github.io/cgan/client-side-inference/
---

# Client Side Inference with TFJS
This article explains everything you need to know in order to start using deeplearning models in the browser.  
In particular, we are going to talk about running inference in the browswer, since training models in the browser doesn't really make that much sense. God bless Google Colab <3

## Why?
Traditionally, we used to load a model in server (usually flask servers), send requests with the input features to that server, run inference and send the results in the response. That's fine, but if you have a big web app that handles a lot of different requests, then it makes perfect sense to outsource some of the computations to the front-end, which would improve the performance of your web app.  
The most time consuming task you might have in your webserver might be the inference task, if you outsource this task to the browser, your server is going to be blazing fast.

## How?
Sold, now tell me how to do it.  
We all know that the most used language on the browser is JavaScript. If you don't like it, then maybe this article is not for you.  
Let's see the steps that we need to go through to get what we want.  
- Install tensorflowjs-converter.
- Convert a saved model to js compatible format.
- Send the model in a response and save it in the browser.
- Load the model from the browser and run inference.

<!-- See <a class="mdlink" href="https://mahmoudyusof.github.io/general/saving-keras-models/">this article</a> to know how to save your trained models. -->

The model I am going to use in here is a generator model, you can find how to create it and save it in [this notebook](https://github.com/mahmoudyusof/hands-on-ml/blob/master/17_Generative_Models/DCGANs.ipynb)

### Installing tensorflowjs-converter
This CLI tool comes by default when you install tensorflowjs via pip.  
```shell
$ pip install tensorflowjs
```
That's it, now you have the converter installed and you can use the CLI to convert your model to the required format for TFJS.

### Converting the saved model
Before we start with the conversion, you should take a look at the `--help` option in this command.
```
$ tensorflowjs_converter --help
```
As you can see, there are multiple input formats available, since there are many ways by which you can save a model.  
In my case I used keras to create the model and saved it in a `SavedModel` format which creates a directory with a `saved_model.pb` file in it.  

Now we want to convert this model.
```
$ tensorflow_converter --input_format=tf_saved_model source/model/directory target/save/directory
```

In this command `source/model/directory` should have a file with the `pb` extension. This will output a `model.json` file and some other binary fiels in the target directory.

### Save the model in the browser
Now for some JS stuff. First install tensorflowjs in your app. You can use npm or just include the CDN link in your code directly.
- CDN `<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@2.0.0/dist/tf.min.js"></script>
`
- npm installation `$ npm install --save @tensorflow/tfjs`
- yarn installation `$ yarn add @tensorflow/tfjs`

Now let's create a funciton that responds to, for example, a click event. This function will do the following:
- Try to load the model from localStorage
    - If it fails it will load the model from the server
    - Then save the model in localStorage
- Run inference with the model
- Update UI to display results

> In the following code we will be using a GAN model to generate hand written digits. If you don't know how GANs work, basically we need a random vector and we'll pass it to the model and the model will return a 28 by 28 image. In this particular GAN we also give it a label specifying which digit we want to generate.


```js
// load the model from localstorage
tf.fromGraphModel("localstorage://saved_model_name")
    .then(model => {
        // success case, run the generate function.
        generate(model);
    }).catch(e => {
        // if you fail, load the model from the server
        tf.fromGraphModel("http://model-server-url/model_directory")
            .then(model => {
            // In the chained "then call" save the model in localstorage
            model.save("localstorage://saved_model_name");
            
            // run inference
            generate(model);
        }).catch(e => {
            console.log("some unexpected error");
            console.log(e);
        });
    });
```

Now let's take a look at the generate method and see what it does. This is where most of the tfjs stuff takes place.

```js
// import the library under the tf namespace
import * as tf from "@tensorflow/tfjs";

function generate(model){
    // tf.tidy handles garbage collection to prevent any memory leakage
    tf.tidy(() => {
        // vector of shape [batch_size, encoding_dim]
        const random_vector = tf.randomNormal([1, 100]);

        // the label tensor, shape is [batch_size, 1]
        // I am passing the data type as int32 because I want the funciton to return an int,
        // however the model accepts float numbers not ints this is why I am casting the tensor.
        const label = tf.randomUniform([1, 1], 0, 10, "int32").cast("float32");

        // generate new image
        model.execute([random_vector, label]).then(image => {
            // let's dispose of the model since we don't need it in memory any more
            model.dispose();
            // images are of shape [batch_size, 28, 28]
            // batch_size here is 1 so we can remove it by squeezing the tensor
            image = image.squeeze();

            // the output of the model ranges from -1 to 1, let's make it from 0 to 1 since the next funciton is picky
            image = tf.div(tf.add(image, tf.scalar(1)), tf.scalar(2))

            // let's now make the image of rank 3 to make it an appropriate image of shape [28, 28, 1] which means a gray scale image
            // The second argument of this function is the axis of expansion
            image = tf.expandDims(image, 2);

            // Let's now resize the image from [28, 28, 1] to [200, 200, 1].
            image = tf.image.resizeNearestNeighbor(img, [200, 200]);

            // Now let's get the canvas element, that we should create in markup, and write this image to it.
            const canvas = document.getElementById("myCanvas");
            
            tf.browser.toPixels(image, canvas)
            .then(output => {
                console.log("Success");
            }).catch(e => {
                console.log(e);
            })

            /**
             * Horrai!! you did it,
             * you just created a function that runs a GAN on the browser!
            */
        }).catch(e => {
            model.dispose();
        });
    });
}

```
> To know more check out [TFJS documentation](https://js.tensorflow.org/api/latest/)

## Demo
If you want to test the final product see [this demo](https://mahmoudyusof.github.io/projects/digit-image-generator).

# That is it, CONGRATULATIONS.
Now you can use client side inference. I should tell you that this is not recommended for resource demanding models, since they might crash the frontend because they require a lot of memory, so extract light weight models only to the client side.  

If you have any comments, questions or recommendations please reach out to me at any time, I hope this was helpful.


# Full Code

```js
// import the library under the tf namespace
import * as tf from "@tensorflow/tfjs";

function generate(model){
    // tf.tidy handles garbage collection to prevent any memory leakage
    tf.tidy(() => {
        // vector of shape [batch_size, encoding_dim]
        const random_vector = tf.randomNormal([1, 100]);

        // the label tensor, shape is [batch_size, 1]
        // I am passing the data type as int32 because I want the funciton to return an int,
        // however the model accepts float numbers not ints this is why I am casting the tensor.
        const label = tf.randomUniform([1, 1], 0, 10, "int32").cast("float32");

        // generate new image
        model.execute([random_vector, label]).then(image => {
            // images are of shape [batch_size, 28, 28]
            // batch_size here is 1 so we can remove it by squeezing the tensor
            image = image.squeeze();

            // the output of the model ranges from -1 to 1, let's make it from 0 to 1 since the next funciton is picky
            image = tf.div(tf.add(image, tf.scalar(1)), tf.scalar(2))

            // let's now make the image of rank 3 to make it an appropriate image of shape [28, 28, 1] which means a gray scale image
            // The second argument of this function is the axis of expansion
            image = tf.expandDims(image, 2);

            // Let's now resize the image from [28, 28, 1] to [200, 200, 1].
            image = tf.image.resizeNearestNeighbor(img, [200, 200]);

            // Now let's get the canvas element, that we should create in markup, and write this image to it.
            const canvas = document.getElementById("myCanvas");
            
            tf.browser.toPixels(image, canvas)
            .then(output => {
                console.log("Success");
            }).catch(e => {
                console.log(e);
            })

            /**
             * Horrai!! you did it,
             * you just created a function that runs a GAN on the browser!
            */
        });
    });
}

// load the model from localstorage
tf.fromGraphModel("localstorage://saved_model_name")
    .then(model => {
        // success case, run the generate function.
        generate(model);
    }).catch(e => {
        // if you fail, load the model from the server
        tf.fromGraphModel("http://model-server-url/model_directory")
            .then(model => {
            // In the chained "then call" save the model in localstorage
            model.save("localstorage://saved_model_name");
            
            // run inference
            generate(model);
        }).catch(e => {
            console.log("some unexpected error");
            console.log(e);
        });
    });
```
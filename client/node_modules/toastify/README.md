
# Toastify

[![Build Status](https://travis-ci.org/georgehanson/toastify.svg?branch=master)](https://travis-ci.org/georgehanson/toastify)
[![npm version](https://badge.fury.io/js/toastify.svg)](https://badge.fury.io/js/toastify)
[![npm](https://img.shields.io/npm/dt/toastify.svg)](https://www.npmjs.com/package/toastify)

Toastify is a lightweight Javascript package written in Typescript. It was created to provide toaster style notifications **without any dependencies**.

View the blog article here - [Zero Dependency Toaster Notifications](https://www.georgehanson.co.uk/zero-dependency-toaster-notifications/)

## Installation
You can install this package by simply running `npm install --save toastify` or `yarn add toastify`.

Once this has finished, you can import the package. Below is an example:
```js
import Toastify from "toastify";
```

## Usage
The Toastify package allows you to fire different levels of notifications. At present you can fire: `default`, `info`, `success`, `error` and `warning`. To do this you simply call the respective method. For example, to fire a `success` notification you would do the following:

```js
Toastify.success('Title', 'This is the body of the notification');
```

As you can see, the first parameter is the title of the notification. The second parameter is the body, which is totally optional.

## Configuration
There are a small number of options you can configure in this package. These are the `position`, `delay`, `element` and `speed`.

To set an option, you can simply call the `setOption` method. Here is an example:

```js
Toastify.setOption('delay', 10000);
```

### Position
By default, the position is set to `bottom-right`. However you can alter this to one of the following if you wish: `top-left`, `top-right`, `bottom-left`.

### Delay
The delay value determines how long this notification appears on screen before it disappears. The default value is 5 seconds (5000ms). You can alter this to any number you wish.

### Speed
The speed value determines how fast the animation is when fading in and fading out notifications. The default speed is `20` - however you can adjust this to suit your needs.

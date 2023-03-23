"use strict";
// https://egghead.io/lessons/typescript-prevent-type-widening-of-object-literals-with-typescript-s-const-assertions
// const denotes IMMUTABLE
const ORIGIN = Object.freeze({
    x: 0,
    y: 0,
});
// but alas one can still mutate "x", fix by using readonly or as const.
// const assertion will not widen out literal types. ts infers the most specific type possible which is zero
ORIGIN.x = 1;

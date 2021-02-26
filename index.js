const arrow_wasm = require("./pkg/rust_alloc");

const big1 = new arrow_wasm.WasmUint8Array(1e9);
const b1view = big1.view;
console.log("big1", big1, b1view);

const big2 = new arrow_wasm.WasmUint8Array(1e9);
const b2view = big2.view;
console.log("big2", big2, b2view);

console.log("=> incorrect")
console.log("big1", big1, b1view);
console.log("big2", big2, b2view);

console.log("=> correct")
console.log("big1", big1, big1.view);
console.log("big2", big2, big2.view);

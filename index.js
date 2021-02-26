const arrow_wasm = require("./pkg/rust_alloc");

const big1 = new arrow_wasm.WasmUint8Array(1e9);
console.log("big1", big1, big1.view);

const big2 = new arrow_wasm.WasmUint8Array(1e9);
console.log("big2", big2, big2.view);

const big3 = new arrow_wasm.WasmUint8Array(1e9);
console.log("big3", big3, big3.view);

console.log("big1", big1, big1.view);
console.log("big2", big2, big2.view);
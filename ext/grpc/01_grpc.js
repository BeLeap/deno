"use strict";

((window) => {
  const core = window.Deno.core;
  const { ops } = core;

  class Grpc {
    async test() {
      let result;
      try {
        console.log(`core:: ${JSON.stringify(core)}`);
        result = ops.op_test();
      } catch (error) {
        console.log(`error:: ${error}`);
      }
      console.log(result);

      return result;
    }
  }

  window.__bootstrap.grpc = {
    Grpc,
  };
})(this);

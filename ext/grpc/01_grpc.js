"use strict";

((window) => {
  const core = window.Deno.core;

  class Grpc {
    async test() {
      let result;
      try {
        result = await core.opAsync("op_test");
      } catch (error) {
        console.log("error");
      }
      console.log(result);

      return result;
    }
  }

  window.__bootstrap.grpc = {
    Grpc,
  };
})(this);

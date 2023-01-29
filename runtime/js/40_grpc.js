"use strict";

((window) => {
  const core = window.__bootstrap.core;
  const ops = core.ops;
  const { Grpc } = window.__bootstrap.grpc;

  function testGrpc() {
    return new Grpc();
  }

  window.__bootstrap.grpc.testGrpc = testGrpc;
})(globalThis);

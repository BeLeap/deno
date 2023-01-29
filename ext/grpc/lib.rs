use deno_core::{anyhow, include_js_files, op, Extension};

pub fn init() -> Extension {
  Extension::builder(env!("CARGO_PKG_NAME"))
    .js(include_js_files!(
      prefix "deno:ext/grpc",
      "01_grpc.js",
    ))
    .ops(vec![op_test::decl()])
    .build()
}

#[op]
fn op_test() -> Result<String, anyhow::Error> {
  return Ok(String::from("LoremIpsum"));
}

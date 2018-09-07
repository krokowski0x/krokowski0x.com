const next = require("next");
const express = require("express");
const app = next({ dev: process.env.NODE_ENV !== "production" });

app.prepare().then(() => {
  express().listen(3000);
});

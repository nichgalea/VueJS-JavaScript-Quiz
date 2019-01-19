const fs = require("fs");
const path = require("path");

const express = require("express");
const { createBundleRenderer } = require("vue-server-renderer");
const opn = require("opn");

const bundle = require("./dist/vue-ssr-server-bundle.json");
const clientManifest = require("./dist/vue-ssr-client-manifest.json");

const template = fs.readFileSync("./src/server/index.html", "utf-8");

const app = express();

const renderer = createBundleRenderer(bundle, {
  template: template,
  clientManifest,
  runInNewContext: false
});

app.use("/", express.static(path.resolve(__dirname, "./dist")));

app.get("*", (req, res) => {
  res.setHeader("Content-Type", "text/html");

  const context = {
    title: "FastTrack Test"
  };

  renderer.renderToString(context, (err, html) => {
    if (err) {
      console.log(err);

      if (err.code >= 400) {
        res.status(err.code).end();
        return;
      }

      res.status(500).send("unkown error");
      return;
    }

    res.send(html);
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);

  opn(`http://localhost:${PORT}`);
});

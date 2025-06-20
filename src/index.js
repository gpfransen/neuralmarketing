import { serveStatic } from "https://cdn.jsdelivr.net/npm/@worker-tools/serve-static/+esm";

const serve = serveStatic({ root: "./public" });

export default {
  fetch(request, env, ctx) {
    return serve.fetch(request);
  }
};

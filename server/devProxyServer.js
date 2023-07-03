require("dotenv").config();
const Koa = require("koa");
const cors = require("@koa/cors");
const koaStatic = require("koa-static");
const koaSend = require("koa-send");
const path = require("path");
const dashboard = require("./dashboard");

const app = new Koa();

const SERVER_PORT = process.env.SERVER_PORT;

app.use(cors());

app.use(koaStatic(path.join(__dirname, "../build")));

// Redirect non-API calls to React SPA
app.use(async (ctx, next) => {
  if (ctx.url.startsWith("/api") || ctx.url.startsWith("/healthcheck")) {
    await next();
  } else {
    await koaSend(ctx, "/build/index.html");
  }
});

// Register apps
app.use(koaBody());
dashboard.register(app);

// Start the Koa application
app.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});

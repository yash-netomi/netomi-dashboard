const Router = require("@koa/router");
const { fetchAssignResponse } = require("../utils/fetch-utils");

const router = new Router({ prefix: "/api/disney" });

const DISNEY_ENV = process.env.DISNEY_ENV;
const DASHBOARD_RESPONSE_URL = process.env.DASHBOARD_RESPONSE_URL;
// const DISNEY_RESPONSE_API_TOKEN = process.env.DISNEY_RESPONSE_API_TOKEN;
// const DISNEY_PASSWORD = process.env.DISNEY_PASSWORD;

router.post("/dashboard", async (ctx, next) => {
  const url = DASHBOARD_RESPONSE_URL;
  const options = {};
  options.headers = {
    ...ctx.headers,
    // "API-TOKEN": DISNEY_RESPONSE_API_TOKEN,
  };
  options.body = {
    ...ctx.request.body,
    env: DISNEY_ENV,
  };
  options.method = "POST";
  await fetchAssignResponse(url, options, ctx.response);
  next();
});

// router.post("/login", async (ctx, next) => {
//   const password = JSON.parse(ctx.request.body)["password"];
//   if (password === DISNEY_PASSWORD) {
//     ctx.response.status = 200;
//   } else {
//     ctx.response.status = 401;
//   }
//   next();
// });

module.exports = {
  register(app) {
    app.use(router.routes()).use(router.allowedMethods());
  },
};

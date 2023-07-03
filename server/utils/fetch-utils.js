const fetch = require("node-fetch");

const fetchAssignResponse = async (url, options, ctxResponse) => {
  if (!ctxResponse || !url) {
    return;
  }

  if (typeof options?.body === "object") {
    options.body = JSON.stringify(options.body);
  }

  // To avoid CORS issues
  delete options?.headers?.origin;
  delete options?.headers?.host;
  delete options?.headers?.referer;

  const logInitial = `[NETOMI] Fetching from: ${url} -`;
  try {
    const response = await fetch(url, options ?? {});
    const body = await response.text();
    if (!response.ok) {
      console.log(
        logInitial,
        `Error ❌: `,
        response.status,
        response.statusText,
        body
      );
    } else {
      console.log(
        logInitial,
        `Success ✅: `,
        response.status,
        response.statusText,
        body
      );
    }
    ctxResponse.status = response.status;
    ctxResponse.body = body;
  } catch (e) {
    console.log(logInitial, `Error ❌: `, e);
    ctxResponse.status = 500;
    ctxResponse.body = "Internal Server Error";
  }
};

function constructBody(obj, keys) {
  if (!obj || !keys || !keys?.length) {
    return;
  }

  const body = {};
  if (typeof obj === "string") {
    obj = JSON.parse(obj);
  }
  for (let key of keys) {
    body[key] = obj[key];
  }
  return body;
}

function constructBodyString(obj, keys) {
  if (!obj || !keys || !keys?.length) {
    return;
  }
  return JSON.stringify(constructBody(obj, keys));
}

const queryObjectToString = (query) => new URLSearchParams(query).toString();

module.exports = {
  fetchAssignResponse,
  constructBody,
  constructBodyString,
  queryObjectToString,
};

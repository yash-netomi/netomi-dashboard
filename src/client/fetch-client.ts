import { buildQueryString } from "./fetch-client-util";

export class FetchClient {
  public build(path: string): FetchClientChain {
    return new FetchClientChain(path);
  }
}

export class FetchClientChain {
  private _path: string;
  private readonly _init: RequestInit;

  public constructor(path: string) {
    this._path = path;
    this._init = {
      method: "GET",
      headers: new Headers(),
    };
  }

  public useQueryString<TParam>(param: TParam): FetchClientChain {
    if (param == null) {
      return this;
    }

    let concat = this._path.indexOf("?") !== -1;
    let anchorChar = concat ? "&" : "?";

    let queryString = buildQueryString(param);
    this._path += anchorChar + queryString;
    return this;
  }

  public useMethod(method: string): FetchClientChain {
    this._init.method = method;
    return this;
  }

  public useMode(mode: RequestMode): FetchClientChain {
    this._init.mode = mode;
    return this;
  }

  public useBody<T>(body: T): FetchClientChain {
    this._init.body = JSON.stringify(body);
    return this;
  }

  public useHeaders(headers: HeadersInit): FetchClientChain {
    this._init.headers = new Headers(headers);
    return this;
  }

  public async fetch<TResponse>(abortSignal?: AbortSignal): Promise<TResponse> {
    let response = await fetch(this._path, {
      ...this._init,
      signal: abortSignal,
    });

    const logInitial = `[AGENTY] Fetching from: ${this._path}`;
    if (!response.ok) {
      console.log(
        logInitial,
        `\nError ❌: `,
        response.status,
        response.statusText
      );

      throw new FetchClientHttpError(
        response.status,
        response.statusText,
        response
      );
    }

    let json = await response.json();
    console.log(logInitial, `\nSuccess ✅: `, json);
    return json as TResponse;
  }

  public async fetchNoContent(): Promise<void> {
    let response = await fetch(this._path, this._init);
    if (!response.ok) {
      console.log(
        `Fetching from: ${this._path}`,
        `\nError ❌: `,
        response.status,
        response.statusText
      );

      throw new FetchClientHttpError(
        response.status,
        `Expected '204 : No Content' but received '${response.status} : ${response.statusText}' instead.`,
        response
      );
    }
    console.log(`Fetching from: ${this._path}`, `\nSuccess ✅`);
  }
}

export class FetchClientHttpError {
  public statusMessage: string;
  public status: number;
  public response: Response;

  public constructor(
    status: number,
    statusMessage: string,
    response: Response
  ) {
    this.status = status;
    this.statusMessage = statusMessage;
    this.response = response;
  }
}

import { FetchClient } from "../client/fetch-client";
import { getBaseUrl } from "../client/fetch-client-util";
import { DashboardServiceInterface } from "../interface/dashboard-service-interface";

class DashboardService {
  private fetchClient = new FetchClient();
  private baseUrl = `${getBaseUrl()}/netomi`;

  public async getDashboard(
    query: DashboardServiceInterface,
    abortSignal?: AbortSignal
  ) {
    return this.fetchClient
      .build(`${this.baseUrl}/dashboard`)
      .useMethod("POST")
      .useHeaders({ "content-type": "application/json" })
      .useBody(query)
      .fetch<DashboardServiceInterface>(abortSignal);
  }

  //   public async getDashboard() {
  //     return this.fetchClient
  //       .build(`${this.baseUrl}/quicksight/visual`)
  //       .fetch<GetDashboardResponse>();
  //   }

  //   public async login(password: string) {
  //     return this.fetchClient
  //       .build(`${this.baseUrl}/login`)
  //       .useMethod("POST")
  //       .useBody({
  //         password,
  //       })
  //       .fetchNoContent();
  //   }
}

export const dashboardService = new DashboardService();

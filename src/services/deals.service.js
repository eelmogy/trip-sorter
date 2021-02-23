import http from "../http-common";

class DealsService {
  getAll() {
    return http.get("/deals/");
  }

  sortDeals(sortBy) {
    return http.get(`/deals?sortBy=${sortBy}`);
  }
}

export default new DealsService();
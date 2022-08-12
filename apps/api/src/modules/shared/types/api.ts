export interface APIResponse<Data> {
  data: Data;
  message: string;
}

export interface Pagination {
  page: number;
  limit: number;
}

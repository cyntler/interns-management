export const API_URL = 'https://reqres.in/api';

export type Intern = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type InternResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Intern[];
};

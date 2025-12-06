import request from './request';
import type { BulkIdsDto } from './dto.shared';
import type { GeneralPagingParams, GeneralPagingResponse } from 'typescriptset-tsdown/trustful';

export interface UserListFilter {
  begin?: number;
  end?: number;
  sex?: string;
}

interface UserListParams extends UserListFilter, Partial<GeneralPagingParams> {}

export interface User {
  id: string;
  sex: string;
  name: string;
  birthday: number;
  jobTitle: string;
  jobType: string;
}

export function getAllPeople(params?: UserListParams): Promise<GeneralPagingResponse<User[]>> {
  return request(`/mock/user`, { params });
}

interface SearchPersonParams extends Partial<GeneralPagingParams> {
  query?: string;
}

export function searchPerson(params?: SearchPersonParams): Promise<GeneralPagingResponse<User[]>> {
  return request(`/mock/user/search`, { params });
}

export function deletePerson(id: string) {
  return request.delete(`/mock/user/${encodeURIComponent(id)}`);
}

export function deletePeople(bulkIdsDto: BulkIdsDto) {
  return request.delete(`/mock/user`, {
    data: bulkIdsDto,
  });
}

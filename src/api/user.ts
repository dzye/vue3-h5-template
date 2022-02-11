import myAxios from '@/utils/request';

export function login(data: any) {
  return myAxios({
    url: '/api/login',
    method: 'post',
    data,
  });
}

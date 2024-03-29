import { User } from '~/types/user.type'
import http from '~/utils/http'
interface BodyUpdateProfile extends Omit<User, '_id' | 'role' | 'createdAt' | 'updatedAt' | 'email'> {
  password?: string
  newPassword?: string
}

export const loginAccount = (body: { email: string; password: string }) => http.post('/auth/login', body)
export const logout = () => http.post('/user/log-out')
export const updateUser = (id: unknown, params?: Omit<BodyUpdateProfile, '_id'>) =>
  http.patch<User>(`/user/update/${id}`, params)
export const getUser = (id: unknown) => http.get<User>(`/user/get-details/${id}`)
export const getAllStaff = (id: unknown) => http.get('/user/get-all-staff')
export const updateStaff = (id: unknown, params?: Omit<BodyUpdateProfile, '_id'>) =>
  http.patch<User>(`/user/${id}`, params)
export const deleteStaff = (id: unknown, params?: Omit<BodyUpdateProfile, '_id'>) => http.delete<User>(`/user/${id}`)
// export const refreshToken = (body: { refresh_token: string }) => http.post('/user/refresh-token', body)
export const refreshToken = () =>
  http.post('/user/refresh-token', {
    withCredentials: true
  })

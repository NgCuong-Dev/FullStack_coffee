import { Staff } from '~/components/Modal/CreateStaff'
import http from '~/utils/http'
import upload from '~/utils/upload'

export const getProduct = (params?: unknown) => http.get('/product/get-all', { params })
export const getAllKey = () => http.get('/key')
export const blockKey = (body: { key: string; code: string }) => http.post('/key/block-key', body)
export const removeKey = (body: { key: string }) => http.post('/key/delete-key', body)
export const searchKey = (username: string) => http.get(`/user/auth/search?q=${username}`)
export const searchUser = (email: string) => http.get(`/user/search-staff?email=${email}`)
export const searchProduct = (title: string) => http.get(`/product/search?title=${title}`)
export const searchComment = (title: string) => http.get(`/comment/search?content=${title}`)
export const searchContact = (title: string) => http.get(`/contact/search?content=${title}`)
export const searchMessage = (title: string) => http.get(`/message/search?content=${title}`)
export const deleteContact = (body: string[]) =>
  http.delete(`/contact/delete`, {
    data: {
      id: body
    }
  })
export const deleteMessage = (body: string[]) =>
  http.delete(`/message/delete`, {
    data: {
      id: body
    }
  })
export const deleteComment = (body: string[]) =>
  http.delete(`/comment/delete`, {
    data: {
      id: body
    }
  })
export const deleteStaff = (id: string) => http.delete(`/user/${id}`)
export const createKey = (body: { date: number; username: string }) => http.post('key/create', body)
export const createStaff = (body: Staff) => http.post('/user/register-staff', body)
export const createCategory = (body: any) => http.post('/category/create', body)
export const createProduct = (body: any) => upload.post('/product/create', body)
export const updateStaff = (id: string, body: any) => upload.patch(`/user/${id}`, body)
export const updateProduct = (id: string, body: any) => upload.patch(`/product/update/${id}`, body)
export const updateCategory = (id: string, body: any) => http.patch(`/category/update/${id}`, body)
export const getAllComment = (params?: unknown) => http.get('/comment/get-all-comment', { params })
// export const getAllComment = (params?: unknown) => http.get('/comment/get-all-comment', { params })
export const getAllContact = (params?: unknown) => http.get('/contact/get-all-contact', { params })
export const getAllCategory = (params?: unknown) => http.get('/category/get-category', { params })
export const getAllMessage = (params?: unknown) => http.get('/message/get-all-message', { params })
export const getAllProduct = (params?: unknown) => http.get('/product/get-all-product', { params })
export const updateProfile = (body: any) => upload.patch('/user/update', body)
export const updateConfig = (body: { title: string; price: number; url_tele: string; content: string[] }) =>
  http.post('/config/update', body)
export const getAllStaff = () => http.get('/user/get-all-staff')
export const getAllOrder = () => http.get('/order/get-order')
export const searchOrder = (name: string) => http.get(`/order/search?name=${name}`)
export const deleteOrder = (id: string) => http.delete(`/order/delete/${id}`)
export const updateOrder = (id: string, body: any) => upload.patch(`/order/update/${id}`, body)
// export const updateOrder = (id: string) => http.patch(`/order/update/${id}`)
export const searchCategory = (name: string) => http.get(`/category/search?nameCategory=${name}`)
export const getPayment = () => http.get('/payment/get-payment')
export const searchPayment = (name: string) => http.get(`/payment/search?bankName=${name}`)
export const deletePayment = (id: string) => http.delete(`/payment/delete/${id}`)
export const updatePayment = (id: string, body: any) => http.patch(`/payment/update/${id}`, body)
export const createPayment = (body: any) => upload.post('/payment/create', body)
export const deleteProduct = (body: string[]) =>
  http.delete(`/product/delete`, {
    data: {
      id: body
    }
  })
export const deleteCategory = (body: string[]) =>
  http.delete(`/category/delete`, {
    data: {
      id: body
    }
  })
export const repComment = (id: string, body: any) => http.post(`/comment/rep-comment`, body)

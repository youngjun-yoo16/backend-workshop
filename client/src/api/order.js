import axios from 'axios'

const OrderClient = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}/api/order`,
  timeout: 1000,
})

// TODO: Create CRUD (Create, Read/get, Update, Delete) operations for orders

export const createOrder = () => OrderClient

export const getOrder = () => OrderClient

export const getOrders = () => OrderClient

export const updateOrder = () => OrderClient

export const deleteOrder = () => OrderClient
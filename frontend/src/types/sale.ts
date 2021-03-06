import {Seller} from './seller'
export type SaleSum = {
  sellerName: string,
  sum: number,
}

export type SaleSeccess = {
  sellerName: string,
  visited: number,
  deals: number,
}

export type Sale = {
    id: number,
    visited: number,
    deals: number,
    amount: number,
    date: string,
    seller: Seller,
}

export type SalePage = {
  content?: Sale[],
  last: boolean,
  totalElements: number,
  totalPages: number,
  size?: number,
  number: number,
  numberOfElements?: number,
  first: boolean,
  empty?: boolean,
}

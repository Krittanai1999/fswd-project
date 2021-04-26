import { gql } from '@apollo/client'
export const PRODUCT_QUERY = gql`
query{
  products (sort: _ID_DESC){
    _id
    name
    slug
    description
    type
    quantity
    price
    imageUrl
    tags
    timestamp
  }
}
`

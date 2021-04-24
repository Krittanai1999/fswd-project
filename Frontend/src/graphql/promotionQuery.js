import { gql } from '@apollo/client'
export const PROMOTION_QUERY = gql`
query{
  promotions (sort: _ID_DESC){
    _id
    name
    amount
    discount
    productId
    timestamp
    product{
      name
      price
    }
    total
  }
}
`

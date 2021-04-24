import { gql } from '@apollo/client'
export const CUSTOMER_QUERY = gql`
query{
  customers{
    author{
      name
      username
    }
    nameAddress
    address
    email
    tel
  }
}
`
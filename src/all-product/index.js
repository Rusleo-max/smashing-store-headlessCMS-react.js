import gql from "graphql-tag";

const PRODUCT_QUERY = gql`
    query {
        productses {
            id
            name
            price
            description
            createAt
            image {
                id
                url
            }
        }
    }
`;

export default PRODUCT_QUERY;
import { useQuery, gql } from '@apollo/client'; //HOOK USE TO QUERY THE DATA
 //Creation of query 
const GET_CHARACTERS = gql`
    query {
        characters {
            results{
                id
                name
                image
            }
        }
    }
`

export const useCharacters = () => {
    //destructure to get only the specific properties from the object
    const {error, data, loading} = useQuery(GET_CHARACTERS) //paste the query inside the useQuery hook
    console.log(error, loading, data)

    return{
        error,
        data,
        loading,
    }

}
import React from 'react';
import { useQuery, gql } from '@apollo/client'; //HOOK USE TO QUERY THE DATA
import "./CharactersList.css"
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


const Characterslist = () => {

    //destructure to get only the specific properties from the object
    const {error, data, loading} = useQuery(GET_CHARACTERS) //paste the query inside the useQuery hook
    console.log(error, loading, data)

    if(loading)return <div>spinner...</div>
    if(error)return <div>something went wrong...</div>

    return (
        <div className="CharacterList">
            {data.characters.results.map(character => {
                return  <div key={character.id}>
                    <img src={character.image} alt="" />
                    <h2>{character.name}</h2>
                </div>
            } )}
            
        </div>
    );
}

export default Characterslist;

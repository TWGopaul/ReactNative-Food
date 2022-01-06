import { useEffect, useState } from "react";
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    // Set up and execute search query using yelp API
    const searchApi = async(searchTerm) => {
        console.log("searchApi called");
        if (errorMessage) {
            setErrorMessage('');
        }
        
        try{
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'Maryland'
                }
            });
            setResults(response.data.businesses);
        } catch(err){
            setErrorMessage('Something went wrong.');
        }
    };

    /* 
     * Displaying an initial search so screen is not empty
    */

    // Call searchApi when component is first rendered -- BAD!!!
    // Infinite loop!!!
    // searchApi('pasta');
    useEffect(() => {
        searchApi('pasta')        
    }, [])

    // Returning what is needed for SearchScreen.js JSX
    return[searchApi, results, errorMessage];
};
import React, { useCallback, useContext, useEffect, useState } from "react";

const URL = "https://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({children})=>{
    const [search, setSearch]  = useState("The Lost World");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");


    const fetchBooks = useCallback(async()=>{
        setLoading(true);
        try {
            const response = await fetch(`${URL}${search}`);
            const data = await response.json();
            console.log(data);
            const {docs} = data;
             console.log(docs);
             if(docs){
                const newBooks = docs.slice(0, 20).map((bookSingle)=>{
                    const {key,author_name , cover_i, edition_count, first_publish_year, title} = bookSingle;

                    return{
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title
                    }
                });

                setBooks(newBooks);

                if(newBooks.length > 1){
                    setResultTitle("Your Search Result")
                }else{
                    setResultTitle("No Search Result Found!")
                }
             }else{
                setBooks([]);
                setResultTitle("No Search Result Found!")
             }
             setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    },[search]);

    useEffect(()=>{
        fetchBooks();

    },[search, fetchBooks]);

    return(
        <AppContext.Provider value={{
            loading, books, setSearch, resultTitle, setResultTitle
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}
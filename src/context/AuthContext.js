import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [ticketMasterResults, setTicketMasterResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function handle() {
            await handleSearch();
        }
        handle();
    }, [])

    const searchTicketMaster = async () => {
        try {
            const ticketMasterUrl = `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&keyword=${searchTerm}&apikey=x9TAS10ua31T7nONj8geuWe7Cnp7OixA`;
            const response = await fetch(ticketMasterUrl);
            const data = await response.json();
            console.log(data)
            if (data._embedded && data._embedded.events) {
                setTicketMasterResults(data._embedded.events);
            }
        } catch (error) {
            console.error('Error searching TicketMaster:', error);
        }
    };

    // const searchYouTube = async () => {
    //     try {
    //         const youtubeUrl = `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&key=AIzaSyB22vBAJfhPcrzhkZxWoxi9k4ZU784nErc`;
    //         const response = await fetch(youtubeUrl);
    //         const data = await response.json();

    //         if (data.items) {
    //             setYoutubeResults(data.items);
    //         }
    //     } catch (error) {
    //         console.error('Error searching YouTube:', error);
    //     }
    // };

    const handleSearch = async () => {
        // await searchYouTube();
        await searchTicketMaster();
    };

    return (
        <AuthContext.Provider value={{
            ticketMasterResults,
            setSearchTerm,
            handleSearch
        }}>
            {children}
        </AuthContext.Provider>
    )
}
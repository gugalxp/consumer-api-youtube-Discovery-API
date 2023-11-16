import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [ticketMasterResults, setTicketMasterResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [youtubeResults, setYoutubeResults] = useState([]);
    
    useEffect(() => {
        async function handle() {
            await handleSearch();
        }
        handle();
    }, [])

    const searchTicketMaster = async () => {
        try {
            const ticketMasterUrl = `${process.env.NEXT_PUBLIC_BASE_URL_TICKET}${searchTerm}&apikey=${process.env.NEXT_PUBLIC_KEY_TICKET}`;
            const response = await fetch(ticketMasterUrl);
            const data = await response.json();
            if (data._embedded && data._embedded.events) {
                setTicketMasterResults(data._embedded.events);
            }
        } catch (error) {
            console.error('Error searching TicketMaster:', error);
        }
    };

    const searchYouTube = async () => {
        try {
            const youtubeUrl = `${process.env.NEXT_PUBLIC_BASE_URL_YOUTUBE}${searchTerm}&part=snippet&key=${process.env.NEXT_PUBLIC_KEY_YOUTUBE}`;
            const response = await fetch(youtubeUrl);
            const data = await response.json();

            if (data.items) {
                setYoutubeResults(data.items);
            }
        } catch (error) {
            console.error('Error searching YouTube:', error);
        }
    };

    const handleSearch = async () => {
        await searchYouTube();
        await searchTicketMaster();
    };

    return (
        <AuthContext.Provider value={{
            ticketMasterResults,
            setSearchTerm,
            handleSearch,
            youtubeResults
        }}>
            {children}
        </AuthContext.Provider>
    )
}
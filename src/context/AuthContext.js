import { createContext, useState, useEffect } from "react";
import axios from "axios";

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
            const response = await axios.get(ticketMasterUrl);
            const data = response.data;

            if (data._embedded && data._embedded.events) {
                setTicketMasterResults(data._embedded.events);
            }
        } catch (error) {
            console.error('Error searching TicketMaster:', error);
        }
    };

    const searchYouTube = async () => {
        try {
            const youtubeUrl = `${process.env.NEXT_PUBLIC_BASE_URL_YOUTUBE}${searchTerm}&part=snippet&key=AIzaSyDMLJKHTQF1Mv8qUlMb8xLNi5RYNxYrSFM`;
            const response = await axios.get(youtubeUrl);
            const data = response.data;

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
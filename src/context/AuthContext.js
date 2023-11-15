import { createContext , useState } from "react";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [ticketMasterResults, setTicketMasterResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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

    return (
        <AuthContext.Provider value={{
            ticketMasterResults,
            searchTicketMaster,
            setSearchTerm
        }}>
            {children}
        </AuthContext.Provider>
    )
}
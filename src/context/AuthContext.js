import { useFetch } from "../hooks/useFetch";
import { createContext, useState } from "react";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [ticketMasterResults, setTicketMasterResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [youtubeResults, setYoutubeResults] = useState([]);

  const { data: ticketMasterData, error: ticketMasterError } = useFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_TICKET}${searchTerm}&apikey=${process.env.NEXT_PUBLIC_KEY_TICKET}`
  );

  const { data: youtubeData, error: youtubeError } = useFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_YOUTUBE}${searchTerm}&part=snippet&key=${process.env.NEXT_PUBLIC_KEY_YOUTUBE}`
  );

  const searchTicketMaster = async () => {
    if (ticketMasterData && ticketMasterData._embedded && ticketMasterData._embedded.events) {
      setTicketMasterResults(ticketMasterData._embedded.events);
    }
  };

  const searchYouTube = async () => {
    if (youtubeData && youtubeData.items) {
      setYoutubeResults(youtubeData.items);
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
      youtubeResults,
      searchTerm
    }}>
      {children}
    </AuthContext.Provider>
  )
}
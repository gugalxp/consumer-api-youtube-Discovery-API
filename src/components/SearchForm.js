// components/SearchForm.js
import React from 'react';
import { Input, Button, VStack } from '@chakra-ui/react';

const SearchForm = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <VStack bg="rgba(0,0,0,1)" p={4} align="center" spacing={4}>
      <Input
        placeholder="Digite o nome da banda ou artista"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        color="#fff"
        w="50%"
        bg="#020024"
        h="3em"
      />
      <Button mb={10} bg="#f000d7" color="#fff" onClick={handleSearch}>
        Pesquisar
      </Button>
    </VStack>
  );
};

export default SearchForm;

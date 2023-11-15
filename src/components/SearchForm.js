import React, { useContext, useState } from 'react';
import { Input, Button, VStack, Heading } from '@chakra-ui/react';
import { AuthContext } from "../context/AuthContext";

const SearchForm = () => {
  const { setSearchTerm, handleSearch, searchTerm } = useContext(AuthContext);

  return (
    <VStack bg="rgba(0,0,0,1)" p={4} align="center" spacing={4}>
      <Heading as="h1" color="#fff" size="xl" mb="2em">
        Buscar Bandas e Artistas
      </Heading>
      <Input
        placeholder="Digite o nome da banda ou artista"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        color="#fff"
        w="50%"
        bg="#020024"
        h="3em"
      />
      <Button
        mb={10}
        bg="#f000d7"
        color="#fff" onClick={handleSearch}>
        Pesquisar
      </Button>
    </VStack>
  );
};

export default SearchForm;

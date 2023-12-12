import React, { useContext, useState } from 'react';
import { Element } from "react-scroll";
import { Input, Button, VStack, Heading } from '@chakra-ui/react';
import { AuthContext } from "../context/AuthContext";

const SearchForm = () => {
  const { setSearchTerm, handleSearch, searchTerm } = useContext(AuthContext);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Element id="searchForm">
      <VStack bg="rgba(0,0,0,1)" p={4} align="center" spacing={4}>
        <Heading data-aos="fade-up" data-aos-delay="100" as="h1" color="#fff" size="xl" mt="2em" mb="1.5em">
          Buscar Bandas e Artistas
        </Heading>
        <Input
          data-aos="fade-up" data-aos-delay="100"
          placeholder="Digite o nome da banda ou artista"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          color="#fff"
          w={{ base: "100%", md: "50%" }}
          bg="#020024"
          h="3em"
          onKeyPress={handleKeyPress}
        />
        <Button
          mb={10}
          mt={3}
          bg="#f000d7"
          color="#fff" onClick={handleSearch}>
          Pesquisar
        </Button>

      </VStack>
    </Element>

  );
};

export default SearchForm;

import React from 'react';
import { VStack, Heading, Box, Text, Flex, Image, Button } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { AuthContext } from "../context/AuthContext";
import Pagination from './Pagination';

const BandInfo = () => {

  const { ticketMasterResults } = useContext(AuthContext);

  const [currentPage, setCurrentPage] = useState(1);
  const tickerPerPage = 5;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(ticketMasterResults.length / tickerPerPage);

  const currentTicker = ticketMasterResults.slice(
    (currentPage - 1) * tickerPerPage,
    currentPage * tickerPerPage
  );

  return (
    <VStack  spacing={4}>
      <Heading borderBottom="1px" fontSize="22px" color="#fff" w="100%" padding={5} as="h2" size="md">
        <span style={{ color: '#f000d7' }}>Ingressos</span> Bandas/Artistas
      </Heading>
      {currentTicker.map((event) => (
        <Box key={event.id} data-aos="fade-up" data-aos-delay="100" border="1px" bg="#020024"  boxShadow="#121212" width="100%" borderRadius="md" p={4} >
          <Flex direction={{ base: "column", md: "row" }} alignItems="start">
            <Image borderRadius="8px" w="107px" h="67px" objectFit="cover" mb={2} src={event.images && event.images.length > 0 ? event.images[0].url : 'URL_PADRAO_SE_NAO_HOUVER'} alt={event.name} />
            <Box p="0 3em">
              <Text fontWeight="bold" color="#fff" fontSize="lg">{event.name}</Text>
              {event.dates?.start?.localDate && (
                <Text mb={2} fontSize="sm" color="gray.500">Date: {new Date(event.dates.start.localDate).toLocaleDateString()}</Text>
              )}
              {event._embedded?.venues?.[0]?.city && (
                <Text fontSize="sm" color="gray.500">City: {event._embedded.venues[0].city.name}, {event._embedded.venues[0].state?.stateCode}</Text>
              )}

              {event.classifications?.map((classification) => (
                <VStack key={classification.segment?.id} align="start" spacing={2} mt={2}>
                  {classification.segment && (
                    <Text fontSize="sm" color="gray.500">Categoria: {classification.segment.name}</Text>
                  )}
                  {classification.genre && (
                    <Text fontSize="sm" color="gray.500">Gênero: {classification.genre.name !== "Undefined" ? classification.genre.name : "Não especificado"}</Text>
                  )}

                  {classification.type && (
                    <Text fontSize="sm" color="gray.500">Tipo: {classification.type.name}</Text>
                  )}
                </VStack>
              ))}

              <Text fontSize="md" mt={2} color="gray.500">
                {event.info && event.info.length > 150
                  ? `${event.info.substring(0, 150)}...`
                  : event.info}
              </Text>
              {event.url && (
                <Button marginTop={3} colorScheme="blue" as="a" href={event.url} target="_blank" rel="noopener noreferrer">
                  Comprar Ingresso
                </Button>
              )}

            </Box>

          </Flex>
        </Box>
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </VStack>

  );
};

export default BandInfo;

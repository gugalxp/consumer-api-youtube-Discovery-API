import React from 'react';
import { VStack, Heading, Box, Text, Image, Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from "../context/AuthContext";

const BandInfo = () => {

  const { ticketMasterResults } = useContext(AuthContext);

  return (
    <VStack align="start" spacing={4}>
      <Heading borderBottom="1px" fontSize="22px" color="#fff" w="100%" padding={5} as="h2" size="md">
        <span style={{ color: '#f000d7' }}>Ingressos</span> Bandas/Artistas
      </Heading>
      {ticketMasterResults.map((event) => (
        <Box key={event.id} border="1px" boxShadow="#121212" width="100%" borderRadius="md" p={4} >
          <Image w={305} h={225} objectFit="cover" mb={2} src={event.images && event.images.length > 0 ? event.images[0].url : 'URL_PADRAO_SE_NAO_HOUVER'} alt={event.name} />
          <Text fontWeight="bold" color="#fff" fontSize="lg">{event.name}</Text>
          {event.dates?.start?.localDate && (
            <Text mb={2} fontSize="sm" color="gray.500">Date: {new Date(event.dates.start.localDate).toLocaleDateString()}</Text>
          )}
          {event._embedded?.venues?.[0]?.city && (
            <Text fontSize="sm" color="gray.500">City: {event._embedded.venues[0].city.name}, {event._embedded.venues[0].state?.stateCode}</Text>
          )}
          {event.promoter && (
            <Text fontSize="md" color="gray.500" mt={2}>{event.promoter.name}</Text>
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
              {classification.subType && (
                <Text fontSize="sm" color="gray.500">Subtipo: {classification.subType.name}</Text>
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
      ))}
    </VStack>
  );
};

export default BandInfo;

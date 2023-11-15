// pages/index.js
import { useState, useEffect } from 'react';
import { Box, Button, Heading, Input, VStack, Text, Flex, Image, Grid } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const PageSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [youtubeResults, setYoutubeResults] = useState([]);
    const [ticketMasterResults, setTicketMasterResults] = useState([]);

    useEffect(() => {
        async function handle() {
            await handleSearch();
        }
        handle()

    }, [])

    const searchYouTube = async () => {
        try {
            const youtubeUrl = `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&key=AIzaSyB22vBAJfhPcrzhkZxWoxi9k4ZU784nErc`;
            const response = await fetch(youtubeUrl);
            const data = await response.json();

            if (data.items) {
                setYoutubeResults(data.items);
            }
        } catch (error) {
            console.error('Error searching YouTube:', error);
        }
    };

    const searchTicketMaster = async () => {
        try {
            const ticketMasterUrl = `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&keyword=${searchTerm}&apikey=x9TAS10ua31T7nONj8geuWe7Cnp7OixA`;
            const response = await fetch(ticketMasterUrl);
            const data = await response.json();

            if (data._embedded && data._embedded.events) {
                setTicketMasterResults(data._embedded.events);
            }
        } catch (error) {
            console.error('Error searching TicketMaster:', error);
        }
    };

    const handleSearch = async () => {
        await searchYouTube();
        await searchTicketMaster();
    };

    const bounce = keyframes`
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }
    `;

    return (
        <Box>
            <Box position="relative">
                <Image h="100vh" w="100vw" src="/assets/banner.jpeg" style={{ filter: 'brightness(0.2)' }} />
                <Flex
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    flexDirection="column"
                    alignItems="center"
                    textAlign="center"
                    color="#fff"
                >
                    <Heading
                        as="h1"
                        fontSize="28px"
                        mb="0.5em"
                        fontFamily="cursive"
                        textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
                        animation={`${bounce} 2s infinite`}
                    >
                        Aqui você busca por artistas, bandas e compra ingressos dos seus shows preferidos.

                    </Heading>
                </Flex>
            </Box>
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

            <Grid bg="rgba(0,0,0,1)" p={4} templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
                {/* Resultados do YouTube */}
                <VStack align="start" spacing={4}>
                    <Heading borderBottom="1px" fontSize="22px" color="#fff" w="100%" padding={5} as="h2" size="md">
                        <span style={{ color: '#f000d7' }}>Videos</span> Bandas/Artistas
                    </Heading>
                    {youtubeResults.map((video) => (
                        <Box mb={2} border="1px" boxShadow="#121212" key={video.id.videoId} boxShadow="lg" width="100%" borderRadius="md" p={4} >
                            <a
                                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image mb={2} src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
                                <Text fontWeight="bold" color="#fff" fontSize="lg">{video.snippet.title}</Text>
                            </a>
                            <Text fontSize="sm" color="gray.500"> {video.snippet.channelTitle}</Text>
                            <Text fontSize="sm" color="gray.500" mt={2}>{new Date(video.snippet.publishedAt).toLocaleDateString()}</Text>
                            {video.contentDetails && video.contentDetails.duration && (
                                <Text fontSize="sm" color="gray.500" mt={2}>
                                    Duração: {formatDuration(video.contentDetails.duration)}
                                </Text>
                            )}
                            <Text fontSize="md" color="gray.500" mt={2}>{video.snippet.description}</Text>
                            <Button fontSize="sm" colorScheme="blue" color="#fff" mt={2}>
                                <a
                                    href={`https://www.youtube.com/channel/${video.snippet.channelId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ver Canal
                                </a>
                            </Button>
                        </Box>
                    ))}
                </VStack>

                {/* Resultados do TicketMaster */}

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

                            {/* Informações de Classificação */}
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
            </Grid>
        </Box>
    );


};

export default PageSearch;

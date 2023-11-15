// pages/index.js
import { useState, useEffect, useContext } from 'react';
import { Box, Button, Heading, Input, VStack, Text, Flex, Image, Grid } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { AuthContext } from "../../context/AuthContext";
import BandInfo from "../../components/BandInfo";

const PageSearch = () => {
      const { searchTicketMaster, setSearchTerm, searchTerm } = useContext(AuthContext);

      useEffect(() => {
        async function handle() {
            await handleSearch();
        }
        handle()

    }, [])

    // const searchYouTube = async () => {
    //     try {
    //         const youtubeUrl = `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&key=AIzaSyB22vBAJfhPcrzhkZxWoxi9k4ZU784nErc`;
    //         const response = await fetch(youtubeUrl);
    //         const data = await response.json();

    //         if (data.items) {
    //             setYoutubeResults(data.items);
    //         }
    //     } catch (error) {
    //         console.error('Error searching YouTube:', error);
    //     }
    // };


    const handleSearch = async () => {
        // await searchYouTube();
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
                <Image h="100vh" w="100vw" objectFit="cover" src="/assets/banner.jpeg" style={{ filter: 'brightness(0.2)' }} />
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
                {/* Componete 1 */}
                <BandInfo />
                {/* Componete 2 */}
            </Grid>
        </Box>
    );


};

export default PageSearch;

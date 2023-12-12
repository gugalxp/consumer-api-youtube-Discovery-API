import React from 'react';
import { Heading, Box, Image, Flex, Button, Text, useStyleConfig } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Banner = () => {
  const handleButtonClick = () => {
    scroll.scrollTo("#searchForm", {
      duration: 1000,
      smooth: "easeInOutQuart",
    });
  };

  const colorChange = keyframes`
  0% {
    border-color: #3498db; /* Azul */
  }
  50% {
    border-color: #ec407a; /* Rosa */
  }
  100% {
    border-color: #3498db; /* Azul novamente */
  }
`;

  const shadowChange = keyframes`
  0% {
    box-shadow: 0 0 10px #3498db; /* Azul */
  }
  25% {
    box-shadow: 0 0 10px #ec407a; /* Rosa */
  }
  50% {
    box-shadow: 0 0 10px #e74c3c; /* Vermelho */
  }
  75% {
    box-shadow: 0 0 10px #f39c12; /* Amarelo */
  }
  100% {
    box-shadow: 0 0 10px #3498db; /* Azul novamente */
  }
`;

  return (
    <Box w="100%" position="relative" overflow="hidden">
      <Image
        position="relative"
        h="100vh"
        w="100vw"
        objectFit="cover"
        src="/assets/banner.jpeg"
        style={{ filter: 'brightness(0.2)' }}
      />

      <Flex
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        color="#fff"
        gap={5}
        w={{ base: "96%", md: "auto" }}
        h={{ base: "96vh", md: "auto" }}
      >

        <Box
          border="1px solid"
          backdropFilter="blur(10px)"
          borderRadius="8px"
          p={{ base: 4, md: 8 }}
          borderColor="#3498db"
          animation={`${colorChange} 3s infinite`}
        >
          <Flex justifyContent="center" alignItems="center" direction="row">
            <Heading mt={6} mb={10} textAlign="center" color="#3498db">Videos/<Text color="#f000d7">Ingressos</Text></Heading>
          </Flex>
          <Flex direction="column" justifyContent="center">
            <Text textAlign="center">
              Descubra o melhor da música com nossa plataforma! Encontre os vídeos mais recentes e emocionantes de seus cantores favoritos. Clique abaixo para iniciar sua jornada musical e explore apresentações ao vivo incríveis. Reserve ingressos para os shows mais esperados de seus artistas preferidos e garanta seu lugar inesquecível na próxima apresentação. Toque no botão abaixo para começar a busca por vídeos e ingressos agora.
            </Text>
            <ScrollLink to="searchForm" smooth={true} duration={1000}>
              <Flex justifyContent="center" alignItems="center">
                <Button mt={12} bg="#fff" onClick={handleButtonClick}
                  color="#f000d7"
                  sx={{
                    boxShadow: '0 0 10px #3498db', // Sombra inicial (azul)
                    animation: `${shadowChange} 5s infinite`, // Ajuste o tempo conforme desejado
                  }}
                >
                  Buscar Videos/Ingressos
                </Button>
              </Flex>
            </ScrollLink>
          </Flex>
        </Box>

      </Flex>
    </Box>
  );
};

export default Banner;

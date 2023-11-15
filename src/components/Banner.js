// components/BandInfo.js
import React from 'react';
import { Heading, Box, Image, Flex } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const Banner = () => {

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
    );
};

export default Banner;

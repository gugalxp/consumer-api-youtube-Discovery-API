// components/VideoList.js
import React from 'react';
import { Box, Text, Image, Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from "../context/AuthContext";

const VideoList = () => {

  const { youtubeResults } = useContext(AuthContext);
  
  return (
    <Box>
      <VStack align="start" spacing={4}>
        <Heading borderBottom="1px" fontSize="22px" color="#fff" w="100%" padding={5} as="h2" size="md">
          <span style={{ color: '#f000d7' }}>Videos</span> Bandas/Artistas
        </Heading>
        {youtubeResults.map((video) => (
          <Box mb={2} border="1px" boxShadow="#121212" key={video.id.videoId} width="100%" borderRadius="md" p={4} >
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
    </Box>
  );
};

export default VideoList;

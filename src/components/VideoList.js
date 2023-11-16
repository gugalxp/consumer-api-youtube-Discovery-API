import React from 'react';
import { Box, Text, Image, Button, VStack, Heading } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { AuthContext } from "../context/AuthContext";
import Pagination from "../components/Pagination";

const VideoList = () => {

  const { youtubeResults } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 5;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(youtubeResults.length / videosPerPage);

  const currentVideos = youtubeResults.slice(
    (currentPage - 1) * videosPerPage,
    currentPage * videosPerPage
  );

  return (
    <VStack align="center" spacing={4}>
      <Heading borderBottom="1px" fontSize="22px" color="#fff" w="100%" padding={5} as="h2" size="md">
        <span style={{ color: '#f000d7' }}>Videos</span> Bandas/Artistas
      </Heading>
      {currentVideos.map((video) => (
        <Box data-aos="fade-up" data-aos-delay="100" border="1px" boxShadow="#121212" bg="#020024" key={video.id.videoId} width="100%" borderRadius="md" p={4} >
          <a
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image objectFit="cover" borderRadius="8px" mb={2} src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
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
      {youtubeResults.length > 5 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </VStack>
  );
};

export default VideoList;

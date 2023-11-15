import { Box, Button, Flex } from "@chakra-ui/react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <Button
          key={i}
          variant={i === currentPage ? "solid" : "outline"}
          color="#f000d7"
          onClick={() => onPageChange(i)}
          m={1} 
        >
          {i}
        </Button>
      );
    }
    return buttons;
  };

  return (
    <Flex justify="center" my={4}>
      <Box>
        <Button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          mr={2}
          bg="#f000d7"
          color="#fff"
        >
          Anterior
        </Button>
        {renderPageButtons()}
        <Button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          ml={2}
          bg="#f000d7"
          color="#fff"
        >
          Próxima
        </Button>
      </Box>
    </Flex>
  );
};

export default Pagination;

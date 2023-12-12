import { Box, Button, Flex } from "@chakra-ui/react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

// ... importações e código anterior ...

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };
  const renderPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <Button
          key={i}
          variant={i === currentPage ? "solid" : "outline"}
          color={i === currentPage ? "#fff" : "#f000d7"}
          onClick={() => onPageChange(i)}
          m={1}
          bg={i === currentPage ? "#f000d7" : "#fff"}
        >
          {i}
        </Button>
      );
    }
    return buttons;
  };

  return (
    <Flex justify="center" my={4}>
      {totalPages !== 0 && (
        <Box>
          <Button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            bg="#020024"
            color="#f000d7"
          >
            <SlArrowLeft />
          </Button>
          {renderPageButtons()}
          <Button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            bg="#020024"
            color="#f000d7"
          >
            <SlArrowRight />
          </Button>
        </Box>
      )}
    </Flex>
  );
};

export default Pagination;

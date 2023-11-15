// pages/index.js
import { Box, Grid } from '@chakra-ui/react';
import BandInfo from "../../components/BandInfo";
import SearchForm from "../../components/SearchForm";
import Banner from "../../components/Banner";

const PageSearch = () => {

    return (
        <Box>
            <Banner />
            <SearchForm />
            <Grid bg="rgba(0,0,0,1)" p={4} templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
                <BandInfo />
                {/* Componete 2 */}
            </Grid>
        </Box>
    );
};

export default PageSearch;

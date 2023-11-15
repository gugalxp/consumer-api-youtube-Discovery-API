import { Box, Grid } from '@chakra-ui/react';
import BandInfo from "../../components/BandInfo";
import SearchForm from "../../components/SearchForm";
import Banner from "../../components/Banner";
import VideoList from "../../components/VideoList";

const PageSearch = () => {

    return (
        <Box>
            <Banner />
            <SearchForm />
            <Grid bg="rgba(0,0,0,1)" p={4} templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
                <VideoList />
                <BandInfo />
            </Grid>
        </Box>
    );
};

export default PageSearch;

import Posts from "@/components/Posts/Posts";
import { Box, Card, Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Container>
        <Box>
          <Typography variant="h1" fontWeight={"900"}>
            Hello World ~
          </Typography>
          <Posts />
        </Box>
      </Container>
    </main>
  );
}

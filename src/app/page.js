import { Box, Card, Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Container>
        <Box>
          <Card className="mt-20">
            <Typography variant="h1" fontWeight={'900'}>Hello World ~</Typography>
          </Card>
        </Box>
      </Container>
    </main>
  );
}

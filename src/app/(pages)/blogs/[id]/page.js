import { Box, Card, Container, Typography } from "@mui/material";
import React from "react";

const BlogDetails = ({ params, searchParams }) => {
  console.log(searchParams);
  return (
    <main>
      <Container>
        <Box>
          <Card className="mt-20">
            <Typography variant="h1" fontWeight={"900"}>
              Blog No. {params.id}
            </Typography>
          </Card>
        </Box>
      </Container>
    </main>
  );
};

export default BlogDetails;

import Posts from "@/components/Posts/Posts";
import { Box, Card, Container, Typography } from "@mui/material";
import React from "react";

const BlogsPage = () => {
  return (
    <main>
      <Container>
        <Box>
          <Typography variant="h1" fontWeight={"900"}>
            Blogs
          </Typography>

          <Posts />
        </Box>
      </Container>
    </main>
  );
};

export default BlogsPage;

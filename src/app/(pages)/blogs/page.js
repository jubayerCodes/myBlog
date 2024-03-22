import Posts from "@/components/Posts/Posts";
import { Box, Card, Container, Typography } from "@mui/material";
import React from "react";

const BlogsPage = () => {
  return (
    <main>
      <Container>
        <Box>
          <Card className="mt-20">
            <Typography variant="h1" fontWeight={"900"}>
              Blogs
            </Typography>

            <Posts />
          </Card>
        </Box>
      </Container>
    </main>
  );
};

export default BlogsPage;

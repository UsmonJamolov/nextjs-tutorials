import { Avatar, Box, Divider, Typography } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";

const Content = () => {
  return (
    <Box width={{ xs: "100%", md: "70%" }}>
      {data.map((item) => (
        <Box
          key={item.image}
          sx={{
            backgroundColor: "rgba(0, 0, 0, .7)",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "8px",
            boxShadow: "0 8px 16px rgba(255, 255, 255, .1)",
          }}
        >
          <Box
            position={"relative"}
            width={"100%"}
            height={{ xs: "30vh", md: "50vh" }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </Box>
          <Typography variant="h4" marginTop={"30px"}>
            {item.title}
          </Typography>
          <Typography variant="body2" color={"gray"}>
            {item.exerpt}
          </Typography>
          <Divider sx={{ marginTop: "30px" }} />
          <Box sx={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <Avatar alt={item.author.name} src={item.author.image} />
            <Box>
              <Typography>{item.author.name}</Typography>
              <Box color={"gray"}>
                {format(new Date(), "dd MMM, yyyy")} &#x2022; 10min read
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Content;

const data = [
  {
    image:
      "https://buffer.com/library/content/images/2023/09/instagram-image-size.jpg",
    title: "Technical SEO with Hygraph",
    exerpt: "Get started with your SEO implementation when using a Heading CMS",
    author: {
      name: "Samar Badriddinov",
      image:
        "https://buffer.com/library/content/images/2023/09/instagram-image-size.jpg",
    },
  },
  {
    image:
      "https://buffer.com/library/content/images/2023/09/instagram-image-size.jpg",
    title: "Technical SEO with Hygraph",
    exerpt: "Get started with your SEO implementation when using a Heading CMS",
    author: {
      name: "Samar Badriddinov",
      image:
        "https://buffer.com/library/content/images/2023/09/instagram-image-size.jpg",
    },
  },
];

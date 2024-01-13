import "react-multi-carousel/lib/styles.css";
import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import { format } from "date-fns";

const Hero = () => {
  return (
    <Box width={"100%"} height={"70vh"} sx={{ backgroundColor: "red" }}>
      <Carousel
        responsive={{
          mobile: {
            breakpoint: { max: 4000, min: 0 },
            items: 1,
          },
        }}
      >
        {data.map((item) => (
          <Box key={item.image}>
            <Box sx={{ position: "relative", width: "100%", height: "70vh" }}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                style={{ objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, .6)",
                }}
              ></Box>
              <Box
                width={{ xs: "100%", sm: "70%" }}
                sx={{
                  position: "relative",
                  zIndex: "2",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#fff",
                  paddingLeft: { xs: "10px", sm: "50px" },
                }}
              >
                <Typography variant="h2">{item.title}</Typography>
                <Typography variant="h5">{item.exerpt}</Typography>
                <Box sx={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                  <Avatar alt={item.author.name} src={item.author.image} />
                  <Box>
                    <Typography>{item.author.name}</Typography>
                    <Box>
                      {format(new Date(), "dd MMM, yyyy")} &#x2022; 10min read
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Hero;

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

import { navItems } from "@/config/constants";
import { Fragment } from "react";
import { Box, Button, Divider, Typography, Avatar } from "@mui/material";
import Image from "next/image";
import { format } from "date-fns";

const Sidebar = () => {
  return (
    <>
      <Box width={{ xs: "100%", md: "30%" }}>
        <Box
          sx={{ position: "sticky", top: "100px", transition: "all ease .3s" }}
        >
          <Box
            padding={"20px"}
            border={"1px solid gray"}
            borderRadius={"8px"}
            marginBottom={"20px"}
          >
            <Typography variant="h5">Latest blog</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
              }}
            >
              {data.map((item) => (
                <Box key={item.title} marginTop={"20px"}>
                  <Box
                    sx={{ display: "flex", gap: "20px", alignItems: "center" }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={100}
                      height={100}
                      style={{ objectFit: "cover", borderRadius: "8px" }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                      }}
                    >
                      <Typography variant={"body1"}>{item.title}</Typography>
                      <Box sx={{ display: "flex", gap: "10px" }}>
                        <Avatar
                          alt={item.author.name}
                          src={item.author.image}
                        />
                        <Box>
                          <Typography variant="body2">
                            {item.author.name}
                          </Typography>
                          <Box sx={{ opacity: "0.6" }}>
                            {format(new Date(), "dd MMM, yyyy")}{" "}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Divider sx={{ marginTop: "20px" }} />
                </Box>
              ))}
            </Box>
          </Box>
          <Box padding={"20px"} border={"1px solid gray"} borderRadius={"8px"}>
            <Typography variant="h5">Category</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
              }}
            >
              {navItems.map((nav) => (
                <Fragment>
                  <Button
                    fullWidth
                    sx={{ justifyContent: "start", height: "50px" }}
                    key={nav.route}
                  >
                    {nav.label}
                  </Button>
                  <Divider />
                </Fragment>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;

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

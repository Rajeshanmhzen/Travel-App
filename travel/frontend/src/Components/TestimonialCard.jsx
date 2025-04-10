import { Container, Grid, Typography, Box, Avatar, AvatarGroup } from "@mui/material";

const TestimonialCard = () => {
  return (
    <Container
      maxWidth={"xl"}
      sx={{
        backgroundColor: "#f0f4f8",
        py: 4,
        borderRadius: 2,
        maxWidth: "100%",
      }}
    >
      <Grid container spacing={4} alignItems={"center"}>
        {/* Left Side - Text and Testimonial */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "18px", sm: "24px", md: "56px" },
            }}
          >
            AN IMPRESSIVE AND{" "}
            <span style={{ color: "red" }}>UNFORGETTABLE</span> EXPERIENCE
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4} md={4}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqL6WTa6Yy5WwBQTsRmYedFhuYzS30x62Qg&s"
                  alt="moutain sliding"
                  width={100}
                  height={100}
                  className="h-[276px] w-[160px] rounded-[30px]"
                />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <img
                  src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWR2ZW50dXJlfGVufDB8fDB8fHww"
                  alt="adventure"
                  width={100}
                  height={100}
                  className="h-[276px] w-[160px] rounded-[30px] mt-14"
                />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <img
                  src="https://images.unsplash.com/photo-1501761095094-94d36f57edbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWR2ZW50dXJlfGVufDB8fDB8fHww"
                  alt="waterfall"
                  width={100}
                  height={100}
                  className="h-[276px] w-[160px] rounded-[30px]"
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Text and Testimonial */}
        <Grid item xs={12} md={8}>
          {/* <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            AN IMPRESSIVE AND{" "}
            <span style={{ color: "red" }}>UNFORGETTABLE</span> EXPERIENCE
          </Typography> */}

          <Box
            sx={{
              display: { sm: "block", md: "flex" },
              alignItems: "center",
              mt: 3,
              gap: 2,
            }}
          >
            <img
              src="data:image/jpeg;base64,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"
              className="rounded-[30px]"
              sx={{ width: "313px", height: "327px", mr: 2 }}
            />
            <Box>
              <Typography
                variant="body1"
                sx={{ fontStyle: "italic", fontWeight: "bold", marginTop: 2 }}
              >
                "This is completely a best place to make up your mind for
                traveling. I definitely recommend you people."
              </Typography>
              <Box sx={{ display: "flex", mt: 2 }}>
                <Avatar>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="Chris Hemsworth Actor"
                  />
                </Avatar>

                <Box sx={{ marginLeft: 1 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: "bold", display: "flex" }}
                  >
                    Chris Hemsworth
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Action Actor
                  </Typography>
                  <AvatarGroup max={4} sx={{textAlign:"center", mt:2}}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
    </AvatarGroup>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "26px", textAlign: "end" }}
              className="uppercase"
            >
              <span className="text-blue-400 ">100K + </span>
              Happy Adventure
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default TestimonialCard;

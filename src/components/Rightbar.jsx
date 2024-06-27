import {
  Avatar,
  AvatarGroup,
  Box, Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar, ListItemText,
  Typography
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={1} p={2} sx={{display: {xs: 'none', sm: 'block'}}}>
      <Box position={"fixed"} width={300}>
        <Typography variant={"h6"} fontWeight={'300'}>Online Friends</Typography>
        <Box mr={5}>
          <AvatarGroup sx={{marginLeft: '10px'}} max={7}>
            <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/1977329451/photo/diverse-businesspeople-smiling-while-standing-arm-in-arm-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=SJG_9wTH1TqHaSukj36l_ndTIEEjt4E9jhYGAADmYtw=" />
            <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/1977329451/photo/diverse-businesspeople-smiling-while-standing-arm-in-arm-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=SJG_9wTH1TqHaSukj36l_ndTIEEjt4E9jhYGAADmYtw=" />
            <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/1977329451/photo/diverse-businesspeople-smiling-while-standing-arm-in-arm-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=SJG_9wTH1TqHaSukj36l_ndTIEEjt4E9jhYGAADmYtw=" />
            <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/1977329451/photo/diverse-businesspeople-smiling-while-standing-arm-in-arm-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=SJG_9wTH1TqHaSukj36l_ndTIEEjt4E9jhYGAADmYtw=" />
            <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/1977329451/photo/diverse-businesspeople-smiling-while-standing-arm-in-arm-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=SJG_9wTH1TqHaSukj36l_ndTIEEjt4E9jhYGAADmYtw=" />
            <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/1977329451/photo/diverse-businesspeople-smiling-while-standing-arm-in-arm-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=SJG_9wTH1TqHaSukj36l_ndTIEEjt4E9jhYGAADmYtw=" />
            <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/1977329451/photo/diverse-businesspeople-smiling-while-standing-arm-in-arm-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=SJG_9wTH1TqHaSukj36l_ndTIEEjt4E9jhYGAADmYtw=" />
            <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/1977329451/photo/diverse-businesspeople-smiling-while-standing-arm-in-arm-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=SJG_9wTH1TqHaSukj36l_ndTIEEjt4E9jhYGAADmYtw=" />
            <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/1977329451/photo/diverse-businesspeople-smiling-while-standing-arm-in-arm-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=SJG_9wTH1TqHaSukj36l_ndTIEEjt4E9jhYGAADmYtw=" />
            <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/1977329451/photo/diverse-businesspeople-smiling-while-standing-arm-in-arm-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=SJG_9wTH1TqHaSukj36l_ndTIEEjt4E9jhYGAADmYtw=" />
            <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/1977329451/photo/diverse-businesspeople-smiling-while-standing-arm-in-arm-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=SJG_9wTH1TqHaSukj36l_ndTIEEjt4E9jhYGAADmYtw=" />
            <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/1977329451/photo/diverse-businesspeople-smiling-while-standing-arm-in-arm-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=SJG_9wTH1TqHaSukj36l_ndTIEEjt4E9jhYGAADmYtw=" />
            <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/1977329451/photo/diverse-businesspeople-smiling-while-standing-arm-in-arm-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=SJG_9wTH1TqHaSukj36l_ndTIEEjt4E9jhYGAADmYtw=" />
          </AvatarGroup>
        </Box>
        <Typography variant={"h6"} mt={2} mb={2} fontWeight={'300'}>Latest Photos</Typography>
        <ImageList cols={2} rowHeight={100} gap={5}>
          <ImageListItem><img src={'https://media.istockphoto.com/id/1977329451/photo/diverse-businesspeople-smiling-while-standing-arm-in-arm-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=SJG_9wTH1TqHaSukj36l_ndTIEEjt4E9jhYGAADmYtw='}/></ImageListItem>
          <ImageListItem><img src={'https://media.istockphoto.com/id/1977329451/photo/diverse-businesspeople-smiling-while-standing-arm-in-arm-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=SJG_9wTH1TqHaSukj36l_ndTIEEjt4E9jhYGAADmYtw='}/></ImageListItem>
          <ImageListItem><img src={'https://media.istockphoto.com/id/1977329451/photo/diverse-businesspeople-smiling-while-standing-arm-in-arm-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=SJG_9wTH1TqHaSukj36l_ndTIEEjt4E9jhYGAADmYtw='}/></ImageListItem>
          <ImageListItem><img src={'https://media.istockphoto.com/id/1977329451/photo/diverse-businesspeople-smiling-while-standing-arm-in-arm-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=SJG_9wTH1TqHaSukj36l_ndTIEEjt4E9jhYGAADmYtw='}/></ImageListItem>
        </ImageList>
        <Typography variant={"h6"} mt={2} mb={2} fontWeight={'300'}>Latest Conversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/1977329451/photo/diverse-businesspeople-smiling-while-standing-arm-in-arm-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=SJG_9wTH1TqHaSukj36l_ndTIEEjt4E9jhYGAADmYtw=" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://media.istockphoto.com/id/1977329451/photo/diverse-businesspeople-smiling-while-standing-arm-in-arm-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=SJG_9wTH1TqHaSukj36l_ndTIEEjt4E9jhYGAADmYtw=" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://media.istockphoto.com/id/1977329451/photo/diverse-businesspeople-smiling-while-standing-arm-in-arm-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=SJG_9wTH1TqHaSukj36l_ndTIEEjt4E9jhYGAADmYtw=" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
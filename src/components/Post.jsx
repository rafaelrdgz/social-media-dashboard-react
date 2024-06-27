import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography
} from "@mui/material";
import {Favorite, FavoriteBorder, MoreVert, Share} from "@mui/icons-material";

export const Post = () => {
  return (
    <>
      <Card sx={{ margin: 5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Rafael Rodriguez"
        subheader="June 26, 2024"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://media.istockphoto.com/id/1977329451/photo/diverse-businesspeople-smiling-while-standing-arm-in-arm-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=SJG_9wTH1TqHaSukj36l_ndTIEEjt4E9jhYGAADmYtw="
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
    </>
  )
}
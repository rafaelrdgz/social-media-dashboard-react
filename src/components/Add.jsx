import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useState} from "react";
import {DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: 'flex',
  justifyContent: "center",
  alignItems: "center"
})

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: "center",
  gap: '10px',
  marginBottom: '20px'
})

export const Add = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip onClick={e=>setOpen(true)} title={'Add'} sx={{position: 'fixed', bottom: 20, left: 30}}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} p={3} borderRadius={5} bgcolor={"background.default"} color={'text.primary'}>
          <Typography variant={"h6"} color={"gray"} textAlign={"center"}>Create post</Typography>
          <UserBox>
            <Avatar sx={{width: 30, height: 30}} src='https://media.istockphoto.com/id/1977329451/photo/diverse-businesspeople-smiling-while-standing-arm-in-arm-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=SJG_9wTH1TqHaSukj36l_ndTIEEjt4E9jhYGAADmYtw='>
            </Avatar>
            <Typography variant='span' fontWeight={500}>Rafael Rodriguez</Typography>
          </UserBox>
          <TextField
            sx={{width: '100%'}}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction={"row"} gap={1} mt={2} mb={3}>
            <EmojiEmotions color={"primary"}/>
            <Image color={"secondary"}/>
            <VideoCameraBack color={"success"}/>
            <PersonAdd color={"error"}/>
          </Stack>
          <ButtonGroup fullWidth variant="contained" aria-label="Basic button group">
            <Button>Post</Button>
            <Button sx={{width: '100px'}}><DateRange/></Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}
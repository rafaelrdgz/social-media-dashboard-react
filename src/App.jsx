import Sidebar from "./components/Sidebar.jsx";
import Feed from "./components/Feed.jsx";
import Rightbar from "./components/Rightbar.jsx";
import {Box, Stack, ThemeProvider} from "@mui/material";
import Navbar from "./components/Navbar.jsx";
import {Add} from "./components/Add.jsx";
import {createTheme} from "@mui/material/styles";
import {useState} from "react";

function App() {
  const [mode, setMode] = useState('light')
  const darkTheme = createTheme({
    palette:{
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={'text.primary'}>
        <Navbar/>
        <Stack direction='row' justifyContent='space-between' spacing={2}>
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed/>
          <Rightbar/>
        </Stack>
        <Add/>
      </Box>
    </ThemeProvider>

  );
}

export default App;

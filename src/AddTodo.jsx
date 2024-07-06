import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import IconButton from "@mui/material/IconButton";
import {InputAdornment} from "@mui/material";

export default function AddTodo({todoAdder}) {
    const [todoText, setTodoText] = useState("");
    const updateText = (event) => {
        setTodoText(event.target.value)
    };
    const addToList = () => {
        todoAdder(todoText);
        setTodoText("") // reset field after add
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="standard-basic"
                label="New To-Do"
                variant="standard"
                value={todoText}
                onChange={updateText}
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <IconButton aria-label="add" onClick={addToList}>
                            <AddIcon/>
                        </IconButton>
                    </InputAdornment>
                }}/>


        </Box>
    );}
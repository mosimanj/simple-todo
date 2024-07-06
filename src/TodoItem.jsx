import {useState} from "react";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

export default function TodoItem({todo, deleter}) {
    const [todoItem, setTodo] = useState(todo);
    const handleToggle = () => {
        setTodo((curItem) => {
            return ({...curItem, completed: !curItem.completed});
        })
    }

    const deleteTodo = () => {
        deleter(todoItem.id)
    }


    return (
        <ListItem
            id={todoItem.id} // delete?
            secondaryAction={
                <IconButton edge="end" aria-label="comments" onClick={deleteTodo}>
                    <ClearIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} onClick={handleToggle} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={todoItem.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': todo.id }}
                    />
                </ListItemIcon>
                <ListItemText id={todo.id} primary={todo.description} />
            </ListItemButton>
        </ListItem>
    )
}

// import * as React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import CommentIcon from '@mui/icons-material/Comment';
//
// export default function CheckboxList() {
//     const [checked, setChecked] = React.useState([0]);
//
//     const handleToggle = (value) => () => {
//         const currentIndex = checked.indexOf(value);
//         const newChecked = [...checked];
//
//         if (currentIndex === -1) {
//             newChecked.push(value);
//         } else {
//             newChecked.splice(currentIndex, 1);
//         }
//
//         setChecked(newChecked);
//     };
//
//     return (
//         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//             {[0, 1, 2, 3].map((value) => {
//                 const labelId = `checkbox-list-label-${value}`;
//
//                 return (
//                     <ListItem
//                         key={value}
//                         secondaryAction={
//                             <IconButton edge="end" aria-label="comments">
//                                 <CommentIcon />
//                             </IconButton>
//                         }
//                         disablePadding
//                     >
//                         <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
//                             <ListItemIcon>
//                                 <Checkbox
//                                     edge="start"
//                                     checked={checked.indexOf(value) !== -1}
//                                     tabIndex={-1}
//                                     disableRipple
//                                     inputProps={{ 'aria-labelledby': labelId }}
//                                 />
//                             </ListItemIcon>
//                             <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
//                         </ListItemButton>
//                     </ListItem>
//                 );
//             })}
//         </List>
//     );
// }

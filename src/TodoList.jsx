import {useState} from 'react'
import TodoItem from './TodoItem'
import List from '@mui/material/List';


export default function TodoList(){
    const starterTodo = [
        {id: crypto.randomUUID(), description: "Wash car", completed: true},
        {id: crypto.randomUUID(), description: "Feed cat", completed: false},
        {id: crypto.randomUUID(), description: "Pay bills", completed: false}
    ];

    return(
        <>
        <h1>Simple To-Do</h1>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {starterTodo.map((i) => {
                const labelId = `checkbox-list-label-${i.id}`;

                return (<TodoItem key={i.id} todo={i} />);
            })}
        </List>
        </>
    );
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
//
//     );
// }
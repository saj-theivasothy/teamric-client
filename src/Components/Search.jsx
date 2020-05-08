
import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './styles/search.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Search() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        style={{
          width:'40%',
        }}
        id="size-small-standard"
        size="small"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        defaultValue={top100Films[13]}
        renderInput={(params) => (
          <TextField {...params} variant="standard" placeholder="Favorites" />
        )}
      />
    </div>
  );
}

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },]





// import React, { useState } from 'react';
// import {  AutoComplete  } from 'antd';

// import './styles/search.css';


// const { Option } = AutoComplete;

// const Search = () => {
//   const [result, setResult] = useState([]);

//   const handleSearch = value => {
//     let res = [];

//     if (!value || value.indexOf('@') >= 0) {
//       res = [];
//     } else {
//       res = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
//     }

//     setResult(res);
//   };

//   const children = result.map(email => (
//     <Option key={email} value={email}>
//       {email}
//     </Option>
//   ));
//   return (
//     <AutoComplete 
//       className="search-bar"
//       style={{
//         width: '160',
//         position: 'absolute',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         backgroundColor: 'green'
            
//       }}
//       onSearch={handleSearch}
//       placeholder="Search team member"
//     >
//       {children}

      
//     </AutoComplete>
//   );
// };










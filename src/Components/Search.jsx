import React, { useState } from 'react';
import {  AutoComplete  } from 'antd';

import './styles/search.css'

const { Option } = AutoComplete;

const Search = () => {
  const [result, setResult] = useState([]);

  const handleSearch = value => {
    let res = [];

    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }

    setResult(res);
  };

  const children = result.map(email => (
    <Option key={email} value={email}>
      {email}
    </Option>
  ));
  return (
    <AutoComplete 
      class="search_bar"
      onSearch={handleSearch}
      placeholder="Search team member"
    >
      {children}
    </AutoComplete>
  );
};

export default Search;
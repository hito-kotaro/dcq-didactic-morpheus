import React, { VFC } from 'react';
import { Box, Divider } from '@mui/material';
import ListItem from '../../atoms/ListItems';

// List用のデータに整形した配列を受け取る
// type Props = {
//   users: userDataType[];
//   onClick: (u: userDataType) => void;
// };

const List = () => {
  // const { users, onClick } = props;
  // console.log(users);
  return (
    <Box>
      <ListItem />
    </Box>
  );
};

export default List;

import React, { VFC } from 'react';
import { Box, Divider } from '@mui/material';
import ListItem from '../../atoms/ListItems';
import { listType } from './listType';

// List用のデータに整形した配列を受け取る
type Props = {
  list: listType[];
  // eslint-disable-next-line no-unused-vars
  onClick: (id: number) => void;
};

const List: VFC<Props> = (props) => {
  const { list, onClick } = props;
  return (
    <Box>
      {list.map((l: listType) => (
        <>
          <ListItem
            key={l.id}
            title={l.title}
            avatar={l.title}
            description={l.description}
            badgeList={l.badges}
            date=""
            onClick={() => onClick(l.id)}
          />
          <Divider />
        </>
      ))}
    </Box>
  );
};

export default List;

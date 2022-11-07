import { Box, Modal } from '@mui/material';
import React, { ReactElement, VFC } from 'react';

type Props = {
  open: boolean;
  handleClose: () => void;
  content: ReactElement;
};
const index: VFC<Props> = (props) => {
  const { content, open, handleClose } = props;
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 400 }}>{content}</Box>
    </Modal>
  );
};

export default index;

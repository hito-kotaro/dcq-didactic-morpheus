import React, { VFC } from 'react';
import { Box, Button, Modal } from '@mui/material';

type Props = {
  open: boolean;
  mainMsg: string;
  subMsg: string;
  positiveBtnMsg: string;
  positiveBtnAction: () => void;
  handleOpen: () => void;
  handleClose: () => void;
};

const MyModal: VFC<Props> = (props) => {
  const {
    open,
    mainMsg,
    subMsg,
    positiveBtnMsg,
    positiveBtnAction,
    handleOpen,
    handleClose,
  } = props;
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
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 className="text-lg font-semibold">{mainMsg}</h2>
          <p id="parent-modal-description">{subMsg}</p>
          <div className="flex">
            <Button color="inherit" onClick={handleClose}>
              キャンセル
            </Button>
            <Button onClick={positiveBtnAction}>{positiveBtnMsg}</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default MyModal;

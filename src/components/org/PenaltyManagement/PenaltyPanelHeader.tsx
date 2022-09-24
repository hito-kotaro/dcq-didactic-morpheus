import React from 'react';

const PenaltyPanelHeader = () => {
  return (
    <div className="pt-7 text-center">
      {/* <MyModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        mainMsg={`${quest.title}を削除しますか？`}
        subMsg="削除しても、過去のクエスト達成履歴は保持されます。"
        positiveBtnMsg="削除"
        positiveBtnAction={deleteQuest}
      /> */}
      {/* <div className="flex justify-end">
        {isDetail ? (
          <MenuButton menuItems={menuItems} icon={<MenuIcon />} />
        ) : (
          ''
        )}
      </div> */}
      <span className="text-2xl font-semibold text-text">ペナルティ管理</span>
    </div>
  );
};

export default PenaltyPanelHeader;

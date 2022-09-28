import React from 'react';
// 今はシーズンだけ表示。メニューボタンが必要ならこのコンポーネントに入れる。
const DashBoardHeader = () => {
  // バックエンドからこのテナントの現在のシーズンを取得する
  const season = '現在のシーズン: 7/1 ~ 9/30';

  return (
    <div className=" h-10 leading-10 w-full mt-6 px-5 text-text text-lg font-semibold border-b-1">
      {season}
    </div>
  );
};

export default DashBoardHeader;

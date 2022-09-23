import React, { VFC } from 'react';

type Props = {
  bg: string;
  text: string;
  content: string;
};
const MyBadge: VFC<Props> = (props) => {
  const { bg, text, content } = props;
  let bgStyle = ' bg-open/20 h-5 text-center leading-5 rounded-lg text- px-5';
  let textStyle = 'text-open';
  if (bg === 'bg-rejected') {
    bgStyle = 'bg-rejected/20 h-5 text-center leading-5 rounded-lg text- px-5';
    textStyle = 'text-rejected';
  } else if (bg === 'bg-approved') {
    bgStyle = 'bg-approved/20 h-5 text-center leading-5 rounded-lg text- px-5';
    textStyle = 'text-approved';
  } else if (bg === 'bg-canceled') {
    bgStyle = 'bg-canceled/20 h-5 text-center leading-5 rounded-lg text- px-5';
    textStyle = 'text-canceled';
  } else if (bg === 'bg-open') {
    bgStyle = 'bg-open/20 h-5 text-center leading-5 rounded-lg text- px-5';
    textStyle = 'text-open';
  } else {
    bgStyle = 'bg-other/20 h-5 text-center leading-5 rounded-lg text- px-5';
    textStyle = 'text-other';
  }

  // const bgStyle =
  //   'bg-canceled/20 h-5 text-center leading-5 rounded-lg text- px-5';

  return (
    <div className={bgStyle}>
      <div className={textStyle}>{content}</div>
    </div>
  );
};

export default MyBadge;

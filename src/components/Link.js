import React from 'react';

const Link = (props) => {
  const { link } = props;
  return (
    <div>
      <div align="left">
        <font size="4"><li><b>Movie:</b></li></font>
      </div>
      <div align="right">
        <font size="3"><i>{link.description}</i></font>
      </div>
      <div align="left">
        <font size="4"><li><b>Place to watch:</b></li></font>
      </div>
      <div align="right">
        <font size="3"><i>({link.url})</i></font>
      </div>
      <div align="center">
        <font size="4">__________________________________</font>
      </div>
    </div>
  );
};

export default Link;
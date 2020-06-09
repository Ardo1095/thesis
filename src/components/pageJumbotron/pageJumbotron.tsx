import React, { FC } from 'react';
import './pageJumbotron.css';

interface Props {
  backgroundImage: any;
  title: string;
  subTitle?: string;
}

const PageJumbotron: FC<Props> = ({ backgroundImage, title, subTitle }) => (
  <div style={{ backgroundImage: `url(${backgroundImage})` }} className="pageJumbotronContainer center">
    <h2 className="pageTitle">{title}</h2>
    {subTitle && <h5 className="pageSubtitle">{subTitle}</h5>}
  </div>
);

export default PageJumbotron;

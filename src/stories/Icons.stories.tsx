import React, { PropsWithChildren } from 'react';
import { ReactComponent as HeartIcon } from '../assets/icons/heart.svg';
import { ReactComponent as DeleteIcon } from '../assets/icons/delete.svg';
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';
import { ReactComponent as PencilIcon } from '../assets/icons/pencil.svg';
import { ReactComponent as DeleteLineIcon } from '../assets/icons/delete-line.svg';
import { ReactComponent as MenuIcon } from '../assets/icons/menu.svg';
import { ReactComponent as MenuRightAlignIcon } from '../assets/icons/menu-right-align.svg';
import { ReactComponent as CarbonMenuIcon } from '../assets/icons/carbon-menu.svg';
import { ReactComponent as MenuLeftAlignIcon } from '../assets/icons/menu-left-align.svg';
import { ReactComponent as CarbonMenuHorizontalIcon } from '../assets/icons/carbon-menu-horizontal.svg';
import { ReactComponent as MessageIcon } from '../assets/icons/message.svg';
import { ReactComponent as ShareIcon } from '../assets/icons/share.svg';
import { ReactComponent as CommentIcon } from '../assets/icons/comment.svg';

function Icon(props: PropsWithChildren<unknown>) {
  return (
    <React.Fragment>
      <i className="icon">{props.children}</i>
      <i className="icon icon-contained">{props.children}</i>
    </React.Fragment>
  );
}

export function Icons() {
  return (
    <div className="story-grid">
      <div className="story-grid-row">
        <Icon>
          <HeartIcon />
        </Icon>
        <Icon>
          <DeleteIcon />
        </Icon>
        <Icon>
          <SearchIcon />
        </Icon>
      </div>
      <div className="story-grid-row">
        <Icon>
          <PencilIcon />
        </Icon>
        <Icon>
          <DeleteLineIcon />
        </Icon>
      </div>
      <div className="story-grid-row">
        <Icon>
          <MenuIcon />
        </Icon>
        <Icon>
          <MenuRightAlignIcon />
        </Icon>
      </div>
      <div className="story-grid-row">
        <Icon>
          <CarbonMenuIcon />
        </Icon>
        <Icon>
          <MenuLeftAlignIcon />
        </Icon>
      </div>
      <div className="story-grid-row">
        <Icon>
          <CarbonMenuHorizontalIcon />
        </Icon>
        <Icon>
          <MessageIcon />
        </Icon>
      </div>
      <div className="story-grid-row">
        <Icon>
          <ShareIcon />
        </Icon>
        <Icon>
          <CommentIcon />
        </Icon>
      </div>
    </div>
  );
}

export default {
  title: 'Example/Icons',
};

import React, { useState } from 'react';
import './reset.css';
import styled from './Main.module.css';
import { Chat } from './Chat';

export const Main = () => {
  const [render, setRender] = useState(false);

  return (
    <div className={styled.root}>
      <span
        className={styled.button}
        onClick={() => setRender(!render)}
      >
        Скрыть / отобразить страницу Chat
      </span>

      {render && <Chat/>}
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './Chat.module.css';
import { mockMessages } from './messages';

const fetchMessages = () => {
  // эмулируем процесс запроса сообщений от сервера
  console.log('Receiving messages');

  return mockMessages;
};


export const Chat = () => {
  const [messages, setMessages] = useState();

  useEffect(() => {
    setInterval(() => {
      const messages = fetchMessages();

      setMessages(messages);
    }, 1000);
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.messageList}>
        {messages.map((item) => {
          return <div className={cn(styles.message)}>{item.text}</div>;
        })}
      </div>

      <div className={styles.controlPanel}>
        <input/>
        <div
          className={styles.button}
          onClick={() => {sessionStorage.setItem('message', 'Сообщение отправлено')}}
        >
          Отправить сообщение
        </div>
      </div>
    </div>
  );
}

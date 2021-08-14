import React, { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { PictureOutlined, SendOutlined } from '@ant-design/icons';

const MessageForm = (props) => {
  const [value, setValue] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();

    const text = value.trim();

    if (text.length > 0) sendMessage(props.creds, props.chatId, { text });

    setValue('');
  };
  const changeHandler = (e) => {
    setValue(e.target.value);

    isTyping(props, props.chatId);
  };

  const uploadHandler = (e) => {
    sendMessage(props.creds, props.chatId, { files: e.target.files, text: '' });
  };

  return (
    <form className='message-form' onSubmit={submitHandler}>
      <input
        className='message-input'
        placeholder='Send a message...'
        value={value}
        onChange={changeHandler}
        onSubmit={submitHandler}
      />
      <label htmlFor='upload-button'>
        <span className='image-button'>
          <PictureOutlined className='picture-icon' />
        </span>
      </label>
      <input
        type='file'
        multiple={false}
        id='upload-button'
        onChange={uploadHandler}
        style={{ display: 'none' }}
      />
      <button type='submit' className='send-button'>
        <SendOutlined className='send-icon' />
      </button>
    </form>
  );
};

export default MessageForm;

import React, { useState, useEffect } from "react";
import firestore from "../config/firestore";
import Form from "./Form"; // This one is new

const Messages = () => {
  // 'message'stateを初期化
  const [messages, setMessages] = useState(null);

  // レンダリング後に、'listenForMessages'を実行
  useEffect(() => {
    listenForMessages();
  }, []);

  // firebaseをリッスンして、コレクション内部の変更をキャッチする
  const listenForMessages = () => {
    firestore.collection("messages").onSnapshot(
      snapshot => {
        const allMessages = [];
        snapshot.forEach(doc => allMessages.push(doc.data()));

        // 'message'stateを更新
        setMessages(allMessages);
      },
      error => console.error(error)
    );
  };

  // If the state is null we
  // know that it's still loading
  if (!messages) {
    return <div>Loading...</div>;
  }

  // メッセージの表示
  // メッセージがなければ、' There's no messages yet...'を表示
  const renderMessages = () => {
    // If the array is empty we inform
    // the user that there's no messages
    if (!messages.length) {
      return <div>There's no messages yet...</div>;
    }

    return messages.map(({ name, message }, index) => (
      <div key={`message-item-${index}`}>
        <b>{name}</b>
        <div>{message}</div>
      </div>
    ));
  };


  return (
    <div>
      <Form /> {/* This one is new */}
      {renderMessages()}
    </div>
  );
};

export default Messages;

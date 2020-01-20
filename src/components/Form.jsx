import React, { useState } from "react";
import firestore from "../config/firestore"; // This one is new

const Form = () => {
  // Initial item 
  const initialItemValues = {
    name: "",
    message: ""
  };
  const [item, setItem] = useState(initialItemValues);

  // Formが牛んされると実行
  // 名前とメッセージに文字が入っていれば、
  // オブジェクトをドキュメントとしてfirestoreコレクションに送信
  const onSubmit = event => {
    event.preventDefault();

    if (item.name.length && item.message.length) {
      firestore
        .collection("messages")
        .doc()
        .set(item)
        .then(() => setItem(initialItemValues))
        .catch(error => console.error(error));
    }
  };

  // inputの値が変わるたびに、更新
  const onChange = ({ target }) => {
    setItem({
      ...item,
      [target.name]: target.value
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={item.name}
        onChange={onChange}
      />
      <textarea
        name="message"
        placeholder="Message"
        value={item.message}
        onChange={onChange}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;

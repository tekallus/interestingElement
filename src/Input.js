import { useState } from "react";

function Input({ onSubmit, max }) {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(text, number);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Renk</label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div>
        <label>Index'e Ekle</label>
        <input
          type="number"
          min={0}
          max={max}
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
      </div>
      <button>Gönder</button>
    </form>
  );
}

export { Input };

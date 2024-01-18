import { useState } from "react";
import { Input } from "./Input";

function App() {
  const [colors, setColors] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const addColorAtIndex = (newColor, index) => {
    if (newColor.trim() === "") {
      setErrorMessage("Lütfen Bir Renk Gönderiniz");
      return;
    }

    setErrorMessage(""); // Clear any previous error message

    // state i dogrudan degistirmemek icin
    // Yeni bir renk eklemek için mevcut renk dizisini kopyala
    const updatedColors = [...colors];

    // Belirlenen 'index'teki 'colors'a 'newColor'i eklemek icin
    //array.splice(start, deleteCount, item1, item2, ...);
    // eger direk dizinin sonuna eklmek istersek:const updatedColors = (newColor) => { setColors([...colors, newColor]);};
    updatedColors.splice(index, 0, newColor);

    // State'i güncellemek icin
    setColors(updatedColors);
  };
  const renderedColors = colors.map((color, i) => {
    return <li key={i}>{color}</li>;
  });

  return (
    <div>
      <Input onSubmit={addColorAtIndex} max={colors.length} />
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <ul>{renderedColors}</ul>
    </div>
  );
}

export default App;

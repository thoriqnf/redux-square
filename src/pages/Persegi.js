import React, { useState } from "react";

function Persegi(props) {
  const [sisi, setSisi] = useState(0);
  const [luas, setLuas] = useState();
  const [keliling, setKeliling] = useState();
  return (
    <div>
      <div>Sisi :{sisi}</div>
      <button onClick={() => setSisi(sisi + 1)}>Tambah</button>
      {sisi}
      <button onClick={() => setSisi(sisi - 1)}>kurang</button>
      <div>
        <button onClick={() => setLuas(sisi * sisi)}>Hitung luas</button>
        <button onClick={() => setKeliling(sisi * 4)}>Hitung Keliling</button>
      </div>
      <div>Luas : {luas}</div>
      <div>Keliling : {keliling}</div>
    </div>
  );
}
export default Persegi;

import { useState, useEffect } from 'react';

function Example() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('✅ useEffect con []: se ejecuta solo al montar');
  }, []);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
    </div>
  );
}
export default Example;
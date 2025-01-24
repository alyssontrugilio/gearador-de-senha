import { useState } from 'react';
import styles from './Container.module.css';

export default function Container() {
  const [password, setPassword] = useState();

  const [copyText, setCopyText] = useState('Copiar');

  const [passwordSize, setPasswordSize] = useState(12);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    setCopyText('Copiado!');
  };

  const generatePassword = () => {
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let newPassword = '';
    for (let i = 0, n = charset.length; i < passwordSize; ++i) {
      newPassword += charset.charAt(Math.floor(Math.random() * n));
    }
    setCopyText('Copiar!');
    setPassword(newPassword);
  };
  return (
    <div className={styles.container}>
      <h1>Gerador de senha</h1>
      <div>
        <label htmlFor="passwordSize">Tamanho:</label>
        <input
          type="number"
          id="passwordSize"
          min={1}
          value={passwordSize}
          onChange={ev => setPasswordSize(ev.target.value)}
        />
      </div>
      <div className={styles.buttons}>
        <button onClick={() => generatePassword()}>
          Gerar senha de {passwordSize}
        </button>
        <button onClick={() => copyPassword()}>{copyText}</button>
      </div>
      <p>{password}</p>
    </div>
  );
}

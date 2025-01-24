import { useState } from 'react';
import styles from './Container.module.css';

export default function Container() {
  const [password, setPassword] = useState();

  const [copyText, setCopyText] = useState('Copiar');

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    setCopyText('Copiado!');
  };

  const generatePassword = () => {
    const length = 12;
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let newPassword = '';
    for (let i = 0, n = charset.length; i < length; ++i) {
      newPassword += charset.charAt(Math.floor(Math.random() * n));
    }
    setCopyText('Copiar!');
    setPassword(newPassword);
  };
  return (
    <div className={styles.container}>
      <h1>Gerador de senha</h1>
      <div className={styles.buttons}>
        <button onClick={() => generatePassword()}>Gerar</button>
        <button onClick={() => copyPassword()}>{copyText}</button>
      </div>
      <p>{password}</p>
    </div>
  );
}

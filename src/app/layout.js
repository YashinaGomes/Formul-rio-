"use client";
import { useState } from 'react';
import './styles.css'; // Importe o arquivo CSS

export const formulario = {
  title: 'Lesley Forms',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  const [data, setData] = useState({
    name: '',
    email: '',
    assunto: '',
    conteudo: '',
  });

  const valorInput = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const sendMsg = (e) => {
    e.preventDefault();
    console.log(`nome: ${data.nome}`);
    console.log(`assunto: ${data.assunto}`);
    console.log(`email: ${data.email}`);
    console.log(`conteudo: ${data.conteudo}`);
  };

  return (
    <html lang="pt-br">
      <body>
        <h1>Formulário</h1>
        <form onSubmit={sendMsg}>
          <label>Name:</label>
          <input type="text" name="nome" placeholder="Digite o seu nome" onChange={valorInput} />

          <label>Email:</label>
          <input type="email" name="email" placeholder="Digite o seu email" onChange={valorInput} />

          <label>Assunto:</label>
          <input type="text" name="assunto" placeholder="Digite o assunto" onChange={valorInput} />

          <label>Conteúdo:</label>
          <textarea name="conteudo" cols="30" rows="10" placeholder="Digite o conteúdo da mensagem" onChange={valorInput}></textarea>

          <button type="submit">Enviar</button>
        </form>
      </body>
    </html>
  );
}

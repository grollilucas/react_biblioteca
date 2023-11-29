import React from "react";

export default function Home() {
  return (
    <div
      className={`
        text-center
        bg-gradient-to-bl from-blue-900 to-purple-400
        text-white
        p-6
        justify-center
      `}>
      <h1 className="text-4xl font-bold mb-6">
        Sistema Biblioteca Digital
      </h1>
      <div className="flex">
        <img
          src="https://cdn.awsli.com.br/800x800/173/173680/produto/35980468/e2c8127a2e.jpg"
          alt="Imagem 1"
          style={{ width: '50%' }}/>
  
        <img
          src= "/imagem2.jpg"
          alt="Imagem 2"
          style={{ width: '50%', marginLeft: '15px'}}
        />
      </div>
    </div>
  );
}

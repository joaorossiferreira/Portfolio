import React from 'react';

const SobreMim = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6">
      {/* Seção Principal - Seu Estilo */}
      <section className="max-w-4xl mx-auto bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-700 mb-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-2">
            Um pouco sobre mim
          </h1>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6 text-gray-300">
          <p className="text-lg leading-relaxed">
            Me chamo <span className="text-amber-400 font-medium">João Vitor Rossi Ferreira</span>, mas pode me chamar de Rossi! Tenho 20 anos e sou apaixonado por tecnologia desde criança. Meu interesse começou com jogos e vídeos no YouTube, mas evoluiu para um desejo de criar experiências digitais que conectem pessoas e resolvam problemas reais.
          </p>

          <p className="text-lg leading-relaxed">
            Sou movido por desafios e pela busca constante de evolução. Não é raro me ver virando noites codando, testando ideias novas ou resolvendo bugs complicados — a sensação de superar um obstáculo é o que me motiva a ir além. Gosto de pensar que cada linha de código que escrevo é uma oportunidade de impactar positivamente a vida de alguém.
          </p>

          <p className="text-lg leading-relaxed">
            Fora do mundo da programação, você vai me encontrar jogando <span className="text-amber-400">League of Legends</span> ou <span className="text-amber-400">Valorant</span> com os amigos, lendo mangás que me inspiram ou explorando novas tendências tecnológicas. Estou sempre em busca de aprender algo novo e de compartilhar conhecimento.
          </p>

          <div className="p-4 bg-gray-700/50 rounded-lg border-l-4 border-amber-400">
            <p className="text-lg italic">
              "Acredito que <span className="text-amber-400">tecnologia deve ser acessível, humana e transformadora</span>. Meu objetivo vai além de escrever código funcional — quero criar soluções que realmente façam diferença. Se você compartilha dessa visão, <span className="text-amber-400">vamos conversar</span> e trocar ideias!"
            </p>
          </div>
        </div>
      </section>

      {/* Seção Habilidades Técnicas */}
      <section className="max-w-4xl mx-auto bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-700 overflow-hidden mb-12">
        <div className="p-8 md:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-6 border-b border-gray-700 pb-4">
            O Que Eu Faço
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-amber-300 mb-4 flex items-center">
                <span className="w-3 h-3 bg-amber-400 rounded-full mr-2"></span>
                Desenvolvimento Front-end
              </h3>
              <p className="text-gray-300">
                Construo interfaces modernas e responsivas com <span className="text-amber-400">React</span>, <span className="text-amber-400">TypeScript</span> e <span className="text-amber-400">Tailwind CSS</span>. Adoro criar experiências que são tão bonitas quanto funcionais.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-amber-300 mb-4 flex items-center">
                <span className="w-3 h-3 bg-amber-400 rounded-full mr-2"></span>
                Integração com Back-end
              </h3>
              <p className="text-gray-300">
                Trabalho com <span className="text-amber-400">APIs REST</span> e <span className="text-amber-400">Node.js</span> para conectar interfaces poderosas com sistemas robustos. Já integrei desde sistemas de ponto até gestão de estoque.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-amber-300 mb-4 flex items-center">
                <span className="w-3 h-3 bg-amber-400 rounded-full mr-2"></span>
                Design de Interfaces
              </h3>
              <p className="text-gray-300">
                Uso <span className="text-amber-400">Figma</span> para prototipar e criar designs intuitivos. Acredito que boa UX vai além de pixels - é sobre entender necessidades reais.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-amber-300 mb-4 flex items-center">
                <span className="w-3 h-3 bg-amber-400 rounded-full mr-2"></span>
                Resolução de Problemas
              </h3>
              <p className="text-gray-300">
                Minha especialidade é transformar problemas complexos em soluções elegantes. Aquela satisfação de encontrar o bug? É meu combustível criativo!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Formação */}
      <section className="max-w-4xl mx-auto bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-700 overflow-hidden">
        <div className="p-8 md:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-6 border-b border-gray-700 pb-4">
            Minha Jornada
          </h2>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-amber-400/20 p-2 rounded-full mr-4 mt-1">
                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-300 mb-1">Ensino Médio Completo</h3>
                <p className="text-gray-300 font-medium mb-1">Prof. Nelson do Nascimento Monteiro</p>
                <p className="text-gray-400 text-sm">2021 - 2023</p>
                <p className="text-gray-300 mt-2">
                  Foi onde descobri minha paixão por tecnologia e comecei a dar meus primeiros passos em programação.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-amber-400/20 p-2 rounded-full mr-4 mt-1">
                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-300 mb-1">Desenvolvimento de Software Multiplataforma</h3>
                <p className="text-gray-300 font-medium mb-1">Fatec Prof. Jessen Vidal - São José dos Campos</p>
                <p className="text-gray-400 text-sm">2024 - Atualmente</p>
                <p className="text-gray-300 mt-2">
                  Onde estou aprofundando meus conhecimentos e colocando em prática em projetos reais tudo que aprendo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreMim;
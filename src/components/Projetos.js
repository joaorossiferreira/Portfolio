import React, { useState } from 'react';

const Projetos = () => {
  const [activeProject, setActiveProject] = useState(null);

  const toggleProject = (project) => {
    setActiveProject(activeProject === project ? null : project);
  };

  const projects = [
    {
      id: 'nectopoint',
      title: 'NectoPoint - Sistema de Ponto Eletrônico',
      description: (
        <>
          <p className="mb-4">
            Atuei como desenvolvedor frontend neste projeto, que consistiu em criar um sistema completo de gestão de ponto eletrônico. O backend foi construído em Java pela equipe, e eu foquei no desenvolvimento do frontend com React e TypeScript.
          </p>
          <p>
            Minha responsabilidade incluiu a prototipagem e a implementação do site, bem como o desenvolvimento do sistema de solicitações — abrangendo férias, folgas, abonos e ajustes de ponto — integrado à API em Java. Esse trabalho ampliou bastante minhas habilidades em TypeScript e também em Java.
          </p>
        </>
      ),
      details: [
        'Desenvolvi as interfaces utilizando React e TypeScript.',
        'Criei o sistema de solicitações de férias, folgas, abonos e ajustes para os usuários.',
        'Implementei o sistema de aprovação de solicitações voltado para gerentes.',
        'Projetei e desenvolvi barras de navegação personalizadas para diferentes tipos de usuários.',
        'Realizei a integração com a API REST construída em Java pela equipe de backend.',
        'Escrevi códigos bem organizados e detalhados, acompanhados de descrições claras.'
      ],
      technologies: ['React', 'TypeScript', 'Java', 'UI/UX Design', 'Spring Boot'],
      githubLink: 'https://github.com/Equipe-Skyfall/nectopoint',
      softSkills: [
        {
          name: 'Proatividade',
          description: 'Mostrei evolução em proatividade ao longo do projeto. No início, eu demorava para começar as tarefas. Com o tempo, melhorei meu desempenho e passei a entregar resultados sem depender de cobranças, demonstrando progresso nessa habilidade.'
        },
        {
          name: 'Comunicação',
          description: 'Enfrentei dificuldades para me comunicar, especialmente com a equipe de backend, devido a uma interação pouco eficaz entre as partes. No grupo como um todo, minha participação foi limitada, concentrando-se em reuniões e momentos específicos de colaboração no projeto.'
        },
        {
          name: 'Trabalho em Equipe',
          description: 'O trabalho em equipe apresentou desafios no começo, mas evoluiu ao longo do tempo. Quando um colega precisava de apoio, eu me dispunha a ajudar. Da mesma forma, buscava orientação dos outros membros sempre que necessário ou quando identificava algo a ser aprimorado.'
        }
      ]
    },
    {
      id: 'prostock',
      title: 'ProStock - Sistema de Gestão de Estoque',
      description: (
        <>
          <p className="mb-4">
            Neste projeto, liderei a equipe responsável por desenvolver um sistema de gerenciamento de estoque. A solução envolveu a criação de um sistema CRUD completo, com integração entre o backend — construído em Prisma e JavaScript — e o frontend, desenvolvido em TypeScript com React.
          </p>
          <p>
            Na posição de líder técnico, introduzi processos ágeis que elevaram a produtividade da equipe. Minha visão sistêmica contribuiu para o design de uma arquitetura escalável, capaz de atender às demandas atuais e suportar expansões futuras do sistema.
          </p>
        </>
      ),
      details: [
        'Exerci liderança técnica na coordenação da equipe.',
        'Desenvolvi o sistema CRUD em sua totalidade.',
        'Integraei o frontend (TypeScript e React) ao backend (JavaScript e Prisma).',
        'Criei interfaces intuitivas e funcionais para os usuários.',
        'Otimizei a performance do sistema para garantir uma gestão eficiente de estoque.',
        'Implementei testes automatizados em componentes críticos do projeto.'
      ],
      technologies: ['React', 'TypeScript', 'Prisma', 'REST API'],
      githubLink: 'https://github.com/EquipeSkyfall/API_2Semestre',
      softSkills: [
        {
          name: 'Liderança',
          description: 'Gerenciei a equipe ao distribuir tarefas de maneira equilibrada, acompanhar o progresso diário e resolver obstáculos. Organizei reuniões curtas e objetivas para manter todos alinhados às metas de cada sprint.'
        },
        {
          name: 'Organização',
          description: 'Planejei a arquitetura do sistema e dividi o projeto em módulos lógicos, permitindo que a equipe trabalhasse em paralelo. Elaborei uma documentação detalhada que agilizou a integração entre frontend e backend.'
        },
        {
          name: 'Visão Sistêmica',
          description: 'Antecipei necessidades futuras, como a expansão para múltiplos armazéns, e incorporei flexibilidade à arquitetura desde o início. Isso evitou retrabalho e assegurou a escalabilidade do sistema.'
        }
      ]
    },
    {
      id: 'estufa',
      title: 'Smart Farming - Monitoramento de Estufas',
      description: (
        <>
          <p className="mb-4">
            Neste projeto, colaborei na definição da arquitetura de informação e no design das interfaces de um site voltado ao monitoramento de estufas. Também atuei na integração de containers de plataformas de execução para construir uma estufa virtual inteligente.
          </p>
          <p>
            A autonomia foi fundamental para que eu entregasse as interfaces de monitoramento de sensores em um curto prazo. A simplicidade relativa do projeto me deu espaço para explorar soluções criativas de visualização de dados, o que melhorou significativamente a experiência do usuário final.
          </p>
        </>
      ),
      details: [
        'Desenvolvi a arquitetura de informação e projetei as interfaces do site.',
        'Integrei containers para viabilizar a estufa virtual.',
        'Implementei o controle e a análise automatizada dos dados coletados por sensores.',
        'Criei interfaces amigáveis com gráficos para facilitar a visualização.',
        'Otimizei a apresentação dos dados para aumentar a eficiência operacional.',
        'Desenvolvi um sistema de alertas baseado em limites predefinidos.'
      ],
      technologies: ['IoT', 'UI/UX Design', 'Data Visualization', 'Python', 'Docker'],
      githubLink: 'https://github.com/CyberScrums/Projeto-Smart-Farming',
      softSkills: [
        {
          name: 'Autonomia',
          description: 'Trabalhei de maneira independente, tomando decisões sobre design e implementação sem supervisão constante. Pesquisei e apliquei bibliotecas de gráficos que atenderam perfeitamente às demandas do projeto.'
        },
        {
          name: 'Criatividade',
          description: 'Desenvolvi visualizações inovadoras para os dados dos sensores, transformando informações complexas em dashboards intuitivos e fáceis de compreender para os agricultores.'
        },
        {
          name: 'Eficiência',
          description: 'Organizei meu fluxo de trabalho para entregar todas as interfaces dentro do prazo, mesmo lidando com tarefas paralelas. Priorizei as funcionalidades que agregavam maior valor ao usuário final.'
        }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <div className="relative inline-block group">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-400 mb-4">
            Meus Projetos
          </h1>
        </div>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
          Trabalhos em que combinei habilidades técnicas e visão de produto para entregar soluções completas
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8 px-2 sm:px-0">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:border-amber-400/30"
          >
            <div className="p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400 mb-2">{project.title}</h2>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs sm:text-sm px-3 py-1 bg-gray-700 rounded-full text-amber-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="text-gray-300 mb-4 space-y-4 text-sm sm:text-base">
                    {project.description}
                  </div>

                  {activeProject === project.id && (
                    <div className="mt-6 space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-amber-300 mb-3">Contribuições Pessoais</h3>
                        <div className="space-y-3 pl-4 border-l-2 border-amber-400/30 text-sm sm:text-base">
                          {project.details.map((item, index) => (
                            <div key={index} className="text-gray-300">
                              <p className="mb-2">• {item}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-amber-300 mb-3">Soft Skills Demonstradas</h3>
                        <div className="space-y-4">
                          {project.softSkills.map((skill, index) => (
                            <div key={index} className="bg-gray-700/50 p-4 rounded-lg">
                              <div className="flex justify-between items-center mb-1">
                                <h4 className="font-medium text-amber-200">{skill.name}</h4>
                              </div>
                              <p className="text-gray-300 text-sm mt-1">{skill.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col space-y-3 sm:space-y-4 w-full sm:w-48">
                  <button
                    onClick={() => toggleProject(project.id)}
                    className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-500/90 to-amber-600/90 rounded-lg font-medium hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    {activeProject === project.id ? 'Mostrar Menos' : 'Detalhes'}
                  </button>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-amber-400 text-amber-400 rounded-lg font-medium hover:bg-amber-400/10 transition-all duration-300 text-center text-sm sm:text-base"
                  >
                    Ver no GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;
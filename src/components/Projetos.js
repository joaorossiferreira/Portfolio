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
            Neste projeto, atuei como desenvolvedor frontend em um sistema completo de gestão de ponto eletrônico. O backend foi desenvolvido em Java pela equipe, enquanto meu foco foi no frontend utilizando React com TypeScript.
          </p>
          <p>
            Minhas principais contribuições incluíram o desenvolvimento do módulo de solicitações (para alteração de registros, férias e folgas), a criação do sistema de aprovação para gerentes e o design das interfaces de navegação tanto para usuários quanto para administradores. Trabalhei na integração com a API Java do backend, garantindo uma experiência fluida e consistente para os usuários.
          </p>
        </>
      ),
      details: [
        'Desenvolvimento das interfaces de usuário com React e TypeScript',
        'Criação dos formulários e fluxos para solicitações de ajustes de ponto',
        'Implementação do sistema de aprovação de solicitações para gerentes',
        'Design e desenvolvimento das navbars diferenciadas para cada tipo de usuário',
        'Integração com a API REST desenvolvida em Java pelo time de backend',
        'Garantia de usabilidade e experiência intuitiva em todas as telas'
      ],
      technologies: ['React', 'TypeScript', 'JavaScript', 'UI/UX Design'],
      githubLink: 'https://github.com/Equipe-Skyfall/nectopoint'
    },
    {
      id: 'prostock',
      title: 'ProStock - Sistema de Gestão de Estoque',
      description: 'Neste projeto, atuei como master da equipe, com o objetivo de desenvolver um programa de gerenciamento de estoque. A solução incluiu a implementação de um sistema completo de CRUD, integrado ao backend, desenvolvido em Prisma e JavaScript, e ao frontend, desenvolvido em TypeScript com React. Trabalhei no gerenciamento de dados e na criação de interfaces intuitivas e funcionais, garantindo que os usuários pudessem gerenciar o estoque de forma eficiente e com alta performance. A integração entre frontend e backend permitiu uma experiência fluida e otimizada para os usuários do sistema.',
      details: [
        'Liderança técnica como master da equipe',
        'Desenvolvimento completo do sistema CRUD',
        'Integração entre frontend (TypeScript/React) e backend (JavaScript/Prisma)',
        'Criação de interfaces intuitivas e funcionais',
        'Otimização de performance para gestão eficiente de estoque'
      ],
      technologies: ['React', 'TypeScript', 'JavaScript', 'Prisma', 'REST API'],
      githubLink: 'https://github.com/EquipeSkyfall/API_2Semestre'
    },
    {
      id: 'estufa',
      title: 'Smart Farming - Monitoramento de Estufas',
      description: 'Neste projeto, contribuí com o desenvolvimento da arquitetura de informação e o design das interfaces do site. Também trabalhei na integração de containers de plataformas de execução para criar uma estufa virtual inteligente, visando otimizar o controle e análise de dados dos sensores de forma automatizada, com uma interface amigável e gráficos para melhor visualização e eficiência.',
      details: [
        'Arquitetura de informação e design de interfaces',
        'Integração de containers para estufa virtual',
        'Controle e análise automatizada de dados de sensores',
        'Desenvolvimento de interface amigável com gráficos',
        'Otimização da visualização de dados para eficiência operacional'
      ],
      technologies: ['IoT', 'UI/UX Design', 'Data Visualization', 'Python', 'Docker'],
      githubLink: 'https://github.com/CyberScrums/Projeto-Smart-Farming'
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
          Trabalhos onde combinei habilidades técnicas e visão de produto para entregar soluções completas
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
                    {typeof project.description === 'string' ? (
                      <p>{project.description}</p>
                    ) : (
                      project.description
                    )}
                  </div>

                  {activeProject === project.id && (
                    <div className="mt-4 space-y-3 pl-4 border-l-2 border-amber-400/30 text-sm sm:text-base">
                      {project.details.map((item, index) => (
                        <div key={index} className="text-gray-300">
                          <p className="mb-2">• {item}</p>
                        </div>
                      ))}
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
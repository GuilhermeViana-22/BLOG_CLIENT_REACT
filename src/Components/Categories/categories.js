// src/components/Categories.js

import React, { useState, useEffect } from "react";
import { getCategories } from '../../Services/getCategories'; // Verifique o caminho correto

const iconMap = {
  elixir: 'fas fa-cube',
  go: 'fas fa-rocket',
  pascal: 'fas fa-code',
  python: 'fab fa-python',
  javascript: 'fab fa-js',
  java: 'fab fa-java',
  cpp: 'fab fa-cuttlefish',
  ruby: 'fas fa-gem',
  desenvolvimento_web: 'fas fa-laptop-code',
  html: 'fab fa-html5',
  css: 'fab fa-css3-alt',
  php: 'fab fa-php',
  laravel: 'fab fa-laravel',
  react: 'fab fa-react',
  vue: 'fab fa-vuejs',
  angular: 'fab fa-angular',
  banco_de_dados: 'fas fa-database',
  mysql: 'fas fa-database',
  postgresql: 'fas fa-database',
  mongodb: 'fas fa-database',
  sqlite: 'fas fa-database',
  redis: 'fas fa-database',
  devops_e_infraestrutura: 'fas fa-server',
  docker: 'fab fa-docker',
  kubernetes: 'fab fa-kubernetes',
  ansible: 'fas fa-cogs',
  terraform: 'fas fa-cogs',
  aws: 'fab fa-amazon',
  azure: 'fab fa-microsoft',
  inteligencia_artificial_e_machine_learning: 'fas fa-robot',
  tensorflow: 'fas fa-brain',
  pytorch: 'fas fa-brain',
  keras: 'fas fa-brain',
  scikit_learn: 'fas fa-brain',
  opencv: 'fas fa-brain',
  tecnologias_emergentes: 'fas fa-rocket',
  blockchain: 'fas fa-cubes',
  quantum_computing: 'fas fa-atom',
  internet_das_coisas: 'fas fa-network-wired',
  realidade_aumentada: 'fas fa-glasses',
  realidade_virtual: 'fas fa-gamepad',
};

const linksMap = {
  elixir: 'https://elixir-lang.org/',
  go: 'https://golang.org/',
  pascal: 'https://www.freepascal.org/',
  python: 'https://www.python.org/',
  javascript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  java: 'https://www.oracle.com/java/',
  cpp: 'https://isocpp.org/',
  ruby: 'https://www.ruby-lang.org/en/',
  desenvolvimento_web: 'https://developer.mozilla.org/en-US/docs/Web',
  html: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  css: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  php: 'https://www.php.net/',
  laravel: 'https://laravel.com/',
  react: 'https://reactjs.org/',
  vue: 'https://vuejs.org/',
  angular: 'https://angular.io/',
  banco_de_dados: 'https://www.mysql.com/', // Exemplo, adicione links específicos para cada banco de dados
  mysql: 'https://www.mysql.com/',
  postgresql: 'https://www.postgresql.org/',
  mongodb: 'https://www.mongodb.com/',
  sqlite: 'https://www.sqlite.org/',
  redis: 'https://redis.io/',
  devops_e_infraestrutura: 'https://www.devops.com/',
  docker: 'https://www.docker.com/',
  kubernetes: 'https://kubernetes.io/',
  ansible: 'https://www.ansible.com/',
  terraform: 'https://www.terraform.io/',
  aws: 'https://aws.amazon.com/',
  azure: 'https://azure.microsoft.com/',
  inteligencia_artificial_e_machine_learning: 'https://www.ibm.com/cloud/ai',
  tensorflow: 'https://www.tensorflow.org/',
  pytorch: 'https://pytorch.org/',
  keras: 'https://keras.io/',
  scikit_learn: 'https://scikit-learn.org/',
  opencv: 'https://opencv.org/',
  tecnologias_emergentes: 'https://www.techradar.com/news/technology-emerging',
  blockchain: 'https://www.ibm.com/topics/what-is-blockchain',
  quantum_computing: 'https://quantum-computing.ibm.com/',
  internet_das_coisas: 'https://www.i-scoop.eu/internet-of-things/',
  realidade_aumentada: 'https://www.techradar.com/best/best-augmented-reality-headsets',
  realidade_virtual: 'https://www.techradar.com/best/best-vr-headsets',
};

const Categories = () => {

        const [categories, setCategories] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
      
        useEffect(() => {
          const fetchCategories = async () => {
            const cachedCategories = localStorage.getItem('categories');
      
            if (cachedCategories) {
              // Se houver dados armazenados, use-os
              setCategories(JSON.parse(cachedCategories));
              setLoading(false);
            } else {
              try {
                const data = await getCategories();
                setCategories(data);
                localStorage.setItem('categories', JSON.stringify(data)); // Armazena os dados no localStorage
              } catch (err) {
                setError(err);
              } finally {
                setLoading(false);
              }
            }
          };
      
          fetchCategories();
        }, []);
      
        if (loading) {
          return <div>Loading...</div>;
        }
      
        if (error) {
          return <div>Error: {error.message}</div>;
        }
  return (
    <div className="flex min-h-screen bg-gray-200">
    <div className="max-w-sm w-full bg-white overflow-hidden ">
      <div className="p-6">
        <ul className="list-disc list-none list-inside text-gray-700 mb-6">
          {categories.map((category) => (
            <li key={category.id} className="mb-2">
              <a
                href={linksMap[category.name.toLowerCase()] || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center text-gray-700 ${category.parent_id ? 'ml-10' : ''}`}
              >
                <span className="mr-2 text-xl">
                  <i className={iconMap[category.name.toLowerCase()] || ''}></i>
                </span>
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  
  );
};

export default Categories;

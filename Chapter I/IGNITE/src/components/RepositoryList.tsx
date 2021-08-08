
import { useEffect, useState } from 'react';
import axios from "axios";
import '../styles/repositories.scss';
import { RepositoryItem } from './RepositoryItem';

// passa oara o useState os tipo de dados que são gravados em repositories
interface Repository {
  name:String;
  description:string;
  id:number;
  html_url: string;
}

export function RepositoryList() {

const [repositories, setRepositories] = useState<Repository[]>([]);

console.log(repositories)
useEffect(() => {
  fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))  
}, []);

// const Repository = {
//   name: 'SAMUEL',
//   description: 'TESTE',
//   link: 'https://api.github.com/orgs/rocketseat/repos',
// }

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => 
          {
            return <RepositoryItem
            key={repository.id}
            Repository={repository}
          />
          }
          )}
      </ul>
    </section>
  )
} 
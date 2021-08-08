// PAssa para o props os tipos que retorna ta api
interface RepositoryItemProps {
  Repository: {
    name:String;
    description:string;
    id:number;
    html_url: string;
  }
}


export function RepositoryItem (props:RepositoryItemProps){
  return (
    <li>
      {/* caso o repository esteja nulo ele n procura(?) pelo name e vai pra default */}
      <strong>Nome = {props.Repository?.name ?? 'Default'}</strong>

      <h5>ID = {props.Repository?.id ?? 'Default'}</h5>

      <p>Descrição = {props.Repository?.description ?? 'Default'}</p>

      <a href={props.Repository?.html_url ?? 'Default'}>
        Acessar repositório
        </a>
  </li>
  )
} 



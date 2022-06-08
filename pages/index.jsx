import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";


export default function HomePage() {
  return (
    <MainLayout>
      <h2>Home page</h2>
      <h1 className="title">
        Go to <Link href="/about">About</Link>          
      </h1>
      <p className={'description'}>
        Get started by editing{" "}
        <code className="code">pages/index.jsx</code>
      </p>
    </MainLayout>
  );
}


{
// Teoria: 
/*
<Head></Head>: Modifica la etiqueta head del html 

<Link></Link>: Hace un prefetch de la pagina a la que quiero ir, guardandola en memoria y cuando me dirijo a ella, ya esta cargada, haciendo que la navegación sea muy rapida

-No puedo crear mis componentes en la carpeta page, ahi solo van las paginas que se visualizaran
*/
}
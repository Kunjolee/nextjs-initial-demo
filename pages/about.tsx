
import Link from "next/link";
import DarkLayout from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";


export default function AboutPage() {
  return (  
    <>
      <h2>About page</h2>
      <h1 className="title">
        Go to <Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing{" "}
        <code className="code">pages/about.jsx</code>
      </p>
    </>  
  );
}

// Optimizar mejor el codigo con layouts anidados
AboutPage.getLayout = function getLayout (page: JSX.Element) {  
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}
import Link from "next/link"
import { MainLayout } from "../../components/layouts/MainLayout"

const PricingPage = () => {

  return (
    <MainLayout>
      <h2>Pricing page</h2>
      <h1 className="title">
      Go to <Link href="/">Home</Link>          
      </h1>
      <p className="description">
        Get started by editing{" "}
        <code className="code" >pages/pricing/index.jsx</code>
      </p>
    </MainLayout>
  )
}
export default PricingPage;
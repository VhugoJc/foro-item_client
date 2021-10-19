import BasicLayout from "../layouts/BasicLayout";
import Error404 from "../components/Calendar/Error/Error404";
import Seo from "../components/Seo";
// pages/404.js
export default function Custom404() {
   return( 
   <BasicLayout>
     <Seo title="Página no encontrada"/>
    <Error404/>      
    </BasicLayout>)
  }
import MenuTop from '../../components/MenuTop';
import Footer from '../../components/Footer/Footer';
import MenuTopMobile from '../../components/MenuTop/MenuTOpMobile/MenuTopMobile';
export default function BasicLayout({children}){
    return(
    <>
        <MenuTopMobile/>
        <MenuTop/>
        {children}    
        <Footer/>
    </>
    );
}
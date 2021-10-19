import BasicLayout from '../layouts/BasicLayout';
import MasterClass from '../components/MasterClass';
import Seo from '../components/Seo';
export default function talleres(){
    return(
        <BasicLayout>
            <Seo title="talleres"/>
            <div className="talleres">
                <MasterClass/>
            </div>
        </BasicLayout>
        
    );
}
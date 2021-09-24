import BasicLayout from "../layouts/BasicLayout";
import MainBanner from "../components/MainBanner";
import CountDown from "../components/CountDown";
import HostBanner from "../components/HostBanner";
import Calendar  from "../components/Calendar";
import MasterClass from "../components/MasterClass";
import Speakers from "../components/Speakers";
import Colleges from '../components/Colleges';
import SocialMediaBanner from '../components/SocialMediaBanner';
export default function Home() {
  return (
    <BasicLayout>
      <MainBanner/>
      <CountDown/>
      <HostBanner/>
      <Calendar/>
      <MasterClass/>
      <Speakers/>
      <Colleges/>
      <SocialMediaBanner/>
    </BasicLayout>
    )
}


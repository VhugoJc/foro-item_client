import BasicLayout from "../layouts/BasicLayout";
import MainBanner from "../components/MainBanner";
import CountDown from "../components/CountDown";
import HostBanner from "../components/HostBanner";
import Calendar  from "../components/Calendar";
import MasterClass from "../components/MasterClass";
import Speakers from "../components/Speakers";
import Colleges from '../components/Colleges';
import SocialMediaBanner from '../components/SocialMediaBanner';

import {UpOutlined} from '@ant-design/icons'

import FixedButton from "../components/FixedButton";
import MobileFixedButton from "../components/MobileFixedButton/MobileFixedButton";

import { BackTop } from "antd";


import Seo from '../components/Seo';
export default function Home() {
  return (
    <BasicLayout>
      <Seo/>
      <MainBanner/>
      <CountDown/>
      <section id="anfitrion">
        <HostBanner/>
        <BackTop>
        <div className="fixed-button" >
            <UpOutlined className="fixed-button__icon"/>
        </div>
      </BackTop>
      </section>
      <section id="agenda">
      <Calendar/>
      </section>
      <section id="talleres">
      <MasterClass/>
      </section>
      <section id="ponentes">
      <Speakers/>
      </section>
      <section id="universidades">
      <Colleges/>
      </section>
      <SocialMediaBanner/>
      <MobileFixedButton/>
    </BasicLayout>
    )
}


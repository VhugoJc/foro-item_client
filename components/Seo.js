import React from "react";
import Head from "next/head";

export default function Seo(props) {
  const { title, description, img } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta property="og:image"   content={img}/>
    </Head>
  );
}

Seo.defaultProps = {
  title: "Foro de Telemática- Upslp",
  description:
    "Foro Nacional de Telemática Redes y Telecomunicaciones 2021. Ingeniería en Telematica Redes y Telecomunicaciones, Univerisdad Politécnica de San Luis PotosÍ",
    img:"https://datos.slp.gob.mx/uploads/group/2019-10-30-191725.546931Logo-UPSLP-oficial.jpg",
};
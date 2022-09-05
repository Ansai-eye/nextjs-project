import Head from "next/head";
import Layout from "../../../components/layout";
import Image from "next/image";

import styles from './index.module.css';
import Pic1 from './1.jpg';

export default function Chapter11() {
  return (
    <Layout>
      <Head>
        <title>Chapter 11</title>
      </Head>
      <div className={styles.container}>
        <button className={styles.button}>主按钮</button>
        <button className={styles.button}>按钮1</button>
        <button className={styles.button}>按钮2</button>
        <button className={styles.button}>按钮3</button>
      </div>
      <h4>色彩的流动</h4>
      <p>色调变化带来的视觉流动假象</p>
      <div className={styles.flowColorful}></div>
      <h4>文字的七彩渐变动效</h4>
      <h2 className={styles.flowSlogon}>CSS新世界</h2>
      <div className={styles.waterMark}>
        <Image src={Pic1} width={256} height={192}/>
      </div>
    </Layout>
  );
}

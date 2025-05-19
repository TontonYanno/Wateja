import Link from 'next/link';
import style from './page.module.css';
import Image from 'next/image';
import Nabar from './component/navbar';
export default function Home() {
  return (
    
    <div className={style .page}>
      <Image src={"/hero.png"} alt="hero" width={200} height={200} />
      <h1> Bienvenue  dans nextjs </h1>
      <Link href="/contacte/contacts" className='btn-link'> Visiter notre application</Link>
    </div>
    
  );
}

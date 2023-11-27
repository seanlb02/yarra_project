import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Map = dynamic(
  () => import('Components/Map'), // replace '@components/map' with your component's location
  { ssr: false } // This line is important. It's what prevents server-side render
)

export default function Home() {
  return (
    <main className={styles.pageContainer}>
      <div className="flex">
          <div className={styles.titleContainer}><div className="font-space">Reimagining Birrarung</div></div>
          <div className={styles.subheader}><span className='mx-2'><strong>right click</strong></span>and drag while navigating to rotate and tilt map</div>
     </div>
     
        <Map/>
     
    </main>
  )
}

const styles = {
  pageContainer: "flex flex-col items-center h-[100vh] w-[100vw]",
  titleContainer: "flex font-space mt-2 mb-8 align-center text-left w-[60vw] h-fit text-7xl",
  subheader: "flex w-[40vw] font-space mt-12 h-fit justify-center mb-10"
}
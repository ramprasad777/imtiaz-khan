import Image from 'next/image'

function Logo(props){
    const { styles } = props;
    return(
        <div>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
    )
}
export default Logo;
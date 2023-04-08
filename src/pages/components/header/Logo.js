import Image from 'next/image'

function Logo(props){
    const { styles } = props;
    return(
        <div>
          <Image
            className={styles.logo}
            src="/images/imtiyaz-khan-logo.png"
            alt="Imtiyaz Khan"
            width={180}
            height={37}
            priority
          />
        </div>
    )
}
export default Logo;
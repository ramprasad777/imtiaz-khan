import Image from 'next/image';
import { Grid } from '@mui/material';
import ContactForm from '../contact/ContactForm';
import Heading from '../../shared/Heading';

function InnerContactForm(){
    return(
        <>
            <Heading heading="Contact" heading2="With me" start="true" variant="h2" component="h2" textAlign="center" />
            <Grid container spacing={2} mt={5}>
                <Grid item xs={12} sm={5}>
                    <Image
                        className="banner-image"
                        src="/images/contact/contact-img.png"
                        alt="Contact Banner"
                        layout="responsive"
                        width='100'
                        height='100'
                        sizes='auto'
                        priority
                    />
                </Grid>
                <Grid item xs={12} sm={7}>
                    <ContactForm /> 
                </Grid>
            </Grid>
        </>
    )
}
export default InnerContactForm;
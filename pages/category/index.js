import Link from 'next/link';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function Category() {
    return <div>
        <Navbar />
        <div className='cinzel defaultColor my-5 text-center' id='category'>
            <h3>For whom Would you like to get stitched?</h3>
            <div className='container row mx-auto mt-5'>
                <div className='col-lg-4 col-md-4 col-sm-6'>
                    <Link href='/category/women'><a className='defaultColor'>
                        <img
                            src='images/category_image-1.png'
                            className='img-fluid'
                        />
                        <h4 className='mt-3'>Women</h4></a></Link>

                </div>
                <div className='col-lg-4 col-md-4 col-sm-6'>
                    <Link href='/category/men'><a className='defaultColor'>
                        <img
                            src='images/category_image-2.png'
                            className='img-fluid'
                        />
                        <h4 className='mt-3'>Men</h4></a></Link>

                </div>
                <div className='col-lg-4 col-md-4'>
                    <Link href='/category/kids'><a className='defaultColor'>
                        <img
                            src='images/category_image-3.png'
                            className='img-fluid'
                        />
                        <h4 className='mt-3'>Kids</h4></a></Link>
                </div>
            </div>
        </div>
    <Footer/>
    </div>;
}

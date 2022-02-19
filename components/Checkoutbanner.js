import Bookingdetails from './Bookingdetails';
import CancelPopup from './CancelPopup';

export default function Checkoutbanner() {
    return <div>
        <div className='container-fluid row mx-auto mb-5 montserrat' id='checkout'>
            <div className='col-lg-12 mt-5 border bg-default'>
                <div className='container row mx-auto mt-4'>
                    <div className='col-lg-3 pl-5'>
                        <img
                            src='/images/checkout_image-1.png'
                            className=''
                        />
                    </div>
                    <div className='col-lg-6 my-auto'>
                        <h3 className='defaultColor'><b>CONGRATULATIONS!</b></h3>

                        <p className='' id='p'>Your Booking has been successfully confirmed on <b>28th sept, 2021</b>.<br />Confirmation will be sent through email within 15 mins.</p>


                    </div>
                    <div className='col-lg-3  m-auto'>
                        <p className='mb-2'>Booking ID : <b>08UY6T</b><br /><small>Easily Track Your Order</small></p>

                        <button className='btn px-4 mb-5 mb-lg-0' id='btn-order'>My order</button>
                    </div>
                </div>
            </div>
            <div className='col-lg-8 col-md-7 mt-5 bg-default border'>
                <h3 className='my-4 ml-2 defaultColor montserrat'>PRODUCT DETAILS</h3>
                <div className='container row'>
                    <div className='col-4 border bg-white'>

                        <div className='d-flex h-100 align-items-center'>
                            <img
                                src='/images/checkout_image-2.png'
                                className='img-fluid mx-auto py-1 ' />
                        </div>

                    </div>
                    <div className='col-8'>
                        <h3 className='cinzel defaultColor'>GOWN</h3>
                        <p className='montserrat mb-2' id='p'>Lorem Ipsum is simply dummy<br />text of the printing and typesetting industry.</p>
                        <p className='montserrat defaultColor'>I have all/some the fabric for the item</p>
                        <p className='montserrat' id='p'>Qty <button id='quantity'>2</button></p>
                    </div>
                </div>
                <hr className='border' />
                <div className='container row'>
                    <div className='col-4 border bg-white'>

                        <div className='d-flex h-100 align-items-center'>
                            <img
                                src='/images/checkout_image-3.png'
                                className='img-fluid mx-auto py-1' />
                        </div>

                    </div>
                    <div className='col-8'>
                        <h3 className='cinzel defaultColor'>GOWN</h3>
                        <p className='montserrat mb-2' id='p'>Lorem Ipsum is simply dummy<br />text of the printing and typesetting industry.</p>
                        <p className='montserrat defaultColor'>I have all/some the fabric for the item</p>
                        <p className='montserrat' id='p'>Qty <button id='quantity'>1</button></p>
                    </div>
                    <div className='ml-auto'>
                    <CancelPopup />
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-md-5 mt-5'>
                <div className='border bg-default'>
                    <div className='m-2'>
                        <h5 className='montserrat defaultColor'>Your slot has been successfully booked for <b>28th sept, 2021 at 04 PM </b>.</h5>
                        <p>Please be available at that Selected Time slot. </p>
                        <button className='btn text-white px-3' id='btn-modi'>Modify Booking</button></div>
                    <Bookingdetails />
                </div>
            </div>
        </div>
    </div>;
}

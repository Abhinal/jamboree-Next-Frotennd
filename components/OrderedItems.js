import Link from 'next/link';
import Bookingdetails from './Bookingdetails';

export default function OrderedItems() {
    return <div>
        <div className='container row mx-auto ' id='orderedItems'>
            <div className='col-lg-8 mt-5 pr-2 bg-default border'>
                <div className='container-fluid row p-4 montserrat defaultColor' >
                    <div className='col-3'><img src='/images/cart_image-1.png'
                        className='img-fluid  mx-auto h-100'
                    /></div>
                    <div className='col-9 p-0 ' id='divItemContent'>
                        <h5 className='cinzel d-inline '>GOWN</h5>
                        <div className="btn-group d-inline float-right" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-sm">-</button>
                            <p className="btn btn-sm my-auto">1</p>
                            <button type="button" className="btn btn-sm">+</button>
                        </div>
                        <p className='pt-2 '>Lorem Ipsum is simply dummy <br />text of the printing and typesetting industry.</p>
                        <form className="form-check pl-3">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                I have all/some the fabric for the item
                            </label>
                        <br />
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                I Don’t have fabric for the item
                            </label>
                        </form>
                    </div>
                </div>
                <hr className='border' />
                <div className='container-fluid row p-4 montserrat defaultColor' >
                    <div className='col-3'><img src='/images/cart_image-2.png'
                        className='img-fluid  mx-auto h-100'
                    /></div>
                    <div className='col-9 p-0 ' id='divItemContent'>
                        <h5 className='cinzel d-inline '>GOWN</h5>
                        <div className="btn-group d-inline float-right" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-sm">-</button>
                            <p className="btn btn-sm my-auto">1</p>
                            <button type="button" className="btn btn-sm">+</button>
                        </div>
                        <p className='pt-2 '>Lorem Ipsum is simply dummy <br />text of the printing and typesetting industry.</p>
                        <form className="form-check pl-3">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                I have all/some the fabric for the item
                            </label>
                        <br />
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                I Don’t have fabric for the item
                            </label>
                        </form>
                    </div>
                </div>

            </div>
            <div className='col-lg-4 mt-5  '>
                <div className='border h-100 p-3 bg-default'>
                    <h3 className='cinzel defaultColor mt-3'>Book a slot </h3>
                    <form>
                        <div className="form-group">
                        <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <input type="time" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                    </form>
                </div>
            </div>
            
            <Link href='/cart/checkout'><a className='mx-auto'>
            <button className='btn my-4 ' id='button'>Confirm order</button></a>
            </Link>

        </div>
    
    </div>;

}

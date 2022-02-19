
export default function CancelPopup() {
    return <div>
        {/* Button trigger modal */}
        <button type="button" className='btn my-2 px-4 ' id='btn-cancel' data-toggle="modal" data-target="#exampleModalCenter">
            Cancel Order
        </button>

        {/* Modal */}
        <div className="modal fade w-25 mx-auto" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-center defaultColor 
                        montserrat" id="exampleModalLongTitle">Are You sure You Want to cancel the Booking?</h5>

                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-lg w-50" id='btn-cancel' data-dismiss="modal" data-toggle="modal" data-target="#exampleModalCenter2">Yes, Cancel</button>
                        <button type="button" className="btn btn-lg w-50 text-white" id='btn-modi' data-dismiss="modal">No</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade mx-auto" id="exampleModalCenter2" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="text-center defaultColor montserrat">
                        <p className="mt-4 text-left ml-4 mb-0" id="exampleModalLongTitle"><b>Please Select the reason for Cancellation</b></p>
                        <p className="text-left ml-4">The following information is only for our records and will not prevent you from cancelling your order.</p>

                    </div>

                    <div className="form-group mx-5 defaultColor">
                        <fieldset className="the-fieldset">
                            <legend className="the-legend">
                                Choose Reason
                            </legend>
                            <select className='w-100 defaultColor'>
                                <option />
                                <option>Reason 1</option>
                                <option>Reason 2</option>
                                <option>Reason 3</option>
                            </select>
                        </fieldset>
                        <fieldset className="the-fieldset">
                            <legend className="the-legend">
                                Additional comment
                            </legend>
                            <textarea defaultValue={""} className='w-100 defaultColor' />
                        </fieldset>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn w-25 text-white" id='btn-modi' data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

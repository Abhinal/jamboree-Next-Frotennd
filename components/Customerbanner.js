import Link from "next/link";

export default function Customerbanner() {
  return (
    <div>
      <h3 className="text-center defaultColor mt-5 mb-4 cinzel">
        Customer Gallery
      </h3>

      <div className="row mx-auto" id="cbanner">
        <div className="col-lg-6 col-12 ml-auto p-0">
          <div className="container-fluid row">
            <div className="col-lg-6 col-6" id="imgs-1">
              <div className="" id="img-1"></div>
            </div>

            <div className="col-lg-6 col-6">
              <div id="img-2"></div>
            </div>

            <div className="col-lg-12 col-12">
              <div id="img-3"></div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-12 p-0 mt-1 mt-lg-0" id="imgs-2">
          <div className="container-fluid row">
            <div className="col-lg-6 col-6">
              <div id="img-4" className="h-100"></div>
            </div>

            <div className="col-lg-6 col-6">
              <div id="img-5"></div>
            </div>
          </div>
        </div>
      </div>
      <Link href="/gallery">
        <h5 className="text-center defaultColor mt-5 mb-5">Show more</h5>
      </Link>
    </div>
  );
}

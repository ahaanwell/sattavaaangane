export default function Footer() {
  return (
    <footer>
      <div className="bg-white p-4 mt-4 flex flex-col gap-3 relative border border-gray-200">

        {/* Disclaimer */}
        <div className="lg:px-6">
          <p className="text-xs text-gray-700 leading-relaxed">
            <span className="font-medium">Disclaimer</span> : Please be advised that this website
            is not an official site and serves solely as an informational portal managed by a RERA
            authorized real estate agent. It does not constitute an offer or guarantee of any
            services. The prices displayed on this website are subject to change without prior
            notice, and the availability of properties cannot be guaranteed. The images showcased
            on this website are for representational purposes only and may not accurately reflect
            the actual properties. We may share your data with Real Estate Regulatory Authority
            (RERA) registered Developers for further processing as necessary. Additionally, we may
            send updates and information to the mobile number or email address registered with us.
            All rights reserved. The content, design, and information on this website are protected
            by copyright and other intellectual property rights. Any unauthorized use or
            reproduction of the content may violate applicable laws. For accurate and up-to-date
            information regarding services, pricing, availability, and any other details, it is
            recommended to contact us directly through the provided contact information on this
            website. Thank you for visiting our website.
          </p>
        </div>

        {/* Credits */}
        <div className="flex justify-center border-t border-black mt-2 pt-2">
          <p className="text-sm text-gray-700">
            Developed and Marketing by{" "}
            <a
              href="https://www.mndigitalagency.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              M2N Digital Agency
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
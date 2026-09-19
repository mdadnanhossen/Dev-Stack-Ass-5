import logo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto  py-12">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center">
              <img src={logo} alt="Dev Stack" className="h-auto w-auto" />
            </div>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-5 text-sm font-medium text-gray-700">
              <a href="#" className="hover:text-pink-500">
                GitHub
              </a>

              <a href="#" className="hover:text-pink-500">
                Twitter
              </a>

              <a href="#" className="hover:text-pink-500">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              Product
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              Company
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-900">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              Legal
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-gray-200 pt-8 text-sm text-gray-400 sm:flex-row sm:items-center">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <a href="#" className="hover:text-gray-700">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

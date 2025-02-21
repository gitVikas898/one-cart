import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">OneCart</h2>
            <p className="mt-2 text-sm">
              Sync, organize, and shop smarter with OneCart – your all-in-one
              universal shopping cart.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-purple-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-purple-500">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-purple-500">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-purple-500">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-purple-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
            <div className="flex mt-2 space-x-4">
              <Link href="https://twitter.com" className="hover:text-purple-500">
                <i className="fab fa-twitter"></i> Twitter
              </Link>
              <Link href="https://facebook.com" className="hover:text-purple-500">
                <i className="fab fa-facebook"></i> Facebook
              </Link>
              <Link href="https://instagram.com" className="hover:text-purple-500">
                <i className="fab fa-instagram"></i> Instagram
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-6 pt-4 text-center text-sm">
          <p>© {new Date().getFullYear()} OneCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

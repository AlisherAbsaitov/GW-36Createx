import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      {/* Newsletter Section */}
      <section className="relative bg-[#f6dcd7] py-16 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-semibold uppercase text-gray-600">
            Don't miss anything
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Subscribe to the Createx School
            <br />
            announcements
          </h2>

          <div className="flex justify-center gap-3 mt-8">
            <input
              type="email"
              placeholder="Your working email"
              className="w-87.5 px-4 py-3 border border-gray-300 bg-white outline-none"
            />

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-medium transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Left Illustration */}
        <img
          src="https://via.placeholder.com/150"
          alt=""
          className="absolute bottom-0 left-0 w-40"
        />

        {/* Right Illustration */}
        <img
          src="https://via.placeholder.com/150"
          alt=""
          className="absolute bottom-0 right-0 w-40"
        />
      </section>

      {/* Footer */}
      <div className="bg-[#1E212C] text-gray-400">
        <div className="container mx-auto px-4 py-14 grid lg:grid-cols-5 md:grid-cols-3 gap-10">
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              CREATE<span className="text-orange-500">X</span>
            </h2>

            <p className="text-sm mt-4 leading-6">
              Createx Online School is a leader in online studying.
              We provide relevant approaches to online learning.
            </p>

            <div className="flex gap-4 mt-6 text-lg">
              <FaFacebookF className="cursor-pointer hover:text-white" />
              <FaTwitter className="cursor-pointer hover:text-white" />
              <FaGoogle className="cursor-pointer hover:text-white" />
              <FaLinkedinIn className="cursor-pointer hover:text-white" />
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase">
              Site Map
            </h3>

            <ul className="space-y-2">
              <li>About Us</li>
              <li>Courses</li>
              <li>Events</li>
              <li>Blog</li>
              <li>Contacts</li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase">
              Courses
            </h3>

            <ul className="space-y-2">
              <li>Marketing</li>
              <li>Management</li>
              <li>HR & Recruiting</li>
              <li>Design</li>
              <li>Development</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase">
              Contact Us
            </h3>

            <ul className="space-y-3">
              <li>(405) 555-0128</li>
              <li>hello@createx.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase">
              Sign Up To Our Newsletter
            </h3>

            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="bg-[#2B2D3A] text-white px-3 py-2 w-full outline-none"
              />

              <button className="bg-[#2B2D3A] px-4 text-white">→</button>
            </div>

            <p className="text-xs mt-3 leading-5">
              *Subscribe to our newsletter to receive communications and early
              updates from Createx.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-4 text-center text-sm">
          © All rights reserved. Made with ❤️ by Createx Studio
        </div>
      </div>
    </footer>
  );
}
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#07152D] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">

          {/* Logo */}
          <div>
            <h3 className="text-3xl font-bold">
              <span className="text-white">Simpli</span>
              <span className="text-yellow-400">distance</span>
            </h3>

            <p className="mt-4 text-slate-400">
              Your trusted partner for distance education.
            </p>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-4 font-semibold text-yellow-400">
              About Us
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li><Link href="#">About Simplidistance</Link></li>
              <li><Link href="#">Our Mission</Link></li>
              <li><Link href="#">Why Choose Us</Link></li>
              <li><Link href="#">Contact Us</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="mb-4 font-semibold text-yellow-400">
              Our Courses
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li><Link href="#">MBA</Link></li>
              <li><Link href="#">BBA</Link></li>
              <li><Link href="#">MCA</Link></li>
              <li><Link href="#">BCA</Link></li>
            </ul>
          </div>

          {/* Distance Education */}
          <div>
            <h4 className="mb-4 font-semibold text-yellow-400">
              Distance Education
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li><Link href="#">Distance MBA</Link></li>
              <li><Link href="#">Distance BBA</Link></li>
              <li><Link href="#">Distance MCA</Link></li>
              <li><Link href="#">Distance BCA</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold text-yellow-400">
              Contact Us
            </h4>

            <div className="space-y-3 text-slate-400">
              <p>Mumbai, Maharashtra</p>
              <p>+91 98765 43210</p>
              <p>info@simplidistance.com</p>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-slate-500">
          © 2025 Simplidistance. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
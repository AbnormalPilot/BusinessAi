import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <Link className="flex items-center space-x-2 mb-4" href="#">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BusinessAi</span>
            </Link>
            <p className="text-slate-500 text-sm max-w-sm">
               Empowering Indian MSMEs with the best digital tools for growth, automation, and success.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="#features" className="hover:text-blue-600">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-blue-600">Pricing</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Testimonials</Link></li>
              <li><Link href="#" className="hover:text-blue-600">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="#" className="hover:text-blue-600">About Us</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Careers</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Blog</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="#" className="hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © 2026 BusinessAi. All rights reserved.
          </p>
          <div className="flex space-x-4">
             <Link href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
             </Link>
             <Link href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
             </Link>
             <Link href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
             </Link>
             <Link href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
             </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

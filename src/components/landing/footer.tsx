import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Laptop } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: FaWhatsapp, href: 'https://wa.me/1234567890', label: 'WhatsApp' },
];

const quickLinks = [
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms of Service' },
  { href: '#', label: 'Support' },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Laptop className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">SMART TECHNOLOGY</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your one-stop shop for the latest and greatest in laptop technology.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:support@smarttech.com" className="hover:text-primary transition-colors">support@smarttech.com</a></li>
              <li><a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a></li>
              <li className="text-muted-foreground">123 Tech Avenue, Silicon Valley, CA 94000</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map(link => (
                <Link key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-muted-foreground hover:text-primary transition-colors">
                  <link.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SMART TECHNOLOGY. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

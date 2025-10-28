"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Star, Bed, Crown, Sparkles, ChefHat, Waves, Dumbbell, Quote, Calendar } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Azure Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Unparalleled Luxury"
          description="Discover the perfect blend of elegance, comfort, and world-class service at Grand Azure Hotel. Your extraordinary stay begins here."
          tag="Five-Star Excellence"
          tagIcon={Star}
          buttons={[
            { text: "Reserve Your Stay", href: "contact" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
          imageSrc="https://images.pexels.com/photos/34428372/pexels-photo-34428372.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Grand Azure Hotel exterior showcasing modern luxury architecture"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Where timeless elegance meets modern luxury. Grand Azure Hotel has been setting the standard for exceptional hospitality, creating unforgettable experiences for discerning travelers from around the world."
          buttons={[
            { text: "Our Story", href: "about" },
            { text: "View Gallery", href: "amenities" }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Luxury Accommodations"
          description="Choose from our collection of elegantly appointed rooms and suites, each designed to provide the ultimate in comfort and sophistication."
          tag="Premium Rooms"
          tagIcon={Bed}
          products={[
            {
              id: "1",
              name: "Deluxe King Room",
              price: "$299/night",
              imageSrc: "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Spacious deluxe king room with city view"
            },
            {
              id: "2",
              name: "Presidential Suite",
              price: "$899/night",
              imageSrc: "https://images.pexels.com/photos/14917460/pexels-photo-14917460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxurious presidential suite with separate living area"
            },
            {
              id: "3",
              name: "Standard Queen Room",
              price: "$199/night",
              imageSrc: "https://images.pexels.com/photos/3201758/pexels-photo-3201758.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Comfortable standard queen room with modern amenities"
            }
          ]}
          buttons={[
            { text: "View All Rooms", href: "contact" }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardTwo
          title="World-Class Amenities"
          description="Indulge in our exceptional facilities designed to enhance every moment of your stay with unmatched luxury and convenience."
          tag="Premium Facilities"
          tagIcon={Crown}
          features={[
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your body and mind at our award-winning spa featuring signature treatments and wellness programs.",
              icon: Sparkles
            },
            {
              title: "Fine Dining Restaurant",
              description: "Experience culinary excellence with our Michelin-starred chef's contemporary cuisine and extensive wine collection.",
              icon: ChefHat
            },
            {
              title: "Rooftop Pool & Lounge",
              description: "Relax in our stunning infinity pool with panoramic city views and exclusive poolside service.",
              icon: Waves
            },
            {
              title: "State-of-the-Art Fitness",
              description: "Maintain your wellness routine in our fully equipped fitness center with personal training services available.",
              icon: Dumbbell
            }
          ]}
          buttons={[
            { text: "Explore Amenities", href: "contact" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Discover why travelers from around the world choose Grand Azure Hotel for their most important stays."
          tag="Guest Reviews"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO, Global Ventures",
              testimonial: "The attention to detail and exceptional service at Grand Azure Hotel exceeded all expectations. From the moment we arrived, every aspect of our stay was flawlessly executed.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Director, Investment Banking",
              testimonial: "Outstanding luxury experience. The rooms are beautifully appointed, the spa is world-class, and the restaurant serves some of the finest cuisine I've ever experienced.",
              imageSrc: "https://images.pexels.com/photos/7567213/pexels-photo-7567213.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Marketing Executive",
              testimonial: "Grand Azure Hotel set the perfect tone for our corporate retreat. The meeting facilities are top-notch, and the team went above and beyond to ensure our event was successful.",
              imageSrc: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Real Estate Developer",
              testimonial: "This hotel represents luxury hospitality at its finest. Every detail from the elegant décor to the personalized service creates an unforgettable experience.",
              imageSrc: "https://images.pexels.com/photos/3777560/pexels-photo-3777560.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim"
            },
            {
              id: "5",
              name: "Anna Thompson",
              role: "Fashion Designer",
              testimonial: "The perfect blend of sophistication and comfort. Grand Azure Hotel has become my preferred choice for both business and leisure stays in the city.",
              imageSrc: "https://images.pexels.com/photos/7648239/pexels-photo-7648239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Anna Thompson"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          tagIcon={Calendar}
          title="Reserve Your Luxury Experience"
          description="Contact our reservations team to book your stay at Grand Azure Hotel. We're here to ensure every detail of your visit exceeds expectations."
          imageSrc="https://images.pexels.com/photos/6758528/pexels-photo-6758528.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant Grand Azure Hotel lobby with marble reception area"
          inputPlaceholder="Enter your email address"
          buttonText="Get Availability"
          termsText="By submitting your information, you agree to receive booking confirmations and special offers from Grand Azure Hotel."
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Grand Azure Hotel"
          columns={[
            {
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Fine Dining", href: "amenities" },
                { label: "Spa & Wellness", href: "amenities" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Guest Reviews", href: "testimonials" },
                { label: "Contact", href: "contact" },
                { label: "Reservations", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Concierge Services", href: "contact" },
                { label: "Business Center", href: "contact" },
                { label: "Event Planning", href: "contact" },
                { label: "Airport Transfer", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
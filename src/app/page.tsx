'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.slice(1);
        if (targetId) {
          const target = document.getElementById(targetId);
          target?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image 
                src="/little-sprout-logo.svg" 
                alt="Little Sprout Logo" 
                width={40} 
                height={40}
                className="text-primary"
              />
              <span className="text-xl font-bold text-primary">Little Sprout</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How it Works</a>
              <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">Benefits</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
            <Button className="rounded-full hover:scale-105 transition-transform">Join Waitlist</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Play today. <span className="text-primary">Protect tomorrow.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Melbourne's sustainable wooden toy rental service. Curated toys delivered to your door, 
              rotated bi-monthly. Less clutter. More joy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full text-lg px-8 hover:scale-105 transition-transform">
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg px-8 hover:scale-105 transition-transform">
                Learn More
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">87,400</div>
                <div className="text-sm text-muted-foreground">tonnes of toy waste saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">$50-70</div>
                <div className="text-sm text-muted-foreground">per month</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">0-3</div>
                <div className="text-sm text-muted-foreground">years age range</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Little Sprout Works</h2>
            <p className="text-xl text-muted-foreground">Simple steps to sustainable play</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Plan</h3>
              <p className="text-muted-foreground">Select from our subscription tiers based on your little one's age and needs</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Receive & Play</h3>
              <p className="text-muted-foreground">Curated wooden toys delivered to your door, matched to developmental stages</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rotate & Repeat</h3>
              <p className="text-muted-foreground">Easy returns and new toys every two months. Always fresh, always exciting!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Little Sprout?</h2>
            <p className="text-xl text-muted-foreground">Benefits for your family and our planet</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-card rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-lg font-semibold mb-2">Sustainable Play</h3>
              <p className="text-muted-foreground text-sm">Reduce toy waste and embrace eco-conscious parenting</p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-lg font-semibold mb-2">Less Clutter</h3>
              <p className="text-muted-foreground text-sm">Keep your home tidy with rotating toy collections</p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🧸</div>
              <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground text-sm">Curated wooden toys that support development</p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-lg font-semibold mb-2">Save Money</h3>
              <p className="text-muted-foreground text-sm">Access premium toys without the premium price tag</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6">Curated for Development</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Every toy in our collection is carefully selected to support your child's growth and learning journey.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex-shrink-0 mt-0.5"></div>
                  <div>
                    <h4 className="font-semibold">Age-Appropriate Selection</h4>
                    <p className="text-muted-foreground">Toys matched to developmental milestones from 0-3 years</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex-shrink-0 mt-0.5"></div>
                  <div>
                    <h4 className="font-semibold">Sustainable Materials</h4>
                    <p className="text-muted-foreground">Premium wooden toys, safe for little hands and our planet</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex-shrink-0 mt-0.5"></div>
                  <div>
                    <h4 className="font-semibold">Educational Focus</h4>
                    <p className="text-muted-foreground">Each toy promotes learning through play</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-secondary/30 rounded-3xl p-12 text-center">
              <div className="text-6xl mb-4">🌿</div>
              <p className="text-2xl font-semibold text-primary">67% of parents</p>
              <p className="text-lg text-muted-foreground">want more sustainable toy solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground">Choose the plan that works for your family</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl p-8 border hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$50</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20"></div>
                  <span>3-4 toys per rotation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20"></div>
                  <span>Bi-monthly delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20"></div>
                  <span>Free shipping both ways</span>
                </li>
              </ul>
              <Button className="w-full rounded-full" variant="outline">Choose Starter</Button>
            </div>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 relative shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-4">Growth</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$60</span>
                <span className="opacity-80">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-white/20"></div>
                  <span>5-6 toys per rotation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-white/20"></div>
                  <span>Bi-monthly delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-white/20"></div>
                  <span>Free shipping both ways</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-white/20"></div>
                  <span>Play guide included</span>
                </li>
              </ul>
              <Button className="w-full rounded-full bg-white text-primary hover:bg-white/90">Choose Growth</Button>
            </div>
            <div className="bg-card rounded-2xl p-8 border hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$70</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20"></div>
                  <span>7-8 toys per rotation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20"></div>
                  <span>Bi-monthly delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20"></div>
                  <span>Free shipping both ways</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20"></div>
                  <span>Play guide & milestone tracker</span>
                </li>
              </ul>
              <Button className="w-full rounded-full" variant="outline">Choose Premium</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Sustainable Play Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join Melbourne families who are choosing less clutter, more joy, and a better future for our little ones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 text-lg px-8">
              Join the Waitlist
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white/10 text-lg px-8">
              Learn More
            </Button>
          </div>
          <p className="mt-6 opacity-75">Limited spots available for our pre-launch</p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 bg-background border-t">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image 
                  src="/little-sprout-logo.svg" 
                  alt="Little Sprout Logo" 
                  width={32} 
                  height={32}
                />
                <span className="text-lg font-bold text-primary">Little Sprout</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Melbourne's sustainable wooden toy rental service.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Play today. Protect tomorrow.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground">How it Works</a></li>
                <li><a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground">Benefits</a></li>
                <li><a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">FAQ</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Shipping Info</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <p className="text-sm text-muted-foreground">
                Email: hello@littlesprout.com.au
              </p>
              <p className="text-sm text-muted-foreground">
                Phone: (03) 9xxx xxxx
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Melbourne, Australia
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Little Sprout. All rights reserved. | For little ones and our one Earth.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
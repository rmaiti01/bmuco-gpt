import { Container } from '../components/Common';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <main className="bg-obsidian min-h-screen text-paper">
      <section className="py-32">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-sage-mist">Get in touch</p>
            <h1 className="mb-6 text-5xl font-serif text-white leading-tight md:text-6xl">
              Let's build something important
            </h1>
            <p className="text-lg text-paper/60 leading-relaxed">
              Proposals for talks, schools, or research sprints are welcome. Media and press enquiries too.
            </p>
          </div>

          <div className="mx-auto mt-20 max-w-2xl">
            <div className="rounded-2xl border border-white/10 bg-charcoal/50 p-12 text-center">
              <div className="mb-6 inline-flex items-center justify-center rounded-full bg-oxford-green/20 p-6">
                <Mail size={32} className="text-sage-mist" />
              </div>
              <h2 className="mb-4 text-2xl font-serif text-white">Get in touch directly</h2>
              <p className="mb-8 text-base text-paper/70">
                We ditched the forms. Reach our team directly via email for the fastest response.
              </p>
              <a 
                href="mailto:bmuco.org@gmail.com"
                className="inline-block rounded-lg bg-oxford-green px-8 py-4 text-base font-semibold text-white transition hover:bg-sage-mist hover:text-obsidian"
              >
                Email bmuco.org@gmail.com
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

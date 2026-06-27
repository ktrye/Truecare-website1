import {
  Heart, ShieldCheck, Home, ShoppingBasket, Coffee, Pill, Phone, Mail, MapPin,
  Users, Sparkles, CheckCircle2, CalendarHeart, HandHeart, Star, ArrowRight
} from 'lucide-react';

const help = [
  ['Companionship', Users],
  ['Light housekeeping', Home],
  ['Shopping & errands', ShoppingBasket],
  ['Hot meals & drinks', Coffee],
  ['Medication reminders', Pill],
  ['Daily welfare checks', ShieldCheck],
];

const services = [
  {
    title: 'Companionship & conversation',
    text: 'Friendly visits that reduce loneliness, build confidence and bring warmth into the day.',
    icon: Users
  },
  {
    title: 'Home help & light housekeeping',
    text: 'Support with light cleaning, laundry, tidying and keeping the home comfortable.',
    icon: Home
  },
  {
    title: 'Shopping, errands & appointments',
    text: 'Help with shopping lists, prescription collections, local errands and getting organised.',
    icon: ShoppingBasket
  },
  {
    title: 'Meals, drinks & gentle routine',
    text: 'Preparing simple meals and drinks, plus kind prompts that support everyday wellbeing.',
    icon: Coffee
  }
];

export default function Page() {
  return (
    <main>
      <header className="header">
        <a className="brand" href="#home" aria-label="True Care Home Support">
          <div className="logoMark"><HandHeart size={29}/></div>
          <div>
            <strong>True Care</strong>
            <span>Helping people live well at home</span>
          </div>
        </a>
        <nav>
          <a href="#services">Services</a>
          <a href="#families">For Families</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a className="navButton" href="tel:07932506277">Call 07932 506277</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="leaf one"></div>
        <div className="leaf two"></div>

        <div className="heroCopy">
          <div className="badge"><Sparkles size={17}/> Free, friendly consultation</div>
          <p className="eyebrow">Swansea · Port Talbot · Surrounding areas</p>
          <h1>Kind, dependable support at home</h1>
          <p className="lead">True Care provides calm, reassuring non-medical home support for older people who want to stay independent, comfortable and connected at home.</p>

          <div className="actions">
            <a className="button primary" href="tel:07932506277">Arrange a Call <ArrowRight size={18}/></a>
            <a className="button secondary" href="#services">Explore Services</a>
          </div>

          <div className="miniTrust">
            <span><ShieldCheck/> Enhanced DBS checked</span>
            <span><CheckCircle2/> Fully insured</span>
            <span><Heart/> Reliable service</span>
          </div>
        </div>

        <div className="heroVisual" aria-label="Warm home care scene">
          <div className="portraitCard">
            <div className="sun"></div>
            <div className="person elderly"></div>
            <div className="person carer"></div>
            <div className="mug"></div>
            <div className="caption">
              <strong>Support that feels personal</strong>
              <span>Comfort, routine and reassurance</span>
            </div>
          </div>
        </div>
      </section>

      <section className="helpStrip">
        <h2>We can help with:</h2>
        <div className="helpGrid">
          {help.map(([title, Icon]) => (
            <div className="helpItem" key={title}>
              <Icon size={27}/>
              <span>{title}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="section">
        <div className="sectionHead">
          <p className="eyebrow">Our Services</p>
          <h2>Friendly support built around each person’s needs</h2>
          <p>Practical, non-medical help that makes daily life easier for older people and more reassuring for families.</p>
        </div>

        <div className="serviceGrid">
          {services.map(({ title, text, icon: Icon }) => (
            <article className="serviceCard" key={title}>
              <div className="serviceImage">
                <Icon size={54}/>
              </div>
              <div className="serviceText">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="important">
          <HandHeart size={42}/>
          <div>
            <strong>Important</strong>
            <p>True Care currently provides non-medical home support. We do not provide personal care, nursing care or regulated care unless properly registered to do so.</p>
          </div>
        </div>
      </section>

      <section id="families" className="familySection">
        <div className="familyImage">
          <div className="softScene">
            <Heart size={72}/>
            <p>Peace of mind for families</p>
          </div>
        </div>
        <div className="familyCopy">
          <p className="eyebrow">For Families</p>
          <h2>Support you can trust when you can’t always be there</h2>
          <p>We understand how difficult it can be to balance family life while making sure a loved one is safe, supported and not isolated.</p>
          <p>Our visits bring reassurance, companionship and practical help, while keeping older people as independent as possible.</p>
          <div className="familyPoints">
            <div><CalendarHeart/><span>Regular visits and reassurance</span></div>
            <div><ShieldCheck/><span>DBS checked and fully insured</span></div>
            <div><Heart/><span>Kind, consistent support</span></div>
          </div>
        </div>
      </section>

      <section id="about" className="aboutSection">
        <div>
          <p className="eyebrow">About True Care</p>
          <h2>Home support with warmth, dignity and consistency</h2>
          <p>True Care Home Support was created to offer calm, reliable and compassionate help for older people across Swansea, Port Talbot and surrounding areas.</p>
          <p>Everything is built around trust: familiar routines, respectful communication and dependable visits.</p>
        </div>
        <div className="values">
          <div><Star/><strong>Personal</strong><span>Support tailored to the individual</span></div>
          <div><Heart/><strong>Comfortable</strong><span>Careful, calm and reassuring</span></div>
          <div><ShieldCheck/><strong>Trustworthy</strong><span>Professional and fully insured</span></div>
          <div><CheckCircle2/><strong>Consistent</strong><span>Reliable service families can count on</span></div>
        </div>
      </section>

      <section id="contact" className="contactSection">
        <div className="contactCopy">
          <p className="eyebrow">Contact Us</p>
          <h2>We’re here to help and happy to talk</h2>
          <p>Call today for a friendly, no-obligation chat about how True Care could support you or your loved one.</p>
          <ul>
            <li><Phone/> <a href="tel:07932506277">07932 506277</a></li>
            <li><Mail/> <a href="mailto:hello@truecarehomesupport.co.uk">hello@truecarehomesupport.co.uk</a></li>
            <li><MapPin/> Swansea, Port Talbot & surrounding areas</li>
          </ul>
        </div>

        <form className="contactForm">
          <h3>Send us a message</h3>
          <input placeholder="Your name" />
          <input placeholder="Phone number" />
          <input placeholder="Email address" />
          <textarea placeholder="How can we help?" rows="5"></textarea>
          <button className="button primary" type="button">Send Message</button>
        </form>
      </section>

      <footer>
        <HandHeart/>
        <span>Helping people live well at home</span>
        <small>© 2026 True Care Home Support</small>
      </footer>
    </main>
  );
}

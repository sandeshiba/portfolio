
const name = 'Sandesh Batheja'
const email = 'sandesh@gmail.com'

const skills = ['React', 'JavaScript', 'Java', 'Python', 'HTML & CSS', 'Git & GitHub', 'SQL', 'Machine Learning']

const projects = [
  { title: 'Compiler Lab Parser', img: '/project1.svg', alt: 'Illustration of a syntax tree', text: 'LL(1), operator precedence and LR parsers written in Java.', link: '#' },
  { title: 'Spam Classifier', img: '/project2.svg', alt: 'Illustration of a bar chart', text: 'Naive Bayes model that detects spam SMS messages.', link: '#' },
  { title: 'Pipe Chat (OS)', img: '/project3.svg', alt: 'Illustration of two connected boxes', text: 'Two processes talking through pipes and Unix sockets.', link: '#' },
]

export default function App() {
  return (
    <>
      <div className="blob b1"></div>
      <div className="blob b2"></div>
      <div className="blob b3"></div>

      <header className="header">
        <a href="#home" className="logo">&lt;{name.split(' ')[0]} /&gt;</a>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <img src="/avatar.svg" alt="Cartoon avatar of the portfolio owner" className="avatar" />
          <p className="hello">Hello, I'm</p>
          <h1 className="gradient">{name}</h1>
          <p className="tagline">Computer Science student building clean, useful things for the web.</p>
          <div className="buttons">
            <a href="#projects" className="btn primary">See my work</a>
            <a href="#contact" className="btn">Say hi</a>
          </div>
        </section>

        <section id="about">
          <h2>About & Skills</h2>
          <p className="about">
            I study Computer Science at Sukkur IBA University. I love turning ideas into
            working apps, and I am always learning something new.
          </p>
          <ul className="chips">
            {skills.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="grid">
            {projects.map((p) => (
              <article className="card" key={p.title}>
                <img src={p.img} alt={p.alt} />
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <a href={p.link}>View project →</a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p className="about">Want to work together or just chat? Send me a message.</p>
          <a className="btn primary" href={`mailto:${email}`}>{email}</a>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {name}. Built with React.</p>
      </footer>
    </>
  )
}

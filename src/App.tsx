import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useRef, useState } from 'react';
import { education, experiences, projects, soulCodePrograms, stack } from './data/portfolio';

const navItems = [
  ['Sobre', 'sobre'],
  ['Projetos', 'projetos'],
  ['Experiência', 'experiencia'],
  ['Stack', 'stack'],
  ['Formação', 'formacao'],
];

const areas = [
  ['Software', 'Backend, APIs e arquitetura de aplicações.'],
  ['Infraestrutura', 'Linux, cloud e serviços que eu mesmo hospedo.'],
  ['Segurança', 'Redes, defesa e segurança aplicada.'],
  ['Educação', 'Formação em tecnologia, do Java à IA aplicada.'],
];

function ContactLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`social-links ${className}`} role="group" aria-label="Redes e contato">
      <a
        className="social-link linkedin"
        href="https://www.linkedin.com/in/rmullo/"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin size={28} aria-hidden="true" />
        <span>LinkedIn</span>
      </a>
      <a
        className="social-link github"
        href="https://github.com/rmullo/"
        target="_blank"
        rel="noreferrer"
      >
        <Github size={28} aria-hidden="true" />
        <span>GitHub</span>
      </a>
      <a className="social-link email" href="mailto:romimpereira@gmail.com">
        <Mail size={28} aria-hidden="true" />
        <span>E-mail</span>
      </a>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const [portraitFailed, setPortraitFailed] = useState(false);
  const featuredProject = projects[3];

  return (
    <div className="app-shell">
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Rômulo Pereira — início">
          <span className="brand-mark" aria-hidden="true">
            rp<span>.</span>
          </span>
          <span className="brand-description">Engenheiro & educador</span>
        </a>
        <button
          ref={menuButton}
          className="menu-toggle"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
        <nav
          id="navigation"
          className={menuOpen ? 'nav open' : 'nav'}
          aria-label="Navegação principal"
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setMenuOpen(false);
              menuButton.current?.focus();
            }
          }}
        >
          {navItems.map(([label, id]) => (
            <a key={id} href={'#' + id} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-contact" href="#contato" onClick={() => setMenuOpen(false)}>
            Vamos conversar <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <main id="conteudo" tabIndex={-1}>
        <section className="hero section" id="inicio" aria-labelledby="hero-title">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="status-dot" />
              Disponível para novos projetos
            </span>
            <h1 id="hero-title">
              Rômulo <span>Pereira.</span>
            </h1>
            <p className="hero-intro">
              Escrevo código.
              <br />
              Compartilho o que aprendo.
            </p>
            <p className="hero-description">
              Sou engenheiro de computação e educador. Trabalho com backend, infraestrutura e
              segurança — e levo essa prática para a sala de aula.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projetos">
                Conheça meu trabalho <ArrowDown size={17} aria-hidden="true" />
              </a>
            </div>
            <ContactLinks className="hero-socials" />
          </div>
          <figure className="hero-visual">
            <div className="portrait-label">
              <span>Entre o código e a sala de aula</span>
              <span aria-hidden="true">↘</span>
            </div>
            <div className="portrait-frame">
              {portraitFailed ? (
                <span className="portrait-fallback" aria-label="Rômulo Pereira">
                  rp.
                </span>
              ) : (
                <img
                  src="/profile-hero.png"
                  alt="Retrato de Rômulo Pereira"
                  width="1122"
                  height="1402"
                  fetchPriority="high"
                  onError={() => setPortraitFailed(true)}
                />
              )}
            </div>
            <figcaption className="portrait-caption">
              <span>Engenharia de Computação</span>
              <span>Mestre pela UFCA</span>
            </figcaption>
          </figure>
          <div className="hero-bottom">
            <p>Software Engineer · Cloud · Cybersecurity · Tech Educator</p>
            <a href="#sobre">
              Um pouco sobre mim <ArrowDown size={15} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="section about-section" id="sobre" aria-labelledby="about-title">
          <div className="section-heading">
            <span className="section-kicker">01 / Sobre</span>
            <h2 id="about-title">
              A prática alimenta
              <br />
              <em>o que eu ensino.</em>
            </h2>
          </div>
          <div className="about-content">
            <p className="lead">
              Há mais de dez anos, meu trabalho acontece em dois lugares: nos sistemas que
              desenvolvo e nas pessoas que ajudo a formar.
            </p>
            <p>
              Sou Engenheiro de Computação pela UNIVASF e Mestre em Desenvolvimento Regional
              Sustentável pela UFCA. Minha trajetória passa por desenvolvimento backend,
              infraestrutura Linux e formação profissional em tecnologia.
            </p>
            <p>
              Hoje, conecto essa experiência ao ensino de Cybersecurity, Microsoft Copilot Studio,
              Power Platform e inteligência artificial aplicada. Também mantenho meu próprio
              laboratório de serviços — este site faz parte dele.
            </p>
            <div className="areas-list">
              {areas.map(([title, description], index) => (
                <div className="area" key={title}>
                  <span className="mono">0{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projetos" aria-labelledby="projects-title">
          <div className="section-heading split">
            <div>
              <span className="section-kicker">02 / Projetos selecionados</span>
              <h2 id="projects-title">
                Feito para <em>funcionar.</em>
              </h2>
            </div>
            <a
              className="text-link"
              href="https://github.com/rmullo/"
              target="_blank"
              rel="noreferrer"
            >
              Explorar o GitHub <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <article className="featured-project">
            <div className="featured-copy">
              <span className="section-kicker">Em destaque / Você está aqui</span>
              <h3>{featuredProject.title}</h3>
              <p>{featuredProject.description}</p>
              <div className="tags">
                {featuredProject.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a
                className="text-link"
                href="https://github.com/rmullo/self-hosted-portfolio"
                target="_blank"
                rel="noreferrer"
              >
                Ver código do portfólio <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
            <div
              className="architecture"
              aria-label="Publicação do site: código React e Vite, automação GitHub Actions e servidor próprio ARM64 com Caddy"
            >
              <div className="architecture-top">
                <span>DA MÁQUINA À WEB</span>
                <span>01—03</span>
              </div>
              <div className="architecture-step">
                <span className="step-index">01</span>
                <div>
                  <strong>Código</strong>
                  <span>React + TypeScript + Vite</span>
                </div>
                <span className="step-symbol" aria-hidden="true">
                  {'{ }'}
                </span>
              </div>
              <div className="architecture-step">
                <span className="step-index">02</span>
                <div>
                  <strong>Automação</strong>
                  <span>GitHub Actions · CI/CD</span>
                </div>
                <span className="step-symbol" aria-hidden="true">
                  ↳
                </span>
              </div>
              <div className="architecture-step">
                <span className="step-index">03</span>
                <div>
                  <strong>Servidor próprio</strong>
                  <span>ARM64 · Linux · Caddy</span>
                </div>
                <span className="step-symbol" aria-hidden="true">
                  ↗
                </span>
              </div>
              <p className="architecture-caption">
                <span className="status-dot" />
                Do commit à infraestrutura que eu mantenho.
              </p>
            </div>
          </article>
          <div className="project-list">
            {projects.slice(0, 3).map((project, index) => (
              <article className="project-row" key={project.title}>
                <span className="project-index mono">0{index + 2}</span>
                <div className="project-summary">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experiencia" aria-labelledby="experience-title">
          <div className="section-heading split">
            <div>
              <span className="section-kicker">03 / Experiência</span>
              <h2 id="experience-title">
                Uma trajetória de <em>trocas.</em>
              </h2>
            </div>
            <p>
              Desenvolvimento, ensino e gestão.
              <br />
              Perspectivas que se complementam.
            </p>
          </div>
          <div className="timeline">
            {experiences.map((experience) => (
              <article className="timeline-item" key={experience.company + experience.role}>
                <span className="timeline-period mono">{experience.period}</span>
                <div className="timeline-company">
                  <h3>{experience.company}</h3>
                  <span>{experience.role}</span>
                </div>
                <p>{experience.description}</p>
              </article>
            ))}
          </div>
          <div className="programs">
            <div className="programs-intro">
              <span className="section-kicker">Ensino em prática</span>
              <h3>Na SoulCode Academy</h3>
              <p>Programas em que atuo como professor e instrutor.</p>
            </div>
            <div className="program-list">
              {soulCodePrograms.map((program) => (
                <article className="program" key={program.title}>
                  <span className="program-tag">{program.tag}</span>
                  <h4>{program.title}</h4>
                  <p>{program.subtitle}</p>
                  <p className="program-role">{program.role}</p>
                  <span className="program-partners">{program.partners}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section stack-section" id="stack" aria-labelledby="stack-title">
          <div className="section-heading">
            <span className="section-kicker">04 / Ferramentas</span>
            <h2 id="stack-title">
              Na minha
              <br />
              <em>bancada.</em>
            </h2>
            <p>As tecnologias que atravessam meu trabalho e minhas aulas.</p>
          </div>
          <div className="stack-list">
            {Object.entries(stack).map(([category, items]) => (
              <div className="stack-row" key={category}>
                <h3>{category}</h3>
                <p>{items.join(' / ')}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="section education-section"
          id="formacao"
          aria-labelledby="education-title"
        >
          <div className="section-heading">
            <span className="section-kicker">05 / Formação</span>
            <h2 id="education-title">
              Base para
              <br />
              <em>seguir aprendendo.</em>
            </h2>
          </div>
          <div className="education-list">
            {education.map((item) => (
              <article className="education-item" key={item.course}>
                <span className="mono">{item.finished}</span>
                <div>
                  <h3>{item.course}</h3>
                  <p>{item.institution}</p>
                  {item.detail && <p className="education-detail">{item.detail}</p>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contato" aria-labelledby="contact-title">
          <div className="contact-inner">
            <div className="contact-top">
              <span className="section-kicker">06 / Próxima conversa</span>
              <span className="contact-availability">
                <span className="status-dot" />
                Aberto a projetos e colaborações
              </span>
            </div>
            <h2 id="contact-title">
              Tem algo em mente?
              <br />
              <em>Vamos conversar.</em>
            </h2>
            <div className="contact-bottom">
              <a className="contact-email" href="mailto:romimpereira@gmail.com">
                romimpereira@gmail.com <ArrowUpRight aria-hidden="true" />
              </a>
              <ContactLinks className="contact-socials" />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <span>© {new Date().getFullYear()} Rômulo Pereira</span>
        <span>Feito por aqui. Hospedado por aqui.</span>
        <a href="#inicio">
          Voltar ao início <ArrowRight size={15} aria-hidden="true" />
        </a>
      </footer>
    </div>
  );
}

export default App;

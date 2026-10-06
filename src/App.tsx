import {
  ArrowRight,
  BookOpen,
  Boxes,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { education, experiences, projects, soulCodePrograms, stack } from './data/portfolio';

const navItems = [
  ['Sobre', 'sobre'],
  ['Experiência', 'experiencia'],
  ['Projetos', 'projetos'],
  ['Stack', 'stack'],
  ['Formação', 'formacao'],
  ['Contato', 'contato'],
];

const projectIcons = [Network, ShieldCheck, Server, Boxes];

const areas = [
  {
    icon: Code2,
    title: 'Software Engineering',
    text: 'Aplicações backend robustas, APIs e arquitetura orientada a soluções reais.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    text: 'Linux, containers, cloud e automação para ambientes simples, reproduzíveis e escaláveis.',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    text: 'Redes, gestão de riscos, fundamentos de defesa e segurança aplicada a ambientes corporativos.',
  },
  {
    icon: BookOpen,
    title: 'Education & AI',
    text: 'Formação de profissionais em tecnologia, IA generativa, Low Code e aplicações práticas.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir para o início">
          <span className="brand-mark">{'{ }'}</span>
          <span>Rômulo Pereira</span>
        </a>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Navegação principal">
          {navItems.map(([label, id]) => (
            <a key={id} href={'#' + id} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero section" id="inicio">
          <div className="hero-copy">
            <span className="eyebrow">
              <Sparkles size={16} /> Tecnologia, pessoas e impacto real
            </span>
            <h1>
              Rômulo <span>Pereira</span>
            </h1>
            <p className="hero-role">Software Engineer · Cloud · Cybersecurity · Tech Educator</p>
            <p className="hero-description">
              Engenheiro de Computação com experiência em desenvolvimento backend, cloud,
              cybersecurity e formação de profissionais em tecnologia.
            </p>
            <p className="hero-highlight">Tecnologia que sai do código e resolve problemas reais.</p>

            <div className="availability-status">
              <span className="status-dot" aria-hidden="true" />
              <span>Disponível para projetos, oportunidades e colaboração</span>
            </div>

            <div className="hero-actions">
              <a className="button primary" href="#projetos">
                Ver projetos <ArrowRight size={18} />
              </a>
              <a
                className="button ghost"
                href="https://github.com/rmullo"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} /> GitHub
              </a>
              <a className="button ghost" href="#contato">
                <Mail size={18} /> Contato
              </a>
              <a className="button ghost" href="/curriculo.pdf">
                <Download size={18} /> Currículo
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Retrato profissional de Rômulo Pereira">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="tech-chip chip-code">
              <Code2 size={20} />
              <span>Backend APIs</span>
            </div>
            <div className="tech-chip chip-cloud">
              <Cloud size={20} />
              <span>Cloud</span>
            </div>
            <div className="tech-chip chip-security">
              <ShieldCheck size={20} />
              <span>Security</span>
            </div>

            <div className="hero-terminal" aria-hidden="true">
              <div className="terminal-bar">
                <span />
                <span />
                <span />
              </div>
              <code>
                <span className="terminal-prompt">$</span> deploy portfolio
                <br />
                <span className="terminal-ok">✓ build</span> · <span className="terminal-ok">✓ test</span> · <span className="terminal-ok">✓ ship</span>
              </code>
            </div>

            <img
              src="/profile.jpg"
              alt="Rômulo Pereira"
              onError={(event) => {
                event.currentTarget.src = ../public/profile-hero.png;
              }}
            />
          </div>
        </section>

        <section className="section" id="sobre">
          <div className="section-heading">
            <span className="section-kicker">01 / Sobre</span>
            <h2>Uma carreira conectando engenharia, infraestrutura, segurança e educação.</h2>
          </div>
          <div className="about-grid">
            <div className="about-copy panel">
              <p>
                Sou Engenheiro de Computação e Mestre em Desenvolvimento Regional Sustentável.
                Minha trajetória combina desenvolvimento de software, infraestrutura, cloud,
                segurança e educação tecnológica.
              </p>
              <p>
                Atuo com Java, Node.js, TypeScript, bancos de dados, Linux e Docker, além de
                formação profissional em Cybersecurity, Microsoft Copilot Studio, Power Platform
                e inteligência artificial aplicada.
              </p>
            </div>
            <div className="metrics">
              <div className="metric panel"><strong>10+</strong><span>anos em tecnologia e educação</span></div>
              <div className="metric panel"><strong>4</strong><span>frentes de atuação integradas</span></div>
              <div className="metric panel"><strong>ARM64</strong><span>infraestrutura própria deste site</span></div>
            </div>
          </div>

          <div className="cards-grid four">
            {areas.map(({ icon: Icon, title, text }) => (
              <article className="area-card panel" key={title}>
                <div className="icon-box"><Icon size={24} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experiencia">
          <div className="section-heading">
            <span className="section-kicker">02 / Experiência</span>
            <h2>Experiência profissional com código, ensino e transformação digital.</h2>
          </div>

          <div className="soulcode panel">
            <div className="soulcode-heading">
              <div>
                <span className="company-badge">{'{ }'} SoulCode Academy</span>
                <h3>Programas e cursos</h3>
              </div>
              <p>
                Experiências organizadas por programa para evidenciar contexto, parceiros e
                responsabilidade em cada formação.
              </p>
            </div>
            <div className="cards-grid three">
              {soulCodePrograms.map((program) => (
                <article className="program-card" key={program.title + program.subtitle}>
                  <span className="tag">{program.tag}</span>
                  <h4>{program.title}</h4>
                  <p className="program-subtitle">{program.subtitle}</p>
                  <p className="program-role">{program.role}</p>
                  <p className="muted">{program.partners}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="timeline">
            {experiences.map((experience) => (
              <article className="timeline-item panel" key={experience.company + experience.role}>
                <div className="timeline-icon"><BriefcaseBusiness size={20} /></div>
                <div>
                  <span className="muted">{experience.period}</span>
                  <h3>{experience.company}</h3>
                  <strong>{experience.role}</strong>
                  <p>{experience.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projetos">
          <div className="section-heading split">
            <div>
              <span className="section-kicker">03 / Projetos</span>
              <h2>Projetos que demonstram a tecnologia em funcionamento.</h2>
            </div>
            <a href="https://github.com/rmullo" target="_blank" rel="noreferrer">
              GitHub <ArrowRight size={16} />
            </a>
          </div>

          <div className="cards-grid two">
            {projects.map((project, index) => {
              const ProjectIcon = projectIcons[index] ?? Code2;

              return (
                <article className="project-card panel" key={project.title}>
                  <div className="project-top">
                    <div className="icon-box">
                      <ProjectIcon size={24} />
                    </div>
                    <ArrowRight size={20} />
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section" id="stack">
          <div className="section-heading">
            <span className="section-kicker">04 / Stack</span>
            <h2>Ferramentas escolhidas pelo problema, não pelo hype.</h2>
          </div>
          <div className="stack-grid">
            {Object.entries(stack).map(([category, items]) => (
              <article className="stack-card panel" key={category}>
                <h3>
                  {category === 'Database' ? <Database size={19} /> : <Code2 size={19} />}
                  {category}
                </h3>
                <div className="tags">
                  {items.map((item) => <span className="tag" key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="formacao">
          <div className="section-heading">
            <span className="section-kicker">05 / Formação</span>
            <h2>Base acadêmica conectada à aplicação prática.</h2>
          </div>
          <div className="cards-grid two">
            {education.map((item) => (
              <article className="education-card panel" key={item.course}>
                <div className="icon-box"><GraduationCap size={24} /></div>
                <div>
                  <span className="tag">Concluído em {item.finished}</span>
                  <h3>{item.course}</h3>
                  <p>{item.institution}</p>
                  {item.detail && <p className="muted">{item.detail}</p>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section" id="contato">
          <div>
            <span className="section-kicker">06 / Contato</span>
            <h2>Vamos construir alguma coisa juntos?</h2>
            <p>Aberto a projetos, oportunidades, pesquisa, educação e colaboração em tecnologia.</p>
          </div>
          <div className="contact-actions">
            <a className="button primary" href="https://www.linkedin.com/in/rmullo" target="_blank" rel="noreferrer">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a className="button ghost" href="https://github.com/rmullo" target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
            <a className="button ghost" href="mailto:romimpereira@gmail.com">
              <Mail size={18} /> Email
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Rômulo Pereira.</span>
        <span>React · Vite · CI/CD · Self-hosted ARM64</span>
      </footer>
    </div>
  );
}

export default App;

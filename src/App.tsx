import { useState, type ReactNode } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import './App.css'
import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon'
import ArrowUpRight01Icon from '@hugeicons/core-free-icons/ArrowUpRight01Icon'
import CheckmarkCircle02Icon from '@hugeicons/core-free-icons/CheckmarkCircle02Icon'
import Menu01Icon from '@hugeicons/core-free-icons/Menu01Icon'
import Cancel01Icon from '@hugeicons/core-free-icons/Cancel01Icon'

const workflow = [
  {
    number: '01',
    label: 'Understand',
    title: 'Start with the whole picture.',
    body: 'Morrow maps your codebase before it makes a move. Every agent works from the same shared context, so the first answer is already grounded in your work.',
    steps: ['Mapped 248 files', 'Found 3 related components', 'Ready to make a plan'],
  },
  {
    number: '02',
    label: 'Plan',
    title: 'Make a plan worth trusting.',
    body: 'Turn a rough idea into a clear sequence of changes. Review the approach, refine it with your agent, and stay in control of every decision.',
    steps: ['Reviewing existing patterns', 'Breaking work into 4 steps', 'Plan ready for review'],
  },
  {
    number: '03',
    label: 'Build',
    title: 'Move from intent to done.',
    body: 'Agents take on focused tasks in parallel, then bring the results back together. You stay close to the work without carrying every detail.',
    steps: ['Agent 01 · Building settings panel', 'Agent 02 · Adding test coverage', 'Changes ready to review'],
  },
]

const features = [
  {
    number: '01',
    title: 'A shared understanding',
    body: 'Your codebase, conventions, and decisions stay in context. Less explaining. More meaningful work from the first prompt.',
    visual: 'context',
  },
  {
    number: '02',
    title: 'Parallel by design',
    body: 'Give independent work to focused agents. They work side by side and return changes you can inspect in one place.',
    visual: 'parallel',
  },
  {
    number: '03',
    title: 'You remain the author',
    body: 'Review every change, guide the next step, and keep the final say. Helpful automation should make your judgment go further.',
    visual: 'review',
  },
]

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Morrow home">
      <span className="brand-mark" aria-hidden="true"><span /></span>
      <span>morrow</span>
    </a>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Brand />
        <button
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <HugeiconsIcon icon={menuOpen ? Cancel01Icon : Menu01Icon} />
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#product" onClick={() => setMenuOpen(false)}>Product</a>
          <a href="#workflow" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#teams" onClick={() => setMenuOpen(false)}>For teams</a>
          <a href="#principles" onClick={() => setMenuOpen(false)}>Our approach</a>
          <div className="mobile-nav-actions">
            <a href="#footer">Sign in</a>
            <a className="button button-dark" href="#get-started">Get started <ArrowRight /></a>
          </div>
        </nav>
        <div className="nav-actions">
          <a className="sign-in" href="#footer">Sign in</a>
          <a className="button button-dark button-nav" href="#get-started">Get started <ArrowRight /></a>
        </div>
      </div>
    </header>
  )
}

function ArrowRight() {
  return <HugeiconsIcon className="button-arrow" icon={ArrowRight01Icon} aria-hidden="true" />
}

function ArrowUpRight() {
  return <HugeiconsIcon icon={ArrowUpRight01Icon} aria-hidden="true" />
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow"><span className="eyebrow-dot" />{children}</p>
}

function EditorMockup() {
  return (
    <div className="editor-window" aria-label="Preview of the Morrow development environment">
      <div className="editor-titlebar">
        <div className="window-controls" aria-hidden="true"><i /><i /><i /></div>
        <span>morrow / studio</span>
        <span className="titlebar-status"><i /> All changes saved</span>
      </div>
      <div className="editor-layout">
        <aside className="editor-sidebar">
          <div className="sidebar-top"><span>WORKSPACE</span><span>···</span></div>
          <div className="workspace-name"><span className="folder-glyph">⌘</span> northstar <span>⌄</span></div>
          <div className="file-tree">
            <p><span>⌄</span> src</p>
            <p className="file-active"><span className="file-glyph">◈</span> components</p>
            <p className="file-child"><span className="file-glyph">◉</span> SettingsPanel.tsx</p>
            <p className="file-child"><span className="file-glyph">◉</span> ProjectCard.tsx</p>
            <p><span>›</span> tests</p>
            <p><span>›</span> public</p>
            <p><span className="file-glyph">◉</span> package.json</p>
          </div>
          <div className="sidebar-bottom"><span className="avatar">A</span><span>Alex Morgan</span><span>···</span></div>
        </aside>
        <div className="editor-main">
          <div className="editor-tabs"><span className="tab-active"><i /> SettingsPanel.tsx <b>×</b></span><span>ProjectCard.tsx</span><span className="tab-plus">+</span></div>
          <div className="code-area">
            <div className="code-breadcrumb">src <span>/</span> components <span>/</span> SettingsPanel.tsx</div>
            <div className="code-lines" aria-hidden="true">
              <div><b>1</b><span><em>import</em> {`{ useState }`} <em>from</em> <s>'react'</s></span></div>
              <div><b>2</b><span /></div>
              <div><b>3</b><span><em>type</em> <strong>SettingsPanelProps</strong> = {'{'}</span></div>
              <div><b>4</b><span>  projectName: <u>string</u></span></div>
              <div><b>5</b><span>  onSave: () =&gt; <u>void</u></span></div>
              <div><b>6</b><span>{'}'}</span></div>
              <div><b>7</b><span /></div>
              <div><b>8</b><span><em>export default function</em> <strong>SettingsPanel</strong>({'{'} projectName, onSave {'}'}) {'{'}</span></div>
              <div><b>9</b><span>  <em>const</em> [saved, setSaved] = <strong>useState</strong>(<u>false</u>)</span></div>
              <div><b>10</b><span /></div>
              <div className="code-highlight"><b>11</b><span>  <em>return</em> (</span></div>
              <div><b>12</b><span>    &lt;<s>section</s> className=<s>"settings-panel"</s>&gt;</span></div>
              <div><b>13</b><span>      &lt;<s>h2</s>&gt;Project settings&lt;/<s>h2</s>&gt;</span></div>
              <div><b>14</b><span>      &lt;<s>ProjectNameField</s></span></div>
              <div><b>15</b><span>        value={'{'}projectName{'}'}</span></div>
              <div><b>16</b><span>        onSave={'{'}handleSave{'}'} /&gt;</span></div>
              <div><b>17</b><span>    &lt;/<s>section</s>&gt;</span></div>
              <div><b>18</b><span>  )</span></div>
              <div><b>19</b><span>{'}'}</span></div>
            </div>
          </div>
          <div className="editor-footer"><span>⌘ main</span><span>TypeScript React</span><span>Ln 11, Col 12</span></div>
        </div>
        <aside className="agent-pane">
          <div className="agent-heading"><span className="agent-spark">✳</span><span>Agent</span><span className="agent-more">···</span></div>
          <div className="agent-thread">
            <p className="agent-prompt">Add a project name field with inline validation and a save confirmation.</p>
            <div className="agent-response">
              <div className="agent-thinking"><span /> Working through the project</div>
              <p>I found the existing settings pattern. I’ll keep the field consistent with the current form components.</p>
              <div className="agent-task"><span className="task-check">✓</span><span>Updated SettingsPanel.tsx</span><span className="task-change">+18</span></div>
              <div className="agent-task"><span className="task-check">✓</span><span>Added 3 validation cases</span><span className="task-change">+24</span></div>
              <div className="agent-note">Name is required and limited to 40 characters. Changes are ready for review.</div>
            </div>
            <div className="agent-composer"><span>Ask for a follow-up…</span><span className="composer-send">↑</span></div>
            <div className="agent-model">Morrow Agent <span>⌄</span><span className="model-mode">Review changes</span></div>
          </div>
        </aside>
      </div>
    </div>
  )
}

function WorkflowVisual({ active }: { active: number }) {
  const item = workflow[active]
  return (
    <div className="workflow-visual">
      <div className="workflow-visual-head"><span>BUILD SESSION</span><span className="session-live"><i /> IN PROGRESS</span></div>
      <div className="session-title"><span className="session-icon">✳</span><div><strong>Polish project settings</strong><small>northstar · feature/settings</small></div><span className="session-menu">···</span></div>
      <div className="session-divider" />
      <div className="session-feed">
        {item.steps.map((step, index) => (
          <div className="feed-item" key={`${item.number}-${step}`}>
            <span className={index < 2 ? 'feed-icon is-done' : 'feed-icon'}>{index < 2 ? '✓' : '·'}</span>
            <div><span>{step}</span><small>{index === 0 ? 'Morrow Agent' : index === 1 ? 'Codebase context' : 'Just now'}</small></div>
            {index === 2 && <span className="feed-current">CURRENT</span>}
          </div>
        ))}
      </div>
      <div className="session-progress"><span style={{ width: `${38 + active * 25}%` }} /></div>
      <div className="session-foot"><span>Changes stay reviewable at every step</span><span>↗</span></div>
    </div>
  )
}

function FeatureVisual({ type }: { type: string }) {
  if (type === 'context') {
    return <div className="feature-visual context-visual"><div className="context-orbit orbit-one" /><div className="context-orbit orbit-two" /><span className="context-core">✳</span><span className="context-node node-a">src</span><span className="context-node node-b">patterns</span><span className="context-node node-c">decisions</span><span className="context-node node-d">tests</span></div>
  }
  if (type === 'parallel') {
    return <div className="feature-visual parallel-visual"><div className="parallel-label">ONE GOAL <span>→</span> THREE FOCUSED AGENTS</div><div className="parallel-row"><span className="parallel-number">01</span><span>Build the settings form</span><span className="parallel-state">Working</span></div><div className="parallel-row"><span className="parallel-number">02</span><span>Add validation tests</span><span className="parallel-state">Working</span></div><div className="parallel-row"><span className="parallel-number">03</span><span>Update the docs</span><span className="parallel-state">Queued</span></div></div>
  }
  return <div className="feature-visual review-visual"><div className="review-file"><span>SettingsPanel.tsx</span><span>+18 <i>−2</i></span></div><div className="diff-line diff-muted">− &nbsp; const name = project.name</div><div className="diff-line diff-add">+ &nbsp; const [name, setName] = useState(project.name)</div><div className="diff-line diff-muted">− &nbsp; onSave(projectName)</div><div className="diff-line diff-add">+ &nbsp; onSave(name.trim())</div><div className="review-footer"><span>2 files changed</span><span className="review-approve"><Checkmark /> Approve changes</span></div></div>
}

function Checkmark() {
  return <HugeiconsIcon icon={CheckmarkCircle02Icon} aria-hidden="true" />
}

function App() {
  const [activeWorkflow, setActiveWorkflow] = useState(0)

  return (
    <>
      <Header />
      <main id="top">
        <section className="hero section-shell" id="product">
          <div className="hero-copy">
            <Eyebrow>A more considered way to build</Eyebrow>
            <h1>Make room<br />for the <span>big idea.</span></h1>
            <p className="hero-description">A development environment that brings your code, your team, and capable AI agents into one thoughtful workflow.</p>
            <div className="hero-actions"><a className="button button-dark button-large" href="#get-started">Get started for free <ArrowRight /></a><a className="text-link" href="#workflow">See how it works <ArrowRight /></a></div>
            <p className="hero-note">Free to start <span>·</span> Works with your existing projects</p>
          </div>
          <div className="hero-product"><EditorMockup /></div>
          <div className="hero-caption"><span>YOUR WORKSPACE, WITH ROOM TO THINK</span><span>01 — 03</span></div>
        </section>

        <section className="intro-band">
          <div className="section-shell intro-inner">
            <p className="intro-label">SOFTWARE MOVES FORWARD.<br />YOUR TOOLS SHOULD TOO.</p>
            <p className="intro-statement">From the first sketch to the final review, <span>bring the full arc of building software into focus.</span></p>
          </div>
        </section>

        <section className="workflow-section section-shell" id="workflow">
          <div className="section-heading workflow-heading">
            <div><Eyebrow>From first thought to finished work</Eyebrow><h2>Good work has<br />a <span>better rhythm.</span></h2></div>
            <p>Stay in the flow of building. Let agents take on the details while you shape the direction.</p>
          </div>
          <div className="workflow-layout">
            <div className="workflow-tabs" role="tablist" aria-label="Build workflow">
              {workflow.map((step, index) => (
                <button
                  aria-controls="workflow-panel"
                  aria-selected={activeWorkflow === index}
                  className={activeWorkflow === index ? 'workflow-tab is-active' : 'workflow-tab'}
                  id={`workflow-tab-${index}`}
                  key={step.number}
                  onClick={() => setActiveWorkflow(index)}
                  onKeyDown={(event) => {
                    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
                      event.preventDefault()
                      const direction = event.key === 'ArrowRight' ? 1 : -1
                      const next = (index + direction + workflow.length) % workflow.length
                      setActiveWorkflow(next)
                      document.getElementById(`workflow-tab-${next}`)?.focus()
                    }
                  }}
                  role="tab"
                  tabIndex={activeWorkflow === index ? 0 : -1}
                  type="button"
                >
                  <span className="workflow-tab-number">{step.number}</span><span className="workflow-tab-label">{step.label}</span><span className="workflow-tab-arrow"><ArrowRight /></span>
                </button>
              ))}
              <div className="workflow-detail" id="workflow-panel" aria-labelledby={`workflow-tab-${activeWorkflow}`} role="tabpanel"><h3>{workflow[activeWorkflow].title}</h3><p>{workflow[activeWorkflow].body}</p></div>
            </div>
            <WorkflowVisual active={activeWorkflow} />
          </div>
        </section>

        <section className="features-section" id="teams">
          <div className="section-shell">
            <div className="section-heading feature-heading"><div><Eyebrow>Built around the way you think</Eyebrow><h2>More momentum.<br /><span>Less overhead.</span></h2></div><p>Not another layer to manage. A natural extension of how you already make software.</p></div>
            <div className="feature-grid">
              {features.map((feature) => (
                <article className="feature-card" key={feature.number}>
                  <FeatureVisual type={feature.visual} />
                  <div className="feature-card-copy"><span className="feature-number">{feature.number}</span><h3>{feature.title}</h3><p>{feature.body}</p><a className="feature-link" href="#get-started">Explore {feature.title.toLowerCase()} <ArrowUpRight /></a></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="principles-section section-shell" id="principles">
          <div className="principles-top"><Eyebrow>Designed for the long run</Eyebrow><span>OUR PRINCIPLES</span></div>
          <div className="principles-content"><h2>Technology should<br />make the work <span>more human.</span></h2><div className="principles-aside"><p>Software is made by people, for people. The best tools give us more space to think clearly, make considered choices, and create something that matters.</p><a className="text-link" href="#get-started">A little more about us <ArrowRight /></a></div></div>
          <div className="principles-rule"><span>Thoughtful by default</span><span>Capable when it counts</span><span>Always yours to shape</span></div>
        </section>

        <section className="cta-section" id="get-started">
          <div className="section-shell cta-inner"><Eyebrow>Make your next move</Eyebrow><h2>Start with what<br />you <span>want to make.</span></h2><p>Your next idea deserves a workspace that can keep up.</p><a className="button button-light button-large" href="mailto:hello@morrow.dev">Get started for free <ArrowRight /></a><span className="cta-footnote">No credit card required</span><div className="cta-orbit cta-orbit-one" /><div className="cta-orbit cta-orbit-two" /></div>
        </section>
      </main>
      <footer className="site-footer" id="footer">
        <div className="section-shell footer-top"><div className="footer-brand"><Brand /><p>Space to think.<br />Tools to make it real.</p></div><div className="footer-column"><span>Explore</span><a href="#product">Product</a><a href="#workflow">How it works</a><a href="#teams">For teams</a></div><div className="footer-column"><span>Company</span><a href="#principles">Our approach</a><a href="mailto:hello@morrow.dev">Contact</a><a href="mailto:careers@morrow.dev">Careers</a></div><div className="footer-column"><span>Elsewhere</span><a href="https://github.com" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a></div></div>
        <div className="section-shell footer-bottom"><span>© 2025 Morrow Labs</span><span>Made for people who make things.</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </>
  )
}

export default App

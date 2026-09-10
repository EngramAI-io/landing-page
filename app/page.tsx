"use client";

export default function Home() {
  return (
    <>
      {/* Nav */}
      <nav>
        <div className="container">
          <div className="nav-logo">
            <img src="/logo.jpg" alt="EngramAI" className="brain-logo-icon" />
            EngramAI
          </div>
          <div className="nav-links">
            <a href="#overview">Overview</a>
            <a href="#products">Products</a>
            <a href="#summary">Summary</a>
          </div>
          <a className="nav-cta" href="mailto:hello@engramai.io">Contact Sales</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero">
        <div className="container">
          <h1 className="hero-title">
            The complete stack for<br />
            <span className="highlight">secure, governed AI agents.</span>
          </h1>
          <p className="hero-subtitle">
            From identity and memory protection to runtime enforcement, EDR attribution,
            and continuous red-team validation - EngramAI covers every layer of the
            agentic security stack.
          </p>
          <div className="hero-cta-group">
            <a className="btn-primary" href="#products">Explore Products</a>
          </div>
          <div className="hero-chips">
            <a className="h-chip" href="#product-lineage">Lineage</a>
            <a className="h-chip" href="#product-mcp-guard">MCP Guard</a>
            <a className="h-chip" href="#product-sentinel">Sentinel</a>
            <a className="h-chip" href="#product-redteam">RedTeam</a>
            <a className="h-chip" href="#product-memguard">MemGuard</a>
            <a className="h-chip" href="#product-aegis">Aegis</a>
            <a className="h-chip" href="#product-yali">Yali</a>
            <a
              className="h-chip"
              href="#product-engramai-platform"
              style={{ width: "100%", justifyContent: "center", textAlign: "center" }}
            >
              EngramAI Platform
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview">
        <div className="container">
          <div className="section-label">Core Idea</div>
          <h2 className="section-title">One trust layer. Every agent deployment.</h2>
          <p className="section-desc">
            AI agents are moving from experimentation to production - accessing databases,
            executing code, calling APIs, and making decisions. Each capability creates an
            attack surface. EngramAI provides security and governance across the entire stack.
          </p>
          <div className="pitch-grid">
            <div className="pitch-card">
              <div className="pc-icon">🎯</div>
              <h3>The Core Problem</h3>
              <p>
                Enterprises deploy AI agents with more autonomy than their security teams can
                see, control, or attribute. When an agent accesses sensitive data, executes a
                dangerous command, or is hijacked via prompt injection - the SOC sees a kernel
                event but cannot trace it back to the agent intent that caused it. Memory stores
                can be poisoned. MCP tool servers can be compromised. The model itself can be
                jailbroken.
              </p>
              <div className="pv">Zero end-to-end visibility into AI agent actions.</div>
            </div>
            <div className="pitch-card">
              <div className="pc-icon">🛡</div>
              <h3>The EngramAI Approach</h3>
              <p>
                Every product answers one layer of the same question:{" "}
                <strong>
                  "What is the agent doing, who authorized it, and should it be allowed?"
                </strong>{" "}
                From memory poisoning detection (MemGuard) to identity (agent-identity) to
                protocol enforcement (MCP Guard) to trajectory enforcement (Aegis) to EDR
                attribution (Lineage) to continuous validation (RedTeam, Yali).
              </p>
              <div className="pv">Identity → Memory → Protocol → Runtime → Kernel → Validation.</div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Products */}
      <section id="products">
        <div className="container">
          <div className="section-label">Product Portfolio</div>
          <h2 className="section-title">Seven products. One security stack.</h2>
          <p className="section-desc">
            Each product solves a distinct problem in the agentic security landscape. Together
            they provide end-to-end coverage - from memory and identity to protocol enforcement
            to SOC attribution to continuous validation.
          </p>
          <div className="product-grid">
            {/* LINEAGE */}
            <div className="product-card elite" id="product-lineage">
              <div className="pc-header">
                <div>
                  <div className="pc-title">Lineage</div>
                  <div className="pc-repo">repos/lineage</div>
                </div>
              </div>
              <div className="pc-idea">
                &ldquo;Your SOC sees WHAT happened. Lineage tells you WHO caused it.&rdquo;
              </div>
              <div className="pc-pitch">
                AI-attributed Linux EDR overlay that connects kernel/OS events from your
                existing EDR (CrowdStrike, SentinelOne, Cortex XDR, Defender) with LLM agent
                intent traces from Langfuse. When a process opens a sensitive file or calls a
                remote IP, Lineage tells you which agent did it, what the user asked, and
                whether the intent matched the action. Verdicts are written back into your EDR
                console as first-class detections.
              </div>
              <div className="pc-footer">
                <span className="pc-tag">Go</span>
                <span className="pc-tag">57 modules</span>
                <span className="pc-tag">eBPF</span>
                <span className="pc-tag">LLM Judge</span>
                <span className="pc-tag">CrowdStrike</span>
                <span className="pc-tag">SentinelOne</span>
                <span className="pc-tag">Splunk</span>
                <span className="pc-tag">Docker</span>
                <span className="pc-tag">CI/CD</span>
              </div>
              <div className="pc-market">
                EDR is $15B+ at 12–15% CAGR. Zero direct competitors in AI agent attribution.
                Complements (doesn&rsquo;t replace) existing EDR budget. Every major EDR vendor
                has AI detection but zero intent attribution.
              </div>
            </div>

            {/* MCP GUARD */}
            <div className="product-card ready" id="product-mcp-guard">
              <div className="pc-header">
                <div>
                  <div className="pc-title">MCP Guard</div>
                  <div className="pc-repo">repos/mcp_guard</div>
                </div>
              </div>
              <div className="pc-idea">
                &ldquo;The active runtime security firewall for the Model Context Protocol.&rdquo;
              </div>
              <div className="pc-pitch">
                A stateful security interceptor between AI hosts (Claude, GPT, Cursor) and MCP
                tool servers. Inspects and governs every JSON-RPC message in real time using a
                2-tier engine: deterministic policy rules at sub-millisecond latency (L1) and
                Claude 3.5 Haiku intent analysis for semantic threat detection (L2). Blocks
                prompt injection, privilege escalation, data exfiltration, and confused deputy
                attacks before they reach tool servers.
              </div>
              <div className="pc-footer">
                <span className="pc-tag">Rust</span>
                <span className="pc-tag">17 src modules</span>
                <span className="pc-tag">JSON-RPC proxy</span>
                <span className="pc-tag">Web dashboard</span>
                <span className="pc-tag">Homebrew</span>
                <span className="pc-tag">Security audit</span>
              </div>
              <div className="pc-market">
                MCP is the emerging standard for agent-to-tool communication. Every enterprise
                adopting Claude Desktop, Cursor, or any MCP-enabled tool needs protocol-layer
                security. No active competitor in this space.
              </div>
            </div>

            {/* SENTINEL */}
            <div className="product-card ready" id="product-sentinel">
              <div className="pc-header">
                <div>
                  <div className="pc-title">Sentinel</div>
                  <div className="pc-repo">repos/sentinel</div>
                </div>
              </div>
              <div className="pc-idea">
                &ldquo;Transparent observability sidecar for Model Context Protocol.&rdquo;
              </div>
              <div className="pc-pitch">
                A passive, non-blocking observability layer between LLM clients and MCP tool
                servers. Unlike MCP Guard (which blocks), Sentinel observes - providing identity,
                ordering, and integrity guarantees for agent-to-tool interactions without
                modifying execution. Reconstructs a canonical event stream with real-time
                visualization and durable audit logs. Complement to MCP Guard: Sentinel watches,
                MCP Guard acts.
              </div>
              <div className="pc-footer">
                <span className="pc-tag">Rust</span>
                <span className="pc-tag">17 src modules</span>
                <span className="pc-tag">Passive tap</span>
                <span className="pc-tag">Web dashboard</span>
                <span className="pc-tag">Homebrew</span>
                <span className="pc-tag">9 stars</span>
              </div>
              <div className="pc-market">
                SOCs and compliance teams that need audit trails for MCP interactions without
                blocking agent workflows. &ldquo;See what your agent did, in what order, and
                trust the record afterward.&rdquo;
              </div>
            </div>

            {/* AEGIS */}
            <div className="product-card dev" id="product-aegis">
              <div className="pc-header">
                <div>
                  <div className="pc-title">Aegis</div>
                  <div className="pc-repo">repos/aegis</div>
                </div>
              </div>
              <div className="pc-idea">
                &ldquo;Runtime security enforcement for autonomous AI agents.&rdquo;
              </div>
              <div className="pc-pitch">
                A runtime security layer between agent frameworks and the tools they call.
                Observes the evolving execution trajectory - not just individual tool calls but
                the chain of actions - to catch dangerous sequences that isolated permission
                checks miss. Uses live execution graphs and contextual policy to ALLOW, WARN, or
                BLOCK.
              </div>
              <div className="pc-footer">
                <span className="pc-tag">Python SDK</span>
                <span className="pc-tag">pip install</span>
                <span className="pc-tag">Execution graph</span>
                <span className="pc-tag">Trajectory risk</span>
              </div>
              <div className="pc-market">
                Agent developers and security teams that need trajectory-level enforcement -
                &ldquo;send_email() is fine alone, but dangerous when preceded by
                extract_credentials() after an untrusted webpage input.&rdquo; Complements MCP
                Guard (protocol layer) by operating at the agent framework layer.
              </div>
            </div>

            {/* REDTEAM */}
            <div className="product-card ready" id="product-redteam">
              <div className="pc-header">
                <div>
                  <div className="pc-title">RedTeam (AIRedTeam)</div>
                  <div className="pc-repo">repos/AIRedTeaming (RedNPurple)</div>
                </div>
              </div>
              <div className="pc-idea">
                &ldquo;Drive real attack payloads at production LLMs. Emit SOC-ingestible
                evidence.&rdquo;
              </div>
              <div className="pc-pitch">
                Production-grade LLM red-team runner executing 44 atomic tests against the
                models your customers call. Verifies whether the model exfiltrated data,
                generated harmful code, or leaked the system prompt. Ships results to the SOC in
                SIEM-native formats: SARIF, STIX 2.1, OSCAL, CEF, LEEF, Splunk HEC. Five
                independent voters per verdict. HMAC-chained audit log. 150+ tests passing.
              </div>
              <div className="pc-footer">
                <span className="pc-tag">Rust</span>
                <span className="pc-tag">44 atomic tests</span>
                <span className="pc-tag">OWASP LLM 10/10</span>
                <span className="pc-tag">MITRE ATLAS</span>
                <span className="pc-tag">9 export formats</span>
                <span className="pc-tag">SIEM-native</span>
              </div>
              <div className="pc-market">
                Every regulated enterprise running LLMs in production needs continuous adversarial
                testing. SOC-2, ISO 42001, EU AI Act compliance requires documented adversarial
                testing. RedTeam turns red-teaming from a Confluence screenshot into an
                automated, auditable pipeline.
              </div>
            </div>

            {/* YALI */}
            <div className="product-card dev" id="product-yali">
              <div className="pc-header">
                <div>
                  <div className="pc-title">Yali</div>
                  <div className="pc-repo">repos/Yali</div>
                </div>
              </div>
              <div className="pc-idea">
                &ldquo;Autonomous red-teaming harness for agentic AI systems.&rdquo;
              </div>
              <div className="pc-pitch">
                Multi-agent red-teaming harness that discovers vulnerabilities in AI agents, MCP
                servers, and LLM-powered applications. 39+ attack patterns mapped to OWASP LLM
                Top 10, OWASP Agentic AI Top 10, and MITRE ATLAS. A Rust orchestrator runs
                Reconnaissance, Attack, and Exfiltration agents in a coordinated swarm. Delta
                validation for CI/CD - if the security score drops, the build fails. Unlike
                RedTeam (which tests individual model responses), Yali tests full agentic systems
                with multi-step attack campaigns.
              </div>
              <div className="pc-footer">
                <span className="pc-tag">Rust</span>
                <span className="pc-tag">39+ patterns</span>
                <span className="pc-tag">Multi-agent swarm</span>
                <span className="pc-tag">CI/CD delta</span>
                <span className="pc-tag">Docker</span>
              </div>
              <div className="pc-market">
                Agent developers and security teams needing continuous adversarial testing of
                full agentic systems - not just individual LLM calls. Complements RedTeam:
                RedTeam validates models, Yali validates agent deployments.
              </div>
            </div>

            {/* MEMGUARD */}
            <div className="product-card ready" id="product-memguard">
              <div className="pc-header">
                <div>
                  <div className="pc-title">MemGuard</div>
                  <div className="pc-repo">repos/memguard</div>
                </div>
              </div>
              <div className="pc-idea">
                &ldquo;Enterprise-grade memory poisoning detection for RAG systems.&rdquo;
              </div>
              <div className="pc-pitch">
                Protects AI agents from AgentPoison attacks with 100% detection accuracy. The
                attack: an adversary injects &lt;0.1% poisoned entries into a knowledge base.
                Those entries look normal in text but cluster tightly in embedding space (&gt;0.95
                similarity). When a user query hits a trigger, the poisoned memory is retrieved
                and the agent executes the attacker&rsquo;s malicious action. MemGuard&rsquo;s
                comparison-based detection catches what text classification (0%) and raw
                embedding classification (50%) miss.
              </div>
              <div className="pc-footer">
                <span className="pc-tag">Go</span>
                <span className="pc-tag">Python SDK</span>
                <span className="pc-tag">Embedding analysis</span>
                <span className="pc-tag">100% detection</span>
                <span className="pc-tag">AgentPoison</span>
              </div>
              <div className="pc-market">
                Every enterprise deploying RAG-based AI agents is vulnerable to memory poisoning.
                As agents become more autonomous and access larger knowledge bases, the attack
                surface grows. MemGuard is the only product specifically targeting this vector
                with published academic validation.
              </div>
            </div>

            {/* ENGAMAI PLATFORM */}
            <div
              className="product-card platform-card"
              id="product-engramai-platform"
            >
              <div className="pc-header">
                <div>
                  <div className="pc-title">EngramAI Platform</div>
                  <div className="pc-repo">
                    repos/engramai + defense-layer + agent-identity
                  </div>
                </div>
              </div>
              <div className="pc-idea">
                &ldquo;Trust layer for agentic AI - identity, governance, and runtime
                protection.&rdquo;
              </div>
              <div className="pc-pitch">
                The distributed multi-tenant security platform tying everything together.
                Immutable agent identity via DIDs and verifiable credentials. Agent Provenance
                Graph (APG) for behavior-aware governance. Memory poisoning detection (MemGuard)
                propagation risk detection.
              </div>
              <div className="pc-footer">
                <span className="pc-tag">Go gateway</span>
                <span className="pc-tag">AWS/Azure</span>
                <span className="pc-tag">DIDs + VCs</span>
                <span className="pc-tag">Bayesian inference</span>
                <span className="pc-tag">Supply chain</span>
              </div>
              <div className="pc-market">
                The unified platform that ties all EngramAI products together - multi-tenant
                SaaS, distributed governance, and the agent identity backbone for enterprise
                deployments.
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Summary */}
      <section id="summary">
        <div className="container">
          <div className="section-label">At a Glance</div>
          <h2 className="section-title">Seven products. One unified platform.</h2>
          <table className="sum-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Core Idea</th>
                <th>Primary Buyer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="pn">Lineage</span>
                </td>
                <td>
                  AI-attributed EDR overlay - kernel events attributed to LLM agent intent via
                  EDR + Langfuse join
                </td>
                <td>CISO, SOC Director</td>
              </tr>
              <tr>
                <td>
                  <span className="pn">MCP Guard</span>
                </td>
                <td>
                  Active MCP protocol firewall - sub-ms policy + Claude intent analysis, blocks
                  attacks before tool servers
                </td>
                <td>AI Platform, DevSecOps</td>
              </tr>
              <tr>
                <td>
                  <span className="pn">Sentinel</span>
                </td>
                <td>
                  Passive MCP observability sidecar - tamper-proof audit trail, identity +
                  ordering + integrity, no blocking
                </td>
                <td>Compliance, GRC, SOC</td>
              </tr>
              <tr>
                <td>
                  <span className="pn">RedTeam</span>
                </td>
                <td>
                  Automated LLM red-team runner - 44 atomic tests, 5-voter verdicts, 9 SIEM
                  export formats, CI/CD-ready
                </td>
                <td>CISO, Compliance</td>
              </tr>
              <tr>
                <td>
                  <span className="pn">MemGuard</span>
                </td>
                <td>
                  RAG memory poisoning detection - 100% detection of AgentPoison attacks via
                  comparison-based embedding analysis
                </td>
                <td>AI Security, RAG Platform Lead</td>
              </tr>
              <tr>
                <td>
                  <span className="pn">Aegis</span>
                </td>
                <td>
                  Agent runtime trajectory enforcement - catches dangerous action chains that
                  isolated permission checks miss
                </td>
                <td>Agent developers, AI Security</td>
              </tr>
              <tr>
                <td>
                  <span className="pn">Yali</span>
                </td>
                <td>
                  Multi-agent red-teaming harness - 39+ attack patterns against full agentic
                  systems, CI/CD delta validation
                </td>
                <td>Agent developers, Red Team</td>
              </tr>
              <tr>
                <td>
                  <span className="pn">EngramAI Platform</span>
                </td>
                <td>
                  Unified trust layer - DIDs, VCs, APG governance, memory protection, supply
                  chain attestation, multi-tenant SaaS
                </td>
                <td>CISO, VP Engineering</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section id="cta">
        <div className="container">
          <div className="section-label" style={{ color: "var(--accent-blue)" }}>
            Get Started
          </div>
          <h2 className="section-title" style={{ color: "#fff" }}>
            Every layer of the agentic security stack.
          </h2>
          <p
            className="section-desc"
            style={{ color: "var(--text-secondary)", textAlign: "center" }}
          >
            From memory protection and identity to protocol enforcement to SOC attribution to
            continuous red-team validation - EngramAI has a product for every layer.
          </p>
          <div className="cta-buttons">
            <a className="btn-primary" href="mailto:hello@engramai.io">
              Request a Demo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p style={{ marginBottom: 6 }}>
            EngramAI - Trust Layer for Agentic AI
          </p>
          <p>
            <a href="https://github.com/EngramAI-io" target="_blank" rel="noopener noreferrer">
              github.com/EngramAI-io
            </a>
            &nbsp;·&nbsp;
            <a href="https://engramai.io" target="_blank" rel="noopener noreferrer">
              engramai.io
            </a>
          </p>
        </div>
      </footer>

      <style jsx global>{`
        :root {
          --bg-primary: #0a0e17;
          --bg-secondary: #0f1525;
          --bg-card: #131b2e;
          --bg-card-hover: #1a2540;
          --border: #1e2d4a;
          --border-accent: #2d4a7a;
          --accent-blue: #4f8fff;
          --accent-green: #00d68f;
          --accent-red: #ff4757;
          --accent-amber: #ffaa00;
          --accent-purple: #a855f7;
          --accent-cyan: #22d3ee;
          --text-primary: #e8ecf4;
          --text-secondary: #8b95a8;
          --text-muted: #5a6478;
          --gradient-hero: linear-gradient(135deg, #0a0e17 0%, #0f1a3a 50%, #0a0e17 100%);
          --gradient-accent: linear-gradient(135deg, #4f8fff, #a855f7);
          --maturity-elite: #00d68f;
          --maturity-ready: #4f8fff;
          --maturity-dev: #ffaa00;
          --maturity-concept: #a855f7;
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            sans-serif;
          background: var(--bg-primary);
          color: var(--text-primary);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
        }
        section {
          padding: 80px 0;
        }
        section:nth-child(even) {
          background: var(--bg-secondary);
        }

        /* Nav */
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(10, 14, 23, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
          padding: 14px 0;
        }
        nav .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-logo {
          font-weight: 800;
          font-size: 18px;
          background: var(--gradient-accent);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .nav-logo img.brain-logo-icon {
          width: 50px;
          height: 50px;
          flex: 0 0 auto;
          -webkit-text-fill-color: initial;
          background: none;
          object-fit: contain;
        }
        .nav-links {
          display: flex;
          gap: 24px;
        }
        .nav-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.3px;
          transition: color 0.2s;
        }
        .nav-links a:hover {
          color: var(--text-primary);
        }
        .nav-cta {
          background: var(--accent-blue);
          color: #fff;
          border: none;
          padding: 8px 20px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s;
        }
        .nav-cta:hover {
          background: #3d7aee;
        }

        /* Hero */
        #hero {
          min-height: 100vh;
          background: var(--gradient-hero);
          display: flex;
          align-items: center;
          padding-top: 80px;
          position: relative;
          overflow: hidden;
        }
        #hero::before {
          content: "";
          position: absolute;
          top: -50%;
          right: -20%;
          width: 800px;
          height: 800px;
          background: radial-gradient(
            circle,
            rgba(79, 143, 255, 0.08) 0%,
            transparent 70%
          );
          pointer-events: none;
        }
        #hero .container {
          position: relative;
          z-index: 1;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(79, 143, 255, 0.12);
          border: 1px solid rgba(79, 143, 255, 0.25);
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          color: var(--accent-blue);
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .hero-badge .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-green);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }
        .hero-title {
          font-size: 52px;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -2px;
          margin-bottom: 24px;
        }
        .hero-title .highlight {
          background: var(--gradient-accent);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-subtitle {
          font-size: 19px;
          color: var(--text-secondary);
          max-width: 620px;
          margin-bottom: 36px;
          line-height: 1.6;
        }
        .hero-cta-group {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .btn-primary {
          background: var(--accent-blue);
          color: #fff;
          border: none;
          padding: 14px 30px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s;
        }
        .btn-primary:hover {
          background: #3d7aee;
          transform: translateY(-1px);
        }
        .btn-secondary {
          background: transparent;
          color: var(--text-primary);
          border: 1px solid var(--border-accent);
          padding: 14px 30px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s;
        }
        .btn-secondary:hover {
          background: var(--bg-card);
        }
        .hero-chips {
          display: grid;
          grid-template-columns: repeat(7, minmax(0, 1fr));
          gap: 10px;
          margin-top: 36px;
        }
        .h-chip {
          background: rgba(19, 27, 46, 0.82);
          border: 1px solid #294066;
          border-radius: 9px;
          padding: 10px 18px;
          min-height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          color: var(--text-primary);
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s, transform 0.2s,
            box-shadow 0.2s;
          position: relative;
        }
        .h-chip::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-blue);
          box-shadow: 0 0 10px rgba(79, 143, 255, 0.45);
          flex: 0 0 auto;
        }
        .hero-chips .h-chip:nth-child(1)::before {
          background: #4f8fff;
          box-shadow: 0 0 10px rgba(79, 143, 255, 0.45);
        }
        .hero-chips .h-chip:nth-child(2)::before {
          background: #22d3ee;
          box-shadow: 0 0 10px rgba(34, 211, 238, 0.45);
        }
        .hero-chips .h-chip:nth-child(3)::before {
          background: #00d68f;
          box-shadow: 0 0 10px rgba(0, 214, 143, 0.45);
        }
        .hero-chips .h-chip:nth-child(4)::before {
          background: #a855f7;
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.45);
        }
        .hero-chips .h-chip:nth-child(5)::before {
          background: #ffaa00;
          box-shadow: 0 0 10px rgba(255, 170, 0, 0.45);
        }
        .hero-chips .h-chip:nth-child(6)::before {
          background: #ff6b8a;
          box-shadow: 0 0 10px rgba(255, 107, 138, 0.45);
        }
        .hero-chips .h-chip:nth-child(7)::before {
          background: #8b95ff;
          box-shadow: 0 0 10px rgba(139, 149, 255, 0.45);
        }
        .hero-chips .h-chip:nth-child(8)::before {
          display: none;
        }
        .hero-chips .h-chip:nth-child(8) {
          grid-column: 1 / -1;
        }

        .h-chip::after {
          content: "›";
          color: var(--text-muted);
          font-size: 16px;
          line-height: 1;
          margin-left: 2px;
          opacity: 0;
          transform: translateX(-3px);
          transition: opacity 0.2s, transform 0.2s, color 0.2s;
        }
        .h-chip:hover {
          background: var(--bg-card-hover);
          border-color: var(--accent-blue);
          box-shadow: 0 6px 20px rgba(79, 143, 255, 0.1);
          transform: translateY(-1px);
        }
        .h-chip:hover::after {
          opacity: 1;
          transform: translateX(0);
          color: var(--accent-blue);
        }
        .h-chip .hc-tag {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          margin-left: 6px;
          padding: 2px 6px;
          border-radius: 3px;
        }
        .tc-p {
          background: rgba(0, 214, 143, 0.15);
          color: var(--maturity-elite);
        }
        .tc-r {
          background: rgba(79, 143, 255, 0.15);
          color: var(--maturity-ready);
        }
        .tc-d {
          background: rgba(255, 170, 0, 0.15);
          color: var(--maturity-dev);
        }
        .tc-c {
          background: rgba(168, 85, 247, 0.15);
          color: var(--maturity-concept);
        }

        /* Section headers */
        .section-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--accent-blue);
          margin-bottom: 10px;
        }
        .section-title {
          font-size: 34px;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -1px;
          margin-bottom: 14px;
        }
        .section-desc {
          font-size: 17px;
          color: var(--text-secondary);
          max-width: 640px;
          margin-bottom: 40px;
        }

        /* Legend */
        .legend {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 13px;
          font-weight: 500;
        }
        .legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .legend-dot.elite {
          background: var(--maturity-elite);
        }
        .legend-dot.ready {
          background: var(--maturity-ready);
        }
        .legend-dot.dev {
          background: var(--maturity-dev);
        }
        .legend-dot.concept {
          background: var(--maturity-concept);
        }

        /* Product grid */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .product-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 28px;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .product-card:hover {
          border-color: var(--border-accent);
          transform: translateY(-2px);
        }
        .pc-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 10px;
          gap: 12px;
        }
        .pc-title {
          font-size: 17px;
          font-weight: 700;
        }
        .pc-repo {
          font-size: 11px;
          color: var(--text-muted);
          font-family: "JetBrains Mono", "Fira Code", monospace;
          margin-top: 2px;
        }
        .pc-maturity {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 3px 9px;
          border-radius: 4px;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .pc-maturity.elite {
          background: rgba(0, 214, 143, 0.12);
          color: var(--maturity-elite);
        }
        .pc-maturity.ready {
          background: rgba(79, 143, 255, 0.12);
          color: var(--maturity-ready);
        }
        .pc-maturity.dev {
          background: rgba(255, 170, 0, 0.12);
          color: var(--maturity-dev);
        }
        .pc-maturity.concept {
          background: rgba(168, 85, 247, 0.12);
          color: var(--maturity-concept);
        }
        .pc-idea {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 12px;
          font-style: italic;
          padding-left: 12px;
          border-left: 2px solid var(--border-accent);
        }
        .pc-pitch {
          font-size: 13.5px;
          color: var(--text-primary);
          line-height: 1.7;
          margin-bottom: 14px;
        }
        .pc-footer {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-bottom: 12px;
        }
        .pc-tag {
          font-size: 10px;
          font-weight: 500;
          padding: 2px 7px;
          border-radius: 3px;
          background: rgba(139, 149, 168, 0.1);
          color: var(--text-muted);
        }
        .pc-market {
          font-size: 12px;
          color: var(--text-muted);
          line-height: 1.6;
          padding-top: 10px;
          border-top: 1px solid var(--border);
        }
        .pc-market strong {
          color: var(--text-secondary);
        }

        /* Pitch cards */
        .pitch-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .pitch-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 26px;
          transition: all 0.3s;
        }
        .pitch-card:hover {
          border-color: var(--border-accent);
        }
        .pitch-card h3 {
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .pitch-card p {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        .pitch-card .pv {
          font-size: 18px;
          font-weight: 800;
          margin-top: 10px;
          background: var(--gradient-accent);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .pc-icon {
          font-size: 22px;
          margin-bottom: 6px;
        }

        /* Summary table */
        .sum-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          background: var(--bg-card);
          border-radius: 14px;
          border: 1px solid var(--border);
          overflow: hidden;
          margin-top: 20px;
        }
        .sum-table thead {
          background: rgba(79, 143, 255, 0.06);
        }
        .sum-table th {
          text-align: left;
          padding: 11px 14px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: var(--text-muted);
          border-bottom: 1px solid var(--border);
        }
        .sum-table td {
          padding: 11px 14px;
          font-size: 12.5px;
          border-bottom: 1px solid var(--border);
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .sum-table tr:last-child td {
          border-bottom: none;
        }
        .sum-table tr:hover td {
          background: var(--bg-card-hover);
        }
        .pn {
          font-weight: 700;
          color: var(--text-primary);
        }

        /* CTA */
        #cta {
          background: var(--gradient-hero);
          text-align: center;
          padding: 80px 0;
        }
        #cta .section-title {
          margin-bottom: 14px;
          color: #fff;
        }
        #cta .section-desc {
          margin: 0 auto 30px;
          text-align: center;
        }
        .cta-buttons {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }

        footer {
          padding: 24px 0;
          text-align: center;
          border-top: 1px solid var(--border);
          color: var(--text-muted);
          font-size: 13px;
        }
        footer a {
          color: var(--accent-blue);
          text-decoration: none;
        }

        hr.divider {
          border: none;
          border-top: 1px solid var(--border);
          margin: 0;
        }

        /* Platform card - full-width */
        .product-card.platform-card {
          grid-column: 1 / -1;
          width: 100vw;
          max-width: none;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          text-align: center;
        }
        .product-card.platform-card .pc-header {
          justify-content: center;
          text-align: center;
        }
        .product-card.platform-card .pc-header > div {
          width: 100%;
        }
        .product-card.platform-card .pc-idea {
          padding-left: 0;
          border-left: none;
          text-align: center;
        }
        .product-card.platform-card .pc-pitch,
        .product-card.platform-card .pc-market {
          text-align: center;
        }
        .product-card.platform-card .pc-footer {
          justify-content: center;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .hero-title {
            font-size: 32px;
            letter-spacing: -1px;
          }
          .hero-subtitle {
            font-size: 15px;
          }
          .product-grid {
            grid-template-columns: 1fr;
          }
          .pitch-grid {
            grid-template-columns: 1fr;
          }
          .nav-links {
            display: none;
          }
          .section-title {
            font-size: 24px;
          }
          .hero-chips {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .hero-chips .h-chip:nth-child(8) {
            grid-column: 1 / -1;
          }
          .product-card.platform-card {
            grid-column: auto;
            width: auto;
            max-width: none;
            margin-left: 0;
            margin-right: 0;
          }
        }

        /* Google Font import for Inter + JetBrains Mono */
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap");
      `}</style>
    </>
  );
}

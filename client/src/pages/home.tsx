import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import stakeLogo from "@assets/stake-logo.webp";
import claudeLogo from "@assets/claude-color.png";
import holdersIcon from "@assets/solana-coin.webp";
import claudoLogo from "@assets/claudo-logo.png";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      ease: "easeInOut"
    }
  }
};

const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const STARS = Array.from({ length: 200 }, (_, i) => ({
  id: i,
  x: seededRandom(i * 7 + 1) * 100,
  y: seededRandom(i * 13 + 2) * 100,
  size: seededRandom(i * 19 + 3) * 2 + 0.5,
  opacity: seededRandom(i * 23 + 4) * 0.8 + 0.2,
  delay: seededRandom(i * 29 + 5) * 5
}));

function StarfieldBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        {STARS.map((star) => (
          <circle
            key={star.id}
            cx={star.x * 19.2}
            cy={star.y * 10.8}
            r={star.size}
            fill="#C9CCD1"
            opacity={star.opacity * 0.5}
          >
            <animate
              attributeName="opacity"
              values={`${star.opacity * 0.2};${star.opacity * 0.7};${star.opacity * 0.2}`}
              dur={`${3 + star.delay}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            />
          </circle>
        ))}
        
        <ellipse cx="960" cy="162" rx="800" ry="150" fill="none" stroke="#C9CCD1" strokeWidth="0.5" opacity="0.12"/>
        <ellipse cx="960" cy="486" rx="900" ry="200" fill="none" stroke="#C9CCD1" strokeWidth="0.5" opacity="0.08"/>
        <ellipse cx="960" cy="810" rx="700" ry="180" fill="none" stroke="#C9CCD1" strokeWidth="0.5" opacity="0.1"/>
        
        <path d="M 0,200 Q 500,50 960,300 T 1920,200" fill="none" stroke="#C9CCD1" strokeWidth="0.6" opacity="0.15"/>
        <path d="M 0,600 Q 600,400 1100,700 T 1920,500" fill="none" stroke="#C9CCD1" strokeWidth="0.5" opacity="0.1"/>
      </svg>
    </div>
  );
}

function CapitalFlowVisualization() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      {/* Desktop: horizontal flow */}
      <div className="hidden md:flex items-center justify-center gap-0">
        {/* Node 1: Claudo Treasury */}
        <div className="flex flex-col items-center gap-2 min-w-[100px]">
          <div className="w-16 h-16 rounded-full border border-muted-foreground/30 flex items-center justify-center bg-background overflow-hidden">
            <img src={claudoLogo} alt="Claudo" className="w-12 h-12 object-contain" />
          </div>
          <span className="text-[10px] text-muted-foreground/80 font-light tracking-wide text-center leading-tight">CLAUDO<br/>TREASURY</span>
        </div>
        
        {/* Connector 1 */}
        <div className="w-16 h-1 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/20" />
          <div className="absolute h-full w-8 bg-primary/80 animate-[flowRight_2s_ease-in-out_infinite]" />
        </div>
        
        {/* Node 2: Claude Logo */}
        <div className="flex flex-col items-center gap-2 min-w-[100px]">
          <div className="w-16 h-16 rounded-full border border-muted-foreground/30 flex items-center justify-center bg-background">
            <img src={claudeLogo} alt="Claude" className="w-10 h-10 object-contain" />
          </div>
          <span className="text-[10px] text-muted-foreground/80 font-light tracking-wide">CLAUDE</span>
        </div>
        
        {/* Connector 2 */}
        <div className="w-16 h-1 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/20" />
          <div className="absolute h-full w-8 bg-primary/80 animate-[flowRight_2s_ease-in-out_infinite_0.5s]" />
        </div>
        
        {/* Node 3: Stake Logo */}
        <div className="flex flex-col items-center gap-2 min-w-[100px]">
          <div className="w-16 h-16 rounded-full border border-primary/50 flex items-center justify-center overflow-hidden">
            <img src={stakeLogo} alt="Stake" className="w-[180%] h-[180%] object-cover" />
          </div>
          <span className="text-[10px] text-muted-foreground/80 font-light tracking-wide">STAKE</span>
        </div>
        
        {/* Connector 3 */}
        <div className="w-16 h-1 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/20" />
          <div className="absolute h-full w-8 bg-primary/80 animate-[flowRight_2s_ease-in-out_infinite_1s]" />
        </div>
        
        {/* Node 4: Holders */}
        <div className="flex flex-col items-center gap-2 min-w-[100px]">
          <div className="w-16 h-16 rounded-full border border-muted-foreground/30 flex items-center justify-center bg-background overflow-hidden">
            <img src={holdersIcon} alt="Holders" className="w-12 h-12 object-contain" />
          </div>
          <span className="text-[10px] text-muted-foreground/80 font-light tracking-wide">HOLDERS</span>
        </div>
      </div>
      
      {/* Mobile: 2x2 grid with flow arrows */}
      <div className="flex md:hidden flex-col items-center gap-4">
        {/* Top row */}
        <div className="flex items-center justify-center gap-2">
          {/* Node 1: Claudo Treasury */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-14 h-14 rounded-full border border-muted-foreground/30 flex items-center justify-center bg-background overflow-hidden">
              <img src={claudoLogo} alt="Claudo" className="w-10 h-10 object-contain" />
            </div>
            <span className="text-[9px] text-muted-foreground/80 font-light text-center leading-tight">CLAUDO<br/>TREASURY</span>
          </div>
          
          {/* Horizontal connector */}
          <div className="w-10 h-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/20" />
            <div className="absolute h-full w-4 bg-primary/80 animate-[flowRight_1.5s_ease-in-out_infinite]" />
          </div>
          
          {/* Node 2: Claude */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-14 h-14 rounded-full border border-muted-foreground/30 flex items-center justify-center bg-background">
              <img src={claudeLogo} alt="Claude" className="w-9 h-9 object-contain" />
            </div>
            <span className="text-[9px] text-muted-foreground/80 font-light">CLAUDE</span>
          </div>
        </div>
        
        {/* Vertical connector */}
        <div className="w-1 h-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/20" />
          <div className="absolute w-full h-3 bg-primary/80 animate-[flowDown_1.5s_ease-in-out_infinite_0.5s]" />
        </div>
        
        {/* Bottom row */}
        <div className="flex items-center justify-center gap-2">
          {/* Node 4: Holders */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-14 h-14 rounded-full border border-muted-foreground/30 flex items-center justify-center bg-background overflow-hidden">
              <img src={holdersIcon} alt="Holders" className="w-10 h-10 object-contain" />
            </div>
            <span className="text-[9px] text-muted-foreground/80 font-light">HOLDERS</span>
          </div>
          
          {/* Horizontal connector (reversed) */}
          <div className="w-10 h-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/20" />
            <div className="absolute h-full w-4 bg-primary/80 animate-[flowLeft_1.5s_ease-in-out_infinite_1s]" />
          </div>
          
          {/* Node 3: Stake */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-14 h-14 rounded-full border border-primary/50 flex items-center justify-center overflow-hidden">
              <img src={stakeLogo} alt="Stake" className="w-[180%] h-[180%] object-cover" />
            </div>
            <span className="text-[9px] text-muted-foreground/80 font-light">STAKE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="text-center w-full max-w-6xl mx-auto relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          className="text-5xl md:text-7xl font-light tracking-[0.25em] text-foreground mb-6"
          data-testid="text-hero-title"
        >
          CLAUDO
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
          className="text-lg md:text-xl text-muted-foreground font-light tracking-wide mb-12"
          data-testid="text-hero-subtitle"
        >
          Claude advises. Rules enforce. The system executes.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeInOut" }}
          className="mb-16"
        >
          <CapitalFlowVisualization />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
          className="text-sm text-muted-foreground/60 font-light tracking-wide mb-12 max-w-2xl mx-auto"
        >
          Creator fees flow through Claudo, executed on Stake, distributed to holders.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
                  >
          <Link href="/dash">
            <Button
              variant="outline"
              size="lg"
              className="tracking-widest border-muted-foreground/30 bg-transparent"
              data-testid="button-monitor-live"
            >
              Monitor Live
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ConceptSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="relative py-32 px-6">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div variants={fadeIn} className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground" data-testid="text-concept-title">
            Autonomous Treasury Execution
          </h2>
          <p className="text-muted-foreground/80 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            CLAUDO transforms creator fees into disciplined gambling execution on Stake. 
            Every session is rule-enforced, every outcome is distributed, every action is auditable.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

const capitalFlowSteps = [
  { title: "Creator Fees", desc: "Revenue captured from trades" },
  { title: "Claudo Treasury", desc: "Capital consolidated for deployment" },
  { title: "Rule-Enforced Execution", desc: "Disciplined gambling on Stake" },
  { title: "Session Outcome", desc: "Win or loss, fully recorded" },
  { title: "Distribution to Holders", desc: "Outcomes flow back to the community" }
];

const executionLoopSteps = [
  { title: "Game Session", desc: "Active play on Stake casino" },
  { title: "Stake Result", desc: "Outcome captured in real-time" },
  { title: "Session State", desc: "Current position evaluated" },
  { title: "Claude Decision", desc: "Advisory generated, not executed" },
  { title: "Rule Engine", desc: "Limits enforced, no exceptions" },
  { title: "Execution Engine", desc: "Validated action deployed" },
  { title: "Audit Log", desc: "Every move permanently recorded" }
];

function PipelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="relative py-32 px-6">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-16">
          {/* Capital Flow */}
          <div>
            <motion.div variants={fadeIn} className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-12 bg-muted-foreground/30" />
                <h2 className="text-xl md:text-2xl font-light tracking-wide text-foreground" data-testid="text-capital-flow-title">
                  Capital Flow
                </h2>
                <div className="h-px w-12 bg-muted-foreground/30" />
              </div>
            </motion.div>
            
            <div className="relative flex flex-col items-center space-y-3">
              {capitalFlowSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={{
                    hidden: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.6, delay: index * 0.1, ease: "easeInOut" }
                    }
                  }}
                  className="relative z-10 w-full max-w-xs"
                  style={{ marginLeft: index % 2 === 0 ? '0' : '40px', marginRight: index % 2 === 0 ? '40px' : '0' }}
                >
                  <div 
                    className="px-6 py-3 bg-background/80 backdrop-blur-sm border border-muted-foreground/20 rounded-md text-center"
                    data-testid={`capital-flow-step-${index}`}
                  >
                    <span className="text-sm font-medium tracking-wide text-foreground block">{step.title}</span>
                    <span className="text-xs text-muted-foreground/60 font-light">{step.desc}</span>
                  </div>
                  
                  {index < capitalFlowSteps.length - 1 && (
                    <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-px h-6 bg-primary/40" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Execution Loop */}
          <div>
            <motion.div variants={fadeIn} className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-12 bg-muted-foreground/30" />
                <h2 className="text-xl md:text-2xl font-light tracking-wide text-foreground" data-testid="text-execution-loop-title">
                  Execution Loop
                </h2>
                <div className="h-px w-12 bg-muted-foreground/30" />
              </div>
            </motion.div>
            
            <div className="relative flex flex-col items-center space-y-3">
              {executionLoopSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={{
                    hidden: { opacity: 0, x: index % 2 === 0 ? 20 : -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.6, delay: index * 0.1, ease: "easeInOut" }
                    }
                  }}
                  className="relative z-10 w-full max-w-xs"
                  style={{ marginLeft: index % 2 === 0 ? '40px' : '0', marginRight: index % 2 === 0 ? '0' : '40px' }}
                >
                  <div 
                    className="px-6 py-3 bg-background/80 backdrop-blur-sm border border-muted-foreground/20 rounded-md text-center"
                                        data-testid={`execution-loop-step-${index}`}
                  >
                    <span className="text-sm font-medium tracking-wide text-foreground block">{step.title}</span>
                    <span className="text-xs text-muted-foreground/60 font-light">{step.desc}</span>
                  </div>
                  
                  {index < executionLoopSteps.length - 1 && (
                    <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-px h-6 bg-primary/40" />
                  )}
                </motion.div>
              ))}
            </div>
            
            <motion.p 
              variants={fadeIn}
              className="text-center text-sm text-muted-foreground/50 font-light mt-8 italic"
            >
              If rules are violated, execution halts.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

const features = [
  {
    title: "Claudo Engine",
    description: "Analyzes session dynamics and generates decision advisories based on real-time conditions. Claude observes. Claude suggests. The system decides."
  },
  {
    title: "Rule Engine",
    description: "Enforces exposure limits, stake sizing, stop conditions, and cooldown logic. Rules are absolute. Emotion is irrelevant."
  },
  {
    title: "Execution Engine",
    description: "Deploys validated actions with deterministic precision. No hesitation. No deviation. Pure execution."
  },
  {
    title: "Claudo Treasury",
    description: "Manages creator fee accumulation, session allocation, and outcome consolidation. Capital flows with discipline."
  }
];

function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="relative py-32 px-6">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground" data-testid="text-features-title">
            Every component serves the system.
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                                    transition: { duration: 0.6, delay: index * 0.1, ease: "easeInOut" }
                }
              }}
              className="p-6 bg-background/60 backdrop-blur-sm border border-muted-foreground/10 rounded-lg"
              data-testid={`feature-card-${index}`}
            >
              <h3 className="text-base font-medium text-foreground mb-3 tracking-wide">{feature.title}</h3>
              <p className="text-sm text-muted-foreground/70 font-light leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

const additionalFeatures = [
  {
    title: "Outcome Distribution",
    description: "Session outcomes are distributed to token holders through a transparent mechanism. Win together. Lose together."
  },
  {
    title: "Full Transparency",
    description: "Every session, every decision, every distribution—permanently recorded and publicly reviewable."
  },
  {
    title: "Rule Supremacy",
    description: "Claude advises. Rules decide. If conditions aren't met, execution stops. No overrides. No exceptions."
  }
];

function AdditionalFeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="relative py-24 px-6">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="max-w-5xl mx-auto"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: index * 0.1, ease: "easeInOut" }
                }
              }}
              className="p-5 border border-muted-foreground/10 rounded-lg text-center"
              data-testid={`additional-feature-${index}`}
            >
              <h3 className="text-sm font-medium text-foreground mb-2 tracking-wide">{feature.title}</h3>
              <p className="text-xs text-muted-foreground/60 font-light leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const stats = [
    { label: "Session P&L", value: "+2.76%" },
    { label: "Bets Executed", value: "1,482" },
    { label: "Distribution Rate", value: "6.3%" }
  ];
  
  return (
    <section ref={ref} className="relative py-24 px-6">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="max-w-5xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeIn}
              className="text-center"
              data-testid={`stat-${index}`}
            >
              <span className="text-sm text-muted-foreground/60 font-light tracking-wider">{stat.label}</span>
              <span className="ml-4 text-2xl font-light text-foreground">{stat.value}</span>
                          </motion.div>
          ))}
        </div>
        
        <motion.div variants={fadeIn} className="relative h-24 w-full">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 80">
            <path
              d="M 0,60 L 20,55 L 40,58 L 60,52 L 80,54 L 100,48 L 120,50 L 140,45 L 160,48 L 180,42 L 200,44 L 220,38 L 240,40 L 260,35 L 280,32 L 300,28 L 320,25 L 340,22 L 360,18 L 380,15 L 400,12"
              fill="none"
              stroke="#3EF3C1"
              strokeWidth="2"
              opacity="0.8"
            >
              <animate
                attributeName="opacity"
                values="0.6;0.9;0.6"
                dur="4s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
              />
            </path>
            
            <path
              d="M 0,60 L 20,55 L 40,58 L 60,52 L 80,54 L 100,48 L 120,50 L 140,45 L 160,48 L 180,42 L 200,44 L 220,38 L 240,40 L 260,35 L 280,32 L 300,28 L 320,25 L 340,22 L 360,18 L 380,15 L 400,12 L 400,80 L 0,80 Z"
              fill="#3EF3C1"
              opacity="0.08"
            />
            
            <line x1="0" y1="80" x2="400" y2="80" stroke="#C9CCD1" strokeWidth="1" opacity="0.2"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
      <section ref={ref} className="relative py-32 px-6">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="max-w-4xl mx-auto text-center"
      >
        <p 
          className="text-3xl md:text-4xl lg:text-5xl font-light italic text-foreground tracking-wide"
          data-testid="text-philosophy-quote"
        >
          Discipline outperforms instinct.
        </p>
      </motion.div>
    </section>
  );
}

function SystemTransparencySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const verifiableItems = [
    "Execution architecture and decision boundaries",
    "Treasury flow sourced from creator fees",
    "Outcome distribution logic for holders",
    "Full auditability and deterministic execution guarantees"
  ];
  
  const resources = [
    { label: "Documentation", href: "/docs" },
    { label: "Architecture", href: "/docs/architecture" },
    { label: "Roadmap", href: "/docs/roadmap" },
    { label: "Source & Governance", href: "https://github.com/orgs/claudo-org/repositories", external: true }
  ];
  
  return (
    <section ref={ref} className="relative py-32 px-6">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="max-w-3xl mx-auto"
      >
        <motion.h2 
          variants={fadeIn}
          className="text-3xl md:text-4xl font-light text-foreground tracking-wide mb-6 text-center"
          data-testid="text-transparency-title"
        >
          System Transparency
        </motion.h2>
        
        <motion.p 
          variants={fadeIn}
          className="text-base text-muted-foreground/70 font-light mb-4 text-center leading-relaxed"
        >
          Claudo operates continuously using predefined rules and audited execution logic.
        </motion.p>
        <motion.p 
          variants={fadeIn}
          className="text-sm text-muted-foreground/50 font-light mb-12 text-center"
        >
          No user interaction. No manual control. No emotional input.
        </motion.p>
        
        <motion.div variants={fadeIn} className="mb-12">
          <h3 className="text-sm text-muted-foreground/60 font-light tracking-wide mb-4">What can be verified:</h3>
          <ul className="space-y-2">
            {verifiableItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-foreground/80 font-light">
                <span className="text-primary mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div variants={fadeIn} className="mb-16">
          <h3 className="text-sm text-muted-foreground/60 font-light tracking-wide mb-4">Resources:</h3>
          <div className="flex flex-wrap gap-3">
            {resources.map((resource) => (
              resource.external ? (
                <a
                  key={resource.label}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary/80 hover:text-primary font-light transition-colors duration-300"
                  data-testid={`link-${resource.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {resource.label}
                </a>
              ) : (
                <Link key={resource.label} href={resource.href}>
                  <span 
                    className="text-sm text-primary/80 hover:text-primary font-light cursor-pointer transition-colors duration-300"
                    data-testid={`link-${resource.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {resource.label}
                  </span>
                </Link>
              )
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          variants={fadeIn}
          className="pt-12 border-t border-muted-foreground/10 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono text-primary/80 tracking-widest">SYSTEM ACTIVE</span>
          </div>
          <p className="text-sm text-muted-foreground/40 font-mono">
            CLAUDO v1.0 — Autonomous Gambling Execution Framework
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <StarfieldBackground />
      
      <div className="relative z-10">
        <HeroSection />
        <ConceptSection />
        <PipelineSection />
        <FeaturesSection />
        <AdditionalFeaturesSection />
        <StatsSection />
        <PhilosophySection />
        <SystemTransparencySection />
      </div>
    </div>
  );
}

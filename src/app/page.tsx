"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import {
  FileText,
  Clock,
  Users,
  Calendar,
  MessageSquare,
  Shield,
  Zap,
  Brain,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  BarChart3,
  Briefcase,
  Receipt,
  Search,
  Bell,
  Lock,
  Heart,
  TrendingUp,
  DollarSign,
  Award,
  Stethoscope,
} from "lucide-react";

const SIGNUP_URL =
  "http://legalsuite-prod2.eba-imjvmfeg.us-east-1.elasticbeanstalk.com/signup";
const DEMO_URL =
  "https://link.aipeakbiz.com/widget/bookings/legalsuiteapp-demo";

function LSLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="30" width="140" height="140" rx="6" ry="6"
        transform="rotate(45 100 100)" fill="none" stroke="currentColor" strokeWidth="7" />
      <text x="100" y="115" textAnchor="middle" fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontWeight="700" fontSize="60" fill="currentColor" letterSpacing="-1">LS</text>
    </svg>
  );
}

// ─── NAVIGATION ──────────────────────────────────
function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { label: "Features", href: "#features" },
    { label: "AI Chronology", href: "#chronology" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <LSLogo className="h-7 w-7 text-teal" />
            <span className="text-xl font-bold text-navy-dark">
              Legal<span className="text-teal">Suite</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-navy-dark/70 hover:text-teal transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-teal font-semibold rounded-lg border border-teal/30 hover:bg-teal/5 transition-colors text-sm"
            >
              Schedule a Demo
            </a>
            <a
              href={SIGNUP_URL}
              className="px-5 py-2.5 bg-teal text-white font-semibold rounded-lg hover:bg-teal-dark transition-colors cta-glow text-sm"
            >
              Start Free Trial
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-navy-dark"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-border py-4 space-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block px-3 py-2 text-sm font-medium text-navy-dark/70 hover:text-teal"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-3 text-center px-5 py-2.5 text-teal font-semibold rounded-lg border border-teal/30 text-sm"
            >
              Schedule a Demo
            </a>
            <a
              href={SIGNUP_URL}
              className="block mx-3 text-center px-5 py-2.5 bg-teal text-white font-semibold rounded-lg text-sm"
            >
              Start Free Trial
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

// ─── HERO ────────────────────────────────────────
function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 opacity-10 grid-pattern" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6"
        >
          <Zap className="h-4 w-4 text-amber" />
          <span className="text-sm font-medium text-white/90">
            AI Medical Chronology Built Into Every Case
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-4xl mx-auto"
        >
          Run Your Entire Law Firm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-emerald">
            From One Platform
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
        >
          Cases. Clients. Billing. Documents. Calendar. Messaging. Team management.
          Plus AI-powered medical chronology built right in — all in a single,
          HIPAA-ready platform built for personal injury firms.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={SIGNUP_URL}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal text-white font-bold rounded-xl text-lg hover:bg-teal-dark transition-all cta-glow shadow-lg shadow-teal/25"
          >
            Start Your Free Trial
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl text-lg border border-white/20 hover:bg-white/20 transition-all"
          >
            Schedule a Demo
          </a>
        </motion.div>

        {/* Social proof row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm"
        >
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>HIPAA-Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            <span>Bank-Level Encryption</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Setup in 5 Minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" />
            <span>No Credit Card Required</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── TRUST BAR ───────────────────────────────────
function TrustBar() {
  const stats = [
    { value: "10x", label: "Faster Chronologies", icon: Zap },
    { value: "100%", label: "HIPAA-Ready", icon: Shield },
    { value: "68%", label: "Less Admin Time", icon: Clock },
    { value: "99.9%", label: "Uptime SLA", icon: TrendingUp },
  ];
  return (
    <section className="py-12 bg-gray-light border-b border-gray-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <s.icon className="h-6 w-6 text-teal mx-auto mb-2" />
              <div className="text-3xl font-extrabold text-navy-dark">{s.value}</div>
              <div className="text-sm text-navy-dark/60 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PROBLEM STATEMENT ───────────────────────────
function ProblemStatement() {
  const problems = [
    {
      icon: Briefcase,
      title: "Scattered Tools",
      desc: "Case management in one app, billing in another, documents in a third. Your team wastes hours switching between systems.",
    },
    {
      icon: FileText,
      title: "Manual Chronologies",
      desc: "Paralegals spend 20-40 hours per medical chronology. At $50/hr, that's $1,000-$2,000 per case — before the attorney even looks at it.",
    },
    {
      icon: DollarSign,
      title: "Expensive Software",
      desc: "Legacy legal software charges $100+ per user per month and still doesn't include chronology tools. You're paying more for less.",
    },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
            Your Firm Deserves Better Than{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber to-amber-light">
              Duct-Taped Systems
            </span>
          </h2>
          <p className="mt-4 text-lg text-navy-dark/60 max-w-2xl mx-auto">
            Most law firms run on 5-7 disconnected tools. Clio, MyCase, PracticePanther —
            none of them do everything, and none of them have AI chronology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-red-100 bg-red-50/50"
            >
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 border border-red-200 flex items-center justify-center mb-4">
                <p.icon className="h-6 w-6 text-red-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-navy-dark mb-2">{p.title}</h3>
              <p className="text-navy-dark/60 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── AI CHRONOLOGY SHOWCASE ──────────────────────
function ChronologyShowcase() {
  const steps = [
    {
      num: "01",
      title: "Upload Medical Records",
      desc: "Drag and drop PDFs — up to 10,000+ pages. Supports hospital records, imaging reports, physician notes, and more.",
    },
    {
      num: "02",
      title: "AI Extracts & Organizes",
      desc: "Our AI reads every page, identifies dates, providers, diagnoses, treatments, and medications. Three-pass verification ensures accuracy.",
    },
    {
      num: "03",
      title: "Review & Export",
      desc: "Get a complete, timestamped medical chronology in minutes instead of weeks. Export to PDF or integrate directly into your case file.",
    },
  ];

  return (
    <section id="chronology" className="py-20 bg-navy-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 grid-pattern" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 rounded-full px-4 py-1.5 mb-4">
            <Brain className="h-4 w-4 text-teal" />
            <span className="text-sm font-medium text-teal">Industry First</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            AI Medical Chronology{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-emerald">
              Built Right In
            </span>
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
            Turn thousands of pages of medical records into an organized, verified
            chronology in minutes — not weeks. No separate tool required.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-5xl font-extrabold text-teal/20 mb-4">{s.num}</div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20">
            <h4 className="font-bold text-red-400 mb-3">Traditional Method</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <X className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                20-40 hours per case
              </li>
              <li className="flex items-start gap-2">
                <X className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                $1,000-$2,000 in paralegal time
              </li>
              <li className="flex items-start gap-2">
                <X className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                Human error and inconsistency
              </li>
              <li className="flex items-start gap-2">
                <X className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                Weeks of turnaround time
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-teal/10 border border-teal/20">
            <h4 className="font-bold text-teal mb-3">With LegalSuite AI</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal mt-0.5 shrink-0" />
                Minutes, not hours
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal mt-0.5 shrink-0" />
                As low as $0.15/page
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal mt-0.5 shrink-0" />
                Three-pass AI verification
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal mt-0.5 shrink-0" />
                Integrated with your case file
              </li>
            </ul>
          </div>
        </motion.div>

        {/* AI Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto p-5 rounded-xl bg-white/5 border border-white/10 text-center"
        >
          <p className="text-xs text-white/50 leading-relaxed">
            <span className="font-semibold text-white/70">Important Disclaimer:</span>{" "}
            LegalSuite&apos;s AI medical chronology is powered by Claude Opus 4.6 by Anthropic —
            the most capable and accurate AI model available for medical record analysis.
            However, AI can make mistakes. All chronology output must be reviewed and
            verified by qualified personnel before inclusion in any documentation submitted
            to courts or used in legal proceedings. LegalSuite is a tool to assist legal
            professionals, not a substitute for professional medical or legal judgment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── FEATURE MINI-APP ILLUSTRATIONS ─────────────
// Each feature gets a unique mini-app mockup SVG that looks like a real screen
function FeatureIllustration({ type }: { type: string }) {
  const illustrations: Record<string, React.ReactNode> = {
    cases: (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="0" y="0" width="120" height="80" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1"/>
        <rect x="0" y="0" width="120" height="16" rx="6" fill="#0D9488"/>
        <rect x="0" y="10" width="120" height="6" fill="#0D9488"/>
        <text x="8" y="11" fontSize="5" fill="white" fontWeight="600">Cases</text>
        <circle cx="110" cy="8" r="3" fill="#059669"/>
        <rect x="6" y="22" width="50" height="5" rx="1" fill="#0D9488" opacity="0.15"/>
        <rect x="6" y="30" width="108" height="10" rx="3" fill="white" stroke="#E2E8F0" strokeWidth="0.5"/>
        <circle cx="12" cy="35" r="2.5" fill="#10B981"/>
        <text x="18" y="36.5" fontSize="3.5" fill="#334155">Martinez v. General Hospital</text>
        <rect x="90" y="33" width="18" height="4" rx="1" fill="#DCFCE7"/>
        <text x="92" y="36" fontSize="2.5" fill="#16A34A">Active</text>
        <rect x="6" y="43" width="108" height="10" rx="3" fill="white" stroke="#E2E8F0" strokeWidth="0.5"/>
        <circle cx="12" cy="48" r="2.5" fill="#F59E0B"/>
        <text x="18" y="49.5" fontSize="3.5" fill="#334155">Thompson v. City Medical</text>
        <rect x="90" y="46" width="18" height="4" rx="1" fill="#FEF3C7"/>
        <text x="92.5" y="49" fontSize="2.5" fill="#D97706">Review</text>
        <rect x="6" y="56" width="108" height="10" rx="3" fill="white" stroke="#E2E8F0" strokeWidth="0.5"/>
        <circle cx="12" cy="61" r="2.5" fill="#0D9488"/>
        <text x="18" y="62.5" fontSize="3.5" fill="#334155">Sterling Corp Litigation</text>
        <rect x="90" y="59" width="18" height="4" rx="1" fill="#E0F2FE"/>
        <text x="93" y="62" fontSize="2.5" fill="#0284C7">New</text>
        <rect x="6" y="69" width="108" height="8" rx="3" fill="white" stroke="#E2E8F0" strokeWidth="0.5" opacity="0.5"/>
      </svg>
    ),
    crm: (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="0" y="0" width="120" height="80" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1"/>
        <rect x="0" y="0" width="120" height="16" rx="6" fill="#1E3A5F"/>
        <rect x="0" y="10" width="120" height="6" fill="#1E3A5F"/>
        <text x="8" y="11" fontSize="5" fill="white" fontWeight="600">Contacts</text>
        <rect x="6" y="22" width="30" height="52" rx="4" fill="white" stroke="#E2E8F0" strokeWidth="0.5"/>
        <circle cx="21" cy="33" r="7" fill="#0D9488" opacity="0.15"/>
        <text x="21" y="35" textAnchor="middle" fontSize="6" fill="#0D9488" fontWeight="700">SM</text>
        <text x="21" y="45" textAnchor="middle" fontSize="3" fill="#334155" fontWeight="600">Sarah M.</text>
        <text x="21" y="49" textAnchor="middle" fontSize="2.5" fill="#94A3B8">Attorney</text>
        <rect x="11" y="54" width="20" height="3" rx="1" fill="#DCFCE7"/>
        <text x="14" y="56.2" fontSize="2" fill="#16A34A">3 Active Cases</text>
        <rect x="11" y="60" width="20" height="3" rx="1" fill="#E0F2FE"/>
        <text x="14" y="62.2" fontSize="2" fill="#0284C7">12 Documents</text>
        <rect x="40" y="22" width="74" height="24" rx="4" fill="white" stroke="#E2E8F0" strokeWidth="0.5"/>
        <text x="46" y="30" fontSize="3.5" fill="#334155" fontWeight="600">Recent Activity</text>
        <rect x="46" y="33" width="62" height="0.5" fill="#E2E8F0"/>
        <circle cx="49" cy="38" r="1.5" fill="#10B981"/>
        <text x="53" y="39" fontSize="2.5" fill="#64748B">Document uploaded — 2 min ago</text>
        <circle cx="49" cy="43" r="1.5" fill="#0D9488"/>
        <text x="53" y="44" fontSize="2.5" fill="#64748B">Case note added — 1 hr ago</text>
        <rect x="40" y="50" width="74" height="24" rx="4" fill="white" stroke="#E2E8F0" strokeWidth="0.5"/>
        <text x="46" y="58" fontSize="3.5" fill="#334155" fontWeight="600">Contact Info</text>
        <rect x="46" y="61" width="62" height="0.5" fill="#E2E8F0"/>
        <text x="46" y="66" fontSize="2.5" fill="#64748B">sarah.martinez@martinezlaw.com</text>
        <text x="46" y="70" fontSize="2.5" fill="#64748B">(555) 234-5678</text>
      </svg>
    ),
    billing: (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="0" y="0" width="120" height="80" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1"/>
        <rect x="0" y="0" width="120" height="16" rx="6" fill="#059669"/>
        <rect x="0" y="10" width="120" height="6" fill="#059669"/>
        <text x="8" y="11" fontSize="5" fill="white" fontWeight="600">Billing</text>
        <rect x="6" y="22" width="34" height="22" rx="4" fill="white" stroke="#E2E8F0" strokeWidth="0.5"/>
        <text x="10" y="29" fontSize="2.5" fill="#94A3B8">Revenue MTD</text>
        <text x="10" y="37" fontSize="7" fill="#059669" fontWeight="700">$24.8k</text>
        <rect x="43" y="22" width="34" height="22" rx="4" fill="white" stroke="#E2E8F0" strokeWidth="0.5"/>
        <text x="47" y="29" fontSize="2.5" fill="#94A3B8">Outstanding</text>
        <text x="47" y="37" fontSize="7" fill="#F59E0B" fontWeight="700">$8.2k</text>
        <rect x="80" y="22" width="34" height="22" rx="4" fill="white" stroke="#E2E8F0" strokeWidth="0.5"/>
        <text x="84" y="29" fontSize="2.5" fill="#94A3B8">Paid</text>
        <text x="84" y="37" fontSize="7" fill="#0D9488" fontWeight="700">$16.6k</text>
        <rect x="6" y="48" width="108" height="28" rx="4" fill="white" stroke="#E2E8F0" strokeWidth="0.5"/>
        <text x="10" y="56" fontSize="3" fill="#334155" fontWeight="600">Recent Invoices</text>
        <rect x="10" y="59" width="100" height="0.5" fill="#E2E8F0"/>
        <text x="10" y="65" fontSize="2.5" fill="#334155">INV-2026-042</text>
        <text x="55" y="65" fontSize="2.5" fill="#64748B">Martinez</text>
        <text x="88" y="65" fontSize="2.5" fill="#059669" fontWeight="600">$3,200</text>
        <text x="10" y="71" fontSize="2.5" fill="#334155">INV-2026-041</text>
        <text x="55" y="71" fontSize="2.5" fill="#64748B">Thompson</text>
        <text x="88" y="71" fontSize="2.5" fill="#F59E0B" fontWeight="600">$1,850</text>
      </svg>
    ),
    documents: (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="0" y="0" width="120" height="80" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1"/>
        <rect x="0" y="0" width="120" height="16" rx="6" fill="#6366F1"/>
        <rect x="0" y="10" width="120" height="6" fill="#6366F1"/>
        <text x="8" y="11" fontSize="5" fill="white" fontWeight="600">Documents</text>
        <rect x="6" y="22" width="25" height="25" rx="3" fill="white" stroke="#E2E8F0" strokeWidth="0.5"/>
        <rect x="10" y="26" width="17" height="3" rx="0.5" fill="#EEF2FF"/>
        <rect x="10" y="30" width="14" height="1" fill="#CBD5E1" opacity="0.5"/>
        <rect x="10" y="32" width="16" height="1" fill="#CBD5E1" opacity="0.5"/>
        <rect x="10" y="34" width="12" height="1" fill="#CBD5E1" opacity="0.5"/>
        <rect x="10" y="37" width="8" height="3" rx="1" fill="#6366F1" opacity="0.2"/>
        <text x="11.5" y="39.2" fontSize="2" fill="#6366F1">PDF</text>
        <rect x="34" y="22" width="25" height="25" rx="3" fill="white" stroke="#E2E8F0" strokeWidth="0.5"/>
        <rect x="38" y="26" width="17" height="3" rx="0.5" fill="#FEF3C7"/>
        <rect x="38" y="30" width="14" height="1" fill="#CBD5E1" opacity="0.5"/>
        <rect x="38" y="32" width="16" height="1" fill="#CBD5E1" opacity="0.5"/>
        <rect x="38" y="34" width="12" height="1" fill="#CBD5E1" opacity="0.5"/>
        <rect x="38" y="37" width="8" height="3" rx="1" fill="#F59E0B" opacity="0.2"/>
        <text x="39" y="39.2" fontSize="2" fill="#D97706">DOC</text>
        <rect x="62" y="22" width="25" height="25" rx="3" fill="white" stroke="#E2E8F0" strokeWidth="0.5"/>
        <rect x="66" y="26" width="17" height="3" rx="0.5" fill="#DCFCE7"/>
        <rect x="66" y="30" width="14" height="1" fill="#CBD5E1" opacity="0.5"/>
        <rect x="66" y="32" width="16" height="1" fill="#CBD5E1" opacity="0.5"/>
        <rect x="66" y="34" width="12" height="1" fill="#CBD5E1" opacity="0.5"/>
        <rect x="66" y="37" width="8" height="3" rx="1" fill="#10B981" opacity="0.2"/>
        <text x="67" y="39.2" fontSize="2" fill="#059669">IMG</text>
        <rect x="90" y="22" width="25" height="25" rx="3" fill="white" stroke="#0D9488" strokeWidth="1" strokeDasharray="2 1"/>
        <text x="102.5" y="37" textAnchor="middle" fontSize="8" fill="#0D9488">+</text>
        <rect x="6" y="52" width="108" height="22" rx="4" fill="white" stroke="#E2E8F0" strokeWidth="0.5"/>
        <text x="10" y="60" fontSize="3" fill="#334155" fontWeight="600">Recent Uploads</text>
        <rect x="10" y="63" width="100" height="0.5" fill="#E2E8F0"/>
        <text x="10" y="68" fontSize="2.5" fill="#334155">medical_records_martinez.pdf</text>
        <text x="90" y="68" fontSize="2.5" fill="#64748B">2.4 MB</text>
      </svg>
    ),
    calendar: (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="0" y="0" width="120" height="80" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1"/>
        <rect x="0" y="0" width="120" height="16" rx="6" fill="#0D9488"/>
        <rect x="0" y="10" width="120" height="6" fill="#0D9488"/>
        <text x="8" y="11" fontSize="5" fill="white" fontWeight="600">March 2026</text>
        {["M","T","W","T","F","S","S"].map((d,i) => (
          <text key={i} x={10+i*15.5} y="24" textAnchor="middle" fontSize="3" fill="#94A3B8">{d}</text>
        ))}
        {Array.from({length: 31}, (_,i) => {
          const row = Math.floor((i+2)/7);
          const col = (i+2) % 7;
          const isToday = i === 23;
          const hasEvent = [4,11,15,23,27].includes(i);
          return (
            <g key={i}>
              <rect x={2+col*15.5} y={27+row*9.5} width="13" height="8" rx="2"
                fill={isToday ? "#0D9488" : hasEvent ? "#F0FDFA" : "white"}
                stroke={hasEvent && !isToday ? "#0D9488" : "#E2E8F0"} strokeWidth="0.5"/>
              <text x={8.5+col*15.5} y={32+row*9.5} textAnchor="middle" fontSize="3.5"
                fill={isToday ? "white" : "#334155"}>{i+1}</text>
              {hasEvent && !isToday && <circle cx={8.5+col*15.5} cy={33.5+row*9.5} r="0.8" fill="#0D9488"/>}
            </g>
          );
        })}
      </svg>
    ),
    messaging: (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="0" y="0" width="120" height="80" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1"/>
        <rect x="0" y="0" width="120" height="16" rx="6" fill="#0F172A"/>
        <rect x="0" y="10" width="120" height="6" fill="#0F172A"/>
        <text x="8" y="11" fontSize="5" fill="white" fontWeight="600">Messages</text>
        <circle cx="110" cy="8" r="4" fill="#EF4444"/>
        <text x="110" y="9.5" textAnchor="middle" fontSize="3.5" fill="white" fontWeight="700">3</text>
        <rect x="6" y="22" width="65" height="12" rx="6" fill="#0D9488"/>
        <text x="12" y="29.5" fontSize="3" fill="white">Updated the chronology for Martinez case</text>
        <text x="12" y="23.5" fontSize="2" fill="white" opacity="0.7">Sarah M. — 2:34 PM</text>
        <rect x="49" y="38" width="65" height="12" rx="6" fill="#E2E8F0"/>
        <text x="55" y="45.5" fontSize="3" fill="#334155">Looks great, sending to the client now</text>
        <text x="55" y="39.5" fontSize="2" fill="#64748B">You — 2:36 PM</text>
        <rect x="6" y="54" width="55" height="12" rx="6" fill="#0D9488"/>
        <text x="12" y="61.5" fontSize="3" fill="white">Meeting rescheduled to Thursday</text>
        <text x="12" y="55.5" fontSize="2" fill="white" opacity="0.7">Rachel T. — 2:41 PM</text>
        <rect x="6" y="70" width="108" height="7" rx="3.5" fill="white" stroke="#E2E8F0" strokeWidth="0.5"/>
        <text x="12" y="74.5" fontSize="3" fill="#94A3B8">Type a message...</text>
      </svg>
    ),
    time: (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="0" y="0" width="120" height="80" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1"/>
        <rect x="0" y="0" width="120" height="16" rx="6" fill="#7C3AED"/>
        <rect x="0" y="10" width="120" height="6" fill="#7C3AED"/>
        <text x="8" y="11" fontSize="5" fill="white" fontWeight="600">Time Tracking</text>
        <rect x="6" y="22" width="50" height="20" rx="4" fill="white" stroke="#E2E8F0" strokeWidth="0.5"/>
        <text x="31" y="29" textAnchor="middle" fontSize="2.5" fill="#94A3B8">Today</text>
        <text x="31" y="38" textAnchor="middle" fontSize="10" fill="#7C3AED" fontWeight="700">4:32</text>
        <rect x="60" y="22" width="54" height="20" rx="4" fill="white" stroke="#E2E8F0" strokeWidth="0.5"/>
        <text x="87" y="29" textAnchor="middle" fontSize="2.5" fill="#94A3B8">This Week</text>
        <text x="87" y="38" textAnchor="middle" fontSize="10" fill="#059669" fontWeight="700">22:15</text>
        <rect x="6" y="46" width="108" height="9" rx="3" fill="white" stroke="#7C3AED" strokeWidth="1"/>
        <circle cx="14" cy="50.5" r="3" fill="#7C3AED"/>
        <rect x="11.5" y="49" width="5" height="3" rx="0" fill="#7C3AED"/>
        <rect x="13" y="48" width="1" height="2" fill="white"/>
        <rect x="13" y="49" width="2.5" height="1" fill="white"/>
        <text x="21" y="52" fontSize="3.5" fill="#334155" fontWeight="600">Martinez — Research</text>
        <text x="90" y="52" fontSize="3.5" fill="#7C3AED" fontWeight="700">1:24</text>
        <rect x="6" y="58" width="108" height="8" rx="3" fill="white" stroke="#E2E8F0" strokeWidth="0.5"/>
        <text x="12" y="63.5" fontSize="3" fill="#334155">Thompson — Document Review</text>
        <text x="92" y="63.5" fontSize="3" fill="#64748B">2:08</text>
        <rect x="6" y="69" width="108" height="8" rx="3" fill="white" stroke="#E2E8F0" strokeWidth="0.5"/>
        <text x="12" y="74.5" fontSize="3" fill="#334155">Sterling — Client Call</text>
        <text x="92" y="74.5" fontSize="3" fill="#64748B">1:00</text>
      </svg>
    ),
    analytics: (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="0" y="0" width="120" height="80" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1"/>
        <rect x="0" y="0" width="120" height="16" rx="6" fill="#0D9488"/>
        <rect x="0" y="10" width="120" height="6" fill="#0D9488"/>
        <text x="8" y="11" fontSize="5" fill="white" fontWeight="600">Dashboard</text>
        <rect x="6" y="22" width="108" height="30" rx="4" fill="white" stroke="#E2E8F0" strokeWidth="0.5"/>
        <text x="10" y="29" fontSize="2.5" fill="#94A3B8">Revenue (6 months)</text>
        {[18,22,19,28,25,32].map((h,i) => (
          <rect key={i} x={14+i*16} y={48-h} width="10" height={h} rx="2" fill={i===5?"#0D9488":"#0D9488"} opacity={i===5?1:0.3+i*0.12}/>
        ))}
        <rect x="6" y="56" width="52" height="18" rx="4" fill="white" stroke="#E2E8F0" strokeWidth="0.5"/>
        <text x="10" y="63" fontSize="2.5" fill="#94A3B8">Active Cases</text>
        <text x="10" y="70" fontSize="8" fill="#334155" fontWeight="700">47</text>
        <text x="30" y="70" fontSize="3" fill="#10B981">↑ 12%</text>
        <rect x="62" y="56" width="52" height="18" rx="4" fill="white" stroke="#E2E8F0" strokeWidth="0.5"/>
        <text x="66" y="63" fontSize="2.5" fill="#94A3B8">Team Utilization</text>
        <text x="66" y="70" fontSize="8" fill="#334155" fontWeight="700">84%</text>
        <text x="88" y="70" fontSize="3" fill="#10B981">↑ 5%</text>
      </svg>
    ),
    search: (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="0" y="0" width="120" height="80" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1"/>
        <rect x="6" y="6" width="108" height="14" rx="7" fill="white" stroke="#0D9488" strokeWidth="1.5"/>
        <circle cx="16" cy="13" r="4" fill="none" stroke="#0D9488" strokeWidth="1.2"/>
        <line x1="19" y1="16" x2="22" y2="18.5" stroke="#0D9488" strokeWidth="1.2" strokeLinecap="round"/>
        <text x="26" y="15" fontSize="4" fill="#334155">martinez medical</text>
        <rect x="6" y="25" width="108" height="13" rx="4" fill="white" stroke="#E2E8F0" strokeWidth="0.5"/>
        <rect x="10" y="28" width="14" height="4" rx="1" fill="#DCFCE7"/>
        <text x="12" y="31" fontSize="2.5" fill="#16A34A">Case</text>
        <text x="28" y="33" fontSize="3.5" fill="#334155" fontWeight="600">Martinez v. General Hospital</text>
        <rect x="6" y="41" width="108" height="13" rx="4" fill="white" stroke="#E2E8F0" strokeWidth="0.5"/>
        <rect x="10" y="44" width="14" height="4" rx="1" fill="#EEF2FF"/>
        <text x="11.5" y="47" fontSize="2.5" fill="#6366F1">Doc</text>
        <text x="28" y="49" fontSize="3.5" fill="#334155" fontWeight="600">medical_records_martinez.pdf</text>
        <rect x="6" y="57" width="108" height="13" rx="4" fill="white" stroke="#E2E8F0" strokeWidth="0.5"/>
        <rect x="10" y="60" width="14" height="4" rx="1" fill="#FEF3C7"/>
        <text x="10.5" y="63" fontSize="2.5" fill="#D97706">Client</text>
        <text x="28" y="65" fontSize="3.5" fill="#334155" fontWeight="600">Sarah Martinez</text>
      </svg>
    ),
    team: (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="0" y="0" width="120" height="80" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1"/>
        <rect x="0" y="0" width="120" height="16" rx="6" fill="#0F172A"/>
        <rect x="0" y="10" width="120" height="6" fill="#0F172A"/>
        <text x="8" y="11" fontSize="5" fill="white" fontWeight="600">Team</text>
        {[
          {init:"SM",name:"Sarah M.",role:"Attorney",color:"#0D9488"},
          {init:"RT",name:"Rachel T.",role:"Paralegal",color:"#6366F1"},
          {init:"WS",name:"William S.",role:"Admin",color:"#F59E0B"},
          {init:"JD",name:"James D.",role:"Staff",color:"#EF4444"},
        ].map((m,i) => (
          <g key={i}>
            <rect x="6" y={22+i*14} width="108" height="12" rx="3" fill="white" stroke="#E2E8F0" strokeWidth="0.5"/>
            <circle cx="16" cy={28+i*14} r="4" fill={m.color} opacity="0.15"/>
            <text x="16" y={29.5+i*14} textAnchor="middle" fontSize="3.5" fill={m.color} fontWeight="700">{m.init}</text>
            <text x="26" y={29+i*14} fontSize="3.5" fill="#334155" fontWeight="600">{m.name}</text>
            <rect x="62" y={26+i*14} width="20" height="4" rx="1" fill={m.color} opacity="0.1"/>
            <text x="64" y={29+i*14} fontSize="2.5" fill={m.color}>{m.role}</text>
            <circle cx="100" cy={28+i*14} r="2" fill="#10B981"/>
            <text x="104" y={29+i*14} fontSize="2.5" fill="#64748B">Online</text>
          </g>
        ))}
      </svg>
    ),
    notifications: (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="0" y="0" width="120" height="80" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1"/>
        <rect x="0" y="0" width="120" height="16" rx="6" fill="#F59E0B"/>
        <rect x="0" y="10" width="120" height="6" fill="#F59E0B"/>
        <text x="8" y="11" fontSize="5" fill="white" fontWeight="600">Notifications</text>
        <circle cx="110" cy="8" r="4" fill="#EF4444"/>
        <text x="110" y="9.5" textAnchor="middle" fontSize="3.5" fill="white" fontWeight="700">5</text>
        {[
          {icon:"📋",text:"New case assigned: Sterling Corp",time:"2 min",bg:"#EEF2FF"},
          {icon:"💰",text:"Invoice INV-042 paid — $3,200",time:"15 min",bg:"#DCFCE7"},
          {icon:"📅",text:"Deposition tomorrow at 9:00 AM",time:"1 hr",bg:"#FEF3C7"},
          {icon:"💬",text:"New message from Rachel T.",time:"2 hr",bg:"#F0FDFA"},
        ].map((n,i) => (
          <g key={i}>
            <rect x="6" y={22+i*14} width="108" height="12" rx="3" fill={n.bg} stroke="#E2E8F0" strokeWidth="0.3"/>
            <text x="12" y={29.5+i*14} fontSize="6">{n.icon}</text>
            <text x="22" y={28.5+i*14} fontSize="3" fill="#334155" fontWeight="500">{n.text}</text>
            <text x="100" y={28.5+i*14} fontSize="2.5" fill="#94A3B8">{n.time}</text>
          </g>
        ))}
      </svg>
    ),
    security: (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="0" y="0" width="120" height="80" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1"/>
        <rect x="0" y="0" width="120" height="16" rx="6" fill="#10B981"/>
        <rect x="0" y="10" width="120" height="6" fill="#10B981"/>
        <text x="8" y="11" fontSize="5" fill="white" fontWeight="600">Security</text>
        {[
          {label:"HIPAA Compliance",status:"Active",color:"#10B981"},
          {label:"AES-256 Encryption",status:"Enabled",color:"#10B981"},
          {label:"Two-Factor Auth",status:"Enabled",color:"#10B981"},
          {label:"Audit Trail",status:"Recording",color:"#0D9488"},
          {label:"AWS BAA",status:"Signed",color:"#10B981"},
        ].map((s,i) => (
          <g key={i}>
            <rect x="6" y={22+i*11} width="108" height="9" rx="3" fill="white" stroke="#E2E8F0" strokeWidth="0.5"/>
            <rect x="10" y={24.5+i*11} width="4" height="4" rx="2" fill={s.color}/>
            <text x="11.8" y={27.7+i*11} fontSize="3" fill="white" fontWeight="700">✓</text>
            <text x="18" y={28+i*11} fontSize="3.5" fill="#334155">{s.label}</text>
            <rect x="88" y={24.5+i*11} width="22" height="4" rx="1" fill={s.color} opacity="0.1"/>
            <text x="90" y={27.5+i*11} fontSize="2.5" fill={s.color} fontWeight="600">{s.status}</text>
          </g>
        ))}
      </svg>
    ),
  };
  return <>{illustrations[type] || null}</>;
}

// ─── PLATFORM FEATURES ───────────────────────────
function PlatformFeatures() {
  const features = [
    {
      type: "cases",
      title: "Case Management",
      desc: "Track every case from intake to settlement. Milestones, status updates, and automatic workflows keep your team aligned.",
    },
    {
      type: "crm",
      title: "Client & Contact CRM",
      desc: "Complete client profiles with case history, documents, and communication log. Client portal gives clients 24/7 visibility.",
    },
    {
      type: "billing",
      title: "Billing & Invoicing",
      desc: "Time tracking, invoice generation, PDF exports, and payment processing. Three-tier pricing with Stripe integration.",
    },
    {
      type: "documents",
      title: "Document Management",
      desc: "Upload, organize, and share documents securely. Support for PDF, DOC, images, and more — all encrypted at rest.",
    },
    {
      type: "calendar",
      title: "Calendar & Scheduling",
      desc: "Firm-wide calendar with case-linked events. Create, edit, and coordinate deadlines across your entire team.",
    },
    {
      type: "messaging",
      title: "Real-Time Messaging",
      desc: "Built-in WebSocket messaging between team members. No more switching to Slack or email for internal communication.",
    },
    {
      type: "time",
      title: "Time Tracking",
      desc: "Track billable hours by case and activity. One-click timers and manual entry with automatic invoice linking.",
    },
    {
      type: "analytics",
      title: "Analytics Dashboard",
      desc: "Real-time metrics on cases, revenue, billing, and team productivity. Know exactly how your firm is performing.",
    },
    {
      type: "search",
      title: "Global Search",
      desc: "Find any case, client, document, or invoice instantly with full-text search across your entire firm's data.",
    },
    {
      type: "team",
      title: "Team Management",
      desc: "Invite team members, assign roles, manage permissions. Attorneys, paralegals, and staff — everyone in one place.",
    },
    {
      type: "notifications",
      title: "Notifications",
      desc: "Email and in-app notifications for case updates, deadlines, messages, and billing events. Never miss a beat.",
    },
    {
      type: "security",
      title: "Security & HIPAA",
      desc: "AES-256 encryption, TLS 1.3, role-based access control, 2FA, audit trails, and AWS infrastructure with BAA.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-light grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
            Everything Your Firm Needs.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-emerald">
              Nothing It Doesn&apos;t.
            </span>
          </h2>
          <p className="mt-4 text-lg text-navy-dark/60 max-w-2xl mx-auto">
            Replace Clio, MyCase, PracticePanther, and a stack of other tools with one
            powerful platform that does it all.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.05 }}
              className="bg-white rounded-2xl border border-gray-border hover:border-teal/30 hover:shadow-lg hover:shadow-teal/5 transition-all group overflow-hidden"
            >
              <div className="p-3 pb-0">
                <div className="rounded-lg overflow-hidden border border-gray-200/50 shadow-sm">
                  <FeatureIllustration type={f.type} />
                </div>
              </div>
              <div className="p-4 pt-3">
                <h3 className="text-base font-bold text-navy-dark mb-1.5">{f.title}</h3>
                <p className="text-sm text-navy-dark/60 leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── BUILT FOR PI ────────────────────────────────
function BuiltForPI() {
  const benefits = [
    {
      icon: Stethoscope,
      title: "Medical Chronology Integration",
      desc: "The only platform where your AI chronologies live right next to case files, client records, and billing — no exports needed.",
    },
    {
      icon: Heart,
      title: "Built by Legal Nurse Consultants",
      desc: "Designed by professionals who understand personal injury workflows, medical terminology, and what matters at trial.",
    },
    {
      icon: Award,
      title: "Competitive Edge",
      desc: "Competitors charge $150 to $300+ per hour for medical chronology services. LegalSuite gives you AI-powered chronologies for pennies per page — saving your firm thousands on every case.",
    },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
            Purpose-Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-emerald">
              Personal Injury
            </span>
          </h2>
          <p className="mt-4 text-lg text-navy-dark/60 max-w-2xl mx-auto">
            Generic legal software treats PI like an afterthought. LegalSuite was built
            from the ground up for personal injury practices and legal nurse consultants.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-b from-teal/5 to-transparent border border-teal/10 group"
            >
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-navy-dark to-navy flex items-center justify-center mx-auto mb-5 shadow-lg shadow-navy-dark/25 group-hover:scale-105 transition-transform relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-teal/20 to-transparent" />
                <b.icon className="h-8 w-8 text-teal relative z-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-navy-dark mb-3">{b.title}</h3>
              <p className="text-navy-dark/60 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PRICING ─────────────────────────────────────
function Pricing() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      monthly: 49,
      annual: 44,
      desc: "For solo practitioners getting started",
      features: [
        "Full case management",
        "Client portal",
        "Billing & invoicing",
        "Document management",
        "Calendar & scheduling",
        "Real-time messaging",
        "Up to 5 team members",
      ],
      chronology: false,
      popular: false,
    },
    {
      name: "Professional",
      monthly: 99,
      annual: 89,
      desc: "For growing firms that need AI power",
      features: [
        "Everything in Starter",
        "AI Medical Chronology",
        "500 pages/month included",
        "Advanced analytics",
        "Priority support",
        "Unlimited team members",
        "Custom workflows",
      ],
      chronology: true,
      chronologyPages: 500,
      overage: 0.18,
      popular: true,
    },
    {
      name: "Enterprise",
      monthly: 199,
      annual: 179,
      desc: "For large firms with high-volume needs",
      features: [
        "Everything in Professional",
        "AI Medical Chronology",
        "2,000 pages/month included",
        "White-label options",
        "Dedicated account manager",
        "SLA guarantee",
        "API access",
      ],
      chronology: true,
      chronologyPages: 2000,
      overage: 0.15,
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-light grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
            Simple, Transparent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-emerald">
              Pricing
            </span>
          </h2>
          <p className="mt-4 text-lg text-navy-dark/60 max-w-xl mx-auto">
            No hidden fees. No long-term contracts. Start free and upgrade when you&apos;re ready.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-white rounded-full p-1 border border-gray-border shadow-sm">
            <button
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                !annual ? "bg-teal text-white shadow" : "text-navy-dark/60 hover:text-navy-dark"
              }`}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                annual ? "bg-teal text-white shadow" : "text-navy-dark/60 hover:text-navy-dark"
              }`}
              onClick={() => setAnnual(true)}
            >
              Annual
              <span className="ml-1.5 text-xs font-bold text-amber">Save 10%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white rounded-2xl border p-8 ${
                plan.popular
                  ? "border-teal shadow-xl shadow-teal/10 ring-1 ring-teal/20"
                  : "border-gray-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-teal text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-bold text-navy-dark">{plan.name}</h3>
              <p className="text-sm text-navy-dark/60 mt-1">{plan.desc}</p>
              <div className="mt-5 mb-6">
                <span className="text-4xl font-extrabold text-navy-dark">
                  ${annual ? plan.annual : plan.monthly}
                </span>
                <span className="text-navy-dark/60 text-sm">/user/month</span>
              </div>
              <a
                href={SIGNUP_URL}
                className={`block text-center w-full py-3 rounded-xl font-bold text-sm transition-all ${
                  plan.popular
                    ? "bg-teal text-white hover:bg-teal-dark cta-glow"
                    : "bg-navy-dark/5 text-navy-dark hover:bg-navy-dark/10"
                }`}
              >
                Start Free Trial
              </a>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-navy-dark/70">
                    <CheckCircle2 className="h-4 w-4 text-teal mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              {plan.chronology && (
                <div className="mt-5 pt-5 border-t border-gray-border">
                  <p className="text-xs text-navy-dark/50">
                    Includes {plan.chronologyPages?.toLocaleString()} AI chronology pages/month.
                    Additional pages at ${plan.overage?.toFixed(2)}/page.
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Chronology add-on callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-navy-dark to-navy text-white text-center"
        >
          <Brain className="h-8 w-8 text-teal mx-auto mb-3" />
          <h3 className="text-lg font-bold mb-2">
            Need Chronology on the Starter Plan?
          </h3>
          <p className="text-sm text-white/70 mb-4">
            Add AI Medical Chronology to any plan for just $0.20/page with no monthly minimum.
            A typical 300-page case costs about $60 — compared to $1,000+ the traditional way.
          </p>
          <a
            href={SIGNUP_URL}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-teal text-white font-semibold rounded-lg text-sm hover:bg-teal-dark transition-colors"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ────────────────────────────────
// ─── FAQ ─────────────────────────────────────────
function FAQ() {
  const faqs = [
    {
      q: "Is LegalSuite HIPAA compliant?",
      a: "LegalSuite is built on AWS infrastructure with a signed Business Associate Agreement (BAA). We use AES-256 encryption at rest, TLS 1.3 in transit, role-based access controls, two-factor authentication, and full audit trails with 6-year retention — meeting all HIPAA technical safeguard requirements. All new law firms are required to sign a Business Associate Agreement (BAA) with LegalSuite before accessing the platform, ensuring full HIPAA compliance chain from our infrastructure to your practice.",
    },
    {
      q: "How does the AI medical chronology work?",
      a: "Upload your medical records as PDFs (up to 10,000+ pages). Our AI — powered by Claude Opus 4.6 by Anthropic, the most accurate model available for this work — performs three passes: extraction (identifies dates, providers, diagnoses, treatments), verification (cross-references for accuracy), and annotation (adds clinical context). You get a complete, organized chronology in minutes. Important: While our AI is highly accurate, it can make mistakes. All chronology output must be reviewed and verified by qualified personnel before inclusion in any court filings or legal documentation.",
    },
    {
      q: "How much does the AI chronology cost per page?",
      a: "Professional plan includes 500 pages/month with additional pages at just $0.18 each. Enterprise includes 2,000 pages/month at $0.15/page for overage. Starter plan users can add chronology at $0.20/page with no minimum. A typical 300-page case costs about $45-$60 with LegalSuite vs. $1,000-$2,000 for a paralegal to do it manually.",
    },
    {
      q: "Can I migrate from Clio, MyCase, or PracticePanther?",
      a: "Yes. We offer data migration assistance for firms switching from other platforms. Our team will help you import your cases, clients, and documents so you can hit the ground running. Contact us during your trial for migration support.",
    },
    {
      q: "Is there a free trial?",
      a: "Absolutely. Every plan starts with a free trial — no credit card required. You get full access to all features so you can see exactly how LegalSuite will transform your firm before committing.",
    },
    {
      q: "How many team members can I have?",
      a: "Starter plan supports up to 5 team members. Professional and Enterprise plans include unlimited team members. Each user gets their own login with role-based permissions (attorney, paralegal, admin, staff).",
    },
    {
      q: "What file types are supported for document uploads?",
      a: "LegalSuite supports PDF, DOC, DOCX, JPG, PNG, TIFF, and TXT files up to 50MB each. All files are encrypted at rest using AES-256 and stored on HIPAA-eligible AWS S3 infrastructure.",
    },
    {
      q: "Do you offer onboarding support?",
      a: "Yes. Every new firm gets a personalized onboarding session with our team. We'll walk you through the platform, help you set up your cases and workflows, and make sure your team is comfortable before you go live.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <Accordion.Root type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <Accordion.Item
              key={i}
              value={`faq-${i}`}
              className="bg-white rounded-xl border border-gray-border overflow-hidden"
            >
              <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-4 text-left text-sm font-semibold text-navy-dark hover:text-teal transition-colors group">
                {faq.q}
                <ChevronDown className="h-4 w-4 text-navy-dark/40 group-data-[state=open]:rotate-180 transition-transform shrink-0 ml-4" />
              </Accordion.Trigger>
              <Accordion.Content className="px-6 pb-4 text-sm text-navy-dark/60 leading-relaxed">
                {faq.a}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}

// ─── FINAL CTA ───────────────────────────────────
function FinalCTA() {
  return (
    <section className="py-20 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 grid-pattern" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
            Join forward-thinking firms that are replacing 5+ tools with one powerful
            platform. Start your free trial today — no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SIGNUP_URL}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-teal text-white font-bold rounded-xl text-lg hover:bg-teal-dark transition-all cta-glow shadow-lg shadow-teal/25"
            >
              Start Your Free Trial
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl text-lg border border-white/20 hover:bg-white/20 transition-all"
            >
              Schedule a Demo
            </a>
          </div>
          <p className="mt-4 text-sm text-white/50">
            Free trial &middot; No credit card &middot; Setup in 5 minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────
function Footer() {
  return (
    <footer className="py-12 bg-navy-dark text-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <LSLogo className="h-6 w-6 text-teal" />
            <span className="text-lg font-bold text-white">
              Legal<span className="text-teal">Suite</span>
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#chronology" className="hover:text-white transition-colors">
              AI Chronology
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} LegalSuiteApp. All rights reserved.
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/40">
          <span className="flex items-center gap-1.5">
            <Shield className="h-3.5 w-3.5" /> HIPAA-Ready Infrastructure
          </span>
          <span className="flex items-center gap-1.5">
            <Lock className="h-3.5 w-3.5" /> AES-256 Encryption
          </span>
          <span className="flex items-center gap-1.5">
            <Award className="h-3.5 w-3.5" /> Built on AWS
          </span>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <TrustBar />
      <ProblemStatement />
      <ChronologyShowcase />
      <PlatformFeatures />
      <BuiltForPI />
      <Pricing />

      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}

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
  Mail,
} from "lucide-react";

const SIGNUP_URL = "https://app.legalsuiteapp.com/signup";
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
              href="https://app.legalsuiteapp.com/login"
              className="px-5 py-2.5 text-navy-dark/70 font-semibold hover:text-teal transition-colors text-sm"
            >
              Log In
            </a>
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
              Start 14-Day Free Trial
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
              href="https://app.legalsuiteapp.com/login"
              className="block mx-3 text-center px-5 py-2.5 text-navy-dark/70 font-semibold text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Log In
            </a>
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
              Start 14-Day Free Trial
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
          HIPAA-compliant platform built for modern law firms.
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
            Start Your 14-Day Free Trial
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
            <span>HIPAA Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            <span>Bank-Level Encryption</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>14-Day Free Trial</span>
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
    { value: "100%", label: "HIPAA Compliant", icon: Shield },
    { value: "68%", label: "Less Admin Time", icon: Clock },
    { value: "$49", label: "Starting Price", icon: DollarSign },
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
      title: "Scattered Tools",
      desc: "Case management in one app, billing in another, documents in a third. Your team wastes hours switching between systems.",
      bg: "https://images.unsplash.com/photo-1703854599747-4355f123dd3f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Manual Chronologies",
      desc: "Paralegals spend 20-40 hours per medical chronology. At $50/hr, that\u2019s $1,000-$2,000 per case \u2014 before the attorney even looks at it.",
      bg: "https://images.unsplash.com/photo-1583521214690-73421a1829a9?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Expensive Software",
      desc: "Legacy legal software charges $100+ per user per month and still doesn\u2019t include chronology tools. You\u2019re paying more for less.",
      bg: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
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
              className="relative rounded-2xl overflow-hidden min-h-[240px] flex flex-col justify-end"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${p.bg})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
              <div className="relative z-10 p-6">
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{p.desc}</p>
              </div>
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
      desc: "Drag and drop PDFs \u2014 up to 10,000+ pages. Supports hospital records, imaging reports, physician notes, and more.",
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

        {/* Free Trial Chronology */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto p-5 rounded-xl bg-teal/10 border border-teal/20 text-center"
        >
          <p className="text-sm text-white/80 leading-relaxed">
            <span className="font-bold text-teal">Try It Free:</span>{" "}
            Every 14-day free trial includes one complimentary AI medical chronology
            for a case up to 300 pages — so you can experience the power of AI-assisted
            chronology firsthand. Need more? Simply choose a plan to continue.
          </p>
        </motion.div>

        {/* AI Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 max-w-3xl mx-auto p-5 rounded-xl bg-white/5 border border-white/10 text-center"
        >
          <p className="text-xs text-white/50 leading-relaxed">
            <span className="font-semibold text-white/70">Important AI Disclaimer:</span>{" "}
            LegalSuite&apos;s AI medical chronology is powered by advanced AI technology.
            While highly capable, AI can produce inaccurate, incomplete, or incorrect
            information. All AI-generated chronology output, summaries, and analysis must
            be thoroughly reviewed and independently verified by qualified legal and medical
            professionals before being relied upon, included in any documentation submitted
            to courts, or used in legal proceedings. LegalSuite is a productivity tool
            designed to assist legal professionals — it is not a substitute for professional
            medical judgment, legal advice, or human review. Users are solely responsible
            for verifying the accuracy of all AI-generated content.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── PLATFORM FEATURES ───────────────────────────
function PlatformFeatures() {
  const features = [
    {
      icon: Briefcase,
      title: "Case Management",
      desc: "Track every case from intake to settlement. Milestones, status updates, and automatic workflows keep your team aligned.",
      bg: "https://images.unsplash.com/photo-1767972463877-b64ba4283cd0?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Users,
      title: "Client & Contact CRM",
      desc: "Complete client profiles with case history, documents, and communication log. Client portal gives clients 24/7 visibility.",
      bg: "https://images.unsplash.com/photo-1758518730384-be3d205838e8?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Receipt,
      title: "Billing & Invoicing",
      desc: "Time tracking, invoice generation, PDF exports, and payment processing. Three-tier pricing with Stripe integration.",
      bg: "https://images.unsplash.com/photo-1611125832047-1d7ad1e8e48f?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: FileText,
      title: "Document Management",
      desc: "Upload, organize, and share documents securely. Support for PDF, DOC, images, and more \u2014 all encrypted at rest.",
      bg: "https://images.unsplash.com/photo-1768158989131-64cbff67f292?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Calendar,
      title: "Calendar & Scheduling",
      desc: "Firm-wide calendar with case-linked events. Create, edit, and coordinate deadlines across your entire team.",
      bg: "https://images.unsplash.com/photo-1770299373695-dc86ce6966f0?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: MessageSquare,
      title: "Real-Time Messaging",
      desc: "Built-in WebSocket messaging between team members. No more switching to Slack or email for internal communication.",
      bg: "https://images.unsplash.com/photo-1725798451557-fc60db3eb6a2?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Clock,
      title: "Time Tracking",
      desc: "Track billable hours by case and activity. One-click timers and manual entry with automatic invoice linking.",
      bg: "https://images.unsplash.com/photo-1711399339353-f79e536828f6?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      desc: "Real-time metrics on cases, revenue, billing, and team productivity. Know exactly how your firm is performing.",
      bg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Search,
      title: "Global Search",
      desc: "Find any case, client, document, or invoice instantly with full-text search across your entire firm\u2019s data.",
      bg: "https://images.unsplash.com/photo-1632096936824-565d39f8e5eb?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Users,
      title: "Team Management",
      desc: "Invite team members, assign roles, manage permissions. Attorneys, paralegals, and staff \u2014 everyone in one place.",
      bg: "https://images.unsplash.com/photo-1739298061740-5ed03045b280?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Bell,
      title: "Notifications",
      desc: "Email and in-app notifications for case updates, deadlines, messages, and billing events. Never miss a beat.",
      bg: "https://images.unsplash.com/photo-1609162554108-6490759499ef?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Shield,
      title: "Security & HIPAA",
      desc: "AES-256 encryption, TLS 1.3, role-based access control, 2FA, audit trails, and AWS infrastructure with BAA.",
      bg: "https://images.unsplash.com/photo-1767972464040-8bfee42d7bed?auto=format&fit=crop&w=800&q=80",
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
              {/* Photo header */}
              <div className="relative h-36 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${f.bg})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
                {/* Title overlay on photo */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-base font-bold text-white drop-shadow-lg">{f.title}</h3>
                </div>
              </div>
              {/* Text content */}
              <div className="p-5 pt-3">
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
      title: "Medical Chronology Integration",
      desc: "The only platform where your AI chronologies live right next to case files, client records, and billing \u2014 no exports needed.",
      bg: "https://images.unsplash.com/photo-1758691462814-485c3672e447?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Built by Legal Nurse Consultants",
      desc: "Designed by professionals who understand personal injury workflows, medical terminology, and what matters at trial.",
      bg: "https://images.unsplash.com/photo-1562673462-877b3612cbea?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Competitive Edge",
      desc: "Competitors charge $150 to $300+ per hour for medical chronology services. LegalSuite gives you AI-powered chronologies for pennies per page \u2014 saving your firm thousands on every case.",
      bg: "https://images.unsplash.com/photo-1759701546980-1211be084c70?auto=format&fit=crop&w=800&q=80",
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
              className="relative rounded-2xl overflow-hidden min-h-[280px] flex flex-col justify-end group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${b.bg})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/50 to-navy-dark/10" />
              <div className="relative z-10 p-6 text-center">
                <h3 className="text-lg font-bold text-white mb-3">{b.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PRICING ─────────────────────────────────────
function Pricing() {
  const platformPlans = [
    {
      name: "Foundation",
      price: 49,
      unit: "per user/month",
      desc: "Everything a small firm needs to get organized.",
      features: [
        "Up to 5 users",
        "Case & client management",
        "Document storage (20 GB)",
        "Time tracking & billing",
        "Client portal",
        "Calendar & messaging",
      ],
      popular: false,
    },
    {
      name: "Advantage",
      price: 99,
      unit: "per user/month",
      desc: "For growing firms that need more power and storage.",
      features: [
        "Unlimited users",
        "Up to 75 active cases",
        "Document storage (50 GB)",
        "E-signature & PDF forms",
        "Advanced reporting",
        "Priority email support",
      ],
      popular: true,
    },
    {
      name: "Command",
      price: 199,
      unit: "per user/month",
      desc: "Full platform for firms that want it all.",
      features: [
        "Unlimited users & cases",
        "Unlimited storage",
        "AI Medical Chronology included",
        "Custom workflows & playbooks",
        "API access & integrations",
        "Dedicated account manager",
      ],
      popular: false,
    },
  ];

  const aiPlans = [
    {
      tier: "Starter",
      monthly: 297,
      setup: 597,
      desc: "One core AI tool configured for your firm.",
      features: [
        "Pick one: Chatbot, Voice, or Reviews",
        "Configured for your practice area",
        "Connected to calendar and CRM",
        "Monthly performance check-in",
      ],
      popular: false,
    },
    {
      tier: "Growth",
      monthly: 497,
      setup: 797,
      desc: "Three AI tools working together as one system.",
      features: [
        "AI Chatbot on your website",
        "AI Voice Assistant for every call",
        "Automated Reputation Management",
        "All tools connected to one CRM",
        "Booking and follow-up automation",
      ],
      popular: true,
    },
    {
      tier: "Peak Performance",
      monthly: 797,
      setup: 997,
      desc: "Full AI infrastructure. Website, tools, and automation.",
      features: [
        "Professional website built and hosted",
        "AI Chatbot + Voice + Reviews",
        "Full CRM with pipeline management",
        "No-show prevention",
        "Reactivation campaigns",
        "Missed call text-back",
      ],
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
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
            Simple, Transparent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-emerald">
              Pricing
            </span>
          </h2>
          <p className="mt-4 text-lg text-navy-dark/60 max-w-xl mx-auto">
            No hidden fees. No long-term contracts. Start with the platform, add AI when you are ready.
          </p>
        </motion.div>

        {/* ── Platform Plans ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-xl bg-navy-dark flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy-dark">LegalSuite Platform</h3>
              <p className="text-sm text-navy-dark/50">Per-user pricing for your entire firm</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {platformPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white rounded-2xl border p-8 flex flex-col ${
                plan.popular
                  ? "border-teal shadow-xl shadow-teal/10 ring-1 ring-teal/20"
                  : "border-gray-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-teal text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-navy-dark">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-5xl font-extrabold text-navy-dark">${plan.price}</span>
                <span className="text-navy-dark/60 text-sm ml-1">{plan.unit}</span>
              </div>
              <p className="text-sm text-navy-dark/70 mt-4 mb-6">{plan.desc}</p>

              <div className="border-t border-gray-border pt-5 mb-6">
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-navy-dark/70">
                      <CheckCircle2 className="h-4 w-4 text-teal mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <a
                  href={SIGNUP_URL}
                  className={`block text-center w-full py-3.5 rounded-xl font-bold text-sm transition-all ${
                    plan.popular
                      ? "bg-teal text-white hover:bg-teal-dark cta-glow"
                      : "bg-white text-navy-dark border border-gray-border hover:bg-navy-dark/5"
                  }`}
                >
                  Start Free Trial {plan.popular ? "\u2192" : ""}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-navy-dark/50 max-w-2xl mx-auto"
        >
          All platform plans include a 14-day free trial. No credit card required. HIPAA-compliant infrastructure included.
        </motion.p>

        {/* ── AI Solutions Add-Ons ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 mb-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-teal to-emerald flex items-center justify-center">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy-dark">AI Solutions Add-Ons</h3>
              <p className="text-sm text-navy-dark/50">Supercharge your firm with AI-powered client tools</p>
            </div>
          </div>
          <p className="text-sm text-navy-dark/60 max-w-2xl mt-3">
            Add AI-powered client acquisition and communication tools to your LegalSuite platform.
            These services work alongside your existing plan to bring in more clients and automate follow-ups.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-start mt-8">
          {aiPlans.map((plan, i) => (
            <motion.div
              key={plan.tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white rounded-2xl border p-8 flex flex-col ${
                plan.popular
                  ? "border-teal shadow-xl shadow-teal/10 ring-1 ring-teal/20"
                  : "border-gray-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal to-emerald text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                  Best Value
                </div>
              )}
              <p className="text-xs font-bold uppercase tracking-widest text-teal">{plan.tier}</p>
              <div className="mt-4">
                <span className="text-5xl font-extrabold text-navy-dark">${plan.monthly}</span>
                <span className="text-navy-dark/60 text-sm ml-1">/month</span>
              </div>
              <p className="text-sm text-navy-dark/50 mt-1">${plan.setup} one-time setup</p>
              <p className="text-sm text-navy-dark/70 mt-4 mb-6">{plan.desc}</p>

              <div className="border-t border-gray-border pt-5 mb-6">
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-navy-dark/70">
                      <CheckCircle2 className="h-4 w-4 text-teal mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center w-full py-3.5 rounded-xl font-bold text-sm transition-all ${
                    plan.popular
                      ? "bg-teal text-white hover:bg-teal-dark cta-glow"
                      : "bg-white text-navy-dark border border-gray-border hover:bg-navy-dark/5"
                  }`}
                >
                  Book a Demo {plan.popular ? "\u2192" : ""}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-navy-dark/50 max-w-3xl mx-auto leading-relaxed"
        >
          AI Solutions are add-ons to any LegalSuite plan. Voice calls billed at $0.12/min.
          Chatbot messages billed at $0.01/msg. Month-to-month, cancel anytime.
        </motion.p>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────
function FAQ() {
  const faqs = [
    {
      q: "Is LegalSuite HIPAA compliant?",
      a: "LegalSuite is built on AWS infrastructure with a signed Business Associate Agreement (BAA). We use AES-256 encryption at rest, TLS 1.3 in transit, role-based access controls, two-factor authentication, and full audit trails with 6-year retention \u2014 meeting all HIPAA technical safeguard requirements. All new law firms are required to sign a Business Associate Agreement (BAA) with LegalSuite before accessing the platform, ensuring full HIPAA compliance chain from our infrastructure to your practice.",
    },
    {
      q: "How does the AI medical chronology work?",
      a: "Upload your medical records as PDFs (up to 10,000+ pages). Our AI \u2014 powered by Claude Opus 4.6 by Anthropic, the most accurate model available for this work \u2014 performs three passes: extraction (identifies dates, providers, diagnoses, treatments), verification (cross-references for accuracy), and annotation (adds clinical context). You get a complete, organized chronology in minutes. Important: While our AI is highly accurate, it can make mistakes. All chronology output must be reviewed and verified by qualified personnel before inclusion in any court filings or legal documentation.",
    },
    {
      q: "How much does the AI chronology cost per page?",
      a: "AI medical chronology is available as an add-on across all plans at $0.15\u2013$0.20 per page depending on your tier. A typical 300-page case costs about $45\u2013$60 with LegalSuite vs. $1,000\u2013$2,000 for a paralegal to do it manually.",
    },
    {
      q: "Can I migrate from Clio, MyCase, or PracticePanther?",
      a: "Yes. We offer data migration assistance for firms switching from other platforms. Our team will help you import your cases, clients, and documents so you can hit the ground running. Contact us during your trial for migration support.",
    },
    {
      q: "Is there a free trial?",
      a: "Absolutely. Every plan starts with a 14-day free trial \u2014 no credit card required. You get full access to all features, plus one complimentary AI medical chronology for a case up to 300 pages. To continue using the chronology feature beyond the trial or for cases over 300 pages, simply choose a plan. It\u2019s a risk-free way to see exactly how LegalSuite will transform your firm.",
    },
    {
      q: "How many team members can I have?",
      a: "All plans include your full team. Each user gets their own login with role-based permissions (attorney, paralegal, admin, staff). No per-seat charges.",
    },
    {
      q: "What file types are supported for document uploads?",
      a: "LegalSuite supports PDF, DOC, DOCX, JPG, PNG, TIFF, and TXT files up to 50MB each. All files are encrypted at rest using AES-256 and stored on HIPAA-eligible AWS S3 infrastructure.",
    },
    {
      q: "Do you offer onboarding support?",
      a: "Yes. Every new firm gets a personalized onboarding session with our team. We\u2019ll walk you through the platform, help you set up your cases and workflows, and make sure your team is comfortable before you go live.",
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

// ─── CONTACT US ──────────────────────────────────
function ContactUs() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            We&apos;d love to hear from you. Reach out directly or schedule a meeting at a time that works for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:admin@legalsuiteapp.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 rounded-lg text-slate-700 font-medium hover:border-teal-500 hover:text-teal-700 transition-colors"
            >
              <Mail className="h-5 w-5" />
              Contact Us
            </a>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 rounded-lg text-white font-medium hover:bg-teal-700 transition-colors"
            >
              <Calendar className="h-5 w-5" />
              Schedule a Meeting
            </a>
          </div>
        </motion.div>
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
            platform. Start your 14-day free trial today — no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SIGNUP_URL}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-teal text-white font-bold rounded-xl text-lg hover:bg-teal-dark transition-all cta-glow shadow-lg shadow-teal/25"
            >
              Start Your 14-Day Free Trial
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
            14-day free trial &middot; No credit card &middot; Includes 1 free chronology (up to 300 pages)
          </p>
          <p className="mt-3 text-sm text-white/40">
            Already have an account?{" "}
            <a href="https://app.legalsuiteapp.com/login" className="text-white/70 hover:text-white underline transition-colors">
              Log In
            </a>
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

        {/* Legal links */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm">
          <a
            href="https://app.legalsuiteapp.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="https://app.legalsuiteapp.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/40">
          <span className="flex items-center gap-1.5">
            <Shield className="h-3.5 w-3.5" /> HIPAA Compliant Infrastructure
          </span>
          <span className="flex items-center gap-1.5">
            <Lock className="h-3.5 w-3.5" /> AES-256 Encryption
          </span>
          <span className="flex items-center gap-1.5">
            <Award className="h-3.5 w-3.5" /> Built on AWS
          </span>
        </div>

        {/* AI Disclaimer in footer */}
        <div className="mt-6 pt-4 border-t border-white/10 max-w-3xl mx-auto text-center">
          <p className="text-[11px] text-white/30 leading-relaxed">
            <span className="font-semibold text-white/40">AI Disclaimer:</span>{" "}
            LegalSuite uses artificial intelligence to assist with medical chronology
            generation and other features. AI-generated content may contain errors,
            inaccuracies, or omissions. All AI output must be independently reviewed
            and verified by qualified professionals before use in any legal proceedings,
            court filings, or client communications. LegalSuite does not provide legal
            or medical advice. Users are solely responsible for verifying the accuracy
            of all content produced by the platform.
          </p>
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
      <ContactUs />
      <FinalCTA />
      <Footer />
    </>
  );
}

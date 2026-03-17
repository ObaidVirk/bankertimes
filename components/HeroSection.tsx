'use client';

import Image from 'next/image';
import Link from 'next/link';
import { featuredArticles } from '@/lib/mockData';
import { useTranslation } from '@/context/TranslationContext';

export default function HeroSection() {
  const { t } = useTranslation();
  const primary = featuredArticles[0];
  const secondary = featuredArticles.slice(1, 3);
  const tertiary = featuredArticles.slice(3, 6);

  return (
    <section className="bg-white border-b border-gray-200">
      {/* Breaking news ticker */}
      <div className="breaking-bar overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex items-center h-9">
          <span className="text-white text-xs font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 mr-4 flex-shrink-0">
            {t('hero.breaking')}
          </span>
          <div className="overflow-hidden flex-1">
            <div className="ticker-animate whitespace-nowrap text-white text-xs font-medium">
              Fed signals cautious rate path for H2 2026 &nbsp;•&nbsp;
              HSBC Q1 profit surges 22% on Asia-Pacific wealth management growth &nbsp;•&nbsp;
              ECB confirms digital euro pilot timeline for 2027 &nbsp;•&nbsp;
              Basel IV final rules now in effect — banks given 18-month window &nbsp;•&nbsp;
              ESG bond issuance reaches $2.3 trillion milestone &nbsp;•&nbsp;
              JPMorgan expands private banking in Latin America &nbsp;•&nbsp;
              African Development Bank raises record $5bn infrastructure bond
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Hero grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Primary featured article */}
          <div className="lg:col-span-2">
            <Link href="/news" className="group block relative overflow-hidden rounded-sm h-[420px]">
              <Image
                src={primary.image}
                alt={primary.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="hero-gradient absolute inset-0" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="category-tag mb-3 self-start">{primary.tag}</span>
                <h1 className="text-white text-2xl md:text-3xl font-bold leading-tight mb-3 group-hover:text-banker-gold transition-colors">
                  {primary.title}
                </h1>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-2 mb-4">
                  {primary.excerpt}
                </p>
                <div className="flex items-center gap-3 text-gray-400 text-xs">
                  <span className="font-medium text-gray-300">{primary.author}</span>
                  <span>•</span>
                  <span>{primary.date}</span>
                  <span>•</span>
                  <span>{primary.readTime}</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Secondary articles */}
          <div className="flex flex-col gap-4">
            {secondary.map((article) => (
              <Link key={article.id} href="/news" className="group flex gap-4 p-0 rounded-sm overflow-hidden border border-gray-100 hover:shadow-card-hover transition-shadow">
                <div className="relative w-28 h-24 flex-shrink-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-3 flex-1">
                  {article.tag && (
                    <span className="text-banker-red text-xs font-bold uppercase tracking-wider mb-1">
                      {article.tag}
                    </span>
                  )}
                  <h3 className="text-banker-navy text-sm font-bold leading-tight line-clamp-2 group-hover:text-banker-red transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 text-gray-500 text-xs">
                    <span>{article.author}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}

            {/* Ad / Promo box */}
            <div className="mt-auto bg-banker-navy-light rounded-sm p-4 text-center border border-white/5">
              <p className="text-banker-gold text-xs font-bold uppercase tracking-wide mb-1">Digital Edition</p>
              <p className="text-white font-semibold text-sm">Read the latest issue of Bankertimes online</p>
              <button className="mt-3 px-4 py-1.5 bg-banker-red text-white text-xs font-bold rounded-sm hover:bg-banker-red-dark transition-colors">
                View Now
              </button>
            </div>
          </div>
        </div>

        {/* Tertiary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-gray-100">
          {tertiary.map((article) => (
            <Link key={article.id} href="/news" className="group article-card">
              <div className="relative h-44 overflow-hidden rounded-sm">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  {article.tag && (
                    <span className="category-tag text-xs">{article.tag}</span>
                  )}
                </div>
              </div>
              <div className="pt-3">
                <h3 className="text-banker-navy text-sm font-bold leading-snug line-clamp-2 group-hover:text-banker-red transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-gray-500 text-xs">
                  <span>{article.author}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

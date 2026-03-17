import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/lib/mockData';

type Props = {
  article: Article;
};

export default function InsightCard({ article }: Props) {
  return (
    <Link href="/insights" className="group article-card block bg-white border border-gray-200 rounded-sm overflow-hidden hover:border-banker-red transition-colors">
      <div className="relative h-44 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 card-gradient opacity-60" />
        {article.tag && (
          <div className="absolute top-3 left-3">
            <span className="bg-banker-gold text-banker-navy text-xs font-bold uppercase tracking-wider px-2 py-0.5">
              {article.tag}
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-banker-navy font-bold text-sm leading-snug line-clamp-2 mb-2 group-hover:text-banker-red transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className="font-medium text-gray-600">{article.author}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <span className="text-xs font-bold text-banker-red group-hover:underline">
            Read →
          </span>
        </div>
      </div>
    </Link>
  );
}

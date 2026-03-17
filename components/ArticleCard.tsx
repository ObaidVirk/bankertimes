import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/lib/mockData';

type Props = {
  article: Article;
  variant?: 'default' | 'horizontal' | 'compact';
};

export default function ArticleCard({ article, variant = 'default' }: Props) {
  if (variant === 'horizontal') {
    return (
      <Link href="/news" className="group flex gap-4 border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
        <div className="relative w-24 h-20 flex-shrink-0 overflow-hidden rounded-sm">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center flex-1 min-w-0">
          {article.tag && (
            <span className="text-xs font-bold text-banker-red uppercase tracking-wider mb-1">
              {article.tag}
            </span>
          )}
          <h4 className="text-sm font-bold text-banker-navy leading-snug line-clamp-2 group-hover:text-banker-red transition-colors">
            {article.title}
          </h4>
          <div className="flex items-center gap-2 mt-1.5 text-xs text-gray-400">
            <span>{article.author}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link href="/news" className="group block border-b border-gray-100 py-3 last:border-b-0">
        {article.tag && (
          <span className="text-xs font-bold text-banker-red uppercase tracking-wider">
            {article.tag}
          </span>
        )}
        <h4 className="text-sm font-semibold text-gray-800 leading-snug mt-0.5 group-hover:text-banker-red transition-colors line-clamp-2">
          {article.title}
        </h4>
        <span className="text-xs text-gray-400 mt-1 block">{article.date}</span>
      </Link>
    );
  }

  return (
    <Link href="/news" className="group article-card block">
      <div className="relative h-48 overflow-hidden rounded-sm">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {article.tag && (
          <div className="absolute top-3 left-3">
            <span className="category-tag text-xs">{article.tag}</span>
          </div>
        )}
      </div>
      <div className="pt-3">
        <span className="text-xs font-semibold text-banker-gray uppercase tracking-wider">
          {article.category}
        </span>
        <h3 className="mt-1 text-banker-navy font-bold text-base leading-snug line-clamp-2 group-hover:text-banker-red transition-colors">
          {article.title}
        </h3>
        <p className="mt-1.5 text-sm text-gray-500 leading-relaxed line-clamp-2">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
          <span className="font-medium text-gray-600">{article.author}</span>
          <span>•</span>
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
      </div>
    </Link>
  );
}

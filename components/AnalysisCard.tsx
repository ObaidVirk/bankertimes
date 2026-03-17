import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/lib/mockData';

type Props = {
  article: Article;
  index?: number;
};

export default function AnalysisCard({ article, index = 0 }: Props) {
  const isLarge = index === 0;

  if (isLarge) {
    return (
      <Link href="/analysis" className="group article-card block col-span-2">
        <div className="flex gap-5 border border-gray-200 rounded-sm overflow-hidden hover:border-banker-navy transition-colors">
          <div className="relative w-56 flex-shrink-0">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-4 flex flex-col justify-center">
            <span className="text-xs font-bold text-banker-red uppercase tracking-wider mb-2">
              {article.tag}
            </span>
            <h3 className="text-banker-navy font-bold text-lg leading-snug mb-2 group-hover:text-banker-red transition-colors line-clamp-2">
              {article.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-3">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span className="font-semibold text-gray-600">{article.author}</span>
              <span>•</span>
              <span>{article.date}</span>
              <span>•</span>
              <span className="text-banker-red font-medium">{article.readTime}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href="/analysis" className="group article-card block">
      <div className="flex gap-4 border-b border-gray-100 pb-4 last:border-b-0">
        <div className="relative w-20 h-16 flex-shrink-0 overflow-hidden rounded-sm">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-xs font-bold text-banker-red uppercase tracking-wider">
            {article.tag}
          </span>
          <h4 className="text-sm font-bold text-banker-navy leading-snug line-clamp-2 mt-0.5 group-hover:text-banker-red transition-colors">
            {article.title}
          </h4>
          <span className="text-xs text-gray-400 mt-1 block">{article.readTime}</span>
        </div>
      </div>
    </Link>
  );
}

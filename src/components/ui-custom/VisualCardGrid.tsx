interface VisualCard {
  icon: string;
  title: string;
  tags: string[];
  description: string;
}

interface VisualCardGridProps {
  cards: VisualCard[];
  title?: string;
}

export function VisualCardGrid({ cards, title }: VisualCardGridProps) {
  return (
    <div className="mb-16">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          {title}
        </h2>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group relative p-6 rounded-2xl bg-[rgba(15,23,42,0.6)] backdrop-blur-sm border border-[rgba(212,175,55,0.15)] hover:border-[rgba(212,175,55,0.4)] transition-all hover:-translate-y-1"
          >
            {/* 大图标 */}
            <div className="text-5xl mb-4">{card.icon}</div>
            
            {/* 标题 */}
            <h3 className="text-white font-bold text-xl mb-3">
              {card.title}
            </h3>
            
            {/* 关键词标签 */}
            <div className="flex flex-wrap gap-2 mb-3">
              {card.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-[rgba(212,175,55,0.15)] text-[#d4af37] border border-[rgba(212,175,55,0.3)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* 一句话描述 */}
            <p className="text-[#94a3b8] text-sm leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

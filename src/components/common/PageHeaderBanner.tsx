import React from 'react';

interface PageHeaderBannerProps {
  icon: React.FC<{ className?: string }>;
  title: string;
  subtitle?: string;
  badgeText?: string;
  rightAction?: React.ReactNode;
}

export const PageHeaderBanner: React.FC<PageHeaderBannerProps> = ({
  icon: Icon,
  title,
  subtitle,
  badgeText,
  rightAction
}) => {
  return (
    <div className="bg-blue-600 rounded-xl p-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md w-full">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm border border-white/30 shrink-0">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold font-display tracking-tight">{title}</h2>
          {subtitle && <p className="text-xs text-blue-100 mt-1">{subtitle}</p>}
        </div>
      </div>
      <div className="flex items-center gap-3">
        {badgeText && (
          <span className="px-3 py-1 bg-white/20 text-white text-xs font-bold font-mono rounded-full border border-white/30">
            {badgeText}
          </span>
        )}
        {rightAction}
      </div>
    </div>
  );
};

import React from "react";

interface PageContentProps {
  content: string;
}

export function PageContent({ content }: PageContentProps) {
  return (
    <div 
      className="prose prose-slate dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
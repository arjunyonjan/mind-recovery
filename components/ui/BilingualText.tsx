'use client';

interface BilingualTextProps {
  english: string;
  nepali: string;
  showNepali?: boolean;
  className?: string;
}

export default function BilingualText({ 
  english, 
  nepali, 
  showNepali = false,
  className = '' 
}: BilingualTextProps) {
  return (
    <span className={className}>
      {showNepali ? (
        <span className="nepali-text">{nepali}</span>
      ) : (
        <span>{english}</span>
      )}
    </span>
  );
}

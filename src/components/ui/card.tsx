import { cn } from '@/lib/cn';

interface CardSubProps {
  children: React.ReactNode;
  className?: string;
}

function CardHeader({ children, className }: CardSubProps) {
  return (
    <div className={cn('px-5 sm:px-6 pt-5 sm:pt-6 pb-0', className)}>
      {children}
    </div>
  );
}

function CardBody({ children, className }: CardSubProps) {
  return (
    <div className={cn('px-5 sm:px-6 py-5 sm:py-6', className)}>
      {children}
    </div>
  );
}

function CardFooter({ children, className }: CardSubProps) {
  return (
    <div
      className={cn(
        'px-5 sm:px-6 pb-5 sm:pb-6 pt-0',
        'border-t border-[var(--color-border)]',
        className,
      )}
    >
      {children}
    </div>
  );
}

interface CardProps {
  children: React.ReactNode;
  elevated?: boolean;
  className?: string;
}

export function Card({ children, elevated, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-[var(--radius-2xl)] border overflow-hidden',
        elevated
          ? 'bg-[var(--color-card)] shadow-lg'
          : 'bg-[var(--color-card)]',
        className,
      )}
    >
      {children}
    </div>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

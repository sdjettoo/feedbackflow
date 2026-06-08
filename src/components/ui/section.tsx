import { cn } from '@/lib/cn';

type SectionSpacing = 'sm' | 'md' | 'lg' | 'xl';
type SectionBackground = 'default' | 'muted' | 'primary';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  spacing?: SectionSpacing;
  background?: SectionBackground;
  className?: string;
}

const spacings: Record<SectionSpacing, string> = {
  sm: 'py-10 sm:py-14',
  md: 'py-14 sm:py-20',
  lg: 'py-16 sm:py-24',
  xl: 'py-20 sm:py-28',
};

const backgrounds: Record<SectionBackground, string> = {
  default: 'bg-[var(--color-background)]',
  muted: 'bg-[var(--color-card)]',
  primary: 'bg-[var(--color-primary)]',
};

export function Section({
  children,
  spacing = 'lg',
  background = 'default',
  className,
  ...rest
}: SectionProps) {
  return (
    <section
      className={cn(spacings[spacing], backgrounds[background], className)}
      {...rest}
    >
      {children}
    </section>
  );
}

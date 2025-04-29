import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function H1({ children, className }: TypographyProps) {
  return (
    <h1 className={cn("font-raleway text-4xl sm:text-5xl md:text-6xl font-bold", className)}>
      {children}
    </h1>
  );
}

export function H2({ children, className }: TypographyProps) {
  return (
    <h2 className={cn("font-raleway text-3xl sm:text-4xl md:text-5xl font-bold", className)}>
      {children}
    </h2>
  );
}

export function H3({ children, className }: TypographyProps) {
  return (
    <h3 className={cn("font-raleway text-2xl sm:text-3xl md:text-4xl font-semibold", className)}>
      {children}
    </h3>
  );
}

export function H4({ children, className }: TypographyProps) {
  return (
    <h4 className={cn("font-raleway text-xl sm:text-2xl md:text-3xl font-semibold", className)}>
      {children}
    </h4>
  );
}

export function H5({ children, className }: TypographyProps) {
  return (
    <h5 className={cn("font-montserrat text-lg sm:text-xl md:text-2xl font-medium", className)}>
      {children}
    </h5>
  );
}

export function H6({ children, className }: TypographyProps) {
  return (
    <h6 className={cn("font-montserrat text-base sm:text-lg md:text-xl font-medium", className)}>
      {children}
    </h6>
  );
}

export function P({ children, className }: TypographyProps) {
  return (
    <p className={cn("font-montserrat text-base sm:text-lg leading-relaxed", className)}>
      {children}
    </p>
  );
}

export function SmallText({ children, className }: TypographyProps) {
  return (
    <p className={cn("font-montserrat text-sm sm:text-base leading-relaxed", className)}>
      {children}
    </p>
  );
}
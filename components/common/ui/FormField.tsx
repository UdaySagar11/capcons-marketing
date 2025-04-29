import * as React from 'react';
import { Label } from './Label';
import { cn } from '@/lib/utils';

interface FormFieldProps {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
  required?: boolean;
  htmlFor?: string;
}

export function FormField({
  label,
  error,
  className,
  children,
  required,
  htmlFor,
}: FormFieldProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <Label
        htmlFor={htmlFor}
        className={cn(
          'block text-sm font-medium text-gray-700',
          error && 'text-red-500'
        )}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      {children}
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
} 
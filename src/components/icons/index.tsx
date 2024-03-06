import { cn } from '@/lib/utils';
import { LucideProps } from 'lucide-react';

export const Icons = {
  logo: (props: React.HTMLProps<HTMLSpanElement>) => (
    <span className={cn('font-semibold', props.className)}>
      Code<span className="font-bold text-primary">Chieve</span>
    </span>
  ),
};

import { cn } from "@/lib/utils";

interface MenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  classname?: string;
  children: React.ReactNode;
}

export const MenuContent = (
  { children, className }: MenuContentProps
) => {
  return (
    <div className={cn('flex flex-col gap-4',
      className)}>
      {children}
    </div>
  )
}

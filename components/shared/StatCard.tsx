import { cn } from "@/lib/utils";

type StatCardProps = {
  value: string;
  label: string;
  className?: string;
};

export default function StatCard({
  value,
  label,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/60 bg-white/80 p-4 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
    >
      <div className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
        {value}
      </div>

      <div className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
        {label}
      </div>
    </div>
  );
}
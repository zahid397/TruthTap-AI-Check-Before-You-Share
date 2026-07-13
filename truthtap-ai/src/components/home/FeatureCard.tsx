import Card from "@/components/ui/Card";

interface FeatureCardProps {
  emoji: string;
  title: string;
  description: string;
  chipClassName?: string;
}

export default function FeatureCard({
  emoji,
  title,
  description,
  chipClassName = "bg-primary-50",
}: FeatureCardProps) {
  return (
    <Card hover className="text-center">
      <div
        className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${chipClassName}`}
      >
        <span aria-hidden="true">{emoji}</span>
      </div>
      <h3 className="mt-4 text-base font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
    </Card>
  );
}

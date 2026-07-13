import { CheckCircleIcon } from "@/components/ui/Icons";

interface ActionGuideProps {
  actions: string[];
}

export default function ActionGuide({ actions }: ActionGuideProps) {
  return (
    <ul className="space-y-2.5">
      {actions.map((action, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span className="text-sm text-slate-700">{action}</span>
        </li>
      ))}
    </ul>
  );
}

type PatientDetailItemProps = {
  label: string;
  data: string;
};

export default function PatientDetailItem({
  label,
  data,
}: PatientDetailItemProps) {
  return (
    <div className="flex py-3">
      <span className="w-28 shrink-0 text-xs font-semibold uppercase tracking-wider text-gray-400">
        {label}
      </span>
      <span className="text-sm font-medium text-gray-700">{data}</span>
    </div>
  );
}

type FooterSectionProps = {
  title: string;
  items: string[];
};

export const FooterSection = ({ title, items }: FooterSectionProps) => {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-(--highlight)">
        {title}
      </h3>

      <ul className="mt-4 space-y-2 text-sm text-emerald-100">
        {items?.map((item) => (
          <li
            key={item}
            className="hover:text-(--highlight) cursor-pointer transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

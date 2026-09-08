import { SKILLS } from "@/data/site";

export default function SkillList() {
  return (
    <div className="space-y-5">
      {SKILLS.map(({ group, items }) => (
        <div key={group}>
          <h3 className="text-sm font-medium text-muted">{group}</h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            {items.map((item) => (
              <li
                key={item}
                className="rounded-md border border-line px-2.5 py-1 text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

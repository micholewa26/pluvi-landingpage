import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { team, type RoleType } from "../data/content";

// Keyed by roleType (not the display string) so rewording a role label in
// content.ts can never silently change which badge style it gets.
const roleStyles: Record<RoleType, string> = {
  founder: "border-primary/60 bg-primary/15 text-primary",
  engineer: "border-border bg-muted/50 text-foreground",
  advisor: "border-primary/30 bg-transparent text-muted-foreground",
};

export default function Team() {
  return (
    <section id="team" className="py-24">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow={team.eyebrow} title={team.heading} subtitle={team.subheading} />
        </Reveal>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.members.map((member, i) => (
            <Reveal key={member.name} delay={(i % 3) * 0.1}>
              <div className="card-glow group h-full p-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="h-32 w-32 overflow-hidden rounded-full border-2 border-primary/30 transition-colors duration-300 group-hover:border-primary">
                    <img
                      src={member.image}
                      alt={member.name}
                      width={256}
                      height={256}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{member.name}</h3>
                    <span
                      className={`mt-2 inline-block rounded-full border px-3 py-0.5 text-xs font-medium ${roleStyles[member.roleType]}`}
                    >
                      {member.role}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {member.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

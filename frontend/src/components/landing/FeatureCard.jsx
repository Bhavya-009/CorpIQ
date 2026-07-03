export default function FeatureCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div
      className="
      group
      rounded-2xl
      border
      bg-card
      p-6
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-xl
      ease-out
      hover:border-primary/40"
    >
      <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon size={24} />
      </div>

      <h3 className="mb-3 text-xl font-semibold">
        {title}
      </h3>

      <p className="leading-7 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
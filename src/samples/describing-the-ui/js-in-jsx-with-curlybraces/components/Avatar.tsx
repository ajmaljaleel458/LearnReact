function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

export default function Avatar({
  name,
  img_url,
  img_alt,
}: {
  name: string;
  img_url: string;
  img_alt: string;
}) {
  return (
    <div>
      <h1>This is {name}</h1>
      <img className="avatar" src={img_url} alt={img_alt} />
      <p>Today is {formatDate(new Date())}.</p>
    </div>
  );
}

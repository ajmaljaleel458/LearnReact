import "./Panel.css";

type Props = {
  title: string;
  children: any;
  isActive: boolean;
  onShow: () => void;
};

export default function Panel({ title, children, isActive, onShow }: Props) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
}

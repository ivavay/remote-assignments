import Card from "./Card";
import Button from "./Button";
export default function Section() {
  return (
    <section>
      <h2>Section Title</h2>
      <div className="row">
        <Card number="1" />
        <Card number="2" />
        <Card number="3" />
        <Card number="4" />
      </div>
      <Button />
    </section>
  );
}

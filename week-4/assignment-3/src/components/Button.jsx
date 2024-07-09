export default function Button(prop) {
  return (
    <>
      <div className="cta" onClick={prop.click}>
        Call to Action
      </div>
    </>
  );
}

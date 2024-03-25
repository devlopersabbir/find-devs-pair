export function NotFound({ text }: { text: string }) {
  return (
    <div className="flex-center h-screen">
      <h1 className="base-bold">{text}</h1>
    </div>
  );
}

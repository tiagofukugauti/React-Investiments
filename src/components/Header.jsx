export default function Header({ children }) {
  let fontSize = 'text-xl';

  return (
    <header>
      <div className="bg-blue-300 mx-auto p-4">
        <h1 className={`text-center font-semibold ${fontSize}`}>{children}</h1>
      </div>
    </header>
  );
}

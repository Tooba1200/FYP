export default function RegisterLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}

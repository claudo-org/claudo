export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900">404</h1>
        <p className="mt-4 text-lg text-gray-700">
          Page not found
        </p>
        <p className="mt-2 text-sm text-gray-500">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}

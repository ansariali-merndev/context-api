export default function ContactPage() {
  return (
    <main className="h-[80vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg max-w-2xl text-center mb-2">
        Feel free to reach out for any collaboration, project ideas, or just to
        connect.
      </p>
      <p className="text-md text-center">
        📧 Email: <span className="font-medium">ali.ansari@example.com</span>
      </p>
      <p className="text-md text-center">
        💼 LinkedIn:{" "}
        <span className="font-medium">linkedin.com/in/aliansari</span>
      </p>
      <p className="text-md text-center">
        💻 GitHub: <span className="font-medium">github.com/aliansari</span>
      </p>
    </main>
  );
}

export async function sendEmail(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const res = await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  return res.json();
}

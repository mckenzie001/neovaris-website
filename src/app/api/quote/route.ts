import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      fullName,
      phone,
      email,
      service,
      message,
    } = await req.json();

    // Email to Neovaris
    await resend.emails.send({
      from: "Neovaris Website <hello@neovaristechnologies.com>",
      to: [process.env.COMPANY_EMAIL!],
      replyTo: email,
      subject: `New Quote Request - ${fullName}`,
      html: `
        <div style="font-family:Arial,sans-serif">
          <h2>New Quote Request</h2>

          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service}</p>

          <hr />

          <h3>Project Details</h3>
          <p>${message}</p>
        </div>
      `,
    });

    // Confirmation email to client
    await resend.emails.send({
      from: "Neovaris Technologies <hello@neovaristechnologies.com>",
      to: [email],
      subject: "We've received your request",
      html: `
        <h2>Thank you for contacting Neovaris Technologies</h2>

        <p>
          We've received your quote request and a member
          of our team will contact you within 24–48 hours.
        </p>

        <p>
          Service Requested: ${service}
        </p>

        <br />

        <p>
          Regards,<br />
          Neovaris Technologies
        </p>
      `,
    });

    return Response.json({
      success: true,
    });
  } catch (error: any) {
  console.error("Quote form error:", error);

  return Response.json(
    {
      success: false,
      message: error?.message || "Unknown error",
      error,
    },
    {
      status: 500,
    }
  );
}
}
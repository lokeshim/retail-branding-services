import { NextResponse } from "next/server";

const FORM_API_URL =
  process.env.FORM_API_URL || "http://test.local/submit.php";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const body = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        body.append(key, String(value));
      }
    });

    const phpResponse = await fetch(FORM_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });

    const text = (await phpResponse.text()).trim();

    if (text === "OK") {
      return NextResponse.json({ success: true, message: "OK" });
    }

    return NextResponse.json(
      { success: false, message: text || "Submission failed" },
      { status: 400 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to reach server. Please try again." },
      { status: 500 }
    );
  }
}

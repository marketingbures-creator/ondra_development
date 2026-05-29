import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "inquiries.json");

type Inquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
  read: boolean;
};

function ensureDataFile(): Inquiry[] {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, "[]", "utf-8");
    return [];
  }
  return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
}

function saveInquiries(inquiries: Inquiry[]) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(inquiries, null, 2), "utf-8");
}

function isAuthenticated(req: NextRequest): boolean {
  return Boolean(req.cookies.get("admin_token")?.value);
}

export async function GET(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const inquiries = ensureDataFile();
  return NextResponse.json(inquiries);
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { name, email, phone, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Vyplňte prosím jméno, e-mail a zprávu." },
      { status: 400 }
    );
  }

  const inquiries = ensureDataFile();

  const inquiry: Inquiry = {
    id: crypto.randomUUID(),
    name: String(name).slice(0, 200),
    email: String(email).slice(0, 200),
    phone: String(phone || "").slice(0, 50),
    message: String(message).slice(0, 5000),
    createdAt: new Date().toISOString(),
    read: false,
  };

  inquiries.unshift(inquiry);
  saveInquiries(inquiries);

  return NextResponse.json({ success: true }, { status: 201 });
}

export async function PATCH(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id, read } = await req.json();

  if (!id) {
    return NextResponse.json({ error: "Chybí ID." }, { status: 400 });
  }

  const inquiries = ensureDataFile();
  const inquiry = inquiries.find((i) => i.id === id);

  if (!inquiry) {
    return NextResponse.json({ error: "Nenalezeno." }, { status: 404 });
  }

  inquiry.read = Boolean(read);
  saveInquiries(inquiries);

  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await req.json();

  if (!id) {
    return NextResponse.json({ error: "Chybí ID." }, { status: 400 });
  }

  let inquiries = ensureDataFile();
  inquiries = inquiries.filter((i) => i.id !== id);
  saveInquiries(inquiries);

  return NextResponse.json({ success: true });
}

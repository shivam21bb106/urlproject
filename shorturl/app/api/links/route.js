import { PrismaClient } from "@prisma/client";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
    const { code, targetUrl } = await request.json();

    try {
        new URL(targetUrl);
    } catch {
        return new Response("Invalid URL", { status: 400 });
    }

    const finalCode = code?.trim() !== "" ? code : nanoid(6);

    const exists = await prisma.link.findUnique({
        where: { code: finalCode },
    });

    if (exists) {
        return new Response("Code already exists", { status: 409 });
    }

    const links = await prisma.link.create({
        data: {
            code: finalCode,
            targetUrl,
        },
    });

    return NextResponse.json(links);
}

export async function GET() {
    const links = await prisma.link.findMany({
        orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(links);
}
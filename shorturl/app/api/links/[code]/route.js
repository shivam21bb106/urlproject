import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function DELETE(request, context) {
    const { code } = await context.params;

    console.log("CODE:", code);

    await prisma.link.delete({
        where: { code },
    });

    return NextResponse.json({ message: "Deleted" });
}

import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export default async function ShortRedirect({ params }) {
    const { code } = await params;

    const link = await prisma.link.findUnique({
        where: { code },
    });


    if (!link) {
        return <h1>Short link not found</h1>;
    }


    await prisma.link.update({
        where: { code },
        data: {
            totalClicks: link.totalClicks + 1,
            lastClicked: new Date(),
        },
    });
    redirect(link.targetUrl);
}

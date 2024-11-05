import React from "react";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink } from "lucide-react";

interface CustomLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}

interface SummaryData {
    icon: string;
    title: string;
    description: string;
}

async function fetchSummaryData(href: string): Promise<SummaryData | null> {
    try {
        const res = await fetch(
            `https://summaly.sda1.net/?url=${encodeURIComponent(href)}`,
            {
                next: { revalidate: 60 },
            }
        );

        if (!res.ok) {
            throw new Error("サマリーの取得に失敗しました。");
        }

        const result = await res.json();
        return {
            icon: result.icon,
            title: result.title,
            description: result.description,
        };
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const CustomLink = async ({ href, ...props }: CustomLinkProps) => {
    const isInternal = href.startsWith("/");
    const data = await fetchSummaryData(href);

    const content = (
        <Card className="w-full transition-all duration-300 hover:shadow-lg bg-black border-gray-700 mt-4">
            <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="w-12 h-12 border-2 border-gray-700">
                    <AvatarImage src={data?.icon} alt={`${data?.title} Icon`} />
                    <AvatarFallback className="bg-gray-800 text-gray-200">
                        {data?.title?.charAt(0) || "?"}
                    </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <CardTitle className="text-lg text-gray-100">
                        {data?.title || "Untitled"}
                    </CardTitle>
                    {!isInternal && (
                        <CardDescription className="flex items-center text-sm text-gray-400">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            External Link
                        </CardDescription>
                    )}
                </div>
            </CardHeader>
            <CardContent>
                {data?.description && (
                    <div className="text-sm text-gray-300 line-clamp-2">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<div>" + data.description + "</div>",
                            }}
                        ></div>
                    </div>
                )}
            </CardContent>
        </Card>
    );

    const linkClass =
        "block mb-6 no-underline transition-transform duration-300 hover:-translate-y-1";

    if (isInternal) {
        return (
            <Link href={href} passHref legacyBehavior>
                <a {...props} className={linkClass}>
                    {content}
                </a>
            </Link>
        );
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            {...props}
            className={linkClass}
        >
            {content}
        </a>
    );
};

import { SparklesIcon, PartyPopperIcon, Link2Icon } from "lucide-react";
import { CustomLink } from "./CustomLink";

interface TimelineItem {
    type: "milestone" | "release" | "blogPost";
    title: string;
    date: string;
    link?: string;
    content?: string;
}

export default function Component() {
    const timelineItems: TimelineItem[] = [];

    const getIcon = (type: TimelineItem["type"]) => {
        switch (type) {
            case "milestone":
                return <SparklesIcon className="h-5 w-5 text-yellow-500" />;
            case "release":
                return <PartyPopperIcon className="h-5 w-5 text-pink-500" />;
            case "blogPost":
                return <Link2Icon className="h-5 w-5 text-blue-500" />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
            <div className="max-w-2xl mx-auto">
                <div className="flex flex-col space-y-8">
                    {timelineItems.map((item, index) => (
                        <div key={index} className="flex">
                            {/* Timeline line and icon */}
                            <div className="flex flex-col items-center mr-4">
                                <div className="w-pxA` bg-gray-800 flex-grow" />
                                <div className="rounded-full p-1 bg-gray-950 border border-gray-800">
                                    {getIcon(item.type)}
                                </div>
                                <div className="w-px bg-gray-800 flex-grow" />
                            </div>

                            {/* Content */}
                            <div className="flex-grow pt-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="font-medium">
                                        {item.title}
                                    </h3>
                                    <span className="text-sm text-gray-500">
                                        {item.date}
                                    </span>
                                </div>

                                {item.content &&
                                    CustomLink({
                                        href: item.link as string,
                                        children: item.content,
                                        className: "text-sm text-gray-500",
                                    })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

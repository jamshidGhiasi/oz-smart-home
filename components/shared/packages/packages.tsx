// import ContentWrapper from "@/components/shared/layout/content-wrapper";
'use client';

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Lock, Video, Thermometer, Music, Sliders, Lightbulb, Server, Phone, Calendar, Gem, Shield, Star, Award, CircleDollarSign, Minus, Plus } from "lucide-react";
import Link from "next/link";
type Package = {
    name: string;
    price: string;
    summary: string;
    type: 'Wireless' | 'Wired';
    color: string;
    icon: React.ComponentType<{ className?: string }>;
};

export const nestedData: Record<string, Record<string, Record<string, { name: string; qty: number }[]>>> = {
    "Bronze": {
        "Lighting": {
            "Wall Switch": [
                {
                    "name": "1G - Glass Touch",
                    "qty": 4
                },
                {
                    "name": "2G - Glass Touch",
                    "qty": 10
                },
                {
                    "name": "3G - Glass Touch",
                    "qty": 5
                },
                {
                    "name": "4G- Glass Touch",
                    "qty": 2
                }
            ]
        },
        "Access": {
            "Intercom": [
                {
                    "name": "Intercom - Tier 2",
                    "qty": 1
                }
            ]
        },
        "Network": {
            "Gateway": [
                {
                    "name": "Smart Home Controller and Coordinator",
                    "qty": 1
                }
            ],
            "Access Point": [
                {
                    "name": "Wi-Fi 6 Access Point",
                    "qty": 4
                }
            ],
            "PoE Switch": [
                {
                    "name": "16 PoE Network Switch",
                    "qty": 1
                }
            ]
        },
        "Comfort": {
            "Curtain": [
                {
                    "name": "Curtain Motor",
                    "qty": 2
                }
            ],
            "Blind": [
                {
                    "name": "Blind Motor",
                    "qty": 4
                }
            ]
        },
        "Other": {
            "Setup and Delivery": [
                {
                    "name": "Programming and Configuration",
                    "qty": 1
                }
            ]
        }
    },
    "Silver": {
        "Lighting": {
            "Wall Switch": [
                {
                    "name": "1G - PC Black",
                    "qty": 4
                },
                {
                    "name": "2G - PC Black",
                    "qty": 10
                },
                {
                    "name": "3G - PC Black",
                    "qty": 5
                },
                {
                    "name": "4G - PC Black",
                    "qty": 2
                }
            ]
        },
        "Access": {
            "Smart Door Lock": [
                {
                    "name": "Large Pull Handle - K9",
                    "qty": 1
                }
            ],
            "Intercom": [
                {
                    "name": "Intercom - Tier 1",
                    "qty": 1
                }
            ]
        },
        "Security": {
            "NVR": [
                {
                    "name": "8CH PoE NVR",
                    "qty": 1
                }
            ]
        },
        "Network": {
            "Gateway": [
                {
                    "name": "Smart Gateway and Controllers",
                    "qty": 1
                }
            ],
            "Server": [
                {
                    "name": "Server Cabinet and Accessories",
                    "qty": 1
                }
            ],
            "PoE Switch": [
                {
                    "name": "16 PoE Network Switch",
                    "qty": 1
                }
            ]
        },
        "Control": {
            "Control Centre": [
                {
                    "name": "10\u201d Control Panel Max",
                    "qty": 2
                },
                {
                    "name": "HomePod Mini",
                    "qty": 5
                }
            ]
        },
        "Other": {
            "Multiroom Audio": [
                {
                    "name": "Speaker pairs (Per Zone)",
                    "qty": 2
                },
                {
                    "name": "Amp",
                    "qty": 1
                }
            ],
            "Setup and Delivery": [
                {
                    "name": "Programming and Configuration",
                    "qty": 1
                }
            ]
        },
        "Comfort": {
            "Curtain": [
                {
                    "name": "Curtain Motor",
                    "qty": 2
                }
            ],
            "Blind": [
                {
                    "name": "Blind Motor",
                    "qty": 4
                }
            ]
        }
    },
    "Gold": {
        "Lighting": {
            "Wall Switch": [
                {
                    "name": "1G - Glass White",
                    "qty": 4
                },
                {
                    "name": "2G - Glass White",
                    "qty": 10
                },
                {
                    "name": "3G - Glass White",
                    "qty": 5
                },
                {
                    "name": "4G - Glass White",
                    "qty": 2
                }
            ],
            "Wall Socket": [
                {
                    "name": "Glass White",
                    "qty": 40
                }
            ]
        },
        "Access": {
            "Smart Door Lock": [
                {
                    "name": "Large Pull Handle - K9",
                    "qty": 1
                }
            ],
            "Intercom": [
                {
                    "name": "Intercom - Tier 1",
                    "qty": 1
                }
            ]
        },
        "Other": {
            "Garage Door Contoller": [
                {
                    "name": "Garage Door Controller",
                    "qty": 1
                }
            ],
            "Multiroom Audio": [
                {
                    "name": "Speaker pairs (Per Zone)",
                    "qty": 2
                },
                {
                    "name": "Amp",
                    "qty": 1
                }
            ],
            "Setup and Delivery": [
                {
                    "name": "Programming and Configuration",
                    "qty": 1
                }
            ]
        },
        "Security": {
            "Security Camera": [
                {
                    "name": "5MP Dual Light Turret",
                    "qty": 5
                }
            ],
            "NVR": [
                {
                    "name": "8CH PoE NVR",
                    "qty": 1
                }
            ]
        },
        "Network": {
            "Gateway": [
                {
                    "name": "Smart Gateway and Controllers",
                    "qty": 1
                }
            ],
            "Server": [
                {
                    "name": "Server Cabinet and Accessories",
                    "qty": 1
                }
            ],
            "Access Point": [
                {
                    "name": "Wi-Fi 6 Access Point",
                    "qty": 4
                }
            ],
            "PoE Switch": [
                {
                    "name": "16 PoE Network Switch",
                    "qty": 1
                }
            ]
        },
        "Control": {
            "Control Centre": [
                {
                    "name": "10\u201d Control Panel Max",
                    "qty": 2
                },
                {
                    "name": "HomePod Mini",
                    "qty": 5
                }
            ]
        },
        "Comfort": {
            "Curtain": [
                {
                    "name": "Curtain Motor",
                    "qty": 2
                }
            ],
            "Blind": [
                {
                    "name": "Blind Motor",
                    "qty": 4
                }
            ]
        }
    },
    "Platinum": {
        "Lighting": {
            "Wall Switch": [
                {
                    "name": "1G - Metal Black",
                    "qty": 4
                },
                {
                    "name": "2G - Metal Black",
                    "qty": 10
                },
                {
                    "name": "3G - Metal Black",
                    "qty": 5
                },
                {
                    "name": "4G - Metal Black",
                    "qty": 2
                }
            ],
            "Wall Socket": [
                {
                    "name": "PC Black",
                    "qty": 40
                }
            ]
        },
        "Other": {
            "Downlight": [
                {
                    "name": "RGB SMD - 45mm",
                    "qty": 60
                }
            ],
            "Garage Door Contoller": [
                {
                    "name": "Garage Door Controller",
                    "qty": 1
                }
            ],
            "Multiroom Audio": [
                {
                    "name": "Speaker pairs (Per Zone)",
                    "qty": 2
                },
                {
                    "name": "Amp",
                    "qty": 1
                }
            ],
            "Setup and Delivery": [
                {
                    "name": "Programming and Configuration",
                    "qty": 1
                }
            ]
        },
        "Access": {
            "Smart Door Lock": [
                {
                    "name": "Large Pull Handle - K9",
                    "qty": 1
                }
            ],
            "Intercom": [
                {
                    "name": "Intercom - Tier 1",
                    "qty": 1
                }
            ]
        },
        "Security": {
            "Security Camera": [
                {
                    "name": "5MP Active Defence Turret",
                    "qty": 5
                }
            ],
            "NVR": [
                {
                    "name": "8CH PoE NVR",
                    "qty": 1
                }
            ]
        },
        "Network": {
            "Gateway": [
                {
                    "name": "Smart Gateway and Controllers",
                    "qty": 1
                }
            ],
            "Server": [
                {
                    "name": "Server Cabinet and Accessories",
                    "qty": 1
                }
            ],
            "Access Point": [
                {
                    "name": "Wi-Fi 6 Access Point",
                    "qty": 4
                }
            ],
            "PoE Switch": [
                {
                    "name": "24 PoE Network Switch",
                    "qty": 1
                }
            ]
        },
        "Control": {
            "Control Centre": [
                {
                    "name": "10\u201d Control Panel Max",
                    "qty": 2
                },
                {
                    "name": "HomePod Mini",
                    "qty": 5
                }
            ]
        },
        "Comfort": {
            "Curtain": [
                {
                    "name": "Curtain Motor",
                    "qty": 2
                }
            ],
            "Blind": [
                {
                    "name": "Blind Motor",
                    "qty": 4
                }
            ]
        }
    }
};
const packages: Package[] = [
    { name: "Bronze", price: "$10,000+", summary: "Essentials", type: "Wireless", color: "bg-yellow-600", icon: CircleDollarSign },
    { name: "Silver", price: "$15,000+", summary: "Balanced", type: "Wireless", color: "bg-gray-400", icon: Award },
    { name: "Gold", price: "$25,000+", summary: "Complete", type: "Wireless", color: "bg-amber-500", icon: Star },
    { name: "Platinum", price: "$28,000+", summary: "Premium", type: "Wireless", color: "bg-blue-300", icon: Shield },
];

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    "Wall Switch": Lightbulb,
    "Wall Socket": Sliders,
    "Intercom": Video,
    "Gateway": Server,
    "Access Point": Home,
    "Curtain": Lock,
    "Blind": Lock,
    "Garage Door": Lock,
    "Security Camera": Video,
    "Control Centre": Sliders,
    "Audio": Music,
    "Configuration": Thermometer,
    "Server": Server,
    "Access": Lock,
    "NVR": Server
};

type Item = {
    category: string;
    name: string;
    qty: number;
    type?: string;
};

type ItemData = Record<string, Item[]>;

const itemData: ItemData = {
    Bronze: [
        { category: "Wall Switch", name: "1G - Glass Touch", qty: 4 },
        { category: "Wall Switch", name: "2G - Glass Touch", qty: 10 },
        { category: "Wall Switch", name: "3G - Glass Touch", qty: 5 },
        { category: "Wall Switch", name: "4G- Glass Touch", qty: 2 },
        { category: "Intercom", name: "Intercom - Tier 2", qty: 1 },
        { category: "Gateway", name: "Smart Home Controller and Coordinator", qty: 1 },
        { category: "Access Point", name: "Wi-Fi 6 Access Point", qty: 4 },
        { category: "Curtain", name: "Curtain Motor", qty: 2 },
        { category: "Blind", name: "Blind Motor", qty: 4 },
        { category: "Configuration", name: "Programming and Configuration", qty: 3 }
    ],
    Silver: [
        { category: "Wall Switch", name: "1G - PC Black", qty: 4 },
        { category: "Wall Switch", name: "2G - PC Black", qty: 10 },
        { category: "Wall Switch", name: "3G - PC Black", qty: 5 },
        { category: "Wall Switch", name: "4G - PC Black", qty: 2 },
        { category: "Intercom", name: "Intercom - Tier 1", qty: 1 },
        { category: "Access", name: "Large Pull Handle - K9", qty: 1 },
        { category: "Gateway", name: "Smart Gateway and Controllers", qty: 1 },
        { category: "Server", name: "Server Cabinet and Accessories", qty: 1 },
        { category: "Control Centre", name: "10” Control Panel Max", qty: 2 },
        { category: "Audio", name: "Speaker pairs (Per Zone)", qty: 2 },
        { category: "Configuration", name: "Programming and Configuration", qty: 3 }
    ],
    Gold: [
        { category: "Wall Switch", name: "1G - Glass White", qty: 4 },
        { category: "Wall Switch", name: "2G - Glass White", qty: 10 },
        { category: "Wall Switch", name: "3G - Glass White", qty: 5 },
        { category: "Wall Switch", name: "4G - Glass White", qty: 2 },
        { category: "Garage Door", name: "Garage Door Controller", qty: 1 },
        { category: "Intercom", name: "Intercom - Tier 1", qty: 1 },
        { category: "Security Camera", name: "5MP Dual Light Turret", qty: 5 },
        { category: "NVR", name: "8CH PoE NVR", qty: 1 },
        { category: "Gateway", name: "Smart Gateway and Controllers", qty: 1 },
        { category: "Server", name: "Server Cabinet and Accessories", qty: 1 },
        { category: "Access Point", name: "Wi-Fi 6 Access Point", qty: 4 },
        { category: "Control Centre", name: "10” Control Panel Max", qty: 2 },
        { category: "Audio", name: "Speaker pairs (Per Zone)", qty: 2 },
        { category: "Configuration", name: "Programming and Configuration", qty: 3 }
    ],
    Platinum: [
        { category: "Wall Switch", name: "1G - Metal Black", qty: 4 },
        { category: "Wall Switch", name: "2G - Metal Black", qty: 10 },
        { category: "Wall Switch", name: "3G - Metal Black", qty: 5 },
        { category: "Wall Switch", name: "4G - Metal Black", qty: 2 },
        { category: "Wall Socket", name: "PC Black", qty: 40 },
        { category: "Security Camera", name: "5MP Active Defence Turret", qty: 5 },
        { category: "Intercom", name: "Intercom - Tier 1", qty: 1 },
        { category: "Access", name: "Large Pull Handle - K9", qty: 1 },
        { category: "NVR", name: "8CH PoE NVR", qty: 1 },
        { category: "Gateway", name: "Smart Gateway and Controllers", qty: 1 },
        { category: "Server", name: "Server Cabinet and Accessories", qty: 1 },
        { category: "Access Point", name: "Wi-Fi 6 Access Point", qty: 4 },
        { category: "Control Centre", name: "10” Control Panel Max", qty: 2 },
        { category: "Audio", name: "Speaker pairs (Per Zone)", qty: 2 },
        { category: "Configuration", name: "Programming and Configuration", qty: 3 }
    ]
};

const diamondPackage: Package = {
    name: "Diamond",
    price: "Let's Talk",
    summary: "Loxone",
    type: "Wired",
    color: "bg-[#69c350]",
    icon: Gem
};

export default function PackagesPage() {
    const [expanded, setExpanded] = useState<Record<string, boolean>>({});



    const renderPackageCard = (pkg: typeof packages[number]) => (
        <Card key={pkg.name} className="bg-zinc-900 text-white rounded-2xl shadow-md border border-white/10 flex flex-col">
            <div className={`${pkg.color} text-black font-bold text-lg p-3 rounded-t-2xl flex items-center justify-between`}>
                <div className="flex items-center gap-2">
                    <pkg.icon className="w-5 h-5" />
                    {pkg.name}
                </div>
                <div className="text-sm font-semibold">{pkg.summary}</div>
            </div>
            <CardContent className="flex flex-col justify-between p-4 h-full">
                <div className="mb-4">
                    <div className="text-lg font-semibold text-yellow-400 mb-1">{pkg.price}</div>
                    <div className="text-sm italic text-white/80 mb-4">{pkg.type}</div>
                    {Object.entries(nestedData[pkg.name] || {}).map(([mainCategory, subCats]) => {
                        const mainKey = `${pkg.name}-${mainCategory}`;
                        const mainOpen = expanded[mainKey] ?? false;
                        return (
                            <div key={mainKey} className="mb-3 border border-white/10 rounded-xl overflow-hidden">
                                <div onClick={() => setExpanded(prev => ({ ...prev, [mainKey]: !prev[mainKey] }))} className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-white/5 overflow-hidden">
                                    <span className="font-semibold">{mainCategory}</span>
                                    {mainOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                                {mainOpen && (
                                    <div className="pl-2">
                                        {Object.entries(subCats).map(([subCat, items]) => {
                                            const subKey = `${mainKey}-${subCat}`;
                                            const subOpen = expanded[subKey] ?? false;
                                            const Icon = categoryIcons[subCat] || Home;
                                            return (
                                                <div key={subKey} className="border-t border-white/10">
                                                    <div onClick={() => setExpanded(prev => ({ ...prev, [subKey]: !prev[subKey] }))} className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-white/5">
                                                        <div className="flex items-center gap-2">
                                                            <Icon className="w-4 h-4 text-white" />
                                                            <span className="text-sm font-semibold">{subCat}</span>
                                                        </div>
                                                        {subOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                                    </div>
                                                    {subOpen && (
                                                        <table className="w-full text-sm text-white/90 border-t border-white/10">
                                                            <tbody>
                                                                {items.map((item, index) => (
                                                                    <tr key={index} className="even:bg-white/5">
                                                                        <td className="py-1 px-3 text-left w-3/4">{item.name}</td>
                                                                        <td className="py-1 px-3 text-right w-1/4">{item.qty}x</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
                <div className="space-y-2 mt-auto flex flex-col">
                    {pkg.type === "Wireless" && (
                        <p className="text-xs text-red-300 mt-4">
                            ⚠️ Requires neutral wire behind switches. Final price may vary based on project plan.
                        </p>
                    )}
                    <Link href={'/services/book-a-free-smart-home-consultation'} className="text-md text-center w-full font-bold mb-4 rounded-xl text-black bg-white border-white py-3 hover:bg-[#e5e5e5] hover:border-white hover:text-black transition-all">
                        Book A Free Consultation
                    </Link>
                    <Link href={'tel:1800865070'} className="hover:underline text-center">
                        Call 1800 865 070
                    </Link>
                </div>
            </CardContent>
        </Card>
    );

    return (
        <div className="p-0 md:p-12 bg-black min-h-screen">

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {packages.map(renderPackageCard)}
            </div>
            <div className="mt-12">
                <h2 className="text-3xl font-bold mb-4 text-white">Diamond Package</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {renderPackageCard(diamondPackage)}
                </div>
            </div>
        </div>
    );

}
// Another approach, same result
// JSON approach


var chart_config = {
    chart: {
        scrollbar : 'fancy',
        container: "#aboutus-chart",
        connectors: {
            type: 'step',
            style: {
                "stroke-width": 2,
                "stroke": "#dfdfdf"
            }
        },
        node: {
            HTMLclass: 'node-chart',
            collapsable: true,
            drawLineThrough: false
        },
    },
    nodeStructure: 
    {

        text: {
            name: "Viện Trưởng",
            title: "GS.TS Lim Sang Taek",

        },
        link: {
            href: "http://www.google.com"
        },
        children: [
            {
                text: {
                    name: "Tổ tư vấn quốc tế",
                    title: "TS. Hyo Dan Cho",
                },
                link: {
                    href: "http://www.google.com"
                },
            },
            {
                children: [
                    {
                        text: {
                            name: "Viện Phó",
                            title: "TS. Bùi Kim Luận",
                        },
                        link: {
                            href: "http://www.google.com"
                        },
                        children: [
                            {
                                stackChildren: true,
                                text: {
                                    name: "Khoa khách sạn - Nhà hàng Quốc tế",
                                    title: "Trưởng khoa: ThS. Nguyễn Trần Thụy Ân"
                                },
                                link: {
                                    href: "http://www.google.com"
                                },
                                children: [{
                                        text: {
                                            name: "Tổ Bộ môn Khách sạn",
                                            title: "Tổ trưởng: ThS. Phạm T. Hoàng Dung"
                                        },
                                        link: {
                                            href: "http://www.google.com"
                                        }
                                    },
                                    {
                                        text: {
                                            name: "Tổ Bộ môn Nhà hàng",
                                            title: "Tổ trưởng: ThS. Hoàng T. Cẩm Vân"
                                        },
                                        link: {
                                            href: "http://www.google.com"
                                        }
                                    },
                                    {
                                        text: {
                                            name: "Tổ Bộ môn PSU",
                                            title: "Tổ trưởng: ThS. Hồ Sử Minh Tài"
                                        },
                                        link: {
                                            href: "http://www.google.com"
                                        }
                                    }
                                ]
                            },
                            {
                                stackChildren: true,
                                text: {
                                    name: "Khoa Du lịch Lữ hành Quốc tế",
                                    title: "Trưởng khoa: ThS. Lý Thị Thương"
                                },
                                link: {
                                    href: "http://www.google.com"
                                },
                                children: [{
                                        text: {
                                            name: "Tổ Bộ môn Lữ hành Quốc tế",
                                            title: "ThS. Trần Thị Tú Nhi"
                                        },
                                        link: {
                                            href: "http://www.google.com"
                                        }
                                    },
                                    {
                                        text: {
                                            name: "Tổ Bộ môn Sự kiện và Giải trí",
                                            title: "ThS. Vũ Thị Lành"
                                        },
                                        link: {
                                            href: "http://www.google.com"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        stackChildren: true,
                        text: {
                            name: "Trung tâm Đào tạo Nghiệp vụ Du lịch Quốc tế",
                            title: "Giám đốc: TS. Nguyễn Quang Vinh",
                        },
                        link: {
                            href: "http://www.google.com"
                        },
                        children: [
                            {
                                text: {
                                    name: "Phó Giám đốc",
                                    title: "ThS. Nguyễn Thị Tuyết"
                                },
                                link: {
                                    href: "http://www.google.com"
                                },
                            },
                            {
                                text: {
                                    name: "Phó Giám đốc",
                                    title: "ThS. Trần Thị Tú Nhi"
                                },
                                link: {
                                    href: "http://www.google.com"
                                },
                            },
                            {
                                text: {
                                    name: "Phó Giám đốc",
                                    title: "ThS. Nguyễn Hoàng Linh"
                                },
                                link: {
                                    href: "http://www.google.com"
                                },
                            }
                        ]
                    },
                    {
                        stackChildren: true,
                        text: {
                            name: "Trung tâm nghiên cứu và phát triển quốc tế",
                            title: "Phó giám đốc: TS. Hyo Dan Cho",
                        },
                        link: {
                            href: "http://www.google.com"
                        },
                        children: [
                            {
                                text: {
                                    name: "Tổ phát triển quốc tế",
                                    title: "Ông Tae Jin Bae"
                                },
                                link: {
                                    href: "http://www.google.com"
                                },
                            },
                            {
                                text: {
                                    name: "Tổ Nghiên cứu",
                                    title: "TS. Wan Su Kim"
                                },
                                link: {
                                    href: "http://www.google.com"
                                },
                            },
                        ]
                    }
                ]
            },
            {
                stackChildren: true,
                text: {
                    name: "Trợ lý viện trưởng",
                    title: "TS. Hyo Dan Cho",
                },
                link: {
                    href: "http://www.google.com"
                },
                children: [
                    {
                        text: {
                            name: "Trợ lý viện trưởng",
                            title: "TS. Nguyễn Lê Bình"
                        },
                        link: {
                            href: "http://www.google.com"
                        },
                    },
                    {
                        text: {
                            name: "Giáo vụ",
                            title: "Dương Mai Bảo Liên"
                        },
                        link: {
                            href: "http://www.google.com"
                        },
                    },
                    {
                        text: {
                            name: "Giáo vụ",
                            title: "Lê Hoàng Diệu Linh"
                        },
                        link: {
                            href: "http://www.google.com"
                        },
                    }
                ]
            },
        ]
    }
};
exports.data = {
  pages: {
    home: {
      page: {
        name: "home",
        displayName: "Home",
        slug: "index-N2URbSoySn",
        title: "Home",
        description: "",
        fileName: "index",
        isCorePage: false,
        path: "/",
        depth: 0,
        sysConfig: { isExcludeFromMenu: true },
        settings: {
          
        }
      },
      sections: [
        {
          displayName: "Main landing",
          name: "mainLanding",
          slug: "main-landing-w_JFqRP461",
          description: "Landing section of Home page",
          isDetail: false,
          templateContexts: [
            {
              id: "60028a0473764a0013bf2393",
              template: {
                name: "mediaCover1",
                displayName: "Media cover 1",
                slug: "media-cover-1-S7QNKggP7v",
                fileName: "media-cover-1",
                cmpName: "MediaCover1",
                repoUrl: "",
              },
              contentType: {
                id: "600289bf73764a0013bf22fa",
                name: "mainLanding",
                displayName: "Main landing",
                slug: "main-landing-qjck1E49b6",
                description: "Landing section of site",
                category: "component",
                createdAt: "2021-01-16T06:37:51.426Z",
                updatedAt: "2021-01-16T06:39:00.852Z",
              },
              item: {
                id: "60028a0473764a0013bf2394",
                slug: "main-landing-qjck1e49b6-component",
                title: "Sem nulla pharetra diam sit amet",
                currentVersion: "60028a0473764a0013bf2395",
                category: "component",
                status: "published",
                contentType: "600289bf73764a0013bf22fa",
                createdAt: "2021-01-16T06:39:00.825Z",
                updatedAt: "2021-01-16T06:39:00.825Z",
                fields: {
                  heading: "Sem nulla pharetra diam sit amet",
                  blurb:
                    "Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. Cursus vitae congue mauris rhoncus. Orci sagittis eu volutpat.",
                  undefined: "main-landing-qjck1e49b6-component",
                },
              },
              config: {
                cta1Href: "/contact",
                cta1Label: "Get a quote",
                cta2Href: "/services",
                cta2Label: "Our services",
              },
            },
          ],
        },
      ],
      sectionNames: ["mainLanding"],
    },
    services: {
      page: {
        name: "services",
        displayName: "Services",
        slug: "services-z1aekw76fg",
        title: "Services",
        description: "",
        fileName: "services",
        isCorePage: true,
        path: "/",
        depth: 0,
      },
      sections: [
        {
          displayName: "Services landing",
          name: "servicesLanding",
          slug: "services-landing-3Xky7MnK0g",
          description: "Landing section of Services page",
          isDetail: false,
          templateContexts: [
            {
              id: "60028a0473764a0013bf239a",
              template: {
                name: "mediaCover2",
                displayName: "Media cover 2",
                slug: "media-cover-2-GcTWO_4PAc",
                fileName: "media-cover-2",
                cmpName: "MediaCover2",
                repoUrl: "",
              },
              contentType: {
                id: "600289bf73764a0013bf22fb",
                name: "servicesLanding",
                displayName: "Services landing",
                slug: "services-landing-5oIpZmxpGw",
                description: "Landing section of the Services page",
                category: "component",
                createdAt: "2021-01-16T06:37:51.469Z",
                updatedAt: "2021-01-16T06:39:00.930Z",
              },
              item: {
                id: "60028a0473764a0013bf239b",
                slug: "services-landing-5oipzmxpgw-component",
                title: "Aliquam nulla facilisi cras fermentum odio",
                currentVersion: "60028a0473764a0013bf239c",
                category: "component",
                status: "published",
                contentType: "600289bf73764a0013bf22fb",
                createdAt: "2021-01-16T06:39:00.900Z",
                updatedAt: "2021-01-16T06:39:00.900Z",
                fields: {
                  heading: "Aliquam nulla facilisi cras fermentum odio",
                  blurb:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat scelerisque leo, ac tincidunt ex feugiat vel. Nunc volutpat ex libero, vel imperdiet urna facilisis a. Nullam ac magna quis nunc tempor maximus eget at ligula.",
                  undefined: "services-landing-5oipzmxpgw-component",
                },
              },
            },
          ],
        },
        {
          displayName: "Services list",
          name: "servicesList",
          slug: "services-list-88T9Dly9k8",
          description: "List of services",
          isDetail: false,
          templateContexts: [
            {
              id: "60028a0473764a0013bf23a1",
              template: {
                name: "mediaBlocklist2",
                displayName: "Media blocklist 2",
                slug: "media-blocklist-2-64l9uvW3Ov",
                fileName: "media-blocklist-2",
                cmpName: "MediaBlocklist2",
                repoUrl: "",
              },
              list: {
                limit: 3,
                contentType: {
                  _id: "600289bf73764a0013bf22fc",
                  moduleLibrary: "600289bf73764a0013bf22f8",
                  displayName: "Service",
                  slug: "service-Y5Z8cz2Cup",
                },
                isMaster: true,
              },
            },
          ],
        },
      ],
      sectionNames: ["servicesLanding", "servicesList"],
    },
    blog: {
      page: {
        name: "blog",
        displayName: "Blog",
        slug: "blog-9IQ4UeAAqe",
        title: "Blog",
        description: "",
        fileName: "blog",
        isCorePage: true,
        path: "/",
        depth: 0,
      },
      sections: [
        {
          displayName: "Blog hero post",
          name: "blogHeroPost",
          slug: "blog-hero-post-c7noB12eKk",
          description: "First post from a list of entries",
          isDetail: false,
          templateContexts: [
            {
              id: "60028a0573764a0013bf23a6",
              template: {
                name: "previewHeroBlock1",
                displayName: "Preview hero block 1",
                slug: "preview-hero-block-1-xvxkP3WND5",
                fileName: "preview-hero-block-1",
                cmpName: "PreviewHeroBlock1",
                repoUrl: "",
              },
              list: {
                contentType: {
                  _id: "600289bf73764a0013bf22fd",
                  moduleLibrary: "600289bf73764a0013bf22f8",
                  displayName: "Blog post",
                  slug: "blog-post-ahgF3gfS2q",
                },
              },
            },
          ],
        },
        {
          displayName: "Blog list",
          name: "blogList",
          slug: "blog-list-7SbriZ6_lAK",
          description: "List of blog entries",
          isDetail: false,
          templateContexts: [
            {
              id: "60028a0573764a0013bf23ab",
              template: {
                name: "previewGrid2",
                displayName: "Preview grid 2",
                slug: "preview-grid-2-iEA5b6gTaYL",
                fileName: "preview-grid-2",
                cmpName: "PreviewGrid2",
                repoUrl: "",
              },
              list: {
                contentType: {
                  _id: "600289bf73764a0013bf22fd",
                  moduleLibrary: "600289bf73764a0013bf22f8",
                  displayName: "Blog post",
                  slug: "blog-post-ahgF3gfS2q",
                },
              },
              config: { offset: 1 },
            },
          ],
        },
      ],
      detail: {
        page: {
          name: "blogPost",
          displayName: "Blog post",
          description: "",
          fileName: "[slug]",
          isCorePage: false,
          path: "/blog-post",
          depth: 1,
          master: {
            name: "blog",
            displayName: "Blog",
            slug: "blog-9IQ4UeAAqe",
            title: "Blog",
            description: "",
            fileName: "blog",
            isCorePage: true,
            path: "/",
            depth: 0,
          },
          sections: [
            {
              displayName: "Blog detail",
              name: "blogDetail",
              slug: "blog-detail-y2FVeyL7R",
              description: "The main section of the blog detail page",
              isDetail: true,
              templateContexts: [
                {
                  id: "60028a0573764a0013bf23b0",
                  template: {
                    name: "detailBlock1",
                    displayName: "Detail block 1",
                    slug: "detail-block-1-efOtbeJqN4",
                    fileName: "detail-block-1",
                    cmpName: "DetailBlock1",
                    repoUrl: "",
                  },
                  contentType: {
                    id: "600289bf73764a0013bf22fd",
                    name: "blogPost",
                    displayName: "Blog post",
                    slug: "blog-post-ahgF3gfS2q",
                    description: "A Blog Entry is an informal diary-style post",
                    category: "post",
                    createdAt: "2021-01-16T06:37:51.566Z",
                    updatedAt: "2021-01-16T06:38:26.442Z",
                  },
                },
              ],
            },
            {
              displayName: "Blog more stories",
              name: "blogMoreStories",
              slug: "blog-more-stories-fS9ng1TArv",
              description: "List of more stories at bottom of blog detail page",
              isDetail: false,
              templateContexts: [
                {
                  id: "60028a0573764a0013bf23b4",
                  template: {
                    name: "previewGrid1",
                    displayName: "Preview grid 1",
                    slug: "preview-grid-1-VdSzTEAThZ",
                    fileName: "preview-grid-1",
                    cmpName: "PreviewGrid1",
                    repoUrl: "",
                  },
                  list: {
                    limit: 2,
                    contentType: {
                      _id: "600289bf73764a0013bf22fd",
                      moduleLibrary: "600289bf73764a0013bf22f8",
                      displayName: "Blog post",
                      slug: "blog-post-ahgF3gfS2q",
                    },
                  },
                },
              ],
            },
          ],
        },
        sections: [
          {
            displayName: "Blog detail",
            name: "blogDetail",
            slug: "blog-detail-y2FVeyL7R",
            description: "The main section of the blog detail page",
            isDetail: true,
            templateContexts: [
              {
                id: "60028a0573764a0013bf23b0",
                template: {
                  name: "detailBlock1",
                  displayName: "Detail block 1",
                  slug: "detail-block-1-efOtbeJqN4",
                  fileName: "detail-block-1",
                  cmpName: "DetailBlock1",
                  repoUrl: "",
                },
                contentType: {
                  id: "600289bf73764a0013bf22fd",
                  name: "blogPost",
                  displayName: "Blog post",
                  slug: "blog-post-ahgF3gfS2q",
                  description: "A Blog Entry is an informal diary-style post",
                  category: "post",
                  createdAt: "2021-01-16T06:37:51.566Z",
                  updatedAt: "2021-01-16T06:38:26.442Z",
                },
              },
            ],
          },
          {
            displayName: "Blog more stories",
            name: "blogMoreStories",
            slug: "blog-more-stories-fS9ng1TArv",
            description: "List of more stories at bottom of blog detail page",
            isDetail: false,
            templateContexts: [
              {
                id: "60028a0573764a0013bf23b4",
                template: {
                  name: "previewGrid1",
                  displayName: "Preview grid 1",
                  slug: "preview-grid-1-VdSzTEAThZ",
                  fileName: "preview-grid-1",
                  cmpName: "PreviewGrid1",
                  repoUrl: "",
                },
                list: {
                  limit: 2,
                  contentType: {
                    _id: "600289bf73764a0013bf22fd",
                    moduleLibrary: "600289bf73764a0013bf22f8",
                    displayName: "Blog post",
                    slug: "blog-post-ahgF3gfS2q",
                  },
                },
              },
            ],
          },
        ],
      },
      sectionNames: ["blogHeroPost", "blogList"],
    },
    blogPostArchive: {
      page: {
        name: "blogPostArchive",
        displayName: "Blog post archive",
        slug: "blog-post-archive-fPJSIsOKj_7",
        title: "Blog post archive",
        description: "",
        fileName: "blog-post-archive",
        isCorePage: true,
        path: "/",
        depth: 0,
        sysConfig: { isExcludeFromMenu: true },
      },
      sections: [
        {
          displayName: "Blog post archive list",
          name: "blogPostArchiveList",
          slug: "blog-archive-list-ARxP6D6WTc",
          description: "List of archive blog entries",
          isDetail: false,
          templateContexts: [
            {
              id: "60028a0573764a0013bf23b9",
              template: {
                name: "previewList1",
                displayName: "Preview list 1",
                slug: "preview-list-1-zQOaWr5kim",
                fileName: "preview-list-1",
                cmpName: "PreviewList1",
                repoUrl: "",
              },
              list: {
                contentType: {
                  _id: "600289bf73764a0013bf22fd",
                  moduleLibrary: "600289bf73764a0013bf22f8",
                  displayName: "Blog post",
                  slug: "blog-post-ahgF3gfS2q",
                },
              },
              params: [{ key: "fields.tags", value: "tag" }],
            },
          ],
        },
      ],
      sectionNames: ["blogPostArchiveList"],
    },
  },
  sections: {
    mainLanding: {
      displayName: "Main landing",
      name: "mainLanding",
      slug: "main-landing-w_JFqRP461",
      description: "Landing section of Home page",
      isDetail: false,
      templateContexts: [
        {
          id: "60028a0473764a0013bf2393",
          template: {
            name: "mediaCover1",
            displayName: "Media cover 1",
            slug: "media-cover-1-S7QNKggP7v",
            fileName: "media-cover-1",
            cmpName: "MediaCover1",
            repoUrl: "",
          },
          contentType: {
            id: "600289bf73764a0013bf22fa",
            name: "mainLanding",
            displayName: "Main landing",
            slug: "main-landing-qjck1E49b6",
            description: "Landing section of site",
            category: "component",
            createdAt: "2021-01-16T06:37:51.426Z",
            updatedAt: "2021-01-16T06:39:00.852Z",
          },
          item: {
            id: "60028a0473764a0013bf2394",
            slug: "main-landing-qjck1e49b6-component",
            title: "Sem nulla pharetra diam sit amet",
            currentVersion: "60028a0473764a0013bf2395",
            category: "component",
            status: "published",
            contentType: "600289bf73764a0013bf22fa",
            createdAt: "2021-01-16T06:39:00.825Z",
            updatedAt: "2021-01-16T06:39:00.825Z",
            fields: {
              heading: "Sem nulla pharetra diam sit amet",
              blurb:
                "Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. Cursus vitae congue mauris rhoncus. Orci sagittis eu volutpat.",
              undefined: "main-landing-qjck1e49b6-component",
            },
          },
          config: {
            cta1Href: "/contact",
            cta1Label: "Get a quote",
            cta2Href: "/services",
            cta2Label: "Our services",
          },
        },
      ],
    },
    servicesLanding: {
      displayName: "Services landing",
      name: "servicesLanding",
      slug: "services-landing-3Xky7MnK0g",
      description: "Landing section of Services page",
      isDetail: false,
      templateContexts: [
        {
          id: "60028a0473764a0013bf239a",
          template: {
            name: "mediaCover2",
            displayName: "Media cover 2",
            slug: "media-cover-2-GcTWO_4PAc",
            fileName: "media-cover-2",
            cmpName: "MediaCover2",
            repoUrl: "",
          },
          contentType: {
            id: "600289bf73764a0013bf22fb",
            name: "servicesLanding",
            displayName: "Services landing",
            slug: "services-landing-5oIpZmxpGw",
            description: "Landing section of the Services page",
            category: "component",
            createdAt: "2021-01-16T06:37:51.469Z",
            updatedAt: "2021-01-16T06:39:00.930Z",
          },
          item: {
            id: "60028a0473764a0013bf239b",
            slug: "services-landing-5oipzmxpgw-component",
            title: "Aliquam nulla facilisi cras fermentum odio",
            currentVersion: "60028a0473764a0013bf239c",
            category: "component",
            status: "published",
            contentType: "600289bf73764a0013bf22fb",
            createdAt: "2021-01-16T06:39:00.900Z",
            updatedAt: "2021-01-16T06:39:00.900Z",
            fields: {
              heading: "Aliquam nulla facilisi cras fermentum odio",
              blurb:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat scelerisque leo, ac tincidunt ex feugiat vel. Nunc volutpat ex libero, vel imperdiet urna facilisis a. Nullam ac magna quis nunc tempor maximus eget at ligula.",
              undefined: "services-landing-5oipzmxpgw-component",
            },
          },
        },
      ],
    },
    servicesList: {
      displayName: "Services list",
      name: "servicesList",
      slug: "services-list-88T9Dly9k8",
      description: "List of services",
      isDetail: false,
      templateContexts: [
        {
          id: "60028a0473764a0013bf23a1",
          template: {
            name: "mediaBlocklist2",
            displayName: "Media blocklist 2",
            slug: "media-blocklist-2-64l9uvW3Ov",
            fileName: "media-blocklist-2",
            cmpName: "MediaBlocklist2",
            repoUrl: "",
          },
          list: {
            limit: 3,
            contentType: {
              _id: "600289bf73764a0013bf22fc",
              moduleLibrary: "600289bf73764a0013bf22f8",
              displayName: "Service",
              slug: "service-Y5Z8cz2Cup",
            },
            isMaster: true,
          },
        },
      ],
    },
    blogHeroPost: {
      displayName: "Blog hero post",
      name: "blogHeroPost",
      slug: "blog-hero-post-c7noB12eKk",
      description: "First post from a list of entries",
      isDetail: false,
      templateContexts: [
        {
          id: "60028a0573764a0013bf23a6",
          template: {
            name: "previewHeroBlock1",
            displayName: "Preview hero block 1",
            slug: "preview-hero-block-1-xvxkP3WND5",
            fileName: "preview-hero-block-1",
            cmpName: "PreviewHeroBlock1",
            repoUrl: "",
          },
          list: {
            contentType: {
              _id: "600289bf73764a0013bf22fd",
              moduleLibrary: "600289bf73764a0013bf22f8",
              displayName: "Blog post",
              slug: "blog-post-ahgF3gfS2q",
            },
          },
        },
      ],
    },
    blogList: {
      displayName: "Blog list",
      name: "blogList",
      slug: "blog-list-7SbriZ6_lAK",
      description: "List of blog entries",
      isDetail: false,
      templateContexts: [
        {
          id: "60028a0573764a0013bf23ab",
          template: {
            name: "previewGrid2",
            displayName: "Preview grid 2",
            slug: "preview-grid-2-iEA5b6gTaYL",
            fileName: "preview-grid-2",
            cmpName: "PreviewGrid2",
            repoUrl: "",
          },
          list: {
            contentType: {
              _id: "600289bf73764a0013bf22fd",
              moduleLibrary: "600289bf73764a0013bf22f8",
              displayName: "Blog post",
              slug: "blog-post-ahgF3gfS2q",
            },
          },
          config: { offset: 1 },
        },
      ],
    },
    blogPostArchiveList: {
      displayName: "Blog post archive list",
      name: "blogPostArchiveList",
      slug: "blog-archive-list-ARxP6D6WTc",
      description: "List of archive blog entries",
      isDetail: false,
      templateContexts: [
        {
          id: "60028a0573764a0013bf23b9",
          template: {
            name: "previewList1",
            displayName: "Preview list 1",
            slug: "preview-list-1-zQOaWr5kim",
            fileName: "preview-list-1",
            cmpName: "PreviewList1",
            repoUrl: "",
          },
          list: {
            contentType: {
              _id: "600289bf73764a0013bf22fd",
              moduleLibrary: "600289bf73764a0013bf22f8",
              displayName: "Blog post",
              slug: "blog-post-ahgF3gfS2q",
            },
          },
          params: [{ key: "fields.tags", value: "tag" }],
        },
      ],
    },
  },
  pageOrder: ["home", "services", "blog", "blogPostArchive"],
  layout: {
    type: "standard",
    sections: [
      {
        displayName: "Header",
        name: "header",
        slug: "header",
        description: "",
        templateContexts: [],
        currentTemplateContext: {
          _id: "5f8553d27d0e142c6440d5ce",
          name: "headerBlock1",
          displayName: "Header block 1",
          cmpName: "HeaderBlock1",
          slug: "header-1-block-abc",
          fileName: "header-block-1",
          repoUrl: "",
          component: "5f8553887d0e142c6440d5c9",
          createdAt: "2020-10-13T07:14:26.340Z",
          updatedAt: "2020-10-13T07:14:26.340Z",
          __v: 0,
          contentType: {
            displayName: "Header",
            description: "Header of the site",
            iconName: "page",
            category: "component",
            fields: [
              {
                displayName: "Logo",
                description: null,
                metadata: { required: true },
                type: "Image",
                name: "logo",
              },
            ],
          },
          item: { fields: { logo: "" } },
        },
      },
      {
        displayName: "Footer",
        name: "footer",
        slug: "footer",
        description: "",
        templateContexts: [],
        currentTemplateContext: {
          _id: "5f8553d27d0e142c6440d5ce",
          name: "footerBlock1",
          displayName: "Footer block 1",
          cmpName: "FooterBlock1",
          slug: "footer-block-1-abc",
          fileName: "footer-block-1",
          repoUrl: "",
          component: "5f8553887d0e142c6440d5c9",
          createdAt: "2020-10-13T07:14:26.340Z",
          updatedAt: "2020-10-13T07:14:26.340Z",
          __v: 0,
        },
        item: {},
        contentType: {},
      },
    ],
  },
  displayName: "New site",
};

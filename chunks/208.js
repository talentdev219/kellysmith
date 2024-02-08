"use strict";
exports.id = 208;
exports.ids = [208];
exports.modules = {

/***/ 8587:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FadeRight)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1527);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function FadeRight({ children , duration , delay , className , whileInView =false  }) {
    const animation = {
        opacity: 1,
        x: 0,
        transition: {
            duration,
            ease: "easeInOut",
            delay
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        initial: {
            x: -100,
            opacity: 0
        },
        whileInView: whileInView ? animation : {},
        animate: !whileInView ? animation : {},
        className: className,
        children: children
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7208:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Skills)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1527);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _animation_FadeRight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8587);
/* harmony import */ var _data_skills__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6533);
/* harmony import */ var _hooks_useScreenBreakpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3317);
/* harmony import */ var _hooks_useDebounceValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8361);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _animation_FadeRight__WEBPACK_IMPORTED_MODULE_2__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _animation_FadeRight__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function SkillPill(props) {
    const { name , icon  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex w-max items-center gap-2 overflow-hidden rounded-lg border border-tera-500/20 bg-white px-4 py-3 text-sm shadow-sm dark:bg-zinc-800 sm:text-base md:px-6 md:py-3 md:text-lg",
        children: [
            icon,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "font-medium",
                children: name
            })
        ]
    });
}
function Skills() {
    const isMobile = (0,_hooks_useScreenBreakpoint__WEBPACK_IMPORTED_MODULE_4__/* .useScreenBreakpoint */ .O)(640);
    const isMobileDebonced = (0,_hooks_useDebounceValue__WEBPACK_IMPORTED_MODULE_5__/* .useDebounceValue */ .n)(isMobile, 600);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "overflow-hidden px-6 py-32 sm:px-14 md:px-20",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative mx-auto max-w-7xl",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "text-xl font-semibold sm:text-4xl",
                    children: "Skills"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.AnimatePresence, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-xs font-semibold sm:text-sm",
                                children: "Entrepreneur"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mt-2 flex flex-wrap gap-4 text-xl dark:text-zinc-100",
                                children: _data_skills__WEBPACK_IMPORTED_MODULE_3__/* .LANGUAGES.map */ .a2.map((pill, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animation_FadeRight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        duration: 0.4,
                                        delay: 0.1 + index * 0.1,
                                        whileInView: !isMobileDebonced,
                                        className: "-z-20",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SkillPill, {
                                            ...pill
                                        })
                                    }, `lang-${index}`))
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.AnimatePresence, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-xs font-semibold sm:text-sm",
                                children: "Investor"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mt-2 flex flex-wrap gap-4 text-xl dark:text-zinc-100",
                                children: _data_skills__WEBPACK_IMPORTED_MODULE_3__/* .LIBRARY_FRAMEWORK.map */ .eJ.map((pill, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animation_FadeRight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        duration: 0.4,
                                        delay: 0.1 + index * 0.1,
                                        whileInView: !isMobileDebonced,
                                        className: "-z-20",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SkillPill, {
                                            ...pill
                                        })
                                    }, `lib-frame-${index}`))
                            })
                        ]
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a2": () => (/* binding */ LANGUAGES),
/* harmony export */   "eJ": () => (/* binding */ LIBRARY_FRAMEWORK)
/* harmony export */ });
/* unused harmony exports BACKEND_PILL, DATABASE_ORM_PILL, TOOLS_TECHNOLOGIES */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1527);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5941);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(764);
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_si__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7549);




const LANGUAGES = [
    {
        name: "Creativity",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "relative h-5 w-5 sm:h-8 sm:w-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "html logo",
                src: "/icons/creativity.svg",
                fill: true
            })
        })
    },
    {
        name: "Risk-taking",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "relative h-5 w-5 sm:h-8 sm:w-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "css logo",
                src: "/icons/risk-taking.svg",
                fill: true
            })
        })
    },
    {
        name: "Adaptability",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "relative h-5 w-5 sm:h-8 sm:w-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "sass logo",
                src: "/icons/adaptability.svg",
                fill: true
            })
        })
    },
    {
        name: "Leadership",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "relative h-5 w-5 sm:h-8 sm:w-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "javascript logo",
                src: "/icons/leadership.svg",
                fill: true
            })
        })
    },
    {
        name: "Strategic thinking",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "relative h-5 w-5 sm:h-8 sm:w-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "typescript logo",
                src: "/icons/Strategic thinking.svg",
                fill: true
            })
        })
    },
    {
        name: "Financial management",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "relative h-5 w-5 sm:h-8 sm:w-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "python logo",
                src: "/icons/Financial management.svg",
                fill: true
            })
        })
    },
    {
        name: "Sales and Marketing",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "relative h-5 w-5 sm:h-8 sm:w-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "python logo",
                src: "/icons/sales and marketing.svg",
                fill: true
            })
        })
    },
    {
        name: "Networking",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "relative h-5 w-5 sm:h-8 sm:w-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "python logo",
                src: "/icons/networking.svg",
                fill: true
            })
        })
    }
];
const LIBRARY_FRAMEWORK = [
    {
        name: "Analytical Skills",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "relative h-5 w-5 sm:h-8 sm:w-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "reactjs logo",
                src: "/icons/creativity.svg",
                fill: true
            })
        })
    },
    {
        name: "Risk management",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "relative h-5 w-5 sm:h-8 sm:w-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "vuejs logo",
                src: "/icons/vue.svg",
                fill: true
            })
        })
    },
    // {
    //   name: "Nextjs",
    //   icon: <SiNextdotjs className="h-5 w-5 sm:h-8 sm:w-8" />,
    // },
    // {
    //   name: "React-router-dom",
    //   icon: <ReactRouterDomIcon className="h-5 w-5 sm:h-8 sm:w-8" />,
    // },
    {
        name: "Due Dilligence",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "relative h-5 w-5 sm:h-8 sm:w-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "redux logo",
                src: "/icons/redux.svg",
                fill: true
            })
        })
    },
    {
        name: "Negotiation Skills",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "relative h-5 w-5 sm:h-8 sm:w-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "tailwindcss logo",
                src: "/icons/tailwindcss.svg",
                fill: true
            })
        })
    },
    {
        name: "Patience",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "relative h-5 w-5 sm:h-8 sm:w-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "mui logo",
                src: "/icons/mui.svg",
                fill: true
            })
        })
    }
];
const BACKEND_PILL = [
    {
        name: "Nodejs",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "relative h-5 w-5 sm:h-8 sm:w-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "nodejs logo",
                src: "/icons/nodejs.svg",
                fill: true
            })
        })
    },
    {
        name: "Express",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiExpress, {
            className: "h-5 w-5 sm:h-8 sm:w-8"
        })
    },
    {
        name: "Socket.io",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiSocketdotio, {
            className: "h-5 w-5 sm:h-8 sm:w-8"
        })
    },
    {
        name: "CodeIgniter",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "relative h-5 w-5 sm:h-8 sm:w-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "codeigniter logo",
                src: "/icons/CI.svg",
                fill: true
            })
        })
    },
    {
        name: "Laravel",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "relative h-5 w-5 sm:h-8 sm:w-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "laravel logo",
                src: "/icons/laravel.svg",
                fill: true
            })
        })
    },
    {
        name: "Django",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "relative h-5 w-5 sm:h-8 sm:w-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "django logo",
                src: "/icons/django.svg",
                fill: true
            })
        })
    }
];
const DATABASE_ORM_PILL = [
    {
        name: "MongoDB",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "relative h-5 w-5 sm:h-8 sm:w-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "mongodb logo",
                src: "/icons/mongodb.svg",
                fill: true
            })
        })
    },
    {
        name: "MySQL",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "relative h-5 w-5 sm:h-8 sm:w-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "mysql logo",
                src: "/icons/mysql.svg",
                fill: true
            })
        })
    },
    {
        name: "PostgreSQL",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "relative h-5 w-5 sm:h-8 sm:w-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "postgresql logo",
                src: "/icons/postgresql.svg",
                fill: true
            })
        })
    },
    {
        name: "GraphQL",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "relative h-5 w-5 sm:h-8 sm:w-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "graphql logo",
                src: "/icons/graphql.svg",
                fill: true
            })
        })
    },
    {
        name: "Prisma",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiPrisma, {
            className: "h-5 w-5 fill-[#2d3748] dark:fill-zinc-100 sm:h-8 sm:w-8"
        })
    }
];
const TOOLS_TECHNOLOGIES = [
    {
        name: "Git",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "relative h-5 w-5 sm:h-8 sm:w-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "git logo",
                src: "/icons/git.svg",
                fill: true
            })
        })
    },
    {
        name: "Github",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_3__/* .GithubIcon */ .ET, {
            className: "h-5 w-5 sm:h-8 sm:w-8"
        })
    },
    {
        name: "Docker",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "relative h-5 w-5 sm:h-8 sm:w-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "docker logo",
                src: "/icons/docker.svg",
                fill: true
            })
        })
    },
    {
        name: "Postman",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "relative h-5 w-5 sm:h-8 sm:w-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "postman logo",
                src: "/icons/postman.svg",
                fill: true
            })
        })
    },
    {
        name: "Vscode",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "relative h-5 w-5 sm:h-8 sm:w-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "vscode logo",
                src: "/icons/vscode.svg",
                fill: true
            })
        })
    }
];


/***/ }),

/***/ 8361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ useDebounceValue)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useDebounceValue(value, wait) {
    const [_value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
    const refMounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const refTimeout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const cancel = ()=>window.clearTimeout(refTimeout.current);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (refMounted.current) {
            cancel();
            refTimeout.current = window.setTimeout(()=>{
                setValue(value);
            }, wait);
        }
    }, [
        value,
        wait
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        refMounted.current = true;
        return cancel;
    }, []);
    return _value;
}


/***/ }),

/***/ 3317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useScreenBreakpoint)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useScreenBreakpoint(breakpoint) {
    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const handleResize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setWidth(window.innerWidth < breakpoint);
    }, [
        breakpoint
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        handleResize();
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, [
        handleResize
    ]);
    return width;
}


/***/ })

};
;
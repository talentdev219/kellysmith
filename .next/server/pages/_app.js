(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3907:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9098);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1895:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ AnimatedLogo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1527);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function AnimatedLogo() {
    // const iconVariant: Variants={
    //   hidden: {
    //     pathLength: 0,
    //     fill: "rgba(0, 0, 0, 0)",
    //   },
    //   visible: {
    //     pathLength: 1,
    //     fill: "#777777",
    //   },
    // };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.AnimatePresence, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.svg, {
            viewBox: "0 0 60 60",
            xmlns: "http://www.w3.org/2000/svg",
            className: "fill-teal-500 stroke-teal-300 dark:fill-teal-300",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.path, {
                    d: "M45.9 21.6c0 11.926 -9.674 21.6 -21.6 21.6 -11.929 0 -21.6 -9.674 -21.6 -21.6C2.7 9.671 12.371 0 24.3 0c11.926 0 21.6 9.671 21.6 21.6",
                    strokeWidth: "1",
                    // variants={iconVariant}
                    variants: {
                        hidden: {
                            pathLength: 0,
                            fill: "rgba(0, 0, 0, 0)"
                        },
                        visible: {
                            pathLength: 1,
                            fill: "#FFCC4D"
                        }
                    },
                    initial: "hidden",
                    animate: "visible",
                    transition: {
                        default: {
                            duration: 3,
                            ease: "easeInOut"
                        },
                        fill: {
                            duration: 3,
                            ease: [
                                1,
                                0,
                                0.8,
                                1
                            ]
                        }
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.path, {
                    d: "M34.912 21.774a0.502 0.502 0 0 0 -0.722 -0.039c-0.045 0.039 -4.459 3.915 -9.89 3.915 -5.418 0 -9.846 -3.876 -9.89 -3.915a0.505 0.505 0 0 0 -0.722 0.039 0.769 0.769 0 0 0 -0.107 0.848C13.727 22.912 17.238 29.7 24.3 29.7s10.575 -6.788 10.719 -7.078a0.769 0.769 0 0 0 -0.107 -0.848z",
                    strokeWidth: "1",
                    variants: {
                        hidden: {
                            pathLength: 0,
                            fill: "rgba(0, 0, 0, 0)"
                        },
                        visible: {
                            pathLength: 1,
                            fill: "#664500"
                        }
                    },
                    initial: "hidden",
                    animate: "visible",
                    transition: {
                        default: {
                            duration: 3,
                            ease: "easeInOut"
                        },
                        fill: {
                            duration: 3,
                            ease: [
                                1,
                                0,
                                0.8,
                                1
                            ]
                        }
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.path, {
                    d: "m18.081 31.258 -2.078 -2.996s-0.733 -1.17 -1.905 -0.439c-1.17 0.73 -0.437 1.902 -0.437 1.902l2.373 4.563s0.194 1.037 -1.239 -0.123c-0.625 -0.505 -0.266 -0.22 -0.266 -0.22l-0.594 -0.487 -7.413 -6.086s-0.957 -1.01 -1.835 0.057c-0.875 1.068 0.301 1.81 0.301 1.81l7.011 5.759c-0.162 0.162 -0.651 0.721 -0.81 0.895l-7.502 -6.156s-0.959 -1.011 -1.833 0.055c-0.878 1.068 0.3 1.81 0.3 1.81l7.499 6.159c-0.139 0.189 -0.49 0.643 -0.62 0.829l-6.469 -5.311s-0.959 -1.01 -1.833 0.057c-0.879 1.068 0.3 1.812 0.3 1.812l6.877 5.648c-0.086 0.24 -0.49 0.872 -0.553 1.107l-4.957 -4.066s-0.957 -1.015 -1.832 0.055c-0.878 1.068 0.3 1.81 0.3 1.81l8.005 6.572 0.533 0.44a8.289 8.289 0 0 0 11.34 -12.039c-0.984 -1.056 -1.836 -2.232 -2.662 -3.418zm29.957 6.637c-0.875 -1.071 -1.832 -0.055 -1.832 -0.055l-4.957 4.066c-0.063 -0.235 -0.467 -0.868 -0.553 -1.107l6.877 -5.648s1.179 -0.744 0.301 -1.812c-0.875 -1.067 -1.833 -0.057 -1.833 -0.057l-6.469 5.311c-0.13 -0.188 -0.482 -0.641 -0.62 -0.829l7.499 -6.159s1.179 -0.743 0.301 -1.81c-0.875 -1.067 -1.832 -0.055 -1.832 -0.055l-7.503 6.156c-0.158 -0.174 -0.647 -0.733 -0.81 -0.895l7.011 -5.759s1.175 -0.743 0.301 -1.81c-0.878 -1.067 -1.835 -0.057 -1.835 -0.057l-7.413 6.086 -0.593 0.487s1.337 -1.135 -0.266 0.22c-1.604 1.355 -1.239 0.123 -1.239 0.123l2.373 -4.563s0.733 -1.172 -0.437 -1.902c-1.173 -0.732 -1.905 0.439 -1.905 0.439l-2.076 2.996c-0.828 1.187 -1.679 2.363 -2.665 3.42a8.289 8.289 0 0 0 11.341 12.039l0.535 -0.44 8.005 -6.572c-0.007 -0.001 1.17 -0.744 0.294 -1.812z",
                    strokeWidth: "1",
                    variants: {
                        hidden: {
                            pathLength: 0,
                            fill: "rgba(0, 0, 0, 0)"
                        },
                        visible: {
                            pathLength: 1,
                            fill: "#F4900C"
                        }
                    },
                    initial: "hidden",
                    animate: "visible",
                    transition: {
                        default: {
                            duration: 3,
                            ease: "easeInOut"
                        },
                        fill: {
                            duration: 3,
                            ease: [
                                1,
                                0,
                                0.8,
                                1
                            ]
                        }
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.path, {
                    d: "M37.364 14.827C37.295 14.662 35.629 10.8 32.206 10.8c-3.421 0 -5.087 3.862 -5.156 4.027a0.632 0.632 0 0 0 0.166 0.724 0.559 0.559 0 0 0 0.706 0.016c0.014 -0.012 1.459 -1.102 4.284 -1.102 2.807 0 4.251 1.076 4.285 1.102a0.556 0.556 0 0 0 0.705 -0.014 0.632 0.632 0 0 0 0.169 -0.726zm-14.85 0C22.444 14.662 20.779 10.8 17.356 10.8c-3.421 0 -5.087 3.862 -5.157 4.027a0.632 0.632 0 0 0 0.167 0.724c0.203 0.173 0.494 0.178 0.706 0.016 0.015 -0.012 1.459 -1.102 4.284 -1.102 2.808 0 4.251 1.076 4.284 1.102a0.559 0.559 0 0 0 0.344 0.12 0.563 0.563 0 0 0 0.36 -0.134 0.633 0.633 0 0 0 0.17 -0.726z",
                    strokeWidth: "1",
                    variants: {
                        hidden: {
                            pathLength: 0,
                            fill: "rgba(0, 0, 0, 0)"
                        },
                        visible: {
                            pathLength: 1,
                            fill: "#664500"
                        }
                    },
                    initial: "hidden",
                    animate: "visible",
                    transition: {
                        default: {
                            duration: 3,
                            ease: "easeInOut"
                        },
                        fill: {
                            duration: 3,
                            ease: [
                                1,
                                0,
                                0.8,
                                1
                            ]
                        }
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.path, {
                    d: "M15.096 34.395s-3.501 4.474 0.653 10.071c0.286 0.385 1.013 0.197 0.703 -0.254 -0.338 -0.491 -3.713 -5.26 -0.54 -9.527 0 0 -0.514 -0.063 -0.817 -0.29zm18.337 0.132s3.502 4.474 -0.653 10.071c-0.286 0.385 -1.013 0.197 -0.703 -0.254 0.338 -0.491 3.713 -5.26 0.54 -9.527 -0.001 0.001 0.514 -0.062 0.817 -0.29z",
                    strokeWidth: "1",
                    variants: {
                        hidden: {
                            pathLength: 0,
                            fill: "rgba(0, 0, 0, 0)"
                        },
                        visible: {
                            pathLength: 1,
                            fill: "#B55005"
                        }
                    },
                    initial: "hidden",
                    animate: "visible",
                    transition: {
                        default: {
                            duration: 3,
                            ease: "easeInOut"
                        },
                        fill: {
                            duration: 3,
                            ease: [
                                1,
                                0,
                                0.8,
                                1
                            ]
                        }
                    }
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ routes)
/* harmony export */ });
const routes = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "About",
        href: "/about"
    },
    {
        title: "Projects",
        href: "/projects"
    }
];


/***/ }),

/***/ 9484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MainLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1527);
/* harmony import */ var next_font_google_target_css_path_src_layout_MainLayout_tsx_import_Montserrat_arguments_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8137);
/* harmony import */ var next_font_google_target_css_path_src_layout_MainLayout_tsx_import_Montserrat_arguments_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_layout_MainLayout_tsx_import_Montserrat_arguments_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6907);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_classNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3797);
/* harmony import */ var _layout_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3868);
/* harmony import */ var _data_navigationRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6470);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__]);
_layout_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Footer = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(549), __webpack_require__.e(938)]).then(__webpack_require__.bind(__webpack_require__, 7938)), {
    loadableGenerated: {
        modules: [
            "..\\layout\\MainLayout.tsx -> " + "@/layout/Footer"
        ]
    },
    ssr: true
});
function MainLayout(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (0,_utility_classNames__WEBPACK_IMPORTED_MODULE_4__/* .classNames */ .A)("min-h-screen", (next_font_google_target_css_path_src_layout_MainLayout_tsx_import_Montserrat_arguments_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_5___default().className)),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        routes: _data_navigationRoutes__WEBPACK_IMPORTED_MODULE_3__/* .routes */ ._
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                        children: props.children
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Footer, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4640:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MenuLogo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1527);
/* harmony import */ var _utility_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3797);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Path = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.path, {
        fill: "transparent",
        strokeWidth: "3",
        strokeLinecap: "round",
        ...props
    });
function MenuLogo(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        "aria-label": "open menu",
        onClick: props.toggle,
        className: (0,_utility_classNames__WEBPACK_IMPORTED_MODULE_2__/* .classNames */ .A)("relative z-50 flex h-12 w-12 select-none items-center gap-1 rounded-full p-3 py-1 font-semibold shadow-md ring-1 ring-zinc-200 backdrop-blur-md dark:ring-teal-600/50 md:hidden", props.open ? "hidden" : "bg-zinc-100 dark:bg-zinc-900"),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.svg, {
            width: "100%",
            height: "100%",
            viewBox: "0 0 23 23",
            className: (0,_utility_classNames__WEBPACK_IMPORTED_MODULE_2__/* .classNames */ .A)("mt-1 ", props.open ? "stroke-zinc-100 dark:stroke-teal-600" : "stroke-tera-500 dark:stroke-teal-400"),
            animate: props.open ? "open" : "close",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Path, {
                    variants: {
                        close: {
                            d: "M 2 2.5 L 20 2.5"
                        },
                        open: {
                            d: "M 3 16.5 L 17 2.5"
                        }
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Path, {
                    d: "M 2 9.423 L 20 9.423",
                    variants: {
                        close: {
                            opacity: 1
                        },
                        open: {
                            opacity: 0
                        }
                    },
                    transition: {
                        duration: 0.1
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Path, {
                    variants: {
                        close: {
                            d: "M 2 16.346 L 20 16.346"
                        },
                        open: {
                            d: "M 3 2.5 L 17 16.346"
                        }
                    }
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3868:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1527);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7709);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var _animation_AnimatedLogo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1895);
/* harmony import */ var _utility_classNames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3797);
/* harmony import */ var _layout_Navbar_MenuButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4640);
/* harmony import */ var _layout_Navbar_ThemeSwitch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(581);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_5__, _animation_AnimatedLogo__WEBPACK_IMPORTED_MODULE_6__, _layout_Navbar_MenuButton__WEBPACK_IMPORTED_MODULE_7__, _headlessui_react__WEBPACK_IMPORTED_MODULE_9__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_5__, _animation_AnimatedLogo__WEBPACK_IMPORTED_MODULE_6__, _layout_Navbar_MenuButton__WEBPACK_IMPORTED_MODULE_7__, _headlessui_react__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function Navbar(props) {
    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const toggleModal = ()=>{
        setIsModalOpen((prev)=>!prev);
    };
    const handleClick = (href)=>{
        toggleModal();
        router.push(href);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "sticky top-0 z-50 mt-2 px-6 py-8 sm:mt-8 sm:px-14 md:px-20",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mx-auto flex items-center justify-between lg:max-w-7xl",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/",
                        className: "flex items-center justify-center drop-shadow-teralight",
                        "aria-label": "Return to home page",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative h-12 w-12 sm:h-14 sm:w-14",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animation_AnimatedLogo__WEBPACK_IMPORTED_MODULE_6__/* .AnimatedLogo */ .i, {})
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: "hidden items-center gap-2 rounded-full px-2 py-2 shadow-md ring-1 ring-zinc-200 backdrop-blur-md dark:ring-teal-600/50 md:flex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "flex gap-2 text-sm font-medium",
                                children: props.routes.map((_link, index)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "my-3 transition-transform duration-100 hover:scale-[1.1]",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: _link.href,
                                            className: (0,_utility_classNames__WEBPACK_IMPORTED_MODULE_10__/* .classNames */ .A)(pathName === _link.href ? "font-semibold text-white dark:text-zinc-900 dark:hover:text-white" : "", "group relative mx-3 rounded-full px-3 py-2 transition-colors duration-200"),
                                            children: [
                                                _link.href === pathName && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.span, {
                                                    layoutId: "tab-pill",
                                                    animate: {
                                                        transition: {
                                                            x: {
                                                                type: "spring",
                                                                stiffness: 300,
                                                                damping: 30
                                                            }
                                                        }
                                                    },
                                                    className: "absolute inset-0 -z-10 rounded-full bg-tera-500 group-hover:bg-tera-500/80 dark:bg-teal-400 dark:group-hover:bg-teal-500"
                                                }),
                                                _link.title
                                            ]
                                        })
                                    }, index);
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_Navbar_ThemeSwitch__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_Navbar_MenuButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            open: isModalOpen,
                            toggle: toggleModal
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Transition, {
                show: isModalOpen,
                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Dialog, {
                    as: "div",
                    className: "z-50",
                    onClose: setIsModalOpen,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "fixed inset-0 flex items-center justify-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Transition.Child, {
                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 bottom-full",
                            enterTo: "opacity-100 bottom-[15%]",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 bottom-[15%]",
                            leaveTo: "opacity-0 bottom-full",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Dialog.Panel, {
                                className: "pointer-events-none absolute flex min-h-[85%] w-full flex-col items-center justify-center overflow-y-auto rounded-b-2xl border-2 border-teal-100/20 border-teal-600 bg-zinc-100 px-6 py-8 text-teal-600 shadow-lg shadow-teal-200/10 dark:bg-teal-700 dark:text-zinc-100 md:px-10 md:py-16",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "pointer-events-auto flex flex-col items-center gap-6 text-center",
                                        children: [
                                            props.routes.map((link, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    className: "group relative py-2 text-3xl font-medium",
                                                    onClick: ()=>handleClick(link.href),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: (0,_utility_classNames__WEBPACK_IMPORTED_MODULE_10__/* .classNames */ .A)(pathName === link.href ? "w-full" : "w-0", "absolute -bottom-1 left-0 h-1 rounded-lg bg-teal-600 transition-[width] duration-300 group-hover:w-full dark:bg-zinc-100")
                                                        }),
                                                        link.title
                                                    ]
                                                }, i)),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_Navbar_ThemeSwitch__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                setClose: setIsModalOpen
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "absolute bottom-0 py-6",
                                        children: "\xa92023 Amit Chauhan"
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ThemeSwitch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1527);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);



function ThemeSwitch(props) {
    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { theme , setTheme , resolvedTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>setMounted(true), []);
    const handleThemeChange = ()=>{
        if (props.setClose) {
            props.setClose(false);
        }
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "button",
        "aria-label": "toggle theme",
        className: "mt-8 h-10 w-10 rounded-full text-teal-600 transition-[scale] duration-200 hover:scale-[1.1] dark:text-white md:mr-4 md:mt-0 md:h-6 md:w-6 md:text-tera-500 md:dark:text-teal-400",
        onClick: handleThemeChange,
        children: mounted && (theme === "dark" || resolvedTheme === "dark" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    stroke: "currentColor",
                    strokeWidth: "0",
                    viewBox: "0 0 24 24",
                    height: "100%",
                    width: "100%",
                    fill: "transparent",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M12 4V2m0 20v-2m8-8h2M2 12h2m13.657-5.657L19.07 4.93M4.93 19.07l1.414-1.414m0-11.314L4.93 4.93M19.07 19.07l-1.414-1.414M12 17a5 5 0 100-10 5 5 0 000 10z"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "sr-only",
                    children: "toggle theme"
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            stroke: "currentColor",
            strokeWidth: "2",
            viewBox: "0 0 24 24",
            height: "100%",
            width: "100%",
            fill: "transparent",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            })
        }))
    });
}


/***/ }),

/***/ 9098:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1527);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _layout_MainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9484);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(233);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9752);
/* harmony import */ var _vercel_speed_insights_next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _layout_MainLayout__WEBPACK_IMPORTED_MODULE_3__, _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_6__, _vercel_speed_insights_next__WEBPACK_IMPORTED_MODULE_7__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _layout_MainLayout__WEBPACK_IMPORTED_MODULE_3__, _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_6__, _vercel_speed_insights_next__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function App({ Component , pageProps  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
                attribute: "class",
                defaultTheme: "light",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_MainLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
                        mode: "wait",
                        initial: false,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        }, router.asPath)
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_6__.Analytics, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_vercel_speed_insights_next__WEBPACK_IMPORTED_MODULE_7__.SpeedInsights, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ classNames)
/* harmony export */ });
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}


/***/ }),

/***/ 233:
/***/ (() => {



/***/ }),

/***/ 2296:
/***/ ((module) => {

"use strict";
module.exports = require("formik");

/***/ }),

/***/ 1162:
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 9274:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 3349:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 5609:
/***/ ((module) => {

"use strict";
module.exports = require("yup");

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = import("@headlessui/react");;

/***/ }),

/***/ 9752:
/***/ ((module) => {

"use strict";
module.exports = import("@vercel/analytics/react");;

/***/ }),

/***/ 7451:
/***/ ((module) => {

"use strict";
module.exports = import("@vercel/speed-insights/next");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [527,98,907,547], () => (__webpack_exec__(3907)));
module.exports = __webpack_exports__;

})();
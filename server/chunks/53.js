"use strict";
exports.id = 53;
exports.ids = [53];
exports.modules = {

/***/ 9053:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectShowcase)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1527);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5941);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7549);
/* harmony import */ var _components_ProjectShowcaseList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9852);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _components_ProjectShowcaseList__WEBPACK_IMPORTED_MODULE_6__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _components_ProjectShowcaseList__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const generateImageData = (proj)=>{
    return proj.map((p)=>p.image);
};
function ProjectShowcase(props) {
    const [currentImage, setCurrentImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const images = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return generateImageData(props.projects);
    }, [
        props.projects
    ]);
    const handleAnimate = (index)=>{
        if (index === currentImage) return;
        setCurrentImage(index);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "overflow-hidden px-6 py-32 sm:px-14 md:px-20",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative mx-auto max-w-7xl",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative right-0 top-0 hidden lg:block",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                            initial: {
                                x: "100%",
                                opacity: 0
                            },
                            animate: {
                                x: "55%",
                                y: "50%",
                                opacity: 1,
                                transition: {
                                    duration: 0.5
                                }
                            },
                            transition: {
                                type: "spring",
                                stiffness: 100
                            },
                            className: "absolute right-0 top-0 -z-50",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    src: images[currentImage].LIGHT,
                                    unoptimized: true,
                                    width: 100,
                                    height: 100,
                                    className: "h-auto w-1/2 rounded-lg border border-zinc-300 shadow-lg dark:hidden dark:border-teal-400/50",
                                    alt: `project ${currentImage}`
                                }),
                                images[currentImage].DARK !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    src: images[currentImage].DARK,
                                    unoptimized: true,
                                    width: 100,
                                    height: 100,
                                    className: "hidden h-auto w-1/2 rounded-lg border border-zinc-300 shadow-lg dark:inline-block dark:border-teal-400/20 dark:shadow-lg dark:shadow-emerald-400/5",
                                    alt: `project ${currentImage}`
                                })
                            ]
                        }, props.projects[currentImage].title)
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "text-xl font-semibold sm:text-3xl",
                    children: "My projects"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hidden flex-col gap-6 py-14 sm:gap-8 sm:py-20 md:gap-10 lg:flex",
                    children: props.projects.map((proj, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProjectShowcaseList__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            activeProject: currentImage,
                            toggleList: handleAnimate,
                            data: proj
                        }, index))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-col gap-4 py-14 sm:gap-8 sm:py-20 md:gap-10 lg:hidden",
                    children: props.projects.map((proj)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: proj.href,
                            className: "flex flex-col gap-1",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "text-3xl font-semibold text-teal-600 transition-colors duration-300 dark:text-teal-400 sm:text-4xl md:text-5xl lg:hidden",
                                            children: [
                                                proj.index + 1,
                                                "."
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "-underline-offset-1 text-3xl font-semibold text-teal-600 underline transition-colors duration-300 dark:text-teal-400 sm:text-4xl md:text-5xl lg:hidden",
                                            children: proj.title
                                        }, proj.title)
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "flex max-w-xl flex-wrap gap-2 text-base font-semibold text-zinc-800 dark:text-zinc-100 sm:text-lg",
                                    children: proj.tags.map((tag, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            children: [
                                                "#",
                                                tag
                                            ]
                                        }, index))
                                })
                            ]
                        }, proj.title))
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/projects",
                    className: "group relative flex max-w-max items-center gap-4 text-base font-semibold sm:text-lg md:text-xl",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "relative max-w-max",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "See more projects"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "absolute -bottom-1 left-0 h-[2px] w-0 origin-left rounded-lg bg-teal-600 transition-[width] duration-300 group-hover:w-full dark:bg-teal-400"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "h-8 w-8",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_5__/* .ArrowTopRight */ ._v, {
                                className: "rotate-45 text-teal-600 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.1] dark:text-teal-400"
                            })
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9852:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProjectShowcaseList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1527);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _utility_classNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3797);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function ProjectShowcaseList(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        className: (0,_utility_classNames__WEBPACK_IMPORTED_MODULE_3__/* .classNames */ .A)("group flex gap-4 "),
        onHoverStart: ()=>props.toggleList(props.data.index),
        onFocus: ()=>props.toggleList(props.data.index),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: (0,_utility_classNames__WEBPACK_IMPORTED_MODULE_3__/* .classNames */ .A)("hidden text-6xl font-semibold transition-colors duration-300 lg:block", props.activeProject === props.data.index ? "text-teal-600 dark:text-teal-400" : "text-teal-600/30 dark:text-teal-600/50"),
                children: [
                    props.data.index + 1,
                    "."
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "text-3xl font-semibold text-teal-600 transition-colors duration-300 dark:text-teal-400 sm:text-4xl md:text-5xl lg:hidden",
                children: [
                    props.data.index + 1,
                    "."
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: props.data.href,
                        className: "relative max-w-max",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (0,_utility_classNames__WEBPACK_IMPORTED_MODULE_3__/* .classNames */ .A)("hidden text-6xl font-semibold transition-colors duration-300 lg:block", props.activeProject === props.data.index ? "text-teal-600 dark:text-teal-400" : "text-teal-600/30 dark:text-teal-600/50"),
                                children: props.data.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "hover:-underline-offset-1 text-3xl font-semibold text-teal-600 transition-colors duration-300 hover:underline dark:text-teal-400 sm:text-4xl md:text-5xl lg:hidden",
                                children: props.data.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (0,_utility_classNames__WEBPACK_IMPORTED_MODULE_3__/* .classNames */ .A)("absolute -bottom-1 left-0 hidden h-1 origin-left rounded-lg bg-teal-600 transition-[width] duration-300 group-hover:w-full dark:bg-teal-400 lg:block", props.activeProject === props.data.index ? "w-full" : "w-0")
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "max-w-xl text-base font-semibold text-zinc-800 dark:text-zinc-100 sm:text-lg",
                        children: props.data.tags.map((tag)=>`#${tag} `)
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ classNames)
/* harmony export */ });
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}


/***/ })

};
;
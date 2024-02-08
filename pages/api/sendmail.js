"use strict";
(() => {
var exports = {};
exports.id = 424;
exports.ids = [424];
exports.modules = {

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 3896:
/***/ ((module) => {

module.exports = import("lru-cache");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ 4150:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ mailValidationSchema)
/* harmony export */ });
/* unused harmony export ContactForm */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1364);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5659);
/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(820);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const mailValidationSchema = yup__WEBPACK_IMPORTED_MODULE_4__.object({
    email: yup__WEBPACK_IMPORTED_MODULE_4__.string().email("Invalid email").required("Email required"),
    name: yup__WEBPACK_IMPORTED_MODULE_4__.string().required("Name required"),
    subject: yup__WEBPACK_IMPORTED_MODULE_4__.string().required("Subject required"),
    message: yup__WEBPACK_IMPORTED_MODULE_4__.string().required("Message required")
});
const options = {
    root: null,
    rootMargin: "100px",
    threshold: 0.1
};
function ContactForm() {
    const initialFormValues = {
        email: "",
        name: "",
        message: "",
        subject: ""
    };
    const refSendBtn = useRef(null);
    const [isBtnVisible, setIsBtnVisible] = useState(false);
    const [isSendingMail, setIsSendingMail] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [showToast, setShowToast] = useState({
        type: null,
        value: false
    });
    const observerCallback = (entries)=>{
        const [entry] = entries;
        setIsBtnVisible(!entry.isIntersecting);
    };
    const handleSubmit = async (values)=>{
        setIsSendingMail(true);
        try {
            const response = await fetch("/api/sendmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });
            if (response.ok) {
                setShowToast({
                    type: "PASS",
                    value: true
                });
                setIsOpenModal(false);
            } else {
                setShowToast({
                    type: response.status === 429 ? "RATE_LIMIT" : "FAIL",
                    value: true
                });
            }
        } catch  {
            setShowToast({
                type: "FAIL",
                value: true
            });
        }
        setIsSendingMail(false);
    };
    useEffect(()=>{
        const btn = refSendBtn.current;
        const observer = new IntersectionObserver(observerCallback, options);
        if (btn) observer.observe(btn);
        return ()=>{
            if (btn) observer.unobserve(btn);
        };
    }, [
        refSendBtn
    ]);
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            showToast && /*#__PURE__*/ _jsx(Toast, {
                open: showToast.value,
                duration: 3000,
                onClose: ()=>setShowToast((prev)=>({
                            ...prev,
                            value: false
                        })),
                className: classNames("fixed right-4 top-6 z-[9999] rounded-lg bg-teal-500 px-4 py-2 font-semibold text-white shadow-xl", showToast.type === "PASS" ? "bg-teal-500" : showToast.type === "RATE_LIMIT" ? "bg-yellow-500" : "bg-red-600"),
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "flex w-full max-w-xs items-center gap-2",
                    children: [
                        showToast.type === "PASS" ? /*#__PURE__*/ _jsx(CheckIcon, {
                            className: "h-6 w-6 md:h-8 md:w-8"
                        }) : /*#__PURE__*/ _jsx(DangerIcon, {
                            className: "h-6 w-6 md:h-8 md:w-8"
                        }),
                        /*#__PURE__*/ _jsx("span", {
                            className: "text-sm md:text-xl",
                            children: showToast.type === "PASS" ? "Mail sent" : showToast.type === "RATE_LIMIT" ? "Only 5 mail per hour" : "Mail failed"
                        })
                    ]
                })
            }),
            isBtnVisible && !isOpenModal && /*#__PURE__*/ _jsx("button", {
                "aria-label": "open send mail modal",
                type: "button",
                className: "fixed bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 p-2 text-white transition-colors duration-150 hover:bg-teal-500 sm:bottom-8 sm:right-8 sm:h-14 sm:w-14 sm:p-3 lg:h-16 lg:w-16",
                onClick: ()=>setIsOpenModal(true),
                children: /*#__PURE__*/ _jsx(MailIcon, {})
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "text-center",
                children: /*#__PURE__*/ _jsxs("button", {
                    ref: refSendBtn,
                    className: "inline-flex items-center gap-2 rounded-md bg-zinc-100 px-3 py-2 text-teal-600 transition-transform duration-150 focus-within:scale-[1.05] hover:scale-[1.05] hover:bg-white",
                    onClick: ()=>setIsOpenModal(true),
                    children: [
                        /*#__PURE__*/ _jsx("span", {
                            className: "block h-6 w-6 sm:h-7 sm:w-7 lg:h-9 lg:w-9",
                            children: /*#__PURE__*/ _jsx(MailIcon, {})
                        }),
                        /*#__PURE__*/ _jsx("span", {
                            className: "text-base font-semibold sm:text-lg lg:text-xl",
                            children: "Send Message"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(Transition, {
                show: isOpenModal,
                as: Fragment,
                children: /*#__PURE__*/ _jsxs(Dialog, {
                    as: "div",
                    className: "z-[999999]",
                    onClose: ()=>setIsOpenModal(false),
                    children: [
                        /*#__PURE__*/ _jsx(Transition.Child, {
                            as: Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "fixed inset-0 bg-zinc-600/30 backdrop-blur-md"
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "fixed inset-0 z-[9999] flex items-center justify-center",
                            children: /*#__PURE__*/ _jsx(Transition.Child, {
                                as: Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0 top-full",
                                enterTo: "opacity-100 top-16",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100 top-16",
                                leaveTo: "opacity-0 top-full",
                                children: /*#__PURE__*/ _jsxs(Dialog.Panel, {
                                    className: "absolute m-4 w-[95%] max-w-xl overflow-y-auto rounded-2xl border-2 border-teal-100/20 bg-teal-600 px-6 py-8 shadow-lg shadow-teal-200/10 dark:bg-teal-700 md:px-10 md:py-16",
                                    children: [
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ _jsxs(Dialog.Title, {
                                                    className: "flex items-center gap-1 text-2xl font-semibold text-zinc-100 sm:gap-2 md:text-4xl",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "inline-block h-8 w-8 sm:h-12 sm:w-12",
                                                            children: /*#__PURE__*/ _jsx(MailIcon, {})
                                                        }),
                                                        /*#__PURE__*/ _jsx("span", {
                                                            children: "Send Message"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsx("button", {
                                                    className: "flex h-10 w-10 items-center justify-center rounded-full border-2 border-teal-600 bg-teal-50 p-2 text-sm text-teal-600 transition-transform hover:scale-[1.05] hover:bg-teal-100",
                                                    onClick: ()=>setIsOpenModal(false),
                                                    children: /*#__PURE__*/ _jsxs("svg", {
                                                        width: "100%",
                                                        height: "100%",
                                                        viewBox: "0 0 23 23",
                                                        className: "ml-[1px] mt-1 stroke-tera-500 dark:stroke-teal-600",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("path", {
                                                                fill: "transparent",
                                                                strokeWidth: "3",
                                                                strokeLinecap: "round",
                                                                d: "M 3 16.5 L 17 2.5"
                                                            }),
                                                            /*#__PURE__*/ _jsx("path", {
                                                                fill: "transparent",
                                                                strokeWidth: "3",
                                                                strokeLinecap: "round",
                                                                d: "M 2 9.423 L 20 9.423",
                                                                opacity: "0"
                                                            }),
                                                            /*#__PURE__*/ _jsx("path", {
                                                                fill: "transparent",
                                                                strokeWidth: "3",
                                                                strokeLinecap: "round",
                                                                d: "M 3 2.5 L 17 16.346"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx(Formik, {
                                            initialValues: initialFormValues,
                                            validationSchema: mailValidationSchema,
                                            onSubmit: handleSubmit,
                                            validateOnChange: true,
                                            children: ({ isValid  })=>/*#__PURE__*/ _jsxs(Form, {
                                                    className: "mt-6 flex flex-col gap-3",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "flex flex-col gap-1",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("label", {
                                                                    htmlFor: "email",
                                                                    className: "font-medium text-white",
                                                                    children: "Email"
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "relative",
                                                                    children: /*#__PURE__*/ _jsx(Field, {
                                                                        name: "email",
                                                                        children: ({ field , meta  })=>/*#__PURE__*/ _jsxs(_Fragment, {
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsx("input", {
                                                                                        id: "email",
                                                                                        ...field,
                                                                                        type: "text",
                                                                                        placeholder: "Email",
                                                                                        className: "w-full rounded-lg border-none bg-teal-50 font-semibold text-teal-800 placeholder:font-normal placeholder:text-zinc-400 focus-within:border-2 focus-within:border-teal-600 focus-within:ring-teal-600"
                                                                                    }),
                                                                                    Boolean(meta.touched && meta.error) && /*#__PURE__*/ _jsx("span", {
                                                                                        className: "absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-red-400 md:text-sm",
                                                                                        children: meta.error
                                                                                    })
                                                                                ]
                                                                            })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "flex flex-col gap-1",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("label", {
                                                                    htmlFor: "name",
                                                                    className: "font-medium text-white",
                                                                    children: "Name"
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "relative",
                                                                    children: /*#__PURE__*/ _jsx(Field, {
                                                                        name: "name",
                                                                        children: ({ field , meta  })=>/*#__PURE__*/ _jsxs(_Fragment, {
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsx("input", {
                                                                                        id: "name",
                                                                                        ...field,
                                                                                        type: "text",
                                                                                        placeholder: "Name",
                                                                                        className: "w-full rounded-lg border-none bg-teal-50 font-semibold text-teal-800 placeholder:font-normal placeholder:text-zinc-400 focus-within:border-2 focus-within:border-teal-600 focus-within:ring-teal-600"
                                                                                    }),
                                                                                    Boolean(meta.touched && meta.error) && /*#__PURE__*/ _jsx("span", {
                                                                                        className: "absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-red-400 md:text-sm",
                                                                                        children: meta.error
                                                                                    })
                                                                                ]
                                                                            })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "flex flex-col gap-1",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("label", {
                                                                    htmlFor: "subject",
                                                                    className: "font-medium text-white",
                                                                    children: "Subject"
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "relative",
                                                                    children: /*#__PURE__*/ _jsx(Field, {
                                                                        name: "subject",
                                                                        children: ({ field , meta  })=>/*#__PURE__*/ _jsxs(_Fragment, {
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsx("input", {
                                                                                        id: "subject",
                                                                                        ...field,
                                                                                        type: "text",
                                                                                        placeholder: "Subject",
                                                                                        className: "w-full rounded-lg border-none bg-teal-50 font-semibold text-teal-800 placeholder:font-normal placeholder:text-zinc-400 focus-within:border-2 focus-within:border-teal-600 focus-within:ring-teal-600"
                                                                                    }),
                                                                                    Boolean(meta.touched && meta.error) && /*#__PURE__*/ _jsx("span", {
                                                                                        className: "absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-red-400 md:text-sm",
                                                                                        children: meta.error
                                                                                    })
                                                                                ]
                                                                            })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "flex flex-col gap-1",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("label", {
                                                                    htmlFor: "message",
                                                                    className: "font-medium text-white",
                                                                    children: "Message"
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "relative",
                                                                    children: /*#__PURE__*/ _jsx(Field, {
                                                                        name: "message",
                                                                        children: ({ field , meta  })=>/*#__PURE__*/ _jsxs(_Fragment, {
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsx("textarea", {
                                                                                        id: "message",
                                                                                        ...field,
                                                                                        placeholder: "Message",
                                                                                        className: "w-full rounded-lg border-none bg-teal-50 font-semibold text-teal-800 placeholder:font-normal placeholder:text-zinc-400 focus-within:border-2 focus-within:border-teal-600 focus-within:ring-teal-600"
                                                                                    }),
                                                                                    Boolean(meta.touched && meta.error) && /*#__PURE__*/ _jsx("span", {
                                                                                        className: "absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-red-400 md:text-sm",
                                                                                        children: meta.error
                                                                                    })
                                                                                ]
                                                                            })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx("button", {
                                                            "aria-label": "open send mail modal",
                                                            type: "submit",
                                                            className: "mt-4 w-full rounded-full bg-teal-50 px-4 py-3 text-center text-lg font-semibold text-teal-900 transition-colors duration-150 hover:bg-teal-100",
                                                            disabled: !isValid,
                                                            children: isSendingMail ? /*#__PURE__*/ _jsxs("div", {
                                                                className: "inline-flex items-center gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "h-4 w-4",
                                                                        children: /*#__PURE__*/ _jsx("svg", {
                                                                            stroke: "currentColor",
                                                                            fill: "currentColor",
                                                                            strokeWidth: "0",
                                                                            viewBox: "0 0 24 24",
                                                                            height: "100%",
                                                                            width: "100%",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ _jsx("path", {
                                                                                d: "M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z",
                                                                                children: /*#__PURE__*/ _jsx("animateTransform", {
                                                                                    attributeName: "transform",
                                                                                    attributeType: "XML",
                                                                                    type: "rotate",
                                                                                    dur: "1s",
                                                                                    from: "0 12 12",
                                                                                    to: "360 12 12",
                                                                                    repeatCount: "indefinite"
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        children: "Sending"
                                                                    })
                                                                ]
                                                            }) : "Submit"
                                                        })
                                                    ]
                                                })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports GithubIcon, GmailIcon, TelegramIcon, SkypeIcon, TwitterIcon, ArrowTopRight, NextJsIcon, ReactRouterDomIcon, FramerMotionIcon, VitePwaIcon, MailIcon, CheckIcon, DangerIcon */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1364);

const GithubIcon = (props)=>/*#__PURE__*/ _jsx("svg", {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 496 512",
        className: props.className,
        height: "100%",
        width: "100%",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
        })
    });
const GmailIcon = (props)=>/*#__PURE__*/ _jsx("svg", {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 25 25",
        className: props.className,
        height: "100%",
        width: "100%",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
        })
    });
const TelegramIcon = (props)=>/*#__PURE__*/ _jsx("svg", {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        width: "100%",
        height: "100%",
        viewBox: "0 0 20 20",
        className: props.className,
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M14.4415206,6 C14.060553,6.00676048 13.476055,6.20741135 10.663148,7.36249773 C9.67796175,7.7670526 7.70897661,8.60437935 4.75619264,9.87447795 C4.27670659,10.0627254 4.02553067,10.2468857 4.00266485,10.4269588 C3.95876487,10.7726802 4.46291296,10.8803081 5.09723696,11.0838761 C5.61440201,11.2498453 6.31007997,11.4440124 6.67173438,11.4517262 C6.99978943,11.4587234 7.36593635,11.3251987 7.77017511,11.051152 C10.5290529,9.21254679 11.9531977,8.28322679 12.0426094,8.26319203 C12.1056879,8.24905787 12.1930992,8.23128593 12.2523244,8.28325656 C12.3115496,8.33522719 12.3057275,8.43364956 12.299454,8.46005377 C12.2492926,8.67117474 9.65764825,10.998457 9.50849738,11.1513987 L9.43697409,11.2233057 C8.88741493,11.7661123 8.33196049,12.1205055 9.290333,12.7440164 C10.155665,13.3069957 10.6592923,13.6661378 11.5507686,14.2430701 C12.1204738,14.6117635 12.5671299,15.0489784 13.1553348,14.9955401 C13.4259939,14.9709508 13.705567,14.7196888 13.8475521,13.9703127 C14.1831052,12.1993135 14.8426779,8.36209709 14.9951103,6.78087197 C15.0084653,6.64233621 14.9916649,6.46503787 14.9781732,6.38720805 C14.9646815,6.30937823 14.9364876,6.19848702 14.8340164,6.11639754 C14.7126597,6.01917896 14.5253109,5.99867765 14.4415206,6 Z"
        })
    });
const SkypeIcon = (props)=>/*#__PURE__*/ _jsx("svg", {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        width: "100%",
        height: "100%",
        viewBox: "0 0 24 24",
        className: props.className,
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M21.43451,14.15552a9.586,9.586,0,0,0,.21155-2.02631,9.47653,9.47653,0,0,0-9.54029-9.42254,9.11414,9.11414,0,0,0-1.62494.14178A5.53558,5.53558,0,0,0,2.00061,7.466a5.42884,5.42884,0,0,0,.75354,2.7558,10.0197,10.0197,0,0,0-.18866,1.88452,9.33889,9.33889,0,0,0,9.54028,9.25788,8.56663,8.56663,0,0,0,1.74268-.16584A5.57942,5.57942,0,0,0,16.46368,22a5.433,5.433,0,0,0,4.97083-7.84448ZM16.43964,15.9931a3.63146,3.63146,0,0,1-1.62488,1.22473,6.33963,6.33963,0,0,1-2.52033.44709,6.21683,6.21683,0,0,1-2.89764-.61176,3.733,3.733,0,0,1-1.31964-1.17779,2.574,2.574,0,0,1-.494-1.41339.88041.88041,0,0,1,.30646-.68384,1.09008,1.09008,0,0,1,.77643-.28247.94433.94433,0,0,1,.637.2127,1.793,1.793,0,0,1,.44708.65863,3.39792,3.39792,0,0,0,.49518.87256,1.78964,1.78964,0,0,0,.72955.56488,3.01435,3.01435,0,0,0,1.24872.23554,2.9217,2.9217,0,0,0,1.71985-.44708,1.33217,1.33217,0,0,0,.65979-1.13092,1.135,1.135,0,0,0-.35333-.87134,2.18491,2.18491,0,0,0-.91944-.51923c-.37616-.11774-.89538-.23553-1.53112-.37616a13.9908,13.9908,0,0,1-2.14295-.6358,3.34814,3.34814,0,0,1-1.36651-1.01312,2.47429,2.47429,0,0,1-.49512-1.57807,2.62945,2.62945,0,0,1,.54205-1.60205,3.41154,3.41154,0,0,1,1.53113-1.084,6.652,6.652,0,0,1,2.37964-.37623,6.403,6.403,0,0,1,1.88452.25843,4.07215,4.07215,0,0,1,1.31842.65979,2.91587,2.91587,0,0,1,.77765.87134,1.80281,1.80281,0,0,1,.23553.87139.96189.96189,0,0,1-.30645.70667.9912.9912,0,0,1-.7536.30646.9735.9735,0,0,1-.63575-.18866,2.38218,2.38218,0,0,1-.47113-.61176,2.93711,2.93711,0,0,0-.77758-.96631A2.37614,2.37614,0,0,0,12.0589,7.96a2.7028,2.7028,0,0,0-1.5083.37738,1.07558,1.07558,0,0,0-.56488.89539.95783.95783,0,0,0,.18866.56488,1.41851,1.41851,0,0,0,.54205.4002,2.69264,2.69264,0,0,0,.68262.25959c.23559.07092.613.16467,1.15381.28247.65979.14178,1.27276.30646,1.81475.47107a5.43,5.43,0,0,1,1.38941.6358,2.85691,2.85691,0,0,1,.89532.94226,2.8284,2.8284,0,0,1,.32935,1.3905A2.89029,2.89029,0,0,1,16.43964,15.9931Z"
        })
    });
const TwitterIcon = (props)=>/*#__PURE__*/ _jsx("svg", {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 512 512",
        className: props.className,
        height: "100%",
        width: "100%",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
        })
    });
const ArrowTopRight = (props)=>/*#__PURE__*/ _jsx("svg", {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 16 16",
        className: props.className,
        height: "100%",
        width: "100%",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            d: "M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
        })
    });
function NextJsIcon() {
    return /*#__PURE__*/ _jsxs("svg", {
        stroke: "currentColor",
        fill: "none",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        height: "100%",
        width: "100%",
        xmlns: "http://www.w3.org/2000/svg",
        className: "text-zinc-900 dark:text-zinc-100",
        children: [
            /*#__PURE__*/ _jsx("path", {
                stroke: "none",
                d: "M0 0h24v24H0z",
                fill: "none"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M15 12v-3"
            })
        ]
    });
}
function ReactRouterDomIcon({ className  }) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: "100%",
        height: "100%",
        viewBox: "0 0 36 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className ?? "",
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M27.7179 8.23453C26.6978 7.90351 26.171 8.01511 25.101 7.89443C23.447 7.70823 22.788 7.04103 22.5084 5.32388C22.352 4.36531 22.5367 2.96182 22.1373 2.0929C21.3735 0.436097 19.5863 -0.306966 17.7908 0.117149C16.2749 0.47575 15.0135 2.03946 14.9436 3.64454C14.8638 5.4772 15.8755 7.04091 17.6128 7.58054C18.4381 7.83742 19.3151 7.96673 20.1771 8.03224C21.7579 8.1512 21.8794 9.05816 22.3071 9.80467C22.5767 10.2753 22.8379 10.7391 22.8379 12.1425C22.8379 13.5459 22.575 14.0096 22.3071 14.4803C21.8794 15.2251 21.3519 15.713 19.7711 15.8337C18.9091 15.8992 18.0305 16.0285 17.2067 16.2854C15.4695 16.8267 14.4577 18.3887 14.5376 20.2213C14.6075 21.8264 15.8688 23.3901 17.3848 23.7487C19.1803 24.1746 20.9675 23.4298 21.7313 21.773C22.1324 20.9041 22.352 19.9196 22.5084 18.9611C22.7897 17.2439 23.4486 16.5767 25.101 16.3905C26.171 16.2698 27.2784 16.3905 28.281 15.8026C29.3406 15.0036 30.2872 13.8045 30.2872 12.1425C30.2872 10.4805 29.2671 8.73795 27.7179 8.23453Z",
                fill: "#F44250"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M10.7468 16.0372C8.66173 16.0372 6.96094 14.2786 6.96094 12.1226C6.96094 9.96665 8.66173 8.20801 10.7468 8.20801C12.8318 8.20801 14.5326 9.96665 14.5326 12.1226C14.5326 14.2769 12.8302 16.0372 10.7468 16.0372Z",
                className: "fill-zinc-900 dark:fill-zinc-100"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M3.77247 23.9928C1.69077 23.9876 -0.00498999 22.2221 1.10332e-05 20.0644C0.00503422 17.9101 1.71249 16.1567 3.7992 16.1636C5.88256 16.1688 7.57832 17.9343 7.57166 20.092C7.56663 22.2445 5.85917 23.998 3.77247 23.9928Z",
                className: "fill-zinc-900 dark:fill-zinc-100"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M31.9021 23.9927C29.8138 24.0048 28.0997 22.2583 28.088 20.1076C28.0763 17.9482 29.7654 16.1758 31.8453 16.1636C33.9337 16.1516 35.6478 17.8981 35.6595 20.0488C35.6711 22.2065 33.9821 23.9806 31.9021 23.9927Z",
                className: "fill-zinc-900 dark:fill-zinc-100"
            })
        ]
    });
}
function FramerMotionIcon({ className  }) {
    return /*#__PURE__*/ _jsx("svg", {
        width: "100%",
        height: "100%",
        viewBox: "0 0 339 512",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className ?? "",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M30 45H309V185.667H169.5L30 45ZM30 185.667H169.5L309 326.333H169.5V467L30 326.333V185.667Z",
            className: "fill-zinc-900 dark:fill-zinc-100"
        })
    });
}
function VitePwaIcon({ className  }) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: "100%",
        height: "100%",
        viewBox: "0 0 155 155",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className ?? "",
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M50.6853 104.345C48.3909 100.398 46.0047 96.3602 43.7103 92.4138C43.5268 92.1385 43.435 91.8632 43.5267 91.4043C45.8211 84.4293 48.1155 77.3626 50.4099 70.3876C50.4099 70.2959 50.5017 70.1123 50.5935 69.837C53.255 75.0682 55.8247 80.2076 58.4862 85.4389C58.6697 85.0717 58.7615 84.7964 58.8533 84.5211C62.4326 73.508 66.0118 62.5867 69.5911 51.5736C69.7746 51.1147 69.9582 50.9312 70.417 51.0229C73.6292 51.0229 76.8414 51.0229 80.1453 51.0229C80.6959 51.0229 80.8795 51.2065 81.063 51.6654C84.367 62.5867 87.6709 73.4162 90.9748 84.3375C91.0666 84.6129 91.1584 84.98 91.3419 85.4389C91.8008 84.5211 92.1679 83.6033 92.4432 82.7774C96.9402 72.3149 101.345 61.9443 105.842 51.4818C105.934 51.2065 106.026 51.0229 106.393 51.0229C110.982 51.0229 115.571 51.0229 120.068 51.0229C120.068 51.0229 120.16 51.0229 120.251 51.0229C119.701 52.3078 119.242 53.5009 118.783 54.7857C112.175 71.0301 105.659 87.3661 99.0511 103.61C98.9593 103.794 98.7757 103.978 98.8675 104.253C94.0952 104.253 89.3229 104.253 84.5505 104.253C84.6423 104.069 84.5505 103.794 84.4587 103.61C84.0916 102.417 83.7245 101.224 83.3574 100.031C80.6042 91.3125 77.9426 82.6856 75.1894 73.9669C75.1894 73.7833 75.1894 73.5998 74.9141 73.508C71.5184 83.6951 68.2144 93.974 64.8187 104.161C60.0464 104.345 55.3658 104.345 50.6853 104.345Z",
                fill: "#4AA6C0"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M7 104.345C7 86.8155 7 69.2863 7 51.7571C7 51.2065 7.09178 51.0229 7.73421 51.0229C15.168 51.0229 22.6019 51.0229 30.0357 51.0229C34.1656 51.0229 38.0202 51.9407 41.3241 54.5104C42.7008 55.5199 43.8938 56.8048 44.9034 58.2732C45.0869 58.5485 45.0869 58.7321 44.9952 59.0074C42.2419 67.5426 39.3968 76.1695 36.6436 84.7046C36.5518 85.0717 36.3682 85.1635 36.0011 85.2553C34.0738 85.7142 32.0548 85.9895 30.0357 85.9895C27.0071 85.9895 24.0703 85.9895 21.0417 85.9895C20.6746 85.9895 20.5828 85.9895 20.5828 86.4484C20.5828 92.322 20.5828 98.2874 20.5828 104.161V104.253C16.0858 104.345 11.497 104.345 7 104.345ZM20.5828 68.4603C20.5828 70.6629 20.5828 72.8656 20.5828 75.16C20.5828 75.6188 20.6746 75.7106 21.1335 75.7106C22.2348 75.7106 23.4279 75.7106 24.5292 75.7106C26.0894 75.7106 27.6495 75.7106 29.2097 75.3435C30.5864 74.9764 31.8712 74.5175 32.6972 73.3244C34.441 70.8465 34.6245 68.0932 33.5232 65.34C32.6054 62.862 30.4946 61.8525 28.0166 61.5771C25.7223 61.3018 23.4279 61.4854 21.1335 61.3936C20.6746 61.3936 20.5828 61.5771 20.5828 61.9442C20.5828 64.1469 20.5828 66.3495 20.5828 68.4603Z",
                className: "fill-zinc-900 dark:fill-zinc-100"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M128.167 92.3636H114L133.833 44V71.6364H148L128.167 120V92.3636Z",
                fill: "#F7D94B"
            })
        ]
    });
}
function MailIcon({ className  }) {
    return /*#__PURE__*/ _jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "currentColor",
        "aria-hidden": "true",
        className: className,
        width: "100%",
        height: "100%",
        children: /*#__PURE__*/ _jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        })
    });
}
function CheckIcon({ className  }) {
    return /*#__PURE__*/ _jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "currentColor",
        "aria-hidden": "true",
        className: className,
        children: /*#__PURE__*/ _jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        })
    });
}
function DangerIcon({ className  }) {
    return /*#__PURE__*/ _jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "currentColor",
        "aria-hidden": "true",
        className: className,
        children: /*#__PURE__*/ _jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
        })
    });
}


/***/ }),

/***/ 820:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: Toast

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1364);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");
;// CONCATENATED MODULE: ./src/components/Toast.tsx



function Toast({ children , duration =3000 , open , onClose , className  }) {
    useEffect(()=>{
        const timer = setTimeout(()=>{
            onClose();
        }, duration);
        return ()=>{
            clearTimeout(timer);
        };
    }, [
        duration,
        onClose
    ]);
    if (true) {
        return null;
    }
    return /*#__PURE__*/ createPortal(/*#__PURE__*/ _jsx("div", {
        className: className,
        children: children
    }), document.body);
}


/***/ }),

/***/ 927:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6555);
/* harmony import */ var _utility_rateLimiter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5379);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4150);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__, _utility_rateLimiter__WEBPACK_IMPORTED_MODULE_2__, _components_ContactForm__WEBPACK_IMPORTED_MODULE_4__]);
([uuid__WEBPACK_IMPORTED_MODULE_1__, _utility_rateLimiter__WEBPACK_IMPORTED_MODULE_2__, _components_ContactForm__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const REQUEST_PER_HOUR = 5;
const RATELIMIT_DURATION = 3600000;
const MAX_USER_PER_SECOND = 100;
/*
  Rate Limiting Strategy:

  WARNING: This rate limiting strategy uses a combination of client IP address and user agent for identification.
  - Pros: Provides a more robust identification mechanism.
  - Cons: 
    - Users behind certain proxies or networks might share the same IP address.
    - Determined attackers can still potentially circumvent these measures.
    - Privacy concerns: Collecting IP addresses and user agents may raise privacy considerations.
  
  If either the client's IP address or user agent is missing, a fallback mechanism defaults to using a UUID stored in cookies.
  - Pros: Ensures a default identification mechanism is in place.
  - Cons: UUIDs may not be entirely foolproof and can be manipulated by users.

  Always consider the privacy implications of collecting and using such information. Be transparent with users about the data you collect for rate limiting purposes.
*/ const limiter = (0,_utility_rateLimiter__WEBPACK_IMPORTED_MODULE_2__/* .rateLimiterApi */ .D)({
    interval: RATELIMIT_DURATION,
    uniqueTokenPerInterval: MAX_USER_PER_SECOND,
    getUserId: (req, res)=>{
        const userIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "";
        const userAgent = req.headers["user-agent"] || "";
        if (!userIp || !userAgent) {
            let userUuidToken = req.cookies.userUuid;
            if (userUuidToken) {
                const cookieExpiration = req.cookies.userUuid_expires;
                if (cookieExpiration) {
                    const expirationDate = new Date(cookieExpiration);
                    if (expirationDate && expirationDate <= new Date()) {
                        // Cookie has expired, generate a new UUID
                        const newUuidToken = (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)();
                        res.setHeader("Set-Cookie", `userUuid=${newUuidToken}; Max-Age=${60 * 60 * 24}; SameSite=Strict`);
                        // Set a new expiration date (e.g., 24 hours from now)
                        const newExpirationDate = new Date();
                        newExpirationDate.setSeconds(newExpirationDate.getSeconds() + 60 * 60 * 24);
                        res.setHeader("Set-Cookie", `userUuid_expires=${newExpirationDate.toUTCString()}; Max-Age=${60 * 60 * 24}; SameSite=Strict`);
                        return newUuidToken;
                    }
                    return userUuidToken;
                }
                userUuidToken = (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)();
                res.setHeader("Set-Cookie", `userUuid=${userUuidToken}; Max-Age=${60 * 60 * 24}; SameSite=Strict`);
                const newExpirationDate = new Date();
                newExpirationDate.setSeconds(newExpirationDate.getSeconds() + 60 * 60 * 24);
                res.setHeader("Set-Cookie", `userUuid_expires=${newExpirationDate.toUTCString()}; Max-Age=${60 * 60 * 24}; SameSite=Strict`);
                return userUuidToken;
            } else {
                userUuidToken = (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)();
                res.setHeader("Set-Cookie", `userUuid=${userUuidToken}; Max-Age=${60 * 60 * 24}; SameSite=Strict`);
                const newExpirationDate = new Date();
                newExpirationDate.setSeconds(newExpirationDate.getSeconds() + 60 * 60 * 24);
                res.setHeader("Set-Cookie", `userUuid_expires=${newExpirationDate.toUTCString()}; Max-Age=${60 * 60 * 24}; SameSite=Strict`);
                return userUuidToken;
            }
        }
        const userId = `${userIp}-${userAgent}`;
        return userId;
    }
});
const sendMail = async function(name, email, subject, message) {
    const user = process.env.NODEMAILER_USER;
    const pass = process.env.NODEMAILER_PASS;
    if (!user && !pass) {
        return new Promise((resolve)=>resolve({
                status: 500,
                message: "Internal server error"
            }));
    }
    const transporter = (0,nodemailer__WEBPACK_IMPORTED_MODULE_0__.createTransport)({
        service: "gmail",
        auth: {
            user,
            pass
        }
    });
    const mailOptions = {
        from: process.env.NODEMAILER_USER,
        to: process.env.NODEMAILER_USER,
        subject: "Portfolio: [" + subject + " ]",
        text: `${name}: <${email}>\n${message}`
    };
    return new Promise((resolve)=>{
        transporter.sendMail(mailOptions, (error)=>{
            if (error) {
                resolve({
                    status: 500,
                    message: "Failed to send mail"
                });
            } else {
                resolve({
                    status: 200,
                    message: "Mail send successfully"
                });
            }
        });
    });
};
const handler = async (req, res)=>{
    try {
        const { method  } = req;
        if (method !== "POST") {
            res.status(400).json({
                status: 405,
                message: `[${method}] is not allowed`
            });
            return;
        }
        const body = req.body;
        const isRateLimited = await limiter.check(res, req, REQUEST_PER_HOUR);
        if (isRateLimited.status !== 200) return;
        try {
            await _components_ContactForm__WEBPACK_IMPORTED_MODULE_4__/* .mailValidationSchema.validate */ .i.validate(body, {
                abortEarly: false
            });
        } catch (validationError) {
            if (validationError instanceof yup__WEBPACK_IMPORTED_MODULE_3__.ValidationError) {
                res.status(422).json({
                    status: 422,
                    message: validationError.errors
                });
            } else {
                res.status(500).json({
                    status: 500,
                    message: "Internal server error"
                });
            }
            return;
        }
        const { name , email , subject , message  } = body;
        const response = await sendMail(name, email, subject, message);
        res.status(response.status).send(response);
    } catch (error) {
        if (error?.status === 429) {
            res.status(429).json({
                status: 429,
                message: "Rate limit exceeded"
            });
        } else {
            res.status(error.status || 500).json({
                status: 500,
                message: error.message || "Internal server error"
            });
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5379:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ rateLimiterApi)
/* harmony export */ });
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3896);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lru_cache__WEBPACK_IMPORTED_MODULE_0__]);
lru_cache__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// This piece of code is exact implementation from Nextjs Canary Example
// https://github.com/vercel/next.js/blob/canary/examples/api-routes-rate-limit/utils/rate-limit.ts
// This can cause the server to slow down if the cache is hold for longer time for many users.

function rateLimiterApi(options) {
    const tokenCache = new lru_cache__WEBPACK_IMPORTED_MODULE_0__.LRUCache({
        max: options?.uniqueTokenPerInterval || 50,
        ttl: options?.interval || 60000
    });
    return {
        check: (res, req, limit)=>new Promise((resolve, reject)=>{
                try {
                    const userId = options?.getUserId(req, res);
                    if (!userId) {
                        reject({
                            status: 400,
                            message: "Token missing"
                        });
                        return;
                    }
                    const token = `user:${userId}`;
                    const tokenCount = tokenCache.get(token) || [
                        0
                    ];
                    if (tokenCount[0] === 0) {
                        tokenCache.set(token, tokenCount);
                    }
                    tokenCount[0] += 1;
                    const currentUsage = tokenCount[0];
                    const isRateLimited = currentUsage >= limit;
                    res.setHeader("X-RateLimit-Limit", limit);
                    res.setHeader("X-RateLimit-Remaining", isRateLimited ? 0 : limit - currentUsage);
                    if (isRateLimited) {
                        reject({
                            status: 429,
                            message: "Rate limit exceeded"
                        });
                    } else {
                        resolve({
                            status: 200,
                            message: "Success"
                        });
                    }
                } catch  {
                    reject({
                        status: 500,
                        message: "Internal server error"
                    });
                }
            })
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [364], () => (__webpack_exec__(927)));
module.exports = __webpack_exports__;

})();
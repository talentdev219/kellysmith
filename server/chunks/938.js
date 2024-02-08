"use strict";
exports.id = 938;
exports.ids = [938,809];
exports.modules = {

/***/ 8127:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ ContactForm)
/* harmony export */ });
/* unused harmony export mailValidationSchema */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1527);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7549);
/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8970);
/* harmony import */ var _utility_classNames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3797);
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
    const refSendBtn = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [isBtnVisible, setIsBtnVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isSendingMail, setIsSendingMail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isOpenModal, setIsOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showToast, setShowToast] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
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
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const btn = refSendBtn.current;
        const observer = new IntersectionObserver(observerCallback, options);
        if (btn) observer.observe(btn);
        return ()=>{
            if (btn) observer.unobserve(btn);
        };
    }, [
        refSendBtn
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            showToast && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Toast__WEBPACK_IMPORTED_MODULE_6__/* .Toast */ .F, {
                open: showToast.value,
                duration: 3000,
                onClose: ()=>setShowToast((prev)=>({
                            ...prev,
                            value: false
                        })),
                className: (0,_utility_classNames__WEBPACK_IMPORTED_MODULE_7__/* .classNames */ .A)("fixed right-4 top-6 z-[9999] rounded-lg bg-teal-500 px-4 py-2 font-semibold text-white shadow-xl", showToast.type === "PASS" ? "bg-teal-500" : showToast.type === "RATE_LIMIT" ? "bg-yellow-500" : "bg-red-600"),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex w-full max-w-xs items-center gap-2",
                    children: [
                        showToast.type === "PASS" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_5__/* .CheckIcon */ .nQ, {
                            className: "h-6 w-6 md:h-8 md:w-8"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_5__/* .DangerIcon */ .cS, {
                            className: "h-6 w-6 md:h-8 md:w-8"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-sm md:text-xl",
                            children: showToast.type === "PASS" ? "Mail sent" : showToast.type === "RATE_LIMIT" ? "Only 5 mail per hour" : "Mail failed"
                        })
                    ]
                })
            }),
            isBtnVisible && !isOpenModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                "aria-label": "open send mail modal",
                type: "button",
                className: "fixed bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 p-2 text-white transition-colors duration-150 hover:bg-teal-500 sm:bottom-8 sm:right-8 sm:h-14 sm:w-14 sm:p-3 lg:h-16 lg:w-16",
                onClick: ()=>setIsOpenModal(true),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_5__/* .MailIcon */ .bV, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    ref: refSendBtn,
                    className: "inline-flex items-center gap-2 rounded-md bg-zinc-100 px-3 py-2 text-teal-600 transition-transform duration-150 focus-within:scale-[1.05] hover:scale-[1.05] hover:bg-white",
                    onClick: ()=>setIsOpenModal(true),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "block h-6 w-6 sm:h-7 sm:w-7 lg:h-9 lg:w-9",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_5__/* .MailIcon */ .bV, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-base font-semibold sm:text-lg lg:text-xl",
                            children: "Send Message"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
                show: isOpenModal,
                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
                    as: "div",
                    className: "z-[999999]",
                    onClose: ()=>setIsOpenModal(false),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "fixed inset-0 bg-zinc-600/30 backdrop-blur-md"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "fixed inset-0 z-[9999] flex items-center justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0 top-full",
                                enterTo: "opacity-100 top-16",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100 top-16",
                                leaveTo: "opacity-0 top-full",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Panel, {
                                    className: "absolute m-4 w-[95%] max-w-xl overflow-y-auto rounded-2xl border-2 border-teal-100/20 bg-teal-600 px-6 py-8 shadow-lg shadow-teal-200/10 dark:bg-teal-700 md:px-10 md:py-16",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Title, {
                                                    className: "flex items-center gap-1 text-2xl font-semibold text-zinc-100 sm:gap-2 md:text-4xl",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "inline-block h-8 w-8 sm:h-12 sm:w-12",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_5__/* .MailIcon */ .bV, {})
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Send Message"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "flex h-10 w-10 items-center justify-center rounded-full border-2 border-teal-600 bg-teal-50 p-2 text-sm text-teal-600 transition-transform hover:scale-[1.05] hover:bg-teal-100",
                                                    onClick: ()=>setIsOpenModal(false),
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        width: "100%",
                                                        height: "100%",
                                                        viewBox: "0 0 23 23",
                                                        className: "ml-[1px] mt-1 stroke-tera-500 dark:stroke-teal-600",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                fill: "transparent",
                                                                strokeWidth: "3",
                                                                strokeLinecap: "round",
                                                                d: "M 3 16.5 L 17 2.5"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                fill: "transparent",
                                                                strokeWidth: "3",
                                                                strokeLinecap: "round",
                                                                d: "M 2 9.423 L 20 9.423",
                                                                opacity: "0"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
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
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_3__.Formik, {
                                            initialValues: initialFormValues,
                                            validationSchema: mailValidationSchema,
                                            onSubmit: handleSubmit,
                                            validateOnChange: true,
                                            children: ({ isValid  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_3__.Form, {
                                                    className: "mt-6 flex flex-col gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex flex-col gap-1",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "email",
                                                                    className: "font-medium text-white",
                                                                    children: "Email"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "relative",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
                                                                        name: "email",
                                                                        children: ({ field , meta  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                        id: "email",
                                                                                        ...field,
                                                                                        type: "text",
                                                                                        placeholder: "Email",
                                                                                        className: "w-full rounded-lg border-none bg-teal-50 font-semibold text-teal-800 placeholder:font-normal placeholder:text-zinc-400 focus-within:border-2 focus-within:border-teal-600 focus-within:ring-teal-600"
                                                                                    }),
                                                                                    Boolean(meta.touched && meta.error) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        className: "absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-red-400 md:text-sm",
                                                                                        children: meta.error
                                                                                    })
                                                                                ]
                                                                            })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex flex-col gap-1",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "name",
                                                                    className: "font-medium text-white",
                                                                    children: "Name"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "relative",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
                                                                        name: "name",
                                                                        children: ({ field , meta  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                        id: "name",
                                                                                        ...field,
                                                                                        type: "text",
                                                                                        placeholder: "Name",
                                                                                        className: "w-full rounded-lg border-none bg-teal-50 font-semibold text-teal-800 placeholder:font-normal placeholder:text-zinc-400 focus-within:border-2 focus-within:border-teal-600 focus-within:ring-teal-600"
                                                                                    }),
                                                                                    Boolean(meta.touched && meta.error) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        className: "absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-red-400 md:text-sm",
                                                                                        children: meta.error
                                                                                    })
                                                                                ]
                                                                            })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex flex-col gap-1",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "subject",
                                                                    className: "font-medium text-white",
                                                                    children: "Subject"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "relative",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
                                                                        name: "subject",
                                                                        children: ({ field , meta  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                        id: "subject",
                                                                                        ...field,
                                                                                        type: "text",
                                                                                        placeholder: "Subject",
                                                                                        className: "w-full rounded-lg border-none bg-teal-50 font-semibold text-teal-800 placeholder:font-normal placeholder:text-zinc-400 focus-within:border-2 focus-within:border-teal-600 focus-within:ring-teal-600"
                                                                                    }),
                                                                                    Boolean(meta.touched && meta.error) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        className: "absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-red-400 md:text-sm",
                                                                                        children: meta.error
                                                                                    })
                                                                                ]
                                                                            })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex flex-col gap-1",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "message",
                                                                    className: "font-medium text-white",
                                                                    children: "Message"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "relative",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
                                                                        name: "message",
                                                                        children: ({ field , meta  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                                        id: "message",
                                                                                        ...field,
                                                                                        placeholder: "Message",
                                                                                        className: "w-full rounded-lg border-none bg-teal-50 font-semibold text-teal-800 placeholder:font-normal placeholder:text-zinc-400 focus-within:border-2 focus-within:border-teal-600 focus-within:ring-teal-600"
                                                                                    }),
                                                                                    Boolean(meta.touched && meta.error) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        className: "absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-red-400 md:text-sm",
                                                                                        children: meta.error
                                                                                    })
                                                                                ]
                                                                            })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            "aria-label": "open send mail modal",
                                                            type: "submit",
                                                            className: "mt-4 w-full rounded-full bg-teal-50 px-4 py-3 text-center text-lg font-semibold text-teal-900 transition-colors duration-150 hover:bg-teal-100",
                                                            disabled: !isValid,
                                                            children: isSendingMail ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "inline-flex items-center gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "h-4 w-4",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            stroke: "currentColor",
                                                                            fill: "currentColor",
                                                                            strokeWidth: "0",
                                                                            viewBox: "0 0 24 24",
                                                                            height: "100%",
                                                                            width: "100%",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animateTransform", {
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
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
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

/***/ 8970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ Toast)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1527);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);



function Toast({ children , duration =3000 , open , onClose , className  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
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
    return /*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: className,
        children: children
    }), document.body);
}


/***/ }),

/***/ 7938:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1527);
/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8127);
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7549);
/* harmony import */ var _data_siteMetaData_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7809);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ContactForm__WEBPACK_IMPORTED_MODULE_1__]);
_components_ContactForm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Footer() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "flex w-full flex-col items-center gap-20 bg-transparent px-6 py-8 sm:px-14 md:px-20",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mx-auto flex w-full max-w-7xl flex-col gap-8 rounded-2xl bg-teal-600 p-8 text-zinc-100 dark:bg-teal-500 sm:p-12 md:gap-12 lg:p-20",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase text-tera-500 md:text-sm lg:text-base",
                            children: "Get in touch"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: `mailto:${_data_siteMetaData_mjs__WEBPACK_IMPORTED_MODULE_3__/* .siteMetadata.email */ .F.email}`,
                        target: "_blank",
                        className: "mb-6 cursor-pointer text-center text-2xl font-bold underline sm:text-4xl lg:text-7xl",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "kellysmith12233@"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "gmail.com"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ContactForm__WEBPACK_IMPORTED_MODULE_1__/* .ContactForm */ .t, {})
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex w-full flex-col items-center justify-between gap-8 text-center  md:flex-row md:justify-between lg:mx-auto lg:max-w-7xl",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "\xa92024 \uD83E\uDD17Kelly Smith"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-8",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: _data_siteMetaData_mjs__WEBPACK_IMPORTED_MODULE_3__/* .siteMetadata.twitter */ .F.twitter,
                                target: "_blank",
                                className: "h-6 w-6",
                                "aria-label": "link to Twitter",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* .TwitterIcon */ .Zm, {
                                    className: "text-teal-600 transition-colors duration-150 hover:text-tera-500 dark:text-teal-400 dark:hover:text-white"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: _data_siteMetaData_mjs__WEBPACK_IMPORTED_MODULE_3__/* .siteMetadata.email */ .F.email,
                                target: "_blank",
                                className: "h-6 w-6",
                                "aria-label": "link to Email",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* .GmailIcon */ .Xf, {
                                    className: "text-teal-600 transition-colors duration-150 hover:text-tera-500 dark:text-teal-400 dark:hover:text-white"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: _data_siteMetaData_mjs__WEBPACK_IMPORTED_MODULE_3__/* .siteMetadata.telegram */ .F.telegram,
                                target: "_blank",
                                className: "h-6 w-6",
                                "aria-label": "link to Telegram",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* .TelegramIcon */ .YG, {
                                    className: "text-teal-600 transition-colors duration-150 hover:text-tera-500 dark:text-teal-400 dark:hover:text-white"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: _data_siteMetaData_mjs__WEBPACK_IMPORTED_MODULE_3__/* .siteMetadata.skype */ .F.skype,
                                target: "_blank",
                                className: "h-6 w-6",
                                "aria-label": "link to Telegram",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* .SkypeIcon */ .zx, {
                                    className: "text-teal-600 transition-colors duration-150 hover:text-tera-500 dark:text-teal-400 dark:hover:text-white"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7809:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ siteMetadata)
/* harmony export */ });
const siteMetadata = {
    title: "Kelly Smith",
    author: "Kelly Smith",
    headerTitle: "Kelly Smith",
    description: "Experienced Investor with a Proven Track Record of Identifying and Backing Successful Ventures",
    language: "en-us",
    theme: "light",
    siteName: "apollo-portfolio-ten.vercel.app",
    siteUrl: "https://apollo-portfolio-ten.vercel.app",
    siteRepo: "https://github.com/PiresHagan/apollo-v2",
    siteLogo: "/favicon.ico",
    image: "/static/homepage.png",
    twitterImage: "/static/homepage.png",
    socialBanner: "/static/homepage.png",
    email: "mailto:kellysmith12233@gmail.com",
    telegram: "https://t.me/",
    skype: "https://join.skype.com/invite/",
    twitter: "https://twitter.com/Kelly777ordain",
    whatsapp: "https://wa.me/+18507928965",
    // linkedin: "https://www.linkedin.com/in/amitchauhan-dev",
    locale: "en-US",
    googleSiteVerification: "_YJlO90eSoye2AQOhbkRAzNbejzCGiTgAD4RNR3NtHc"
};


/***/ })

};
;
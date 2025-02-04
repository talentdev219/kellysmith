import { ContactForm } from "@/components/ContactForm";
import {
  GmailIcon,
  TelegramIcon,
  TwitterIcon,
  SkypeIcon,
} from "@/components/Icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-20 bg-transparent px-6 py-8 sm:px-14 md:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 rounded-2xl bg-teal-600 p-8 text-zinc-100 dark:bg-teal-500 sm:p-12 md:gap-12 lg:p-20">
        <div className="text-center">
          <span className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase text-tera-500 md:text-sm lg:text-base">
            Get in touch
          </span>
        </div>
        <a
          href={`mailto:${siteMetadata.email}`}
          target="_blank"
          className="mb-6 cursor-pointer text-center text-2xl font-bold underline sm:text-4xl lg:text-7xl"
        >
          <span>kellysmith12233@</span>
          <br />
          <span>gmail.com</span>
        </a>
        <ContactForm />
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-8 text-center  md:flex-row md:justify-between lg:mx-auto lg:max-w-7xl">
        <span>©2024 🤗Kelly Smith</span>
        <div className="flex gap-8">
          <a
            href={siteMetadata.twitter}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Twitter"
          >
            <TwitterIcon className="text-teal-600 transition-colors duration-150 hover:text-tera-500 dark:text-teal-400 dark:hover:text-white" />
          </a>
          <a
            href={siteMetadata.email}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Email"
          >
            <GmailIcon className="text-teal-600 transition-colors duration-150 hover:text-tera-500 dark:text-teal-400 dark:hover:text-white" />
          </a>
          <a
            href={siteMetadata.telegram}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Telegram"
          >
            <TelegramIcon className="text-teal-600 transition-colors duration-150 hover:text-tera-500 dark:text-teal-400 dark:hover:text-white" />
          </a>
          <a
            href={siteMetadata.skype}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Telegram"
          >
            <SkypeIcon className="text-teal-600 transition-colors duration-150 hover:text-tera-500 dark:text-teal-400 dark:hover:text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
}

import LocalizedClientLink from "@modules/common/components/localized-client-link"

const StoreHero = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-grey-5 via-white to-grey-10 border-b border-ui-border-base">
      {/* Decorative background circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-grey-10 to-grey-20 opacity-40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-[360px] w-[360px] rounded-full bg-gradient-to-tr from-grey-10 to-grey-20 opacity-30 blur-3xl"
      />

      <div className="content-container relative z-10 flex flex-col items-center justify-center py-20 small:py-28 text-center gap-6">
        {/* Eyebrow label */}
        <span className="inline-flex items-center gap-2 rounded-full border border-ui-border-base bg-white px-4 py-1.5 text-small-semi text-ui-fg-subtle shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-grey-40" />
          New arrivals every week
        </span>

        {/* Headline */}
        <h1 className="text-3xl-semi small:text-[2.75rem] small:leading-[1.15] font-semibold tracking-tight text-ui-fg-base max-w-2xl">
          Discover Our{" "}
          <span className="relative inline-block">
            Collection
            {/* Underline accent */}
            <span
              aria-hidden="true"
              className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-gradient-to-r from-grey-40 to-grey-60"
            />
          </span>
        </h1>

        {/* Description */}
        <p className="text-base-regular text-ui-fg-subtle max-w-lg leading-relaxed">
          Explore our curated selection of premium products — thoughtfully
          chosen, beautifully crafted, and ready to elevate your everyday.
        </p>

        {/* CTAs */}
        <div className="flex flex-col xsmall:flex-row items-center gap-3 mt-2">
          <LocalizedClientLink
            href="/store"
            className="contrast-btn text-small-semi px-6 py-2.5"
          >
            Shop all products
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/categories"
            className="text-small-semi text-ui-fg-subtle hover:text-ui-fg-base underline underline-offset-4 transition-colors duration-150 px-2 py-2.5"
          >
            Browse categories
          </LocalizedClientLink>
        </div>
      </div>
    </div>
  )
}

export default StoreHero

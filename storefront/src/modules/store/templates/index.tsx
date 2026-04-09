import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import StoreHero from "@modules/store/components/store-hero"
import FeaturedCollections from "@modules/store/components/featured-collections"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <div data-testid="category-container">
      {/* Hero section */}
      <StoreHero />

      {/* Collections & categories navigation */}
      <Suspense fallback={null}>
        <FeaturedCollections />
      </Suspense>

      {/* Product grid section */}
      <div className="content-container py-10 small:py-14">
        {/* Section header */}
        <div className="flex flex-col small:flex-row small:items-end justify-between gap-4 mb-8 pb-6 border-b border-ui-border-base">
          <div>
            <p className="text-small-semi text-ui-fg-muted uppercase tracking-widest mb-1">
              Our products
            </p>
            <h2
              className="text-2xl-semi text-ui-fg-base"
              data-testid="store-page-title"
            >
              All products
            </h2>
          </div>
          {/* Sort controls — inline on desktop, stacked on mobile */}
          <div className="small:max-w-[220px] w-full small:w-auto">
            <RefinementList sortBy={sort} />
          </div>
        </div>

        {/* Paginated product grid */}
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sort}
            page={pageNumber}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  )
}

export default StoreTemplate

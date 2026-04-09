import { getCollectionsList } from "@lib/data/collections"
import { getCategoriesList } from "@lib/data/categories"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { ArrowUpRightMini } from "@medusajs/icons"

const FeaturedCollections = async () => {
  const [{ collections }, { product_categories }] = await Promise.all([
    getCollectionsList(0, 6),
    getCategoriesList(0, 6),
  ])

  const hasCollections = collections && collections.length > 0
  const hasCategories = product_categories && product_categories.length > 0

  if (!hasCollections && !hasCategories) {
    return null
  }

  return (
    <div className="w-full border-b border-ui-border-base bg-white">
      <div className="content-container py-10 small:py-14">
        <div className="flex flex-col small:flex-row small:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-small-semi text-ui-fg-muted uppercase tracking-widest mb-1">
              Browse by
            </p>
            <h2 className="text-xl-semi text-ui-fg-base">
              Collections &amp; Categories
            </h2>
          </div>
          <LocalizedClientLink
            href="/store"
            className="group flex items-center gap-1 text-small-semi text-ui-fg-interactive hover:text-ui-fg-base transition-colors duration-150 self-start small:self-auto"
          >
            View all products
            <ArrowUpRightMini className="group-hover:rotate-45 transition-transform duration-150" />
          </LocalizedClientLink>
        </div>

        <div className="flex flex-col gap-8">
          {/* Collections row */}
          {hasCollections && (
            <div>
              <p className="text-small-semi text-ui-fg-muted mb-3">
                Collections
              </p>
              <div className="flex flex-wrap gap-2">
                {collections.map((collection) => (
                  <LocalizedClientLink
                    key={collection.id}
                    href={`/collections/${collection.handle}`}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-ui-border-base bg-ui-bg-subtle px-4 py-2 text-small-semi text-ui-fg-base hover:border-ui-border-strong hover:bg-white hover:shadow-sm transition-all duration-150"
                  >
                    {collection.title}
                    <ArrowUpRightMini
                      className="opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-150"
                      color="var(--fg-subtle)"
                    />
                  </LocalizedClientLink>
                ))}
              </div>
            </div>
          )}

          {/* Categories row */}
          {hasCategories && (
            <div>
              <p className="text-small-semi text-ui-fg-muted mb-3">
                Categories
              </p>
              <div className="flex flex-wrap gap-2">
                {product_categories
                  .filter((c) => !c.parent_category)
                  .map((category) => (
                    <LocalizedClientLink
                      key={category.id}
                      href={`/categories/${category.handle}`}
                      className="group inline-flex items-center gap-1.5 rounded-full border border-ui-border-base bg-ui-bg-subtle px-4 py-2 text-small-semi text-ui-fg-base hover:border-ui-border-strong hover:bg-white hover:shadow-sm transition-all duration-150"
                    >
                      {category.name}
                      <ArrowUpRightMini
                        className="opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-150"
                        color="var(--fg-subtle)"
                      />
                    </LocalizedClientLink>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FeaturedCollections

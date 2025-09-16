import prisma from "@repo/db"

export async function createProduct(shopifyProduct: any, tenantId: string) {
  return prisma.product.create({
    data: {
      tenantId,
      admin_graphql_api_id: shopifyProduct.admin_graphql_api_id,
      title: shopifyProduct.title,
      body_html: shopifyProduct.body_html,
      vendor: shopifyProduct.vendor,
      product_type: shopifyProduct.product_type,
      handle: shopifyProduct.handle,
      status: shopifyProduct.status,
      tags: shopifyProduct.tags?.join(", "),
      published_scope: shopifyProduct.published_scope,
      created_at: shopifyProduct.created_at ? new Date(shopifyProduct.created_at) : null,
      updated_at: shopifyProduct.updated_at ? new Date(shopifyProduct.updated_at) : null,
      has_variants_that_requires_components: shopifyProduct.has_variants_that_requires_components || false,
      category: shopifyProduct.category,
      variants: {
        create: shopifyProduct.variants?.map((v: any) => ({
          admin_graphql_api_id: v.admin_graphql_api_id,
          product_id: shopifyProduct.id.toString(),
          title: v.title,
          price: v.price,
          compare_at_price: v.compare_at_price,
          position: v.position,
          sku: v.sku,
          taxable: v.taxable,
          option1: v.option1,
          option2: v.option2,
          option3: v.option3,
          inventory_policy: v.inventory_policy,
          inventory_quantity: v.inventory_quantity,
          old_inventory_quantity: v.old_inventory_quantity,
          created_at: v.created_at ? new Date(v.created_at) : null,
          updated_at: v.updated_at ? new Date(v.updated_at) : null,
        })) || [],
      },
    },
  })
}

export async function getProducts() {
  return prisma.product.findMany({
    include: {
      variants: true,
    },
  })
}

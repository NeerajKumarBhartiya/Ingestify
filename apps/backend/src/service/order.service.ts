import prisma from "@repo/db"

export async function createOrder(shopifyOrder: any, tenantId: string) {
  return prisma.order.create({
    data: {
      tenantId,
      shopify_id: shopifyOrder.id.toString(),
      email: shopifyOrder.email,
      name: shopifyOrder.name,
      note: shopifyOrder.note || null,
      currency: shopifyOrder.currency,
      financial_status: shopifyOrder.financial_status,
      fulfillment_status: shopifyOrder.fulfillment_status || null,
      order_number: shopifyOrder.order_number,
      order_status_url: shopifyOrder.order_status_url,
      processed_at: shopifyOrder.processed_at ? new Date(shopifyOrder.processed_at) : null,
      cancelled_at: shopifyOrder.cancelled_at ? new Date(shopifyOrder.cancelled_at) : null,
      created_at: new Date(shopifyOrder.created_at),
      updated_at: new Date(shopifyOrder.updated_at),
      tags: shopifyOrder.tags?.join(", "),
      total_price: shopifyOrder.total_price,
      subtotal_price: shopifyOrder.subtotal_price,
      total_tax: shopifyOrder.total_tax,
      total_discounts: shopifyOrder.total_discounts,
      source_name: shopifyOrder.source_name,
      confirmed: shopifyOrder.confirmed,
      buyer_accepts_marketing: shopifyOrder.buyer_accepts_marketing,
      test: shopifyOrder.test,
      line_items: {
        create: shopifyOrder.line_items.map((li: any) => ({
          admin_graphql_api_id: li.admin_graphql_api_id,
          title: li.title,
          name: li.name,
          sku: li.sku,
          quantity: li.quantity,
          price: li.price,
          grams: li.grams,
          product_id: li.product_id ? li.product_id.toString() : null,
          taxable: li.taxable,
          fulfillment_service: li.fulfillment_service,
          gift_card: li.gift_card,
        })),
      },
      shipping_lines: {
        create: shopifyOrder.shipping_lines.map((sl: any) => ({
          title: sl.title,
          price: sl.price,
          source: sl.source,
        })),
      },
      addresses: {
        create: shopifyOrder.addresses?.map((a: any) => ({
          type: a.type,
          first_name: a.first_name,
          last_name: a.last_name,
          company: a.company,
          address1: a.address1,
          address2: a.address2,
          city: a.city,
          province: a.province,
          country: a.country,
          zip: a.zip,
          phone: a.phone,
          name: a.name,
          province_code: a.province_code,
          country_code: a.country_code,
          country_name: a.country_name,
        })) || [],
      },
    },
  })
}

export async function getOrders() {
  return prisma.order.findMany({
    include: {
      line_items: true,
      shipping_lines: true,
      addresses: true,
    },
  })
}

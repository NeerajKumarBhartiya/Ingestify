import prisma from "@repo/db"

async function createCustomer(shopifyCustomer: any, tenantId: string) {
  return prisma.customer.create({
    data: {
      tenantId,
      first_name: shopifyCustomer.first_name,
      last_name: shopifyCustomer.last_name,
      email: shopifyCustomer.email,
      phone: shopifyCustomer.phone,
      state: shopifyCustomer.state,
      note: shopifyCustomer.note,
      verified_email: shopifyCustomer.verified_email,
      tax_exempt: shopifyCustomer.tax_exempt,
      currency: shopifyCustomer.currency,
      admin_graphql_api_id: shopifyCustomer.admin_graphql_api_id,
      created_at: new Date(shopifyCustomer.created_at),
      updated_at: new Date(shopifyCustomer.updated_at),
      addresses: {
        create: shopifyCustomer.default_address
          ? [
              {
                first_name: shopifyCustomer.default_address.first_name,
                last_name: shopifyCustomer.default_address.last_name,
                company: shopifyCustomer.default_address.company,
                address1: shopifyCustomer.default_address.address1,
                address2: shopifyCustomer.default_address.address2,
                city: shopifyCustomer.default_address.city,
                province: shopifyCustomer.default_address.province,
                country: shopifyCustomer.default_address.country,
                zip: shopifyCustomer.default_address.zip,
                phone: shopifyCustomer.default_address.phone,
                name: shopifyCustomer.default_address.name,
                province_code: shopifyCustomer.default_address.province_code,
                country_code: shopifyCustomer.default_address.country_code,
                country_name: shopifyCustomer.default_address.country_name,
                is_default: true,
              },
            ]
          : [],
      },
    },
  })
}

export { createCustomer }

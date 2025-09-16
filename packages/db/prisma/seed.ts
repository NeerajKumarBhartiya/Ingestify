import prisma from "@repo/db"

async function main() {
  const shopDomain = "zvn5n5-q8.myshopify.com"

  const existingTenant = await prisma.tenant.findFirst({ where: { name: shopDomain } })
  if (existingTenant) {
    console.log("Tenant already exists:", existingTenant)
    return
  }

  const tenant = await prisma.tenant.create({
    data: {
      name: shopDomain,
      apiKey: "your-api-key-if-needed",
    },
  })

  console.log("Tenant created successfully:", tenant)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

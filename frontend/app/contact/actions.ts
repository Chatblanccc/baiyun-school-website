"use server"

import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, { message: "姓名至少需要2个字符。" }),
  phone: z.string().min(8, { message: "请输入有效的电话号码。" }),
  email: z.string().email({ message: "请输入有效的邮箱地址。" }).optional().or(z.literal("")),
  category: z.string().min(1, { message: "请选择一个咨询类别。" }),
  subject: z.string().min(3, { message: "主题至少需要3个字符。" }),
  message: z.string().min(10, { message: "详细内容至少需要10个字符。" }),
})

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse(Object.fromEntries(formData.entries()))

  if (!validatedFields.success) {
    return {
      success: false,
      message: "表单验证失败。",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // Here you would call your backend service to process the data
  // e.g., await backend.sendContactInquiry(validatedFields.data)
  console.log("Submitting to backend:", validatedFields.data)

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // For demonstration, we'll assume success
  return {
    success: true,
    message: "感谢您的留言！我们会尽快与您联系。",
  }
}
